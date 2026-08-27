const CLAVE="VIF2026";

const COORDENADAS_REFERENCIA = {
  "CARMEN": [9.9365, -84.0750],
  "MERCED": [9.9386, -84.0828],
  "HOSPITAL": [9.9274, -84.0918],
  "CATEDRAL": [9.9289, -84.0740],
  "ZAPOTE": [9.9198, -84.0553],
  "SAN FRANCISCO": [9.9136, -84.0724],
  "URUCA": [9.9567, -84.1060],
  "MATA REDONDA": [9.9352, -84.1047],
  "PAVAS": [9.9488, -84.1342],
  "HATILLO": [9.9160, -84.1010],
  "SAN SEBASTIAN": [9.9121, -84.0909],
  "ESCAZU": [9.9180, -84.1399],
  "SANTA ANA": [9.9326, -84.1825],
  "ALAJUELITA": [9.9016, -84.1000],
  "VASQUEZ DE CORONADO": [9.9760, -84.0070],
  "CORONADO": [9.9760, -84.0070],
  "ACOSTA": [9.8003, -84.1604],
  "TIBAS": [9.9580, -84.0790],
  "MORAVIA": [9.9610, -84.0480],
  "MONTES DE OCA": [9.9369, -84.0500],
  "CURRIDABAT": [9.9136, -84.0405],
  "GOICOECHEA": [9.9480, -84.0430],
  "DESAMPARADOS": [9.8982, -84.0626],
  "ASERRI": [9.8587, -84.0917],
  "MORA": [9.9182, -84.2411],
  "PURISCAL": [9.8469, -84.3149],
  "TARRAZU": [9.6596, -84.0206],
  "DOTA": [9.6500, -83.9600],
  "LEON CORTES": [9.6830, -84.0500],
  "TURRUBARES": [9.9050, -84.4520],
  "ALAJUELA": [10.0162, -84.2116],
  "SAN RAMON": [10.0887, -84.4702],
  "GRECIA": [10.0739, -84.3112],
  "SAN MATEO": [9.9365, -84.5247],
  "ATENAS": [9.9787, -84.3801],
  "NARANJO": [10.0987, -84.3782],
  "PALMARES": [10.0567, -84.4370],
  "POAS": [10.0800, -84.2450],
  "OROTINA": [9.9111, -84.5230],
  "SAN CARLOS": [10.3290, -84.4310],
  "ZARCERO": [10.1852, -84.3900],
  "SARCHI": [10.0883, -84.3473],
  "UPALA": [10.8986, -85.0155],
  "LOS CHILES": [11.0350, -84.7130],
  "GUATUSO": [10.6667, -84.8167],
  "RIO CUARTO": [10.3410, -84.2140],
  "CARTAGO": [9.8644, -83.9194],
  "PARAISO": [9.8383, -83.8656],
  "LA UNION": [9.9084, -83.9886],
  "JIMENEZ": [9.9048, -83.6834],
  "TURRIALBA": [9.9050, -83.6830],
  "ALVARADO": [9.9333, -83.8000],
  "OREAMUNO": [9.9100, -83.9000],
  "EL GUARCO": [9.8472, -83.9460],
  "HEREDIA": [10.0024, -84.1165],
  "BARVA": [10.0208, -84.1233],
  "SANTO DOMINGO": [10.0639, -84.1547],
  "SANTA BARBARA": [10.0400, -84.1600],
  "SAN RAFAEL": [10.0138, -84.1002],
  "SAN ISIDRO": [10.0186, -84.0569],
  "BELEN": [9.9852, -84.1810],
  "FLORES": [10.0000, -84.1600],
  "SAN PABLO": [9.9953, -84.0966],
  "SARAPIQUI": [10.4522, -84.0166],
  "LIBERIA": [10.6350, -85.4377],
  "NICOYA": [10.1483, -85.4520],
  "SANTA CRUZ": [10.2600, -85.5850],
  "BAGACES": [10.5250, -85.2550],
  "CARRILLO": [10.4750, -85.5850],
  "CANAS": [10.4310, -85.0980],
  "ABANGARES": [10.2820, -84.9590],
  "TILARAN": [10.4670, -84.9670],
  "NANDAYURE": [9.9990, -85.2060],
  "LA CRUZ": [11.0730, -85.6320],
  "HOJANCHA": [10.0550, -85.4200],
  "PUNTARENAS": [9.9763, -84.8384],
  "CHOMES": [10.0950, -84.9250],
  "JUDAS": [10.0510, -84.8870],
  "ESPARZA": [9.9940, -84.6640],
  "BUENOS AIRES": [9.1667, -83.3333],
  "MONTES DE ORO": [10.0870, -84.7300],
  "OSA": [8.9590, -83.5230],
  "QUEPOS": [9.4319, -84.1617],
  "GOLFITO": [8.6390, -83.1660],
  "COTO BRUS": [8.8830, -82.9660],
  "PARRITA": [9.5200, -84.3200],
  "CORREDORES": [8.6420, -82.9460],
  "GARABITO": [9.6150, -84.6300],
  "LIMON": [9.9917, -83.0360],
  "POCOCI": [10.2150, -83.7870],
  "SIQUIRRES": [10.0970, -83.5060],
  "TALAMANCA": [9.6240, -82.8440],
  "MATINA": [10.0760, -83.2890],
  "GUACIMO": [10.2100, -83.6900],
  "PEREZ ZELEDON": [9.3540, -83.6340],
  "LOS SANTOS": [9.6550, -84.0300]
};

const ALIASES_COORDENADAS = [
  ["SAN CARLOS ESTE","SAN CARLOS"],
  ["SAN CARLOS OESTE","SAN CARLOS"],
  ["ALAJUELA SUR","ALAJUELA"],
  ["ALAJUELA NORTE","ALAJUELA"],
  ["DESAMPARADOS NORTE","DESAMPARADOS"],
  ["DESAMPARADOS SUR","DESAMPARADOS"],
  ["POCOCI NORTE","POCOCI"],
  ["POCOCI SUR","POCOCI"],
  ["PUERTO JIMENEZ","GOLFITO"],
  ["PAQUERA","PUNTARENAS"],
  ["VAZQUEZ DE CORONADO","VASQUEZ DE CORONADO"]
];

let DATA=null, view=null, graphicsLayer=null;
const $=id=>document.getElementById(id), norm=s=>(s??"").toString().trim();
$("login-form").onsubmit=e=>{e.preventDefault();if($("login-password").value===CLAVE){sessionStorage.vif="1";openApp()}else $("login-error").classList.remove("hidden")};
$("btn-logout").onclick=()=>{sessionStorage.removeItem("vif");location.reload()};
$("btn-toggle-sidebar").onclick=()=>document.querySelector(".sidebar").classList.toggle("collapsed");
$("btn-refresh").onclick=()=>location.reload();
$("nav-map").onclick=()=>$("map-section").scrollIntoView({behavior:"smooth"});
$("nav-detail").onclick=()=>$("detail-section").scrollIntoView({behavior:"smooth"});
function openApp(){$("login-view").classList.add("hidden");$("main-view").classList.remove("hidden");loadData()}
async function loadData(){
  DATA=await fetch("data/vif-data.json").then(r=>r.json());
  setup();
  render();
  initMap();
}
function normalizeName(v=""){
  return v.toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^A-Z0-9]/gi," ")
    .replace(/\s+/g," ").trim().toUpperCase();
}

function delegationReferenceName(name=""){
  return normalizeName(name)
    .replace(/^D\d+[A-Z]?\s+/,"")
    .replace(/^DELEGACION POLICIAL\s+/,"")
    .replace(/^DELEGACION\s+/,"")
    .trim();
}

function delegationCoordinates(name=""){
  const n=delegationReferenceName(name);

  if(COORDENADAS_REFERENCIA[n]){
    const [lat,lon]=COORDENADAS_REFERENCIA[n];
    return {latitude:lat,longitude:lon};
  }

  const alias=ALIASES_COORDENADAS.find(([source])=>n===source);
  if(alias && COORDENADAS_REFERENCIA[alias[1]]){
    const [lat,lon]=COORDENADAS_REFERENCIA[alias[1]];
    return {latitude:lat,longitude:lon};
  }

  for(const [ref,[lat,lon]] of Object.entries(COORDENADAS_REFERENCIA)){
    if(n.includes(ref) || ref.includes(n)){
      return {latitude:lat,longitude:lon};
    }
  }
  return null;
}

function createMarkerSvg(color){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80">
    <defs><filter id="s" x="-30%" y="-30%" width="160%" height="180%">
      <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#000" flood-opacity=".30"/>
    </filter></defs>
    <path filter="url(#s)" d="M32 3C16.1 3 4 15.1 4 31c0 22.3 28 46 28 46s28-23.7 28-46C60 15.1 47.9 3 32 3z"
      fill="${color}" stroke="#fff" stroke-width="3"/>
    <circle cx="32" cy="30" r="11" fill="#fff" fill-opacity=".96"/>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function unique(a){return [...new Set(a.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"))}
function addOptions(id,arr){const s=$(id), first=s.options[0].outerHTML;s.innerHTML=first+arr.map(x=>`<option>${x}</option>`).join("")}
function setup(){addOptions("fRegion",unique(DATA.registros.map(x=>x.region)));addOptions("fDeleg",unique(DATA.registros.map(x=>x.delegacion)));addOptions("fMes",unique(DATA.registros.map(x=>x.mes_programado)));addOptions("fEje",unique(DATA.registros.map(x=>x.eje)));addOptions("fPob",unique(DATA.registros.map(x=>x.poblacion)));["fRegion","fDeleg","fTrim","fMes","fEje","fPob"].forEach(id=>$(id).onchange=render)}
function filtered(){return DATA.registros.filter(x=>(!$("fRegion").value||x.region===$("fRegion").value)&&(!$("fDeleg").value||x.delegacion===$("fDeleg").value)&&(!$("fTrim").value||x.trimestre===$("fTrim").value)&&(!$("fMes").value||x.mes_programado===$("fMes").value)&&(!$("fEje").value||x.eje===$("fEje").value)&&(!$("fPob").value||x.poblacion===$("fPob").value))}
function aggregate(rows){const seen=new Map(); rows.forEach(x=>{const k=x.codigo_delegacion+"|"+x.codigo+"|"+x.trimestre;seen.set(k,x)});const vals=[...seen.values()];return {rows:vals,base:vals.reduce((s,x)=>s+(+x.linea_base||0),0),av:vals.reduce((s,x)=>s+(+x.avance||0),0)}}
function render(){const rows=filtered(), ag=aggregate(rows);$("kDeleg").textContent=unique(rows.map(x=>x.codigo_delegacion)).length;$("kReg").textContent=unique(rows.map(x=>x.region)).length;$("kAct").textContent=unique(rows.map(x=>x.codigo)).length;$("kAv").textContent=Math.round(ag.av).toLocaleString("es-CR");$("kPct").textContent=(ag.base?ag.av/ag.base*100:0).toFixed(1)+"%";renderBars(rows,"trimestre","quarters");renderBars(rows,"eje","axes");renderTable(rows);renderMap(rows)}
function renderBars(rows,key,id){const groups={};rows.forEach(x=>(groups[x[key]]??=[]).push(x));$(id).innerHTML=Object.entries(groups).sort().map(([k,v])=>{const a=aggregate(v),p=a.base?a.av/a.base*100:0;return `<div class="barrow"><div class="barlabel"><b>${k||"Sin dato"}</b><span>${p.toFixed(1)}%</span></div><div class="bar"><i style="width:${Math.min(p,100)}%"></i></div></div>`}).join("")||"<p>Sin datos.</p>"}
function renderTable(rows){const ag=aggregate(rows);$("count").textContent=ag.rows.length+" registros";$("tbody").innerHTML=ag.rows.slice(0,800).map(x=>{let c=x.porcentaje>=100?"good":x.porcentaje>=50?"mid":"low";return `<tr><td>${x.region}</td><td><b>${x.codigo_delegacion}</b> ${x.delegacion}</td><td>${x.actividad}</td><td>${x.eje}</td><td>${x.poblacion}</td><td>${x.mes_programado}</td><td>${x.trimestre}</td><td>${x.linea_base??""}</td><td>${x.avance}</td><td class="pct ${c}">${(+x.porcentaje).toFixed(1)}%</td></tr>`}).join("")}
function initMap(){require(["esri/Map","esri/views/MapView","esri/layers/GraphicsLayer","esri/Graphic"],(Map,MapView,GraphicsLayer,Graphic)=>{window.EsriGraphic=Graphic;graphicsLayer=new GraphicsLayer();view=new MapView({container:"map",map:new Map({basemap:"streets-navigation-vector",layers:[graphicsLayer]}),center:[-84.1,9.95],zoom:7});renderMap(filtered())})}
function renderMap(rows){
  if(!graphicsLayer || !window.EsriGraphic) return;

  graphicsLayer.removeAll();
  const groups={};
  rows.forEach(x=>(groups[x.codigo_delegacion]??=[]).push(x));

  let drawn=0;

  Object.entries(groups).forEach(([code,v])=>{
    const a=aggregate(v);
    const p=a.base ? a.av/a.base*100 : 0;
    const x=v[0];
    const co=delegationCoordinates(x.delegacion);
    if(!co) return;

    const color=p>=100 ? "#25865d"
      : p>=50 ? "#d89a25"
      : p>0 ? "#c64a4a"
      : "#8996a3";

    graphicsLayer.add(new EsriGraphic({
      geometry:{
        type:"point",
        longitude:co.longitude,
        latitude:co.latitude,
        spatialReference:{wkid:4326}
      },
      symbol:{
        type:"picture-marker",
        url:createMarkerSvg(color),
        width:"34px",
        height:"43px",
        yoffset:"12px"
      },
      attributes:{
        code,
        deleg:x.delegacion,
        region:x.region,
        p:p.toFixed(1),
        av:a.av,
        base:a.base
      },
      popupTemplate:{
        title:"{code} · {deleg}",
        content:"<b>{region}</b><br>Avance: {av}<br>Línea base: {base}<br>Avance: <b>{p}%</b>"
      }
    }));
    drawn++;
  });

  if($("map-status")){
    $("map-status").textContent=`${drawn} delegaciones ubicadas`;
  }
}
if(sessionStorage.vif==="1")openApp();
