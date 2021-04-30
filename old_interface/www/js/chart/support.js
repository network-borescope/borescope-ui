/**
 * 
 * Operações sobre o gráfico.
 * 
 */

let chartLeft;
let chartRight;
let chartBottom;
let listBairroClick = [];
let listPoly = [];

let dataChartLeft = [];

/**
 * Difine o intervalo de Y no gráfico inferior.
 * @param {*} mn 
 * @param {*} mx 
 */
function compute_best_unity(mn, mx) {
  let div = 1;
  let potencia = 0;
  for (let i = 0; i < 20; i++) {
    if (mx/div < 100) {
      break;
    }
    potencia ++;
    div *= 10;
  }
  potencia -= potencia % 3;
  div = 1; for (let i=0;i<potencia;i++) div *= 10;
  
  let prefixos = [ "", "K x ", "M x ", "G x ", "T x ", "E x ", "P x " ];
  let prefixo = prefixos[potencia/3];

  let res = { prefix: prefixo, div: div };
  
  // logaritmica ou nao
  if (mn && mx/(mn+1) > 1000) {
    res.log = 1;
  } else {
    res.log = 0;
  }

  return res;
}

/**
 * Formata o gráfico da esquerda. ---- Gráfico de Barra
 */
function initChartLeft() {
  $('#chartLeftContainer').height(window.innerHeight - 350); // previus value 300
  $('#chartLeft').height(window.innerHeight - 400); // previus value 350

  chartLeft = new Bar('chartLeft');
  resetData();
  addXYMap(64, 0);
  addXYMap(124, 0);
  addXYMap(254, 0);
  let backgroundColor = getArrayColor('#AAAAAA');
  let borderColor = getArrayColor('#AAAAAA');
  let label = getLabel();
  let data = getDataMap();
  chartLeft.setLabels(label);
  chartLeft.addDataset('Map', data, backgroundColor, borderColor);
}

/**
 * Formata o gráfico da direita.
 */
function initChartRight() {
  $('#chartLeftContainer').height(window.innerHeight - 300);
  $('#chartRight').height(window.innerHeight - 350);

  chartRight = new Line('chartRight');
  chartRight.setTicksY({ min: -1, max: 1 });
  chartRight.setTypeX('linear');
  chartRight.setLabelY("Correlation");
  chartRight.setLabelX("Offset");

  let xy = [];
  chartRight.setLabels([]);

  xy.push({x: 1, y: 0.5});
  chartRight.addLabel(1);

  xy.push({x: 2, y: 0.55});
  chartRight.addLabel(2);

  xy.push({x: 3, y: 0.55});
  chartRight.addLabel(3);

  xy.push({x: 4, y: 0.5});
  chartRight.addLabel(4);

  xy.push({x: 5, y: 0.5});
  chartRight.addLabel(5);

  xy.push({x: 6, y: 0.55});
  chartRight.addLabel(6);

  xy.push({x: 7, y: 0.6});
  chartRight.addLabel(7);

  xy.push({x: 8, y: 0.6});
  chartRight.addLabel(8);

  xy.push({x: 9, y: 0.65});
  chartRight.addLabel(9);

  xy.push({x: 10, y: 0.65});
  chartRight.addLabel(10);

  chartRight.removeDataset("Map");
  chartRight.addDataset("Map", xy, "#AAAAAA");
}

/**
 * Apresenta o gráfico inferior. ---- Gráfico de Linha
 */
function initChartBottom() {
  chartBottom = new Line('chartBottom');
}

/**
 * Retorna o gráfico escolhido.
 * @param {*} position 
 */
function getChart(position) {
  if (position == 'left') {
    return chartLeft;
  } else if (position == 'right') {
    return chartRight;
  } else if (position == 'bottom') {
    return chartBottom;
  } else {
    return null;
  }
}

function addXYMap(k, v) {
  let filter = dataChartLeft[k][2];
  let geometries = dataChartLeft[k][3];
  let units = dataChartLeft[k][4];
  dataChartLeft[k] = [true, v, filter, geometries, units];
}

function addXYFilter(k, v) {
  let map = dataChartLeft[k][1];
  let geometries = dataChartLeft[k][3];
  let units = dataChartLeft[k][4];
  dataChartLeft[k] = [true, map, v, geometries, units];
}

function addXYPoly(k, v) {
  let map = dataChartLeft[k][1];
  let filter = dataChartLeft[k][2];
  let geometries = dataChartLeft[k][3];
  let units = dataChartLeft[k][4];
  dataChartLeft[k] = [true, map, filter, geometries + v, units];
}

function addXYUnit(k, v) {
  let map = dataChartLeft[k][1];
  let filter = dataChartLeft[k][2];
  let geometries = dataChartLeft[k][3];
  let units = dataChartLeft[k][4];
  dataChartLeft[k] = [true, map, filter, geometries, units + v];
}

function getArrayColor(color) {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(color);
    }
  }
  return result;
}

function getLabel() {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(i);
    }
  }
  return result;
}

function getDataMap() {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(dataChartLeft[i][1]);
    }
  }
  return result;
}

function getDataFilter() {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(dataChartLeft[i][2]);
    }
  }
  return result;
}

function getDataGeometries() {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(dataChartLeft[i][3]);
    }
  }
  return result;
}

function getDataUnits() {
  let result = [];
  for (let i=0; i<dataChartLeft.length; i++) {
    if (dataChartLeft[i][0] == true) {
      result.push(dataChartLeft[i][4]);
    }
  }
  return result;
}

function resetData() {
  dataChartLeft = [];
  for (let i=0; i<256; i++) {
    dataChartLeft.push([false, 0, 0, 0, 0]);
  }
}

/**
 * Plota os dados do Mapa no gráfico da esquerda. ---- Gráfico de Barra
 * @param {*} responseData 
 */
function drawMapChartLeft(responseData) { 
  chartLeft = getChart('left'); 
  let total = 0;
  for (let i=0; i<responseData.result.length; i++) {
    total = total + responseData.result[i].v[0];
  }
  for (let i=0; i<responseData.result.length; i++) {
    addXYMap(responseData.result[i].k[0], responseData.result[i].v[0]/total);
  }
  let backgroundColor = getArrayColor('#AAAAAA');
  let borderColor = getArrayColor('#AAAAAA');
  let label = getLabel();
  let data = getDataMap();
  chartLeft.removeDataset('Map');
  chartLeft.setLabels(label);
  chartLeft.addDataset('Map', data, backgroundColor, borderColor);
}

/**
 * Plota os dados do Mapa no gráfico da direita.
 * @param {*} responseData 
 */
function drawMapChartRight(responseData) { 
  chartRight.setLabels([]);
  let xy = [];
  for (let i=0; i<responseData.result.length; i++) {
    chartRight.addLabel(responseData.result[i][0]);
    xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
  }
  chartRight.removeDataset('Map');
  chartRight.addDataset('Map', xy, '#AAAAAA'); 
}

/**
 * Plota os dados do Filtro no gráfico da esquerda.
 * @param {*} responseData 
 */
function drawFilterChartLeft(responseData) { 
  chartLeft = getChart('left');  
  let total = 0;
  for (let i=0; i<responseData.result.length; i++) {
    total = total + responseData.result[i].v[0];
  }
  for (let i=0; i<responseData.result.length; i++) {
    addXYFilter(responseData.result[i].k[0], responseData.result[i].v[0]/total);
  }
  let backgroundColor = getArrayColor('#606060');
  let borderColor = getArrayColor('#606060');
  let label = getLabel();
  let data = getDataFilter();
  chartLeft.removeDataset('Filter');
  chartLeft.setLabels(label);
  chartLeft.addDataset('Filter', data, backgroundColor, borderColor);
}

/**
 * Plota os dados do Filtro no gráfico da direita.
 * @param {*} responseData 
 */
function drawFilterChartRight(responseData) { 
  chartRight.setLabels([]);
  let xy = [];
  for (let i=0; i<responseData.result.length; i++) {
    chartRight.addLabel(responseData.result[i][0]);
    xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
  }
  chartRight.removeDataset('Filter');
  chartRight.addDataset('Filter', xy, '#606060'); 
}

/**
 * Atualiza o grafico da esquerda após remoção de bairro.
 */
function refreshBairroChartLeft() {
  let listData = listBairroClick;
  clearXYUnit();
  let t64 = 0;
  let t128 = 0;
  let t256 = 0;
  for (let i=0; i<listData.length; i++) {
    for (let j=0; j<listData[i].covid.length; j++) {
      if (listData[i].covid[j].k[0] < 64) {
        t64 = t64 + listData[i].covid[j].v[0];
      } else if (listData[i].covid[j].k[0] < 128) {
        t128 = t128 + listData[i].covid[j].v[0];
      } else {
        t256 = t256 + listData[i].covid[j].v[0];
      }
      addXYUnit(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
    }
  }
  let backgroundColor = getArrayColor('#AA0000');
  let borderColor = getArrayColor('#AA0000');
  let label = getLabel();
  let data = getDataUnits();
  let total = 0;
  for (let i=0; i<data.length; i++) {
    total = total + data[i];
  }
  for (let i=0; i<data.length; i++) {
    data[i] = data[i]/total;
  }
  chartLeft.removeDataset('Client');
  if (listData.length > 0) {
    chartLeft.setLabels(label);
    chartLeft.addDataset('Client', data, backgroundColor, borderColor);
  }
}

/**
 * Atualiza o grafico da direta após remoção de bairro.
 */
function refreshBairroChartRight() {
  console.log("refreshBairroChartRight");
}

/**
 * Remove bairro da lista.
 * @param {*} layer 
 */
function removeBairroClick(codBairro) {
  for (let i=0; i<listBairroClick.length; i++) {
    if (listBairroClick[i].codigo == codBairro) {
      listBairroClick.splice(i, 1);
      break;
    }
  }  
}

/**
 * Adiciona bairro a lista.
 * @param {*} codBairro 
 * @param {*} data 
 */
function addBairroClick(codBairro, dataCovid) {
  let achou = false;
  for (let i=0; i<listBairroClick.length; i++) {
    if (listBairroClick[i].codigo == codBairro) {
      listBairroClick[i].covid = dataCovid;
      achou = true;
      break;
    }
  }  
  if (!achou) {
    let bairro = { 
      codigo: codBairro,
      covid: dataCovid
    };
    listBairroClick.push(bairro);
  }
  return listBairroClick;
}

/**
 * Plota os dados dos Bairros no gráfico da esquerda. 
 * @param {*} responseData 
 */
function drawBairroChartLeft(codBairro, responseData) { 
  chartLeft = getChart('left');    
  let listData = addBairroClick(codBairro, responseData.result);
  clearXYUnit();
  let t64 = 0;
  let t128 = 0;
  let t256 = 0;
  for (let i=0; i<listData.length; i++) {
    for (let j=0; j<listData[i].covid.length; j++) {
      if (listData[i].covid[j].k[0] < 64) {
        t64 = t64 + listData[i].covid[j].v[0];
      } else if (listData[i].covid[j].k[0] < 128) {
        t128 = t128 + listData[i].covid[j].v[0];
      } else {
        t256 = t256 + listData[i].covid[j].v[0];
      }
      addXYUnit(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
    }
  }
  let backgroundColor = getArrayColor('#AA0000');
  let borderColor = getArrayColor('#AA0000');
  let label = getLabel();
  let data = getDataUnits();
  let total = 0;
  for (let i=0; i<data.length; i++) {
    total = total + data[i];
  }
  for (let i=0; i<data.length; i++) {
    data[i] = data[i]/total;
  }
  chartLeft.removeDataset('Client');
  chartLeft.setLabels(label);
  chartLeft.addDataset('Client', data, backgroundColor, borderColor);
 
  let id = '#idBairro' + codBairro + '_64';
  $(id).text(t64);
  id = '#idBairro' + codBairro + '_128';
  $(id).text(t128);
  id = '#idBairro' + codBairro + '_256';
  $(id).text(t256);
  setCovidBairro(codBairro, t64, t128, t256);
}

/**
 * Plota os dados dos Bairros no gráfico da direita.
 * @param {*} responseData 
 */
function drawBairroChartRight(codBairro, responseData) { 
  chartRight.setLabels([]);
  let xy = [];
  for (let i=0; i<responseData.result.length; i++) {
    chartRight.addLabel(responseData.result[i][0]);
    xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
  }
  chartRight.removeDataset('Client');
  chartRight.addDataset('Client', xy, '#AA0000'); 
}

/**
 * Remove layer da lista.
 * @param {*} layer 
 */
function removePoly(layer) {
  for (let i=0; i<listPoly.length; i++) {
    if ((((layer instanceof L.Rectangle) &&
        (listPoly[i].layer instanceof L.Rectangle)) ||
        ((layer instanceof L.Polygon) &&
        (listPoly[i].layer instanceof L.Polygon))) &&
        (layer.options.color == listPoly[i].layer.options.color)) {
      listPoly.splice(i, 1);
      break;
    }
  }
}

/**
 * Adiciona layer a lista.
 * @param {*} layer 
 * @param {*} data 
 */
function addPoly(layer, dataCovid) {
  let achou = false;
  for (let i=0; i<listPoly.length; i++) {
    if ((((layer instanceof L.Rectangle) &&
        (listPoly[i].layer instanceof L.Rectangle)) ||
        ((layer instanceof L.Polygon) &&
        (listPoly[i].layer instanceof L.Polygon))) &&
        (layer.options.color == listPoly[i].layer.options.color)) {
      listPoly[i].covid = dataCovid;
      achou = true;
      break;
    }
  }  
  if (!achou) {
    let poly = { 
      layer: layer,
      covid: dataCovid
    };
    listPoly.push(poly);
  }
  return listPoly;
}

/**
 * Plota os dados das Geometrias no gráfico da esquerda.
 * @param {*} responseData 
 */
function drawPolyChartLeft(layer, responseData) { 
  chartLeft = getChart('left');    
  let listData = addPoly(layer, responseData.result);
  clearXYPoly();
  for (let i=0; i<listData.length; i++) {
    for (let j=0; j<listData[i].covid.length; j++) {
      addXYPoly(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
    }
  }
  let backgroundColor = getArrayColor('#00AA00');
  let borderColor = getArrayColor('#00AA00');
  let label = getLabel();
  let data = getDataGeometries();
  let total = 0;
  for (let i=0; i<data.length; i++) {
    total = total + data[i];
  }
  for (let i=0; i<data.length; i++) {
    data[i] = data[i]/total;
  }
  chartLeft.removeDataset('Geometries');
  chartLeft.setLabels(label);
  chartLeft.addDataset('Geometries', data, backgroundColor, borderColor);
}

/**
 * Plota os dados das Geometrias no gráfico da direita. ---- Gráfico de Barra
 * @param {*} responseData 
 */
function drawPolyChartRight(layer, responseData) { 
  chartRight.setLabels([]);
  let xy = [];
  for (let i=0; i<responseData.result.length; i++) {
    chartRight.addLabel(responseData.result[i][0]);
  
    xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
  }
  chartRight.removeDataset('Geometries');
  chartRight.addDataset('Geometries', xy, '#00AA00'); 
}

function clearXYPoly() {
  for (let i=0; i<256; i++) {
    let active = dataChartLeft[i][0];
    let map = dataChartLeft[i][1];
    let filter = dataChartLeft[i][2];
    let geometries = 0;
    let units = dataChartLeft[i][4];
    if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
      active = false;
    }
    dataChartLeft[i]=[active, map, filter, geometries, units];
  }
}

//*************************---- Gráfico de Barra */
function clearXYUnit() {
  for (let i=0; i<256; i++) {
    let active = dataChartLeft[i][0];
    let map = dataChartLeft[i][1];
    let filter = dataChartLeft[i][2];
    let geometries = dataChartLeft[i][3];
    let units = 0;
    if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
      active = false;
    }
    dataChartLeft[i]=[active, map, filter, geometries, units];
  }
}

/**
 * Atualiza o grafico da esquerda após remoção de layer.
 */
function refreshPolyChartLeft() {
  chartLeft = getChart('left');  

  let listData = listPoly;
  clearXYPoly();
  for (let i=0; i<listData.length; i++) {
    for (let j=0; j<listData[i].covid.length; j++) {
      addXYPoly(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
    }
  }
  let backgroundColor = getArrayColor('#00AA00');
  let borderColor = getArrayColor('#00AA00');
  let label = getLabel();
  let data = getDataGeometries();
  let total = 0;
  for (let i=0; i<data.length; i++) {
    total = total + data[i];
  }
  for (let i=0; i<data.length; i++) {
    data[i] = data[i]/total;
  }

  chartLeft.removeDataset('Geometries');
  if (listData.length > 0) {
    chartLeft.setLabels(label);
    chartLeft.addDataset('Geometries', data, backgroundColor, borderColor);  
  }
}

/**
 * Atualiza o grafico da direta após remoção de layer.
 */
function refreshPolyChartRight() {
  console.log("refreshPolyChartRight");
}

/**
 * Remove um poligono do gráfico inferior.
 * @param {*} layer 
 */
function removePolyInChartBottom(layer) {
  let datasetLabel = getLayerType(layer);
  let datasetColor = layer.options.color;
  chartBottom = getChart('bottom');
  chartBottom.removePolyDataset(datasetLabel, datasetColor);
}

/**
 * Atualiza grafico da direita após mudança temporal.
 */
function updatePoly() {
  for (let i=0; i<listPoly.length; i++) {
    let layer = listPoly[i].layer;
    removePoly(layer);
    requestPoly2ChartLeft(layer);
    requestPoly2ChartRight(layer);
  }
}

/**
 * Atualiza grafico da direita após mudança temporal.
 */
function updateBairro() {
  for (let i=0; i<listBairroClick.length; i++) {
    let codBairro = listBairroClick[i].codigo;
    removeBairroClick(codBairro);
    requestBairro2ChartLeft(codBairro);  
    requestBairro2ChartRight(codBairro);  
  }
}