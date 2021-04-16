import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

import "leaflet/dist/leaflet.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.js";

//import *as L from 'leaflet';
declare const L: any;
import 'leaflet-draw';
import * as $ from "jquery";
//import  *as  $ = require("jquery");

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  /**
* 
* Operações sobre o mapa. 
* 
*/

  map: any = null;
  drawControl: any = null;
  listLayer: any = [];
  listBairro: any = [];
  geojson: any = null;

  constructor() {

  }
  ngOnInit(): void {
    this.setupMap();
  }

  /**
   * Retorna lista de poligonos.
   */
  getListLayer() {
    return this.listLayer;
  }

  getListBairro() {
    return this.listBairro;
  }

  /**
   * Escolhe uma cor a partir das que já 
   * foram usadas.
   
  nextDrawColor(newLayer:any) {
    let drawColors = getGlobal("draw_colors");
    let used = [];
    if (newLayer != null) {
      used.push(newLayer.options.color);
    }
    getMap().eachLayer((layer:any) => {
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
*/

  /**
   * Retorna o mapa.
   * Utilizado em:
   *   ~/js/api/request.js
   *   ~/js/api/response.js
   *   ~/js/api/support.js
   *   ~/js/form/control.js
   *   ~/js/map/control.js
   */
  getMap() {
    return this.map;
  }

  /**
   * Remove poligono da lista.
   * @param {*} layer 
   */
  removeLayer(layer: any) {
    for (let i = 0; i < this.listLayer.length; i++) {
      if ((((layer instanceof L.Rectangle) &&
        (this.listLayer[i] instanceof L.Rectangle)) ||
        ((layer instanceof L.Polygon) &&
          (this.listLayer[i] instanceof L.Polygon))) &&
        (layer.options.color == this.listLayer[i].options.color)) {
        this.listLayer.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Retorna cor dos bairros.
   * @param {*} d 
   */
  getColor(d: any) {
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
  statesStyle(geoJsonPoint:any, latlng:any) {
     return L.marker(latlng, { icon: L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: 'blue', spin:false}) });
   }

  /**
   * Formata o poligono dos bairros.
   * @param {*} color 
   */
  formatStatesStyle(color:any) {
    return L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: color, spin:false});
  }

  /**
   * Guarda os dados do covid do bairro para exibição futura.
   * @param {*} codBairro 
   * @param {*} recuperado 
   * @param {*} obito 
   * @param {*} ativo 
   */
  setCovidBairro(codBairro: any, recuperado: any, obito: any, ativo: any) {
    for (let i = 0; i < this.listBairro.length; i++) {
      if (this.listBairro[i].codigo == codBairro) {
        this.listBairro[i].recuperado = recuperado;
        this.listBairro[i].obito = obito;
        this.listBairro[i].ativo = ativo;
        break;
      }
    }
  }

  /**
   * Limpa dados do Covid após mudança no intervalo temporal.
   */
  clearCovidBairro() {
    for (let i = 0; i < this.listBairro.length; i++) {
      this.listBairro[i].recuperado = '...';
      this.listBairro[i].obito = '...';
      this.listBairro[i].ativo = '...';
    }
  }

  /**
   * Atribui eventos aos poligonos dos bairros.
   * @param {*} feature 
   * @param {*} layer 
   */
  onEachFeature(feature: any, layer: any) {
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

    layer.on('click', () => {
      let color = '';
      for (let i = 0; i < this.listBairro.length; i++) {
        if (this.listBairro[i].codigo == feature.properties.CODBAIRRO) {
          color = this.listBairro[i].color;
          this.listBairro.splice(i, 1);
          break;
        }
      }

      /* if (color != '') {
        layer.setIcon(this.formatStatesStyle('blue'));
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
      } */
    });

    /* layer.on('mouseout', (e:any)=> {
      this.geojson.resetStyle(e.target);
      let popup = this.getPopup();
      let content = popup.getContent();
      let html = $.parseXML(content);  
      $(html).find('b').each(function(i,j) {           
        content = $(j).text();
      });
      let achou = false;
      for (let i=0; i<this.listBairro.length; i++) {
        if (this.listBairro[i].nome == content) {
          this.setIcon(this.formatStatesStyle(this.listBairro[i].color));
          achou = true;
          break;
        }
      }    
      if (!achou) {
        this.setIcon(this.formatStatesStyle('blue'));
      }
      this.closePopup();
    });

    layer.on('mouseover', (e:any)=> {
      this.openPopup();

      let popup = this.getPopup();
      let content = popup.getContent();
      let html = $.parseXML(content);  
      $(html).find('b').each(function(i:any,j:any) {           
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
    }); */
  }

  /**
   * Configura o mapa.
   */
  setupMap() {
    $('#map').height(window.innerHeight - 350); // previous value 300
    this.map = L.map('map').setView([-15.7217175, -48.0774466], 9);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    L.Marker.prototype.options.icon = L.AwesomeMarkers.icon({icon: 'home', prefix: 'fa', markerColor: 'blue', spin:false});

    this.geojson = L.geoJson(env.clientsData, { pointToLayer: this.statesStyle, onEachFeature: this.onEachFeature }).addTo(this.map);
     
     // Initialise the FeatureGroup to store editable layers
     let editableLayers = new L.FeatureGroup();
     this.map.addLayer(editableLayers);
       
     this.drawControl = new L.Control.Draw({
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
     
     this.map.addControl(this.drawControl);

    /*  // Map events

     this.map.on(L.Draw.Event.CREATED, (e:any)=> {
       this.listLayer.push(e.layer);
       this.nextDrawColor(e.layer);	
       updateDrawColors();
       // add dataset
       requestPoly2ChartBottom(e.layer);
       requestPoly2ChartLeft(e.layer);
       requestPoly2ChartRight(e.layer);
       editableLayers.addLayer(e.layer);
     });

     this.map.on(L.Draw.Event.DELETED, (e:any)=> {
       // remover dataset
       e.layers.eachLayer(layer: => {
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
     }); */ 
  }

  /**
   * Define a cor do retangulo e do poligono que serão
   * desenhados no mapa.
   */
  /* updateDrawColors() {
    console.log("### L ", L)
    let drawColors = getGlobal("draw_colors");
    let drawColorIndex = getGlobal("draw_color_index");
    this.drawControl.setDrawingOptions({
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
*/



}


////////////////////////////////////////////////////
/**
 *
 *   map: any;

  ngOnInit(): void {

    this.renderMap();

  }
  renderMap(){
      this.map = L.map('map').setView([-15.8228858,-47.9367244], 6);
      L.tileLayer(env.MAPA_TILE_LAYER, {maxZoom: 15
      }).addTo(this.map);
  }

 */