/**
 * 
 * Operações sobre consultas.
 * 
 */

let global_query_geo_fieldname = "location";
let global_filter_by_space = 1;

let global_server = "http://127.0.0.1:8001/tc/query";
let xhttp_url = "http://localhost:8080/tc/query";
let xhttp_url_app = "http://localhost:8080/tc/app";
//let xhttp_url = "http://gwrec.cloudnext.rnp.br:57077/tc/query";
//let xhttp_url_app = "http://gwrec.cloudnext.rnp.br:57077/tc/app";
//let xhttp_url = global_config.url;
//let xhttp_url_app = global_config.url_app;

let view_timeout_handle  = 0;

let viewQueries = [];
let idQueries = [];
let view_pendings = 0;
let view_refreshing_pending = 0;

let queryName = [];

let startBounds = null; 
let best_unity = {};
let prefixo = "";
let div = 0;

let global_min_height_space = 25;
let global_very_large_number = 200000000000000;
let global_time_zone = -3;

let ts_margin = {top: 10, right: 20, bottom: 40, left: 70};
let current_heatmapLayer;

let heatCfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 10., // 15.0,
  "maxOpacity": 1.0,
  // scales the radius based on map zoom
  "scaleRadius": false,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true, 
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count',
  gradient: {
    // enter n keys between 0 and 1 here
    // for gradient color customization
    '.2': '	#00008B',  '.4': 'blue',   '.6': 'red',  '.75': 'yellow', '.90': 'white'
  }	  
};

/**
 * Desenha o mapa de calor.
 * @param {*} json 
 */
function drawHeatMap(json) { 
  if (json.tp == "0") {
    console.log(json);
    return;
  }
  
  let a = [];
  let max_v = 0;
  let min_v = global_very_large_number;
  let zoom = getMap().getZoom() - 1;
  let b = getMap().getBounds();
  let geoExtraZoom = getGlobal("geo_extra_zoom");
  for (let i = 0; i < json.result.length; i++)  {
    let o = json.result[i];
    let vlat = tile2latX(o.k[0], zoom + geoExtraZoom.value);
    let vlon = tile2longX(o.k[1], zoom + geoExtraZoom.value);
    let coords = [vlat, vlon];
    vlat = coords[0];
    vlon = coords[1];
    if (!b.contains(L.latLng(vlat, vlon))) continue;
    let v = Math.log(o.v[0] + 1);
    o.v[0] = o.v[0] / 1000000000;
    if (v > max_v) max_v = v;
    if (v < min_v) min_v = v;
    let o2 = { lat: vlat, lng: vlon, count: v };
    a.push(o2);
  }
  
  let heatData = {};
  heatData.min = min_v;
  heatData.max = max_v;
  heatData.data = a;

  if (current_heatmapLayer != undefined) {
    current_heatmapLayer.setData(heatData);
  } else {
    current_heatmapLayer = new HeatmapOverlay(heatCfg);
    current_heatmapLayer.setData(heatData);
    getMap().addLayer(current_heatmapLayer);
  }
}

/**
 * Monta o trecho da query que define o poligono.
 * @param {*} layer 
 */
function getPoly(layer) {
  let poly = [];
  let latlngs = layer._latlngs[0];
  for (let i = 0; i < latlngs.length; i++) {
    poly.push([latlngs[i].lat, latlngs[i].lng]);
  }
  let list = [];
  list.push("location");
  list.push("zpoly");
  list.push(getZoom());
  for (let i = 0; i<poly.length; i++) {
    list.push(poly[i][0]);
    list.push(poly[i][1]);
  }
  return list;
}

/**
 * Monta o trecho da query que define o intervalo temporal.
 */
function getTime() {
  let tsT0 = getGlobal("ts_t0");
  let tsT1 = getGlobal("ts_t1");
  let list = [];
  list.push("time");
  list.push("between");
  
  // begin Nilson
  let date
  const tz = -10800 // fazer o ajuste apropriado posteriormente
  
  let start = secondsToDate(tsT0.value);

  // Arthur 09/03/2021
  let window_size = getGlobal("window_size");
  if (window_size.value != undefined) {
    start = secondsToDate(tsT1.value - window_size.value);
  }


  date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes());
  let t0 = date.getTime()/1000 + tz;
  
  let end = secondsToDate(tsT1.value);
  date = new Date(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes());
  let t1 = date.getTime()/1000 + tz;
  
  //list.push(tsT0.value);
  list.push(t0);
  
  //list.push(tsT1.value);
  list.push(t1);
  
   // end Nilson
  return list;
}

/**
 * Retorna um zoom mais adequado ao uso nas querys.
 */
function getZoom() {
  let geoExtraZoom = getGlobal("geo_extra_zoom");
  return getMap().getZoom() - 1 + geoExtraZoom.value;
}

/**
 * Monta o trecho da query que define uma região geográfica
 * que envolve todo o estado do Rio de Janeiro.
 */
function getStartLocation() {
  if (startBounds == null) {
    startBounds = getMap().getBounds();
  }
  let c0 = startBounds._northEast;
  let c1 = startBounds._southWest;
  let list = [];
  list.push("location");
  list.push("zrect");
  list.push(getZoom());
  list.push(c0.lat);
  list.push(c1.lng);
  list.push(c1.lat);
  list.push(c0.lng);
  return list;
}

/**
 * Monta o trecho da query que define uma região geográfica
 * conforme a visualização no Mapa.
 */
function getLocation() {
  let bounds = getMap().getBounds();
  let c0 = bounds._northEast;
  let c1 = bounds._southWest;
  let list = [];
  list.push("location");
  list.push("zrect");
  list.push(getZoom());
  list.push(c0.lat);
  list.push(c1.lng);
  list.push(c1.lat);
  list.push(c0.lng);
  return list;
}

/**
 * Retorna verdadeiro se UF, Cidade ou Bairro foi definido no filtro.
 * @param {*} item 
 */
function isSelected(item) {
  let e = null;
  let o = null;
  if (item == "UF") {
    e = document.getElementById("cb_ufs");
  } else if (item == "CIDADE") {
    e = document.getElementById("cb_cidades");
  } else if (item == "BAIRRO") {
    let listBairro = getGlobal("list_bairro");
    let out = "";
    getCbBairro().selected().forEach(function (value) {
      o = listBairro.value[value-1].item;          
      if (o.CODBAIRRO != undefined) out = out + ", " + o.CODBAIRRO;
    });
    return (out != "");    
  } else {
    return false;
  }

  if (!e) return false;
  o = e.options[e.selectedIndex];
  let x = o.cod;
  if (x == undefined) return false;    
  return true;
}

/**
 * Monta o trecho da query que define a UF.
 */
function getUF() {
  let e = document.getElementById("cb_ufs");
  let o = e.options[e.selectedIndex];
  let list = [];
  list.push("estado");
  list.push("eq");
  list.push(o.cod);
  return list;
}

/**
 * Define o trecho da query que define a UF como sendo igual a 19 (Rio de Janeiro).
 */
function selectUF() {
  let list = [];
  list.push("estado");
  list.push("eq");
  list.push(19);
  return list;
}

/**
 * Monta o trecho da query que define a cidade.
 */
function getCidade() {
  let e = document.getElementById("cb_cidades");
  let o = e.options[e.selectedIndex];
  let list = [];
  list.push("cidade");
  list.push("eq");
  list.push(o.cod);
  return list;
}

/**
 * Define o trecho da query que define a cidade como sendo igual a 1 (Rio de Janeiro).
 */
function selectCidade() {
  let list = [];
  list.push("cidade");
  list.push("eq");
  list.push(1);
  return list;
}

/**
 * Monta o trecho da query que define a bairro.
 */
function getBairro() {
  let listBairro = getGlobal("list_bairro");
  let list = [];
  list.push("cliente");
  list.push("eq");
  getCbBairro().selected().forEach(function (value, index, array) {
    let o = listBairro.value[value-1].item;    
    if (o.CODBAIRRO != undefined) list.push(parseInt(o.CODBAIRRO));
  });
  return list;
}

/**
 * Define o trecho da query que define a bairro.
 * @param {*} codBairro 
 */
function selectBairro(codBairro) {
  let list = [];
  list.push("cliente");
  list.push("eq");
  list.push(Number(codBairro));
  return list;
}

/**
 * Solicita o schema.
 */
function initSchema() { 
  let schema = new SchemaRequest();
  schema.from = "antenas";
  showTrace("initSchema", schema); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(schema),
    success: function (json) {
      let schemaInfo = {
        key: "schema_info",
        value: json.result
      };
      setGlobal(schemaInfo);
      loadUFs(); // form/support.js
      loadResultOptions(); // form/support.js
      // ComboBox resultOptions
      if (typeof params['rt'] !== 'undefined') {
        setupFilter(params); // form/support.js
      } else {
        // Recupera os limites geograficos e temporais da base de dados
        onBounds(); // form/control.js
      }
      let s = {
        key: "schema",
        value: true
      };
      setGlobal(s);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do mapa para compor o gráfico da esquerda.
 */
function requestMap2ChartLeft() { 
  let query = new QueryRequest();
  query.select = ["quantidades"];
  query["group-by"] = "ttl";
  query.from = "antenas";
  query.where = [];
  query.where.push(getStartLocation());
  if (isSelected("UF")) {
    query.where.push(getUF());
  }
  if (isSelected("CIDADE")) {
    query.where.push(getCidade());
  }
  if (isSelected("BAIRRO")) {
    query.where.push(getBairro());
  }
  query.where.push(getTime());
  showTrace("requestMap2ChartLeft", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: drawMapChartLeft,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do mapa para compor o gráfico da direita.
 */
function requestMap2ChartRight() { 
  let q1 = new QueryRequest();
  q1["group-by"] = "time";
  q1.where = [];
  q1.where.push(getLocation());
  q1.where.push(getTime());
  q1.from = "antena";
  let q2 = new QueryRequest();
  q2["group-by"] = "time";
  q2.where = [];
  q2.where.push(getLocation());
  q2.where.push(getTime());
  let query = {
    q1: q1,
    q2: q2
  }
  showTrace("requestMap2ChartRight", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url_app,
    data: JSON.stringify(query),
    success: drawMapChartRight,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do filtro para compor o gráfico da esquerda.
 */
function requestFilter2ChartLeft() { 
  let query = new QueryRequest();
  query.select = ["quantidades"];
  query["group-by"] = "ttl";
  query.from = "antenas";
  query.where = [];
  query.where.push(getLocation());
  if (isSelected("UF")) {
    query.where.push(getUF());
  }
  if (isSelected("CIDADE")) {
    query.where.push(getCidade());
  }
  if (isSelected("BAIRRO")) {
    query.where.push(getBairro());
  }
  query.where.push(getTime());
  showTrace("requestFilter2ChartLeft", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: drawFilterChartLeft,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do filtro para compor o gráfico da direita.
 */
function requestFilter2ChartRight() { 
  let query = new QueryRequest();
  query.where = [];
  query.where.push(getLocation());
  if (isSelected("UF")) {
    query.where.push(getUF());
  }
  if (isSelected("CIDADE")) {
    query.where.push(getCidade());
  }
  if (isSelected("BAIRRO")) {
    query.where.push(getBairro());
  }
  query.where.push(getTime());
  showTrace("requestFilter2ChartRight", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url_app,
    data: JSON.stringify(query),
    success: drawFilterChartRight,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do bairro para compor o gráfico da esquerda.
 */
function requestBairro2ChartLeft(codBairro) { 
  let query = new QueryRequest();
  query.select = ["quantidades"];
  query["group-by"] = "ttl";
  query.where = [];
  query.where.push(getStartLocation());
  //query.where.push(selectUF());
  //query.where.push(selectCidade());
  query.where.push(selectBairro(codBairro));
  query.where.push(getTime());
  query.from = "antenas";
  showTrace("requestBairro2ChartLeft", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function(responseData) {
      drawBairroChartLeft(codBairro, responseData);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do bairro para compor o gráfico da direita.
 */
function requestBairro2ChartRight(codBairro) { 
  let query = new QueryRequest();
  query.where = [];
  query.where.push(getStartLocation());
  //query.where.push(selectUF());
  //query.where.push(selectCidade());
  query.where.push(selectBairro(codBairro));
  query.where.push(getTime());
  showTrace("requestBairro2ChartRight", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url_app,
    data: JSON.stringify(query),
    success: function(responseData) {
      drawBairroChartRight(codBairro, responseData);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do retangulo ou do poligono para compor o gráfico da esquerda.
 */
function requestPoly2ChartLeft(layer) { 
  let query = new QueryRequest();
  query.select = ["quantidades"];
  query["group-by"] = "ttl";
  query.from = "antenas";
  query.where = [];
  query.where.push(getPoly(layer));
  query.where.push(getTime());
  showTrace("requestPoly2ChartLeft", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function(responseData) {
      drawPolyChartLeft(layer, responseData);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados do retangulo ou do poligono para compor o gráfico da direita.
 */
function requestPoly2ChartRight(layer) { 
  let query = new QueryRequest();
  query.where = [];
  query.where.push(getPoly(layer));
  query.where.push(getTime());
  showTrace("requestPoly2ChartRight", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url_app,
    data: JSON.stringify(query),
    success: function(responseData) {
      drawPolyChartRight(layer, responseData);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os limites para o mapa.
 */
function initGeoBounds() {
  let data = new BoundsRequest(24);
  data.from = "antenas";
  showTrace("initGeoBounds", data); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(data),
    success: function (js) {
      let vs = js.result.vs;
    
      let zoom = 24;
      
      let tile_top = vs[0][0];
      let tile_left = vs[0][1];
      let tile_bottom = vs[1][0];
      let tile_right = vs[1][1];
    
      let lon0 = tile2long(tile_left, zoom);
      let lon1 = tile2long(tile_right, zoom);
      let lat0 = tile2lat(tile_top, zoom);
      let lat1 = tile2lat(tile_bottom, zoom);
          
      getMap().fitBounds([[lat0, lon0], [lat1, lon1]]);
      
      let g = {
        key: "bounds_geo",
        value: true
      };
      setGlobal(g);
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita o intervalo temporal para o filtro.
 */
function initTimeBounds(callback) {
  let data = new BoundsRequest(24);
  data.bounds = "time";
  data.from = "antenas";
  showTrace("initTimeBounds", data); // utils.js

  let func_default = function (js) {
    let tsT0 = {
      key: "ts_t0",
      value: js.result.vs[0][0]
    };
    setGlobal(tsT0);
    $('#start').val(moment.unix(tsT0.value).format("MM/DD/YYYY"));
    let tsT1 = {
      key: "ts_t1",
      value: js.result.vs[1][0]
    };
    setGlobal(tsT1);
    $('#end').val(moment.unix(tsT1.value).format("MM/DD/YYYY"));
    let t = {
      key: "bounds_time",
      value: true
    };
    setGlobal(t);
  }

  let func = undefined;

  if (callback == undefined) {
    func = func_default;
  } else {
    func = function (js) {
      let tsT0 = getGlobal("ts_t0");
      let tsT1 = getGlobal("ts_t1");
      if (tsT0.value == js.result.vs[0][0] && tsT1.value == js.result.vs[1][0]){
        callback(false);
        return;
      }
      func_default(js);
      // redesenha
      refreshInterface(); // map/control.js
      callback(true);
    }    
  }

  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(data),
    success: func,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados que compõe o mapa de calor.
 */
function request2HeatMap() {
  let query = new QueryRequest();
  let selectedChannel = getGlobal("selected_channel");
  query.select = [selectedChannel.value];
  query["group-by"] = "location";
  query.from = "antenas";
  query.where = [];
  query.where.push(getLocation());
  if (isSelected("UF")) {
    query.where.push(getUF());
  }
  if (isSelected("CIDADE")) {
    query.where.push(getCidade());
  }
  if (isSelected("BAIRRO")) {
    query.where.push(getBairro());
  }
  query.where.push(getTime());
  showTrace("request2HeatMap", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: drawHeatMap,
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados que compõe o gráfico inferior, com base no filtro.
 * @param {*} datasetLabel 
 * @param {*} datasetColor 
 */
function requestFilter2ChartBottom(datasetLabel, datasetColor) {
  let query = new QueryRequest();
  let selectedChannel = getGlobal("selected_channel");
  query.select = [selectedChannel.value];
  query["group-by"] = "time";
  query["group-by-output"] = "vs_ks";
  query.from = "antenas";
  query.where = [];
  query.where.push(getStartLocation());
  if (isSelected("UF")) {
    query.where.push(getUF());
  }
  if (isSelected("CIDADE")) {
    query.where.push(getCidade());
  }
  if (isSelected("BAIRRO")) {
    query.where.push(getBairro());
  }
  query.where.push(getTime());
  showTrace("requestFilter2ChartBottom", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function (js) {
      let mx, mn;
      let kvs = new Array();
    
      let chartBottom = getChart('bottom');
         
      // Pega os dados em si
      let rx = js.result;
      kvs.push((rx));
    
      // Pega o menor e maior valor da primeira coluna
      // Ela representa os dados em si a segunda coluna
      // deve ser a data    
      let m = Math.max.apply(Math, rx.map(d => d[0]));
      if (typeof mx === "undefined" || m > mx) mx = m;
      mn = 0;
      
      // computes the best unity
      best_unity = compute_best_unity(mn,mx);
      prefixo = best_unity.prefix;
      div = best_unity.div;
      
      let resultUnity = getGlobal("result_unity");
      let unity = prefixo + resultUnity.value;
      let resultTitle = getGlobal("result_title");
      let title = resultTitle.value;
      chartBottom.setLabelY(title + " [" + unity + "]");

      let tsT0 = getGlobal("ts_t0");
      let tsT1 = getGlobal("ts_t1");
    
      let interval = tsT1.value - tsT0.value;      
      let start = secondsToDate(tsT0.value);
      let end = secondsToDate(tsT1.value);
      end.setSeconds(end.getSeconds()+1);
      chartBottom.setLabels([]);
      while (start < end) {  
        let date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
        let label = '';
        if (interval<1200) { // 20 min
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setSeconds(start.getSeconds()+1);
        } else if (interval<72000) { // 20 hs
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setMinutes(start.getMinutes()+1);
        } else if (interval<4320000) { // 50 dias
          label = moment(date).format('MM/DD/YYYY HH:mm');
          start.setHours(start.getHours()+1);
        } else {
          label = moment(date).format('MM/DD/YYYY');
          start.setDate(start.getDate()+1);
        }
        chartBottom.addLabel(label);
      }
    
      for (let current_line = 0; current_line < kvs.length; current_line ++) {
        rx = kvs[current_line];
        let xy = [];
        for (let i=0; i<rx.length; i++) {
          xy.push({x: secondsToDate(rx[i][1]), y: (rx[i][0]/div)});
        }    
        chartBottom.removeDataset(datasetLabel);
        chartBottom.addDataset(datasetLabel, xy, datasetColor);    
      }
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados que compõe o gráfico inferior, com base no mapa.
 * @param {*} datasetLabel 
 * @param {*} datasetColor 
 */
function requestMap2ChartBottom(datasetLabel, datasetColor) {
  let query = new QueryRequest();
  let selectedChannel = getGlobal("selected_channel");
  query.select = [selectedChannel.value];
  query["group-by"] = "time";
  query["group-by-output"] = "vs_ks";
  query.from = "antenas";
  query.where = [];
  query.where.push(getLocation());
  query.where.push(getTime());
  showTrace("requestMap2ChartBottom", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function (js) {
      let mx, mn;
      let kvs = new Array();
    
      let chartBottom = getChart('bottom');
         
      // Pega os dados em si
      let rx = js.result;
      kvs.push((rx));
    
      // Pega o menor e maior valor da primeira coluna
      // Ela representa os dados em si a segunda coluna
      // deve ser a data    
      let m = Math.max.apply(Math, rx.map(d => d[0]));
      if (typeof mx === "undefined" || m > mx) mx = m;
      mn = 0;
      
      // computes the best unity
      // Já foi feito em requestFilter2ChartBottom
      
      let resultUnity = getGlobal("result_unity");
      let unity = prefixo + resultUnity.value;
      let resultTitle = getGlobal("result_title");
      let title = resultTitle.value;
      chartBottom.setLabelY(title + " [" + unity + "]");

      let tsT0 = getGlobal("ts_t0");
      let tsT1 = getGlobal("ts_t1");
    
      // Arthur 08/03/2021
      let window_size = getGlobal("window_size");
      let interval = tsT1.value - tsT0.value;
      let start = secondsToDate(tsT0.value);
      let end = secondsToDate(tsT1.value);
      
      if (window_size != undefined) {
        interval = window_size.value;
        start = secondsToDate(tsT1.value - window_size.value);
      }
      


      end.setSeconds(end.getSeconds()+1);
      chartBottom.setLabels([]);
      while (start < end) {  
        let date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
        let label = '';
        if (interval<1200) { // 20 min
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setSeconds(start.getSeconds()+1);
        } else if (interval<72000) { // 20 hs
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setMinutes(start.getMinutes()+1);
        } else if (interval<4320000) { // 50 dias
          label = moment(date).format('MM/DD/YYYY HH:mm');
          start.setHours(start.getHours()+1);
        } else {
          label = moment(date).format('MM/DD/YYYY');
          start.setDate(start.getDate()+1);
        }
        chartBottom.addLabel(label);
      }
    
      for (let current_line = 0; current_line < kvs.length; current_line ++) {
        rx = kvs[current_line];
        let xy = [];
        for (let i=0; i<rx.length; i++) {
          xy.push({x: secondsToDate(rx[i][1]), y: (rx[i][0]/div)});
        }    
        chartBottom.removeDataset(datasetLabel);
        chartBottom.addDataset(datasetLabel, xy, datasetColor);    
      }
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Solicita os dados que compõe o gráfico inferior, com base no bairro.
 * @param {*} datasetLabel 
 * @param {*} datasetColor 
 * @param {*} codBairro 
 */
function requestBairro2ChartBottom(datasetLabel, datasetColor, codBairro) {
  let query = new QueryRequest();
  let selectedChannel = getGlobal("selected_channel");
  query.select = [selectedChannel.value];
  query["group-by"] = "time";
  query["group-by-output"] = "vs_ks";
  query.from = "antenas";
  query.where = [];
  query.where.push(getStartLocation());
  //query.where.push(selectUF());
  //query.where.push(selectCidade());
  query.where.push(selectBairro(codBairro));
  query.where.push(getTime());
  showTrace("requestBairro2ChartBottom", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function (js) {
      let mx, mn;
      let kvs = new Array();
    
      let chartBottom = getChart('bottom');
         
      // Pega os dados em si
      let rx = js.result;
      kvs.push((rx));
    
      // Pega o menor e maior valor da primeira coluna
      // Ela representa os dados em si a segunda coluna
      // deve ser a data    
      let m = Math.max.apply(Math, rx.map(d => d[0]));
      if (typeof mx === "undefined" || m > mx) mx = m;
      mn = 0;
      
      // computes the best unity
      // Já foi feito em requestFilter2ChartBottom
      
      let resultUnity = getGlobal("result_unity");
      let unity = prefixo + resultUnity.value;
      let resultTitle = getGlobal("result_title");
      let title = resultTitle.value;
      chartBottom.setLabelY(title + " [" + unity + "]");

      let tsT0 = getGlobal("ts_t0");
      let tsT1 = getGlobal("ts_t1");
    
      // Arthur 08/03/2021
      let window_size = getGlobal("window_size");
      let interval = tsT1.value - tsT0.value;
      let start = secondsToDate(tsT0.value);
      let end = secondsToDate(tsT1.value);

      
      if (window_size != undefined) {
        interval = window_size.value;
        start = secondsToDate(tsT1.value - window_size.value);
      }
      



      end.setSeconds(end.getSeconds()+1);
      chartBottom.setLabels([]);
      while (start < end) {  
        let date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
        let label = '';
        if (interval<1200) { // 20 min
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setSeconds(start.getSeconds()+1);
        } else if (interval<72000) { // 20 hs
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setMinutes(start.getMinutes()+1);
        } else if (interval<4320000) { // 50 dias
          label = moment(date).format('MM/DD/YYYY HH:mm');
          start.setHours(start.getHours()+1);
        } else {
          label = moment(date).format('MM/DD/YYYY');
          start.setDate(start.getDate()+1);
        }
        chartBottom.addLabel(label);
      }
    
      for (let current_line = 0; current_line < kvs.length; current_line ++) {
        rx = kvs[current_line];
        let xy = [];
        for (let i=0; i<rx.length; i++) {
          xy.push({x: secondsToDate(rx[i][1]), y: (rx[i][0]/div)});
        }    
        chartBottom.removeDataset(datasetLabel);
        chartBottom.addDataset(datasetLabel, xy, datasetColor);    
      }
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Retorna o nome do tipo de layer em português.
 * @param {*} layer 
 */
function getLayerType(layer) {
  let datasetLabel = null;
  if (layer instanceof L.Rectangle) {
    datasetLabel = 'Rectangle';
  } else {
    datasetLabel = 'Polygon';
  }
  return datasetLabel;
}

/**
 * Solicita os dados que compõe o gráfico inferior, com base no poligono.
 * @param {*} layer 
 */
function requestPoly2ChartBottom(layer) {
  let datasetLabel = getLayerType(layer);
  let datasetColor = layer.options.color;
  let query = new QueryRequest();
  let selectedChannel = getGlobal("selected_channel");
  query.select = [selectedChannel.value];
  query["group-by"] = "time";
  query["group-by-output"] = "vs_ks";
  query.from = "antenas";
  query.where = [];
  query.where.push(getPoly(layer));
  query.where.push(getTime());
  showTrace("requestPoly2ChartBottom", query); // utils.js
  $.ajax({
    type: 'POST',
    url: xhttp_url,
    data: JSON.stringify(query),
    success: function (js) {
      let mx, mn;
      let kvs = new Array();
    
      let chartBottom = getChart('bottom');
         
      // Pega os dados em si
      let rx = js.result;
      kvs.push((rx));
    
      // Pega o menor e maior valor da primeira coluna
      // Ela representa os dados em si a segunda coluna
      // deve ser a data    
      let m = Math.max.apply(Math, rx.map(d => d[0]));
      if (typeof mx === "undefined" || m > mx) mx = m;
      mn = 0;
      
      // computes the best unity
      // Já foi feito em requestFilter2ChartBottom
      
      let resultUnity = getGlobal("result_unity");
      let unity = prefixo + resultUnity.value;
      let resultTitle = getGlobal("result_title");
      let title = resultTitle.value;
      chartBottom.setLabelY(title + " [" + unity + "]");
      console.log(title + " [" + unity + "]");

      let tsT0 = getGlobal("ts_t0");
      let tsT1 = getGlobal("ts_t1");
    
      // Arthur 08/03/2021
      let window_size = getGlobal("window_size");
      let interval = tsT1.value - tsT0.value;
      let start = secondsToDate(tsT0.value);
      let end = secondsToDate(tsT1.value);
      let inferior_limit = tsT0.value;

      
      if (window_size.value != undefined) {
        interval = window_size.value;
        start = secondsToDate(tsT1.value - window_size.value);
      }
      



      end.setSeconds(end.getSeconds()+1);
      chartBottom.setLabels([]);
      while (start < end) {  
        let date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
        let label = '';
        if (interval<1200) { // 20 min
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setSeconds(start.getSeconds()+1);
        } else if (interval<72000) { // 20 hs
          label = moment(date).format('MM/DD/YYYY HH:mm:ss');
          start.setMinutes(start.getMinutes()+1);
        } else if (interval<4320000) { // 50 dias
          label = moment(date).format('MM/DD/YYYY HH:mm');
          start.setHours(start.getHours()+1);
        } else {
          label = moment(date).format('MM/DD/YYYY');
          start.setDate(start.getDate()+1);
        }
        chartBottom.addLabel(label);
      }
    
      for (let current_line = 0; current_line < kvs.length; current_line ++) {
        rx = kvs[current_line];
        let xy = [];
        for (let i=0; i<rx.length; i++) {
          xy.push({x: secondsToDate(rx[i][1]), y: (rx[i][0]/div)});
        }    
        chartBottom.removePolyDataset(datasetLabel, datasetColor);
        chartBottom.addDataset(datasetLabel, xy, datasetColor);    
      }
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

/**
 * Adiciona um par cor e nome a lista que compõe o gráfico inferior.
 * @param {*} color 
 * @param {*} name 
 */
function addQueryName(color, name) {
  let qn = {
    color: color,
    name: name
  }
  queryName.push(qn);
}

/**
 * Recupera um nome da lista com pares de cor e nome que compõe o gráfico inferior.
 * @param {*} color 
 */
function getQueryName(color) {
  let result = 'Error!';
  for (let i=0; i<queryName.length; i++) {
    if (queryName[i].color == color) {
      result = queryName[i].name;
      break;
    }
  }
  return result;
}

/**
 * Converte segundos em data.
 * @param {*} seconds 
 */
function secondsToDate(seconds) {
  var date = new Date(1970, 0, 1, 0, 0, 0, 0);
  date.setSeconds(seconds);
  return date;
}
