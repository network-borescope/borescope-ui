// inclusão de bibliotecas do angular
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// inclusão do leaflet
import * as L from 'leaflet';

// inclusão do awesome-markers
import 'leaflet.awesome-markers';
// inclusão do leaflet draw
import 'leaflet-draw';

// inclusão do heatmap
import 'leaflet-heatmap';
declare var HeatmapOverlay: any;

// inclusões da aplicação
import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // referência para o div do mapa
  @ViewChild("map", { static: true }) private mapDiv?: ElementRef;

  // events
  @Output() polyCreatedEvent = new EventEmitter<any>();
  @Output() polyRemovedEvent = new EventEmitter<any>();
  @Output() polyEditedEvent = new EventEmitter<any>();
  @Output() moveEndedEvent = new EventEmitter();


  // objeto com o mapa do leaflet
  private map!: L.Map;
  // objeto com os clientes
  private geojson!: L.GeoJSON<any>;
  // pbjeto de desenho de polígonos
  private drawControl!: L.Control.Draw;
  // lista de layers ativos
  private listLayer: any[] = [];

  // heatmap layer
  private current_heatmapLayer: any;
  // heatmap configuration
  private heatCfg = {
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
      '.2': '	#00008B', '.4': 'blue', '.6': 'red', '.75': 'yellow', '.90': 'white'
    }
  };


  listBairro: any = [];

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) { }

  ngOnInit(): void {
    this.setupMap();
    this.updateDrawColors();
  }

  /**
   * Configura o mapa.
   */
  async setupMap() {
    if (this.mapDiv === undefined) {
      return;
    }

    // inicialização do mapa
    this.map = L.map(this.mapDiv.nativeElement).setView([-15.7217175, -48.0774466], 9);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/light-v10',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    // configuração dos marcadores
    L.Marker.prototype.options.icon = L.AwesomeMarkers.icon({ icon: 'home', prefix: 'fa', markerColor: 'blue', spin: false });

    // carregamento do dado dos clientes
    const clients = await this.api.getClients();
    this.geojson = L.geoJSON(clients, { pointToLayer: this.statesStyle, onEachFeature: this.onEachFeature }).addTo(this.map);

    // Initialise the FeatureGroup to store editable layers
    let editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);

    // Draw polygons
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
        rectangle: {},
        polyline: false,
        circle: false, // Turns off this drawing tool
        circlemarker: false,
        marker: false
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!!
      }
    });
    this.map.addControl(this.drawControl);

    // Map events
    this.map.on(L.Draw.Event.CREATED, (e: any) => {
      this.listLayer.push(e.layer);
      this.nextDrawColor(e.layer);
      this.updateDrawColors();

      this.polyCreatedEvent.emit(e.layer);

      editableLayers.addLayer(e.layer);
    });

    this.map.on(L.Draw.Event.DELETED, (e: any) => {
      console.log(e);
      // remover dataset
      e.layers.eachLayer((layer: any) => {
        this.polyRemovedEvent.emit(layer)
        this.removeLayer(layer);
      });
    });

    this.map.on(L.Draw.Event.EDITED, (e: any) => {
      // update dataset
      e.layers.eachLayer((layer: any) => {
        this.polyEditedEvent.emit(layer);
        this.removeLayer(layer);

        this.listLayer.push(e.layer);
      });
    });

    this.map.on('moveend', () => {
      this.moveEndedEvent.emit();
    });
  }

  /**
   * Retorna lista de poligonos.
   */
  getListLayer() {
    return this.listLayer;
  }

  /**
   * Retorna lista de bairros.
   */
   getListBairro() {
    return this.listBairro;
  }

  /**
   * Retorna o mapa.
   */
  getMap(): L.Map {
    return this.map;
  }

  /**
   * Monta o trecho da query que define uma região geográfica
   * conforme a visualização no Mapa.
   */
  getLocation(): any[] {
    let zoom = this.getZoom();
    let bounds = this.map.getBounds();
    let c0 = bounds.getNorthEast();
    let c1 = bounds.getSouthWest();

    let list = [];
    list.push("location");
    list.push("zrect");
    list.push(zoom);
    list.push(c0.lat);
    list.push(c1.lng);
    list.push(c1.lat);
    list.push(c0.lng);

    return list;
  }

  /**
   * Retorna um zoom mais adequado ao uso nas querys.
   */
  getZoom(): number {
    let geoExtraZoom = this.global.getGlobal("geo_extra_zoom");
    return this.map.getZoom() - 1 + geoExtraZoom.value;
  }

  /**
   * Escolhe uma cor a partir das que já
   * foram usadas.
   */
  nextDrawColor(newLayer: any) {
    let drawColors = this.global.getGlobal("draw_colors");

    let used = [];
    if (newLayer != null) {
      used.push(newLayer.options.color);
    }

    this.getMap().eachLayer(layer => {
      if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
        let color = layer.options.color;
        if (drawColors.value.indexOf("" + color) != -1) {
          used.push(color);
        }
      } else if (layer instanceof L.Marker) {
        if (layer.options.icon === undefined) {
          return;
        }

        const options: L.AwesomeMarkers.AwesomeMarkersIconOptions = layer.options.icon.options;
        let color = options.markerColor;

        if (drawColors.value.indexOf(`${color}`) != -1) {
          used.push(color);
        }
      }
    });

    let drawColorIndex = this.global.getGlobal("draw_color_index");
    if (used.length > 0) {
      for (let i = 0; i < drawColors.value.length; i++) {
        if (used.indexOf(drawColors.value[i]) == -1) {
          drawColorIndex.value = i;
          this.global.setGlobal(drawColorIndex);
          break;
        }
      }
    }
  }

  /**
   * Remove poligono da lista.
   */
  removeLayer(layer: any) {
    for (let i = 0; i < this.listLayer.length; i++) {
      if ((((layer instanceof L.Rectangle) &&
        (this.listLayer[i] instanceof L.Rectangle)) ||
        ((layer instanceof L.Polygon) &&
          (this.listLayer[i] instanceof L.Polygon))) &&
        (layer.options.color == (this.listLayer[i] as any).options.color)) {
        this.listLayer.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Retorna cor dos bairros.
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
   */
  statesStyle(geoJsonPoint: any, latlng: any) {
    return L.marker(latlng, { icon: L.AwesomeMarkers.icon({ icon: 'home', prefix: 'fa', markerColor: 'blue', spin: false }) });
  }

  /**
   * Formata o poligono dos bairros.
   */
  formatStatesStyle(color: any) {
    return L.AwesomeMarkers.icon({ icon: 'home', prefix: 'fa', markerColor: color, spin: false });
  }

  /**
   * Guarda os dados do covid do bairro para exibição futura.
   * TODO: Checar os tipos
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

      /*
      if (color != '') {
        layer.setIcon(this.formatStatesStyle('blue'));
        chartBottom.removeDataset(feature.properties.NOME);
        removeBairroClick(feature.properties.CODBAIRRO);
        refreshBairroChartLeft();
        //refreshBairroChartRight();
      }
      else {
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
   * Define a cor do retangulo e do poligono que serão
   * desenhados no mapa.
   */
  updateDrawColors() {
    if (this.drawControl === undefined) {
      return;
    }

    let drawColors = this.global.getGlobal("draw_colors");
    let drawColorIndex = this.global.getGlobal("draw_color_index");

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

  /**
   * Função que desenha um heatmap a partir dos dados
   * passados como parâmetro.
   */
  drawHeatMap(json: any) {
    if (json.tp == "0") {
      console.log(json);
      return;
    }

    let a = [];
    let max_v = 0;
    let min_v = Number.MAX_VALUE;
    let zoom = this.map.getZoom() - 1;
    let b = this.map.getBounds();
    let geoExtraZoom = this.global.getGlobal("geo_extra_zoom");
    for (let i = 0; i < json.result.length; i++) {
      let o = json.result[i];
      let vlat = this.util.tile2latX(o.k[0], zoom + geoExtraZoom.value);
      let vlon = this.util.tile2longX(o.k[1], zoom + geoExtraZoom.value);
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

    let heatData: any = {};
    heatData.min = min_v;
    heatData.max = max_v;
    heatData.data = a;

    if (this.current_heatmapLayer != undefined) {
      this.current_heatmapLayer.setData(heatData);
    } else {
      this.current_heatmapLayer = new HeatmapOverlay(this.heatCfg);
      this.current_heatmapLayer.setData(heatData);
      this.map.addLayer(this.current_heatmapLayer);
    }
  }
}
