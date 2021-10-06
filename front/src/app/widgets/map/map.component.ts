// inclusão de bibliotecas do angular
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// inclusão do leaflet
import * as L from 'leaflet';

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
export class MapComponent implements AfterViewInit {
  // referência para o div do mapa
  @ViewChild("map", { static: true }) private mapDiv?: ElementRef;

  // eventos de desenho no mapa
  @Output() polyCreatedEvent = new EventEmitter<any>();
  @Output() polyRemovedEvent = new EventEmitter<any>();
  @Output() polyEditedEvent = new EventEmitter<any>();
  @Output() moveEndedEvent = new EventEmitter();

  // eventos de seleção de markers
  @Output() markerAddedEvent = new EventEmitter<any>();
  @Output() markerRemovedEvent = new EventEmitter<any>();

  // objeto com o mapa do leaflet
  private map!: L.Map;
  // objeto com os clientes
  private geojson!: L.GeoJSON<any>;
  // pbjeto de desenho de polígonos
  private drawControl!: L.Control.Draw;
  // lista de layers ativos
  private listLayer: any[] = [];
  // lista dos bairros
  private listClient: any[] = [];
  // lista com os clients selecionados no filtro para adição no mapa
  private clientLayers: any[] = [];


  // heatmap layer
  private current_heatmapLayer: any;
  // heatmap configuration
  private heatCfg = {
    "radius": 10.0,
    "maxOpacity": 1.0,
    "scaleRadius": false,
    "useLocalExtrema": true,
    valueField: 'count',
    gradient: {
      '0.0': '#feedde', '.2': '#fdd0a2', '.4': '#fdae6b', '.6': '#fd8d3c', '.8': '#e6550d', '1.0': '#a63603'
    }
  };

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) { }

  ngAfterViewInit(): void {
    this.setupMap();
    this.updatePolygonDrawColors();
  }

  /**
   * Configura o mapa.
   */
  //  -15.787129, -47.884329
  async setupMap(lat = -15.787129, lng = -47.884329, zoom = 5) {
    if (this.mapDiv === undefined) {
      return;
    }

    // inicialização do mapa
    this.map = L.map(this.mapDiv.nativeElement).setView([lat, lng], zoom);

    // configuração do layer do mapa
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
    // Inicialização do layer do outlier
    let outlierMarker = new L.FeatureGroup();
    // carregamento do dado dos clientes
    const clientes = this.global.getGlobal('list_clientes').value.items.map((d: any) => {
      // adciona um marcador extra
      if(d.id === "OTHERS") {
        const outColor = this.global.getGlobal('outlier_color').value;
        outlierMarker.addLayer(L.circle([d.lat,d.lon], 250, { color: outColor, fillColor: outColor, opacity: 1, fillOpacity: 1}));
      };

      return {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [d.lon, d.lat]
        },
        "properties": d
      }
    })
    // Inicialização layers dos markers dos clientes
    let clientMarkersLayers = new L.FeatureGroup();
    this.geojson = L.geoJSON(clientes, { pointToLayer: this.clientMarker.bind(this), onEachFeature: this.onEachFeature.bind(this) });
    clientMarkersLayers.addLayer(this.geojson);

    // Inicialização dos layers editaveis
    let editableLayers = new L.FeatureGroup();
    // adição e remoção dos layers baseado no
    let map = this.map;
    this.map.on('zoomend', function() {
      if(map.getZoom() < 9) {
        map.removeLayer(clientMarkersLayers);
        map.removeLayer(editableLayers);
        map.removeLayer(outlierMarker);
      } else {
        map.addLayer(clientMarkersLayers);
        map.addLayer(editableLayers);  
        map.addLayer(outlierMarker);      
      }
    });
    // Controles de desnho dos polígonos
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
        rectangle: {},
        polyline: false,
        circle: false,
        circlemarker: false,
        marker: false
      },
      edit: {
        featureGroup: editableLayers,
      }
    });
    this.map.addControl(this.drawControl);

    // Eventos do mapa: criação do polígono
    this.map.on(L.Draw.Event.CREATED, (e: any) => {
      this.listLayer.push(e.layer);

      this.updateUsedColors(true, e.layer.options.color);

      this.polyCreatedEvent.emit(e.layer);
      editableLayers.addLayer(e.layer);
    });

    // Eventos do mapa: deleção do polígono
    this.map.on(L.Draw.Event.DELETED, (e: any) => {
      // remover dataset
      e.layers.eachLayer((layer: any) => {
        this.polyRemovedEvent.emit(layer)
        this.removeLayer(layer);

        this.updateUsedColors(false, layer.options.color);
      });
    });

    // Eventos do mapa: edição do polígono
    this.map.on(L.Draw.Event.EDITED, (e: any) => {
      // update dataset
      e.layers.eachLayer((layer: any) => {
        this.removeLayer(layer);
        this.listLayer.push(e.layer);

        this.polyEditedEvent.emit(layer);
      });
    });

    // Eventos do mapa: movimentação do mapa
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
   * Retorna lista de clientes.
   */
  getListClient() {
    return this.listClient;
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
   * Monta o trecho da query que define o poligono.
   */
  getPoly(latlngs: any): any[] {
    let poly = [];
    for (let i = 0; i < latlngs.length; i++) {
      poly.push([latlngs[i].lat, latlngs[i].lng]);
    }
    let list = [];
    list.push("location");
    list.push("zpoly");
    list.push(this.getZoom());
    for (let i = 0; i < poly.length; i++) {
      list.push(poly[i][0]);
      list.push(poly[i][1]);
    }
    return list;
  }

  /**
   * Monta o trecho da query que define o cliente
   */
  getClient(clientFeature: any) {
    let list = [];
    list.push("cliente");
    list.push("eq");
    list.push(clientFeature)

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
  updateUsedColors(added: boolean, color: string) {
    const drawColors = this.global.getGlobal("draw_colors");
    const usedColors = this.global.getGlobal("used_draw_colors");

    // atualiza as cores usadas
    if (added) {
      usedColors.value.push(color);
    }
    else {
      usedColors.value = usedColors.value.filter( (d: string) => d !== color );
    }
    this.global.setGlobal(usedColors);

    // atualiza o índice de cor
    let drawColorIndex = this.global.getGlobal("draw_color_index");
    for(let id = 0; id< drawColors.value.length; id++) {
      const current = drawColors.value[id];

      if(!usedColors.value.includes(current)) {
        drawColorIndex.value = id;
        break;
      }
    }
    this.global.setGlobal(drawColorIndex);
    this.updatePolygonDrawColors();
  }

   /**
   * Define a cor do retangulo e do poligono que serão desenhados no mapa.
   */
    updatePolygonDrawColors() {
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
   * Formata o poligono dos bairros ao clicar.
   */
  clientMarker(geoJsonPoint: any, latlng: any) {
    // @ts-ignore
    let color = this.global.getGlobal("unselected_color").value;
    return L.marker(latlng, { icon: this.clientIcon(color) });
  }

  /**
   * Formata o poligono dos bairros.
   */
  clientIcon(color: any) {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style='background-color:${color};' class='marker-pin'></div><i class='fa fa-circle awesome'>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -38]
    });
  }

  /**
   * Atribui eventos aos markers dos pops.
   */
  onEachFeature(feature: any, layer: any) {
    // criação do popup
    const cliente = feature.properties.caption;
    let contentPopup = '';

    if(layer.feature.properties.id == "OTHERS") {
      const size = this.global.getGlobal('list_ips').value.length;

      contentPopup = "<div>" +
      "<div style='display: block;'><b>" + cliente + " (" + size + " IPs)</b></div>" +
      "</div>";
    }
    else {
      contentPopup = "<div>" +
      "<div style='display: block;'><b>" + cliente + "</b></div>" +
      "</div>";
    }

    layer.bindPopup(contentPopup);

    // Evento de click no marker
    layer.on('click', () => {
      // default color
      let color = this.global.getGlobal("unselected_color").value;
      // searches the client
      const found = this.listClient.findIndex(d => {
        return d.cod === feature.properties.cod;
      });

      if (found >= 0) {
        layer.setIcon(this.clientIcon(color));
        const client = this.listClient.splice(found, 1);
        color = client[0].color;

        this.markerRemovedEvent.emit(client[0]);
      }
      else {
        let drawColors = this.global.getGlobal("draw_colors");
        let drawColorIndex = this.global.getGlobal("draw_color_index");

        color = drawColors.value[drawColorIndex.value];
        layer.setIcon(this.clientIcon(color));

        const client = {
          cod: feature.properties.cod,
          nome: feature.properties.id,
          color: color,
        };
        this.listClient.push(client);

        this.markerAddedEvent.emit(client);
      }

      this.updateUsedColors(found<0, color);
    });

    // Evento de mouseout no marker.
    layer.on('mouseout', () => {

      const found = this.listClient.findIndex(d => {
        return d.cod === feature.properties.cod;
      });

      if (found >= 0) {
        layer.setIcon(this.clientIcon(this.listClient[found].color));
      }

      layer.closePopup();
    });

    // Evento de mouseover no marker.
    layer.on('mouseover', () => {
      layer.openPopup();
    });
  }

  /**
   * Função que desenha um heatmap a partir dos dados passados como parâmetro.
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
      // desenha o heatmap apenas se o zoom for maior do que 8
      let currentHeatmapLayer = this.current_heatmapLayer;
      let map = this.map;
      this.map.on('zoomend', function() {
        if(map.getZoom() < 9) {
          map.removeLayer(currentHeatmapLayer);
        } else {
          map.addLayer(currentHeatmapLayer);      
        }
      });
    }
  }

  /**
   * Função que adiciona os markers do filtro ao mapa
   */
  drawFilterMarkers(clientData: any) {
    const markerList = [];
    for(let i = 0; i < clientData.length; i++) {
      const lat = clientData[i].lat;
      const lng = clientData[i].lon;
      markerList.push(L.circle([lat,lng], 250, { color: this.global.getGlobal('filter_color').value, fillColor: this.global.getGlobal('filter_color').value, opacity: 1, fillOpacity: 1}));
    };

    if(this.clientLayers.length) {
      for(let i = 0; i < this.clientLayers.length; i++){
        this.map.removeLayer(this.clientLayers[i]);
      };
      this.clientLayers = [];
      for(let i = 0; i < clientData.length; i++) {
        markerList[i].addTo(this.map);
        this.clientLayers.push(markerList[i]);
      };
    } else {
      for(let i = 0; i < clientData.length; i++) {
        markerList[i].addTo(this.map);
        this.clientLayers.push(markerList[i]);
      };
    }
  };

  /**
   * Função que deleta o marker
   */
  eraseFilterMarkers() {
    for(let i = 0; i < this.clientLayers.length; i++){
      this.map.removeLayer(this.clientLayers[i]);
    };
    this.clientLayers = [];
  };
}
