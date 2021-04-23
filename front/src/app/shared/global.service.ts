import { Injectable } from '@angular/core';
import { GraphicsService } from './graphics.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private _tes: GraphicsService) {
    this.init();
  }

  init() {
    this._tes.compute_best_unity(54, 98); //""""Teste""""
    
    
    /** Essa estrutura também conta com campos para bairros. */
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
     * Serve para recuperar o item selecionado na combobox resultOptions.
     * Podendo ser hc (Antenas Usadas) ou hsum (Chamadas Ativas).
     */
     const selected_channel = {
      key: "selected_channel",
      value: "hsum"
    };
    this.setGlobal(selected_channel);

    /**
     * Serve para compor a legenda do eixo y do gráfico.
     * Podendo ser Antenas usadas ou Chamadas ativas.
     */
     const result_title = {
      key: "result_title",
      value: "Requisitions"
    };
    this.setGlobal(result_title);

    /**
     * Serve para compor a legenda do eixo y do gráfico.
     * Podendo ser Antenas ou Chamada.
     */
     const result_unity = {
      key: "result_unity",
      value: "package"
    };
    this.setGlobal(result_unity);

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
      value: 1589673600 //1565101800
    };
    this.setGlobal(ts_t0);

    /**
     * Guarda o time final.
     */
    const ts_t1 = {
      key: "ts_t1",
      value: 1589756400 //1565102130
    };
    this.setGlobal(ts_t1);

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
     * Guarda lista de bairros.
     */
    const list_bairro = {
      key: "list_bairro",
      value: []
    };
    this.setGlobal(list_bairro);

    /// TODO: documentar as variáveis globais abaixo
    const schema = {
      key: "schema",
      value: false
    };
    this.setGlobal(schema);

    const bounds_time = {
      key: "bounds_time",
      value: false
    };
    this.setGlobal(bounds_time);

    const bounds_geo = {
      key: "bounds_geo",
      value: false
    };
    this. setGlobal(bounds_geo);

    const window_size = {
      key: "window_size",
      value: undefined
    };
    this. setGlobal(window_size);

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
