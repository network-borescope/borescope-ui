import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { GlobalService } from './global.service';
import { UtilService } from './util.service';

import { BoundsRequest, QueryRequest, SchemaRequest, MatrixRequest, FunctionsRequest, TimeseriesRequest, TableRequest } from 'src/app/shared/api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // base server url
  server_url: string = environment.backend;
  // static files
  files_url: string = `${environment.backend}/extra`
  // xhttp urls
  xhttp_url: string = `${environment.backend}/tc/query`;
  // config path
  config_url: string = '../assets/config.json'

  constructor(public global: GlobalService, public utils: UtilService) {}

  updateConfig() {
    this.server_url = environment.backend;
    // static files
    this.files_url = `${environment.backend}/extra`
    // xhttp urls
    this.xhttp_url = `${environment.backend}/tc/query`;
  }


  getQueryId() {
    const id = this.global.getGlobal('query_id').value;
    const query_id = {
      key: 'query_id',
      value: id + 1
    }
    this.global.setGlobal(query_id);

    return id;
  }

  async getIPs() {
    // IPs address
    const address = this.files_url + '/dynamic_ips.js'
    this.utils.showTrace("getIPs", {});
    
    try {
      // Return a new promise.
      const response = await fetch(address, {
        method: 'GET',
      });
      return await response.json();
    } catch (e) {
       return [];
    }
  }

  async getConfig() {
    const response = await fetch(this.config_url, {
      method: 'GET',
    });

    return await response.json();
  }

  /**
   * Carrega o schema do tiny cubes
   */
  async getSchema(from: string = 'ttls'): Promise<any> {

    let schema = new SchemaRequest();
    schema['id'] = this.getQueryId();
    schema['from'] = from;

    this.utils.showTrace("initSchema", schema);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(schema),
    });

    return await response.json();
  }

  /**
   * Acessa o range de tempo
   */
  async getTimeBounds(): Promise<any> {
    let data = new BoundsRequest(24);
    data['bounds'] = "time";
    data['id'] = this.getQueryId();

    this.utils.showTrace("initTimeBounds", data);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  /**
   * Acessa o range espacial
   */
  async getGeoBounds(): Promise<any> {
    let data = new BoundsRequest(24);
    data['id'] = this.getQueryId();

    this.utils.showTrace("initGeoBounds", data);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  /**
   * Solicita os dados que compõe o mapa de calor.
   */
  async requestHeatMap(location: any[], time: any[]) {
    const selectedClientOption = this.global.getGlobal("client_option").value;
    
    let query = new QueryRequest();

    query['select'] = ['hsum'];
    query['group-by']  = "location";
    query['id'] = this.getQueryId();

    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }

    //se vir do viaipe seta from viaipe
    if(selectedClientOption == "viaipe")  {
      query['select'] = ['avg_in'];
      query['from'] = 'viaipe';
    }

    this.utils.showTrace("requestHeatMap", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
    };
    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });
    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor o gráfico de barras.
   */
  async requestBarChart(location: any[], time: any[], client: any[] | undefined, params: any, option: string, zoom: any = undefined) {
    let query = new QueryRequest();
    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }

    query['id'] = this.getQueryId();
    if(option == 'popdf') {
      query['from'] = params.from;
      query['select'] = params.select;
      query['group-by'] = params.groupBy;
    } else {
      query['select'] = [params];
      query['from'] = 'viaipe';
      if (zoom > 12) {
        query['group-by'] = ['pop','cliente'];
      } else {
        query['group-by'] = ['pop'];
      }
    }

    this.utils.showTrace("requestBarChart", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };
    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });

    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor o gráfico de linhas.
   */
  async requestLineChart(location: any[], time: any[], client: any[] | undefined, params: any = undefined, option: string) {
    const clicked = this.global.getGlobal("clicked_element").value;
    let query = new QueryRequest();
    const tsT0 = this.global.getGlobal("t0_vis").value;
    const tsT1 = this.global.getGlobal("t1_vis").value;

    query['id'] = this.getQueryId();

    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }
    //se vir do viaipe seta from viaipe
    query['id'] = this.getQueryId();

    if(option == 'popdf') {
      query["group-by"] = {"field":"time","min-k":tsT0,"max-k":tsT1,"n-points":1024, "v":"AMPNS"};
      query['from'] = params.from;
      query['select'] = params.select;
    } else {
      query["group-by"] = {"field":"time","v":"AC","min-k":tsT0,"max-k":tsT1,"n-points":1024};
      query['select'] = [params];
      query['from'] = 'viaipe';
      if(clicked > 0 && client !== undefined) {
        query['where'].push(["pop", "eq", clicked]);
        query['where'].push(client);
      }
    }

    //adiciona prediction
    query['prediction'] = 'lstm';

    this.utils.showTrace("requestLineChart", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };
    // Return a new promise.
    const response = await fetch(this.xhttp_url + '2', {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });
    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor a heatmatrix.
   */
  async requestHeatmatrix(metric: any, field: string, t0: number, t1: number, clicked: number) {
    let query = new MatrixRequest();
    
    if ( clicked >= 0 ) {
      query['what'] = "timecolumns";
      // @ts-ignore
      query['idpop'] = clicked;
      // @ts-ignore
      query['ncols'] = 7;
      // @ts-ignore
      query['colsize'] = parseInt((t1 - t0) / 7);
    }

    if(metric === 'rnp_services') {
      // @ts-ignore
      query['from'] = metric;
      //adiciona campo para o flag
      query['model'] = "hybrid_cf"
    } else {
      query['model'] = "hybrid_cf_pops";
      query['metric'] = metric;
    }

    query['field'] = field;
    query['start'] = t0;
    query['end'] = t1;
    this.utils.showTrace("requestHeatMatrix", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };



    // Return a new promise.
    const response = await fetch(this.xhttp_url + '2', {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });

    return await response.json();

  }

  /** 
   * Solicita os dados para timeseries
  */
  async requestTimeseries(metric: any, field: string, t0: number, t1: number, idpop: number, secondaryId: number, from: string = "") {
    let query = new TimeseriesRequest();

    query['group-by'] = {"field":"time","n-points":8,"min-k":t0,"max-k":t1,"v":"AC"};
    query['select'] = field;

    if(from == 'rnp_services') {
      // @ts-ignore
      query['from'] = 'rnp_services';
      query['where'] = [["time","between",t0,t1], ["pop","eq",idpop],["serv","eq",secondaryId]];
    } else {
      query['where'] = [["time","between",t0,t1], ["pop","eq",idpop],["id_pop","eq",secondaryId],["metric","eq",parseInt(metric)]];
    }
    this.utils.showTrace("requestTimeseries", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url + '2', {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });

    return await response.json();
  }
  /**
   * Solicita os dados do mapa para compor a heatmatrix.
   */
   async requestFunctions(service: any, model: string, t0: number, t1: number, clicked: number) {
    let query = new FunctionsRequest();

    if ( clicked >= 0 ) {
      query['pop'] = clicked;
    }

    if ( service > 0) {
      query['service'] = service;
    }
    query['from'] = 'rnp_services';
    query['what'] = 'statistics';
    query['field'] = 'havg';
    query['model'] = model;
    query['start'] = t0;
    query['end'] = t1;
    this.utils.showTrace("requestFunctions", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url + '2', {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });

    return await response.json();
  }

  async requestTable(band: string, model: string, t0: number, t1: number, pop: number = -1, idPop: number = -1) {
    let query = new TableRequest();

    query['what'] = "measures";
    query['band'] = band;
    query['model'] = model;
    query['start'] = t0;
    query['end'] = t1;

    if(pop > -1) {
      query['pop'] = pop;
      if(idPop > -1) query['id_pop']
    }

    this.utils.showTrace("requestTable", query);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url + '2', {
      method: 'POST',
      headers,
      body: JSON.stringify(query),
    });

    return await response.json();
  }
}
