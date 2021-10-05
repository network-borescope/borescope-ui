import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { GlobalService } from './global.service';
import { UtilService } from './util.service';

import { BoundsRequest, QueryRequest, SchemaRequest } from 'src/app/shared/api.models';

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

  constructor(public global: GlobalService, public utils: UtilService) { }


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

    // Return a new promise.
    const response = await fetch(address, {
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

    const jsn = await response.json();
    console.log('=====>', response, jsn)

    return jsn;
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
  async requestBarChart(location: any[], time: any[], client: any[] | undefined, params: any) {
    let query = new QueryRequest();

    query['from'] = params.from;
    query['select'] = params.select;
    query['group-by'] = params.groupBy;
    query['id'] = this.getQueryId();

    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }
    if (client !== undefined) {
      query['where'].push(client);
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
  async requestLineChart(location: any[], time: any[], client: any[] | undefined, params: any) {
    let query = new QueryRequest();
    const tsT0 = this.global.getGlobal("t0_vis").value;
    const tsT1 = this.global.getGlobal("t1_vis").value;

    query['from'] = params.from;
    query['select'] = params.select;
    query["group-by"] = {"field":"time","min-k":tsT0,"max-k":tsT1,"n-points":1064, "v":"AMPNS"};
    query['id'] = this.getQueryId();

    query.where = [];
    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }
    if (client !== undefined) {
      query['where'].push(client);
    }

    this.utils.showTrace("requestLineChart", query);

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
}
