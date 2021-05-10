import { Injectable } from '@angular/core';
import { SchemaRequest } from './shared/api.models';
import { ApiService } from './shared/api.service';
import { GlobalService } from './shared/global.service';
import { UtilService } from './shared/util.service';

@Injectable()
export class AppInitService {

  constructor(public global: GlobalService, public api: ApiService, public utils: UtilService) { }

  async loadClients() {
    const clients = await this.api.getClients();
    console.log(clients);

    const data = {
      key: 'list_clientes',
      value: clients
    };
    this.global.setGlobal(data);
  }

  async loadSchema() {
    const schema = await this.api.getSchema();
    console.log(schema);

    const data = {
      key: "schema_info",
      value: schema
    }

    this.global.setGlobal(data);
  }

  async loadTimeBounds() {
    const bounds = await this.api.getTimeBounds();
    console.log(bounds);

    let tsT0 = {
      key: "ts_t0",
      value: bounds.result.vs[0][0]
    };
    this.global.setGlobal(tsT0);

    let tsT1 = {
      key: "ts_t1",
      value: bounds.result.vs[1][0]
    };
    this.global.setGlobal(tsT1);
  }

  async loadGeoBounds() {
    const bounds = await this.api.getGeoBounds();
    console.log(bounds);

    const data = {
      key: "bounds_geo",
      value: bounds
    }

    this.global.setGlobal(data);
  }

  loadBairros() {
    const clients = this.global.getGlobal('list_clientes').value;

    let bairros = [];
    let items = clients.features;

    for (let i = 0; i < items.length; i++) {
      let bairro = {
        value: i + 1,
        text: items[i].properties.NOME,
        item: items[i].properties
      };
      bairros.push(bairro);
    }

    let listBairro = {
      key: "list_bairro",
      value: bairros
    };
    this.global.setGlobal(listBairro);

    console.log('bairros')
    console.log(bairros);
  }


  init() {
    return new Promise<void>(async (resolve) => {
      await this.loadClients();

      await this.loadSchema();
      await this.loadTimeBounds();
      await this.loadGeoBounds();

      this.loadBairros();

      resolve();
    });
  }
}
