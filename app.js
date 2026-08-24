const CLAVE="VIF2026";
const PUMI_API="https://pumi-api.onrender.com";
let DATA=null, view=null, graphicsLayer=null, PUMI_DELEGACIONES=[];
const $=id=>document.getElementById(id), norm=s=>(s??"").toString().trim();
$("entrar").onclick=()=>{if($("clave").value===CLAVE){sessionStorage.vif="1";openApp()}else alert("Clave incorrecta")};
$("salir").onclick=()=>{sessionStorage.removeItem("vif");location.reload()};
function openApp(){$("login").classList.add("hidden");$("app").classList.remove("hidden");loadData()}
async function loadData(){
  DATA=await fetch("data/vif-data.json").then(r=>r.json());
  setup(); render(); initMap();
  await loadPumiDelegations();
}
async function loadPumiDelegations(){
  try{
    const r=await fetch(`${PUMI_API}/api/delegaciones`);
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const j=await r.json();
    PUMI_DELEGACIONES=j.features||[];
    renderMap(filtered());
  }catch(e){
    console.warn("No fue posible cargar PUMI_DELEGACIONES:",e);
  }
}
function normalizeName(v=""){return v.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^A-Z0-9]/gi," ").replace(/\s+/g," ").trim().toUpperCase()}
function exactGeometry(code,name){
  const nc=normalizeName(code), nn=normalizeName(name);
  let f=PUMI_DELEGACIONES.find(x=>normalizeName(x.attributes?.codigo_delegacion||x.attributes?.codigo||"")===nc);
  if(!f) f=PUMI_DELEGACIONES.find(x=>normalizeName(x.attributes?.delegacion||x.attributes?.nombre||"")===nn);
  return f?.geometry||null;
}
function unique(a){return [...new Set(a.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"))}
function addOptions(id,arr){const s=$(id), first=s.options[0].outerHTML;s.innerHTML=first+arr.map(x=>`<option>${x}</option>`).join("")}
function setup(){addOptions("fRegion",unique(DATA.registros.map(x=>x.region)));addOptions("fDeleg",unique(DATA.registros.map(x=>x.delegacion)));addOptions("fMes",unique(DATA.registros.map(x=>x.mes_programado)));addOptions("fEje",unique(DATA.registros.map(x=>x.eje)));addOptions("fPob",unique(DATA.registros.map(x=>x.poblacion)));["fRegion","fDeleg","fTrim","fMes","fEje","fPob"].forEach(id=>$(id).onchange=render)}
function filtered(){return DATA.registros.filter(x=>(!$("fRegion").value||x.region===$("fRegion").value)&&(!$("fDeleg").value||x.delegacion===$("fDeleg").value)&&(!$("fTrim").value||x.trimestre===$("fTrim").value)&&(!$("fMes").value||x.mes_programado===$("fMes").value)&&(!$("fEje").value||x.eje===$("fEje").value)&&(!$("fPob").value||x.poblacion===$("fPob").value))}
function aggregate(rows){const seen=new Map(); rows.forEach(x=>{const k=x.codigo_delegacion+"|"+x.codigo+"|"+x.trimestre;seen.set(k,x)});const vals=[...seen.values()];return {rows:vals,base:vals.reduce((s,x)=>s+(+x.linea_base||0),0),av:vals.reduce((s,x)=>s+(+x.avance||0),0)}}
function render(){const rows=filtered(), ag=aggregate(rows);$("kDeleg").textContent=unique(rows.map(x=>x.codigo_delegacion)).length;$("kReg").textContent=unique(rows.map(x=>x.region)).length;$("kAct").textContent=unique(rows.map(x=>x.codigo)).length;$("kAv").textContent=Math.round(ag.av).toLocaleString("es-CR");$("kPct").textContent=(ag.base?ag.av/ag.base*100:0).toFixed(1)+"%";renderBars(rows,"trimestre","quarters");renderBars(rows,"eje","axes");renderTable(rows);renderMap(rows)}
function renderBars(rows,key,id){const groups={};rows.forEach(x=>(groups[x[key]]??=[]).push(x));$(id).innerHTML=Object.entries(groups).sort().map(([k,v])=>{const a=aggregate(v),p=a.base?a.av/a.base*100:0;return `<div class="barrow"><div class="barlabel"><b>${k||"Sin dato"}</b><span>${p.toFixed(1)}%</span></div><div class="bar"><i style="width:${Math.min(p,100)}%"></i></div></div>`}).join("")||"<p>Sin datos.</p>"}
function renderTable(rows){const ag=aggregate(rows);$("count").textContent=ag.rows.length+" registros";$("tbody").innerHTML=ag.rows.slice(0,800).map(x=>{let c=x.porcentaje>=100?"good":x.porcentaje>=50?"mid":"low";return `<tr><td>${x.region}</td><td><b>${x.codigo_delegacion}</b> ${x.delegacion}</td><td>${x.actividad}</td><td>${x.eje}</td><td>${x.poblacion}</td><td>${x.mes_programado}</td><td>${x.trimestre}</td><td>${x.linea_base??""}</td><td>${x.avance}</td><td class="pct ${c}">${(+x.porcentaje).toFixed(1)}%</td></tr>`}).join("")}
function initMap(){require(["esri/Map","esri/views/MapView","esri/layers/GraphicsLayer","esri/Graphic"],(Map,MapView,GraphicsLayer,Graphic)=>{window.EsriGraphic=Graphic;graphicsLayer=new GraphicsLayer();view=new MapView({container:"map",map:new Map({basemap:"gray-vector",layers:[graphicsLayer]}),center:[-84.1,9.95],zoom:7});renderMap(filtered())})}
function renderMap(rows){
  if(!graphicsLayer||!window.EsriGraphic)return;
  graphicsLayer.removeAll();
  const g={}; rows.forEach(x=>(g[x.codigo_delegacion]??=[]).push(x));
  Object.entries(g).forEach(([code,v])=>{
    const a=aggregate(v),p=a.base?a.av/a.base*100:0,x=v[0];
    const geom=exactGeometry(code,x.delegacion);
    if(!geom)return;
    const c=p>=100?"#25865d":p>=50?"#d89a25":p>0?"#c64a4a":"#8996a3";
    graphicsLayer.add(new EsriGraphic({
      geometry:geom,
      symbol:{type:"simple-marker",size:14,color:c,outline:{color:"#fff",width:1.5}},
      attributes:{code,deleg:x.delegacion,region:x.region,p:p.toFixed(1),av:a.av,base:a.base},
      popupTemplate:{title:"{code} · {deleg}",content:"<b>{region}</b><br>Avance: {av}<br>Línea base: {base}<br>Cumplimiento: <b>{p}%</b>"}
    }))
  })
}
$("excel").onchange=async e=>{const f=e.target.files[0];if(!f)return;alert("El repositorio ya incluye la lectura normalizada del Excel suministrado. Para reemplazos futuros, conserva la misma estructura del libro y actualiza data/vif-data.json con el conversor incluido en README.md.")};
if(sessionStorage.vif==="1")openApp();