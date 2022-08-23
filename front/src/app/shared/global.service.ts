import { Injectable } from '@angular/core';
import * as capitals from '../../assets/capitais.json';
import * as scatterglParams from '../../assets/parameters.json';
import * as services from '../../assets/servicos.json';

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
     * Guarda o parametro selecionado no network chart quando mudado para heatmatrix ou timeseries
     */
     const network_param = {
      key: "network_param",
      value: 1
    };
    this.setGlobal(network_param);
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
        {id: 'packet_rate', from: 'ttls', groupBy: 'time', select: ['hsum'], caption: 'packet rate'},
        {id: 'dns_in',  from: 'dns',  groupBy: 'time', select: ['total_ireq', 'total_ireq_off'], caption: 'dns requests received w/o answer'},
        {id: 'dns_out', from: 'dns',  groupBy: 'time', select: ['total_oreq', 'total_oreq_off'], caption: 'dns requests sent w/o answer'},
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
     * Guarda a seleção de average, max, min selecionado no line chart.
     */   
    const line_selected_params_value = {
      key: "line_selected_params_value",
      value: 'average'
    };
    this.setGlobal(line_selected_params_value);
    /**
     * Guarda a seleção de from do functions chart.
     */
     const functions_value = {
      key: "functions_value",
      service: 0,
      value: "all"
    };
    this.setGlobal(functions_value);
    
    /**
     * Guarda a seleção de average, max, min selecionado no functions chart.
     */   
    const functions_param = {
      key: "functions_param",
      value: 'cdf'
    };
    this.setGlobal(functions_param);
    /**
     * Guarda a seleção dos parametros para a heatmatrix
     */       
      const heatmatrix_param = {
      key: "heatmatrix_param",
      value: "10",
    };
    this.setGlobal(heatmatrix_param);

    /**
     * Guarda a seleção dos valores para a heatmatrix
     */       
    const heatmatrix_value = {
      key: "heatmatrix_value",
      value: "h_avg",
    };
    this.setGlobal(heatmatrix_value);
    /**
    * Guarda a seleção dos valores para a heatmatrix
    */       
    const scattergl_options = {
      key: "scattergl_options",
      value: 0,
      param: 0,
      invert: true
    };
    this.setGlobal(scattergl_options);
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
     * Guarda a as capitais e suas localizações.
     */
     const state_capitals =  {
       key: 'state_capitals',
       value: capitals
     }
     this.setGlobal(state_capitals);
    /**
     * Guarda os serviços e seus nomes.
     */
    const companies_services =  {
      key: 'services',
      value: services
    }
    this.setGlobal(companies_services);
    /**
     * Guarda tipo selecionado popxpop ou popxservices p heatmatrix
     */
    const data_type =  {
      key: 'data_type',
      value: 'popxpop'
    }
    this.setGlobal(data_type);
     /**
      * Guarda os parâmetros a serem utilizados para o scattergl no multiselect
      */
     const scattergl_params =  {
      key: 'scattergl_params',
      value: scatterglParams
    }
    this.setGlobal(scattergl_params);    
    /**
     * Guarda se o click foi no botão de reset zoom ou algum pin de capital
     */

    const clicked_element = {
      key: 'clicked_element',
      value: -1
    }
    this.setGlobal(clicked_element);
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
      value: { 'line': false, 'bar': false, 'alerts': false, 'hasAlert': false, 'net': false }
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

