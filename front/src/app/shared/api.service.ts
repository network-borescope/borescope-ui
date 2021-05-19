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
  // xhttp urls
  xhttp_url: string = `${environment.backend}/tc/query`;

  constructor(public global: GlobalService, public utils: UtilService) { }

  /**
   * Carrega o schema do tiny cubes
   */
  async getSchema(): Promise<any> {
    let schema = new SchemaRequest();
    schema.from = "antenas";

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
    data.bounds = "time";
    data.from = "antenas";

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

  async getGeoBounds(): Promise<any> {
    let data = new BoundsRequest(24);
    data.from = "antenas";

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
  async requestHeatMap(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined,) {
    let query = new QueryRequest();
    let selectedChannel = this.global.getGlobal("selected_channel");

    query['select'] = [selectedChannel.value];
    query['group-by']  = "location";
    query['from'] = "antenas";

    query['where'] = [];
    if (location !== undefined) {
      query['where'].push(location);
    }
    if (time !== undefined) {
      query['where'].push(time);
    }
    if (uf !== undefined) {
      query['where'].push(uf);
    }
    if (cidade !== undefined) {
      query['where'].push(cidade);
    }
    if (bairro !== undefined) {
      query['where'].push(bairro);
    }

    this.utils.showTrace("request2HeatMap", query);

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
   * Solicita os dados do mapa para compor o gráfico da esquerda.
   */
  async requestBarChart(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined) {
    let query = new QueryRequest();

    query['select'] = ["quantidades"];
    query['group-by'] = "ttl";
    query['from'] = "antenas";

    query['where'] = [];
    query['where'].push(location);
    query['where'].push(time);


    if (uf !== undefined) {
      query['where'].push(uf);
    }
    if (cidade !== undefined) {
      query['where'].push(cidade);
    }
    if (bairro !== undefined) {
      query['where'].push(bairro);
    }

    this.utils.showTrace("requestBarChart", query); // utils.js

    // post parameters
    const params = { query };
    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor o gráfico da direita.
   */
  async requestLineChart(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined) {
    let q1 = new QueryRequest();

    q1['group-by'] = "time";
    q1['from'] = "antena";

    q1['where'] = [];
    q1['where'].push(location);
    q1['where'].push(time);

    let q2 = new QueryRequest();

    q2['group-by'] = "time";

    q2['where'] = [];
    q2['where'].push(location);
    q2['where'].push(time);

    let query = {
      q1: q1,
      q2: q2
    }

    // post parameters
    const params = { query };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(this.xhttp_url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }

//   /**
//  * Solicita os dados do bairro para compor o gráfico da esquerda.
//  */
// requestBairro2ChartLeft(codBairro) {
//   let query = new QueryRequest();
//   query.select = ["quantidades"];
//   query["group-by"] = "ttl";
//   query.where = [];
//   query.where.push(getStartLocation());
//   //query.where.push(selectUF());
//   //query.where.push(selectCidade());
//   query.where.push(selectBairro(codBairro));
//   query.where.push(getTime());
//   query.from = "antenas";
//   showTrace("requestBairro2ChartLeft", query); // utils.js
//   $.ajax({
//     type: 'POST',
//     url: xhttp_url,
//     data: JSON.stringify(query),
//     success: function(responseData) {
//       drawBairroChartLeft(codBairro, responseData);
//     },
//     contentType: "application/json",
//     dataType: 'json'
//   });
// }
}
