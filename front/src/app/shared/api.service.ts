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
  async request2HeatMap(location: any[], time: any[], uf: any[] | undefined, cidade: any[] | undefined, bairro: any[] | undefined,) {
    let query = new QueryRequest();
    let selectedChannel = this.global.getGlobal("selected_channel");

    query.select = [selectedChannel.value];
    // query["group-by"] = "location";
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

    // $.ajax({
    //   type: 'POST',
    //   url: xhttp_url,
    //   data: JSON.stringify(query),
    //   success: drawHeatMap,
    //   contentType: "application/json",
    //   dataType: 'json'
    // });
  }
}
