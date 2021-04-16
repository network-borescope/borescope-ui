/**
 * 
 * Operações sobre o mapa. 
 * 
 */

let map = null;
let drawControl = null;
let listLayer = [];
let listBairro = [];
let geojson = null;

/**
 * Retorna lista de poligonos.
 */
function getListLayer() {
  return listLayer;
}

function getListBairro() {
  return listBairro;
}

/**
 * Escolhe uma cor a partir das que já 
 * foram usadas.
 */
function nextDrawColor(newLayer) {
  let drawColors = getGlobal("draw_colors");
  let used = [];
  if (newLayer != null) {
    used.push(newLayer.options.color);
  }
  getMap().eachLayer((layer) => {
    if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
      let color = layer.options.color;
      if (drawColors.value.indexOf(""+color) != -1) {
        used.push(color);
      }
    } else if (layer instanceof L.Marker) {
      let color = layer.options.icon.options.markerColor;
      if (drawColors.value.indexOf(""+color) != -1) {
        used.push(color);
      }
    }
  });	
  let drawColorIndex = getGlobal("draw_color_index");
  if (used.length > 0) {
    for (let i = 0; i < drawColors.value.length; i++) {
      if (used.indexOf(drawColors.value[i]) == -1) {
        drawColorIndex.value = i;
        setGlobal(drawColorIndex);
        break;
      }
    }
  }
}

/**
 * Retorna o mapa.
 * Utilizado em:
 *   ~/js/api/request.js
 *   ~/js/api/response.js
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 *   ~/js/map/control.js
 */
function getMap() {
	return map;
}

/**
 * Remove poligono da lista.
 * @param {*} layer 
 */
function removeLayer(layer) {
  for (let i=0; i<listLayer.length; i++) {
    if ((((layer instanceof L.Rectangle) &&
        (listLayer[i] instanceof L.Rectangle)) ||
        ((layer instanceof L.Polygon) &&
        (listLayer[i] instanceof L.Polygon))) &&
        (layer.options.color == listLayer[i].options.color)) {
      listLayer.splice(i, 1);
      break;
    }
  }
}

/**
 * Retorna cor dos bairros.
 * @param {*} d 
 */
function getColor(d) {
  /*
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
                    */
  return '#050505';
}

/**
 * Formata o poligono dos bairros ao clicar.
 * @param {*} feature 
 */
function statesStyle(geoJsonPoint, latlng) {
  return L.marker(latlng, { icon: L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: 'blue', spin:false}) });
}

/**
 * Formata o poligono dos bairros.
 * @param {*} color 
 */
function formatStatesStyle(color) {
  return L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: color, spin:false});
}

/**
 * Guarda os dados do covid do bairro para exibição futura.
 * @param {*} codBairro 
 * @param {*} recuperado 
 * @param {*} obito 
 * @param {*} ativo 
 */
function setCovidBairro(codBairro, recuperado, obito, ativo) {
  for (let i=0; i<listBairro.length; i++) {
    if (listBairro[i].codigo == codBairro) {
      listBairro[i].recuperado = recuperado;
      listBairro[i].obito = obito;
      listBairro[i].ativo = ativo;
      break;
    }
  }    
}

/**
 * Limpa dados do Covid após mudança no intervalo temporal.
 */
function clearCovidBairro() {
  for (let i=0; i<listBairro.length; i++) {
    listBairro[i].recuperado = '...';
    listBairro[i].obito = '...';
    listBairro[i].ativo = '...';
  }
}

/**
 * Atribui eventos aos poligonos dos bairros.
 * @param {*} feature 
 * @param {*} layer 
 */
function onEachFeature(feature, layer) {
  const codBairro = feature.properties.CODBAIRRO;
  const contentPopup = "<div>" +
      "<div style='display: block;' id='idBairro" + codBairro + "Nome'><b>" + feature.properties.NOME + "</b></div>" +

      "<div style='display: block;'>" +
      "<div style='display: inline-block; width: 100px;'>Linux</div>" +
      "<div style='display: inline-block; width: 60px; text-align: right;' id='idBairro" + codBairro + "_64'>...</div>" +
      "</div>" +

      "<div style='display: block;'>" +
      "<div style='display: inline-block; width: 100px;'>Windows</div>" +
      "<div style='display: inline-block; width: 60px; text-align: right;' id='idBairro" + codBairro + "_128'>...</div>" +
      "</div>" +

      "<div style='display: block;'>" +
      "<div style='display: inline-block; width: 100px;'>Unix</div>" +
      "<div style='display: inline-block; width: 60px; text-align: right;' id='idBairro" + codBairro + "_256'>...</div>" +
      "</div>" +

      "</div>";
  layer.bindPopup(contentPopup);

  layer.on('click', function () {    
    let color = '';
    for (let i=0; i<listBairro.length; i++) {
      if (listBairro[i].codigo == feature.properties.CODBAIRRO) {
        color = listBairro[i].color;
        listBairro.splice(i, 1);
        break;
      }
    }
    if (color != '') {
      layer.setIcon(formatStatesStyle('blue'));
      chartBottom.removeDataset(feature.properties.NOME);
      removeBairroClick(feature.properties.CODBAIRRO);
      refreshBairroChartLeft();
      //refreshBairroChartRight();
    } else {
      let drawColors = getGlobal("draw_colors");
      let drawColorIndex = getGlobal("draw_color_index");  
      layer.setIcon(formatStatesStyle(drawColors.value[drawColorIndex.value]));
      let bairro = { 
        codigo: feature.properties.CODBAIRRO, 
        nome: feature.properties.NOME,
        color: drawColors.value[drawColorIndex.value] 
      };
      listBairro.push(bairro);
      requestBairro2ChartBottom(feature.properties.NOME, drawColors.value[drawColorIndex.value], feature.properties.CODBAIRRO);
      requestBairro2ChartLeft(feature.properties.CODBAIRRO);
      //requestBairro2ChartRight(feature.properties.CODBAIRRO);
      nextDrawColor();	
      updateDrawColors();
    }
  });

  layer.on('mouseout', function (e) {
    geojson.resetStyle(e.target);
    let popup = this.getPopup();
    let content = popup.getContent();
    let html = $.parseXML(content);  
    $(html).find('b').each(function(i,j) {           
       content = $(j).text();
    });
    let achou = false;
    for (let i=0; i<listBairro.length; i++) {
      if (listBairro[i].nome == content) {
        this.setIcon(formatStatesStyle(listBairro[i].color));
        achou = true;
        break;
      }
    }    
    if (!achou) {
      this.setIcon(formatStatesStyle('blue'));
    }
    this.closePopup();
  });

  layer.on('mouseover', function (e) {
    this.openPopup();

    let popup = this.getPopup();
    let content = popup.getContent();
    let html = $.parseXML(content);  
    $(html).find('b').each(function(i,j) {           
       content = $(j).text();
    });

    for (let i=0; i<listBairro.length; i++) {
      if (listBairro[i].nome == content) {
        let id = '#idBairro' + listBairro[i].codigo + '_64';
        $(id).text(listBairro[i].recuperado);
        id = '#idBairro' + listBairro[i].codigo + '_128';
        $(id).text(listBairro[i].obito);
        id = '#idBairro' + listBairro[i].codigo + '_256';
        $(id).text(listBairro[i].ativo);
        break;
      }
    }    

    if (this.options.icon.options.markerColor != 'cadetblue') {
      this.setIcon(L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: 'cadetblue', spin:false}));
    }
  });
}

/**
 * Configura o mapa.
 */
function setupMap() {
  $('#map').height(window.innerHeight - 350); // previous value 300
  map = L.map('map').setView([-15.7217175, -48.0774466], 10);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map);

  L.Marker.prototype.options.icon = L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: 'blue', spin:false});

  geojson = L.geoJson(clientsData, { pointToLayer: statesStyle, onEachFeature: onEachFeature }).addTo(map);
  
  // Initialise the FeatureGroup to store editable layers
  let editableLayers = new L.FeatureGroup();
  map.addLayer(editableLayers);
    
  drawControl = new L.Control.Draw({
    position: 'topleft',
    draw: {
      polygon: {
        allowIntersection: false, // Restricts shapes to simple polygons
        drawError: {
          color: '#e1e100', // Color the shape will turn when intersects
          message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
        },
      },
      // disable toolbar item by setting it to false
      rectangle: true,
      polyline: false,
      circle: false, // Turns off this drawing tool
      circlemarker: false,
      marker: false
    },
    edit: {
      featureGroup: editableLayers, //REQUIRED!!
      remove: true
    }
  });
  
  map.addControl(drawControl);

  // Map events

  map.on(L.Draw.Event.CREATED, function (e) {
    listLayer.push(e.layer);
    nextDrawColor(e.layer);	
    updateDrawColors();
    // add dataset
    requestPoly2ChartBottom(e.layer);
    requestPoly2ChartLeft(e.layer);
    requestPoly2ChartRight(e.layer);
    editableLayers.addLayer(e.layer);
  });

  map.on(L.Draw.Event.DELETED, function (e) {
    // remover dataset
    e.layers.eachLayer(layer => {
      removePolyInChartBottom(layer);
      removePoly(layer); 
      refreshPolyChartLeft();
      refreshPolyChartRight();      
      removeLayer(layer); 
    });
  });

  map.on(L.Draw.Event.EDITED, function (e) {
    // update dataset
    e.layers.eachLayer(layer => {
      requestPoly2ChartBottom(layer);
      removePoly(layer); 
      requestPoly2ChartLeft(layer);
      requestPoly2ChartRight(layer);
      removeLayer(layer); 
      listLayer.push(e.layer);
    });
  });

  map.on('moveend', function () {
    request2HeatMap(); // map/control.js
    requestMap2ChartBottom("Map", "#AAAAAA"); // api/support.js
    requestMap2ChartLeft();
    //requestMap2ChartRight();
  });  
}

/**
 * Define a cor do retangulo e do poligono que serão
 * desenhados no mapa.
 */
function updateDrawColors() {
  console.log("### L ", L)
  let drawColors = getGlobal("draw_colors");
  let drawColorIndex = getGlobal("draw_color_index");
  drawControl.setDrawingOptions({
    rectangle: {
      shapeOptions: {
        color: drawColors.value[drawColorIndex.value]
      }
    },
    polygon: {
      shapeOptions: {
        color: drawColors.value[drawColorIndex.value]
      }
    }
  });
}
