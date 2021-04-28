import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { GlobalService } from './global.service';
import { UtilService } from './util.service';

import { QueryRequest } from 'src/app/shared/api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // base server url
  server_url: string = environment.backend;

  // xhttp urls
  xhttp_url: string = `${environment.backend}/tc/query`;
  xhttp_url_app: string = `${environment.backend}/tc/app`;

  constructor(public global: GlobalService, public utils: UtilService) { }

  //busca os dados dos clientes
  async getClients(): Promise<any> {
    const url = `${environment.backend}/assets/clients.json`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return await response.json();
  }

  /**
   * Solicita os dados que compõe o mapa de calor.
   */
  async request2HeatMap(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined) {
    let query = new QueryRequest();
    let selectedChannel = this.global.getGlobal("selected_channel");

    query.select = [selectedChannel.value];
    query.groupBy = "location";
    query.from = "antenas";

    query.where = [];
    query.where.push(location);
    query.where.push(time);

    if (uf !== undefined) {
      query.where.push(uf);
    }
    if (cidade !== undefined) {
      query.where.push(cidade);
    }
    if (bairro !== undefined) {
      query.where.push(bairro);
    }

    this.utils.showTrace("request2HeatMap", query);

    const url = `${this.xhttp_url}`;
    console.log(url);

    // post parameters
    const params = { query };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor o gráfico da esquerda.
   */
  async requestMap2ChartLeft(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined) {
    let query = new QueryRequest();

    query.select = ["quantidades"];
    query.groupBy = "ttl";
    query.from = "antenas";

    query.where = [];
    query.where.push(location);
    query.where.push(time);

    if (uf !== undefined) {
      query.where.push(uf);
    }
    if (cidade !== undefined) {
      query.where.push(cidade);
    }
    if (bairro !== undefined) {
      query.where.push(bairro);
    }

    this.utils.showTrace("requestMap2ChartLeft", query); // utils.js

    const url = `${this.xhttp_url}`;
    console.log(url);

    // post parameters
    const params = { query };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }

  /**
   * Solicita os dados do mapa para compor o gráfico da direita.
   */
  async requestMap2ChartRight(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined) {
    let q1 = new QueryRequest();

    q1.groupBy = "time";
    q1.from = "antena";

    q1.where = [];
    q1.where.push(location);
    q1.where.push(time);

    let q2 = new QueryRequest();

    q2.groupBy = "time";

    q2.where = [];
    q2.where.push(location);
    q2.where.push(time);

    let query = {
      q1: q1,
      q2: q2
    }

    const url = `${this.xhttp_url_app}`;
    console.log(url);

    // post parameters
    const params = { query };
    console.log(`post data: ${JSON.stringify(params)}`);

    // post header
    const headers = {
      'Content-Type': 'application/json',
      'dataType': 'json'
    };

    // Return a new promise.
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    return await response.json();
  }
}