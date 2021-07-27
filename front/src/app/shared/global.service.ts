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
     * Usado na composição das consultas.
     */
    const selected_channel = {
      key: "selected_channel",
      value: "hsum"
    };
    this.setGlobal(selected_channel);

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
     * Guarda as opções de groupBy do bar chart.
     */
     const bar_group_by = {
      key: "bar_group_by",
      value: ['ttl'] //, 'cliente-ttl']
    };
    this.setGlobal(bar_group_by);

    /**
     * Guarda a seleção de groupBy do bar chart.
     */
     const bar_group_by_selection = {
      key: "bar_group_by_selection",
      value: 'ttl'
    };
    this.setGlobal(bar_group_by_selection);

    /**
     * Estabelece uma constante com uma lista de cores.
     */
    const draw_colors = {
      key: "draw_colors",
      value: ['red', 'orange', 'green', 'purple', 'darkred', 'darkgreen', 'darkpurple']
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
     * Estado das janelas dos gráficos
     */
    const widgets_charts = {
      key: "widgets_charts",
      value: { 'line': false, 'bar': false }
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
     * Serve para recuperar o item selecionado na combobox trace.
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

