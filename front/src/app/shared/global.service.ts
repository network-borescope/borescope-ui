import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    this.init();
  }

  init() {
    /**
     * Esquema usado para o armazenamento dos dados
     */
    const schema_info = {
      key: "schema_info",
      value: {}
    };
    this.setGlobal(schema_info);

    /**
     * Id da consulta usado pelo tiny cubes
     */
    const query_id = {
      key: "query_id",
      value: 1
    };
    this.setGlobal(query_id);

    /**
     * Elementos ativos nos gráficos
     */
    const active_chart_elements = {
      key: "active_chart_elements",
      value: []
    };
    this.setGlobal(active_chart_elements);

    /**
     * Domínio temporal dos dados.
     */
    const bounds_time = {
      key: "bounds_time",
      value: false
    };
    this.setGlobal(bounds_time);

    /**
     * Domínio espacial dos dados.
     */
    const bounds_geo = {
      key: "bounds_geo",
      value: false
    };
    this.setGlobal(bounds_geo);

    /**
     * Estabelece uma constante para um valor de zoom no mapa.
     */
    const geo_extra_zoom = {
      key: "geo_extra_zoom",
      value: 5
    };
    this.setGlobal(geo_extra_zoom);

    /**
     * Guarda o time inicial nas visualizações.
     */
    const t0_vis = {
      key: "t0_vis",
      value: undefined
    };
    this.setGlobal(t0_vis);

    /**
     * Guarda o time final nas visualizações.
     */
    const t1_vis = {
      key: "t1_vis",
      value: undefined
    };
    this.setGlobal(t1_vis);

    /**
     * Guarda o time inicial usado no filtro.
     */
    const t0_filter = {
      key: "t0_filter",
      value: undefined
    };
    this.setGlobal(t0_filter);

    /**
     * Guarda o time final usado no filtro.
     */
    const t1_filter = {
      key: "t1_filter",
      value: undefined
    };
    this.setGlobal(t1_filter);

    /**
     * Mapa de labels do barchart.
     */
    const label_maps = {
      key: "label_maps",
      value: {
        'ttls': {},
        'services': {}
      }
    };
    this.setGlobal(label_maps);

    /**
     * Guarda as opções de from do bar chart.
     */
    const bar_params = {
      key: "bar_params",
      value: [
        {id: 'ttls', from: 'ttls', groupBy: 'ttl',  select: ["hsum"]},
        {id: 'services', from: 'serv', groupBy: 'serv', select: ["hsum"]}
      ]
    };
    this.setGlobal(bar_params);

    /**
     * Guarda a seleção de from do bar chart.
     */
    const bar_params_value = {
      key: "bar_params_value",
      value: bar_params.value[0].id
    };
    this.setGlobal(bar_params_value);

    /**
     * Guarda as opções de from do line chart.
     */
    const line_params = {
      key: "line_params",
      value: [
        {id: 'packet_rate', caption: "packet rate", from: 'ttls', groupBy: 'time', select: ['hsum']},
        {id: 'dns_in',  caption: "dns requests received w/o answer", from: 'dns',  groupBy: 'time', select: ['total_ireq', 'total_ireq_off']},
        {id: 'dns_out', caption: "dns requests sent w/o answer", from: 'dns',  groupBy: 'time', select: ['total_oreq', 'total_oreq_off']},
      ]
    };
    this.setGlobal(line_params);

    /**
     * Guarda a seleção de from do line chart.
     */
    const line_params_value = {
      key: "line_params_value",
      value: line_params.value[0].id
    };
    this.setGlobal(line_params_value);

    /**
     * Estabelece uma lista de cores.
     */
     const draw_colors = {
      key: "draw_colors",
      value: [
        '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
        '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
      ]
    };
    this.setGlobal(draw_colors);

    /**
     * Lista de cores usadas.
     */
     const used_draw_colors = {
      key: "used_draw_colors",
      value: []
    };
    this.setGlobal(used_draw_colors);

    /**
     * Guarda a cor atual.
     */
    const draw_color_index = {
      key: "draw_color_index",
      value: 0
    };
    this.setGlobal(draw_color_index);

    /**
     * Guarda a cor do elemento não selecionado.
     */
     const unselected_color = {
      key: 'unselected_color',
      value: '##CCC'
    }
    this.setGlobal(unselected_color);

    /**
     * Guarda a cor do filtro.
     */
     const filter_color = {
      key: 'filter_color',
      value: '#FF7F0E'
    }
    this.setGlobal(filter_color);

    /**
     * Guarda a cor do outlier.
     */
     const outlier_color = {
      key: 'outlier_color',
      value: '#D62728'
    }
    this.setGlobal(outlier_color);

    /**
     * Guarta a lista de clientes
     */
    const list_clientes = {
      key: "list_clientes",
      value: []
    }
    this.setGlobal(list_clientes);

    /**
     * Guarda a lista de ips
     */
     const list_ips = {
      key: "list_ips",
      value: []
    }
    this.setGlobal(list_ips);

    /**
     * Estado das janelas dos gráficos
     */
    const widgets_charts = {
      key: "widgets_charts",
      value: { 'line': false, 'bar': false, 'alerts': true }
    }
    this.setGlobal(widgets_charts);

    /**
     * Estado das janelas de configuração
     */
    const widgets_config = {
      key: "widgets_config",
      value: { 'filters': false }
    }
    this.setGlobal(widgets_config);

    /**
     * Modo de debug.
     */
    const trace_mode = {
      key: "trace_mode",
      value: true
    };
    this.setGlobal(trace_mode);
  }

  /**
   * Recupera a variavél global gravada na sessão.
   */
  getGlobal(key: string): any {
    // invalid key
    if (key === null) {
      console.log(`getGlobal --> Ivalid key: ${key}`);
      return undefined;
    }

    // item not found
    const value = sessionStorage.getItem(key);
    if (value === null) {
      console.log(`getGlobal --> Key not found: ${key}`);
      return undefined;
    }

    return JSON.parse(value);
  }

  /**
   * Grava a varavél global na sessão.
   */
  setGlobal(object: any) {
    sessionStorage.setItem(object.key, JSON.stringify(object));
  }
}

