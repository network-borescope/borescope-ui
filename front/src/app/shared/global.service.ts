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
      value: {
        estados: {
          items: []
        },
        dimensions: [],
        terminal: {
          contents: []
        }
      }
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
     * Serve para recuperar o item selecionado na combobox resultOptions.
     * Podendo ser hc (Antenas Usadas) ou hsum (Chamadas Ativas).
     */
    const selected_channel = {
      key: "selected_channel",
      value: "hsum"
    };
    this.setGlobal(selected_channel);

    /**
     * Estabelece uma constante para um valor de zoom no mapa.
     */
    const geo_extra_zoom = {
      key: "geo_extra_zoom",
      value: 5
    };
    this.setGlobal(geo_extra_zoom);

    /**
     * Estabelece uma constante para nome do campo time.
     */
    const ts_fieldname = {
      key: "ts_fieldname",
      value: "time"
    };
    this.setGlobal(ts_fieldname);

    /**
     * Guarda o time inicial.
     */
    const ts_t0 = {
      key: "ts_t0",
      value: undefined
    };
    this.setGlobal(ts_t0);

    /**
     * Guarda o time final.
     */
    const ts_t1 = {
      key: "ts_t1",
      value: undefined
    };
    this.setGlobal(ts_t1);

    /**
     * Guarda o time inicial nas visualizações.
     */
    const ts_t0_vis = {
      key: "ts_t0_vis",
      value: undefined
    };
    this.setGlobal(ts_t0_vis);

    /**
     * Guarda o time final nas visualizações.
     */
    const ts_t1_vis = {
      key: "ts_t1_vis",
      value: undefined
    };
    this.setGlobal(ts_t1_vis);

    /**
     * Guarda o time inicial usado no filtro.
     */
    const ts_t0_filter = {
      key: "ts_t0_filter",
      value: undefined
    };
    this.setGlobal(ts_t0_filter);

    /**
     * Guarda o time final usado no filtro.
     */
    const ts_t1_filter = {
      key: "ts_t1_filter",
      value: undefined
    };
    this.setGlobal(ts_t1_filter);

    /**
     * Guarda as opções de groupBy do bar chart.
     */
     const bar_group_by = {
      key: "bar_group_by",
      value: ['ttl', 'cliente-ttl']
    };
    this.setGlobal(bar_group_by);

    /**
     * Guarda a seleção de groupBy do bar chart.
     */
     const selected_bar_group_by = {
      key: "selected_bar_group_by",
      value: 'ttl'
    };
    this.setGlobal(selected_bar_group_by);

    /**
     * Serve para recuperar o item selecionado na combobox trace.
     * Podendo ser Trace, Queries ou All.
     */
    const trace_mode = {
      key: "trace_mode",
      value: 1
    };
    this.setGlobal(trace_mode);

    /**
     * Estabelece uma constante com uma lista de cores.
     */
    const draw_colors = {
      key: "draw_colors",
      value: ['red', 'darkred', 'orange', 'green', 'darkgreen', 'purple', 'darkpurple']
    };
    this.setGlobal(draw_colors);

    /**
     * Guarda a cor atual.
     */
    const draw_color_index = {
      key: "draw_color_index",
      value: 0
    };
    this.setGlobal(draw_color_index);

    /**
     * Guarta a lista de clientes
     */
    const list_clientes = {
      key: "list_clientes",
      value: []
    }
    this.setGlobal(list_clientes);

    /**
     * Guarda lista de bairros.
     */
    const list_bairro = {
      key: "list_bairro",
      value: []
    };
    this.setGlobal(list_bairro);

    /**
     * Estado das janelas dos gráficos
     */
    const chart_widgets = {
      key: "chart_widgets",
      value: { 'line': false, 'bar': false }
    }
    this.setGlobal(chart_widgets);

    /**
     * Estado das janelas de configuração
     */
    const config_widgets = {
      key: "config_widgets",
      value: { 'filters': false }
    }
    this.setGlobal(config_widgets);

    const bounds_time = {
      key: "bounds_time",
      value: false
    };
    this.setGlobal(bounds_time);

    const bounds_geo = {
      key: "bounds_geo",
      value: false
    };
    this.setGlobal(bounds_geo);

    const window_size = {
      key: "window_size",
      value: undefined
    };
    this.setGlobal(window_size);

    const bounds_timeout_id = {
      key: "bounds_timeout_id",
      value: undefined
    };
    this.setGlobal(bounds_timeout_id);
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

