import { Injectable } from '@angular/core';
import { ApiService } from './shared/api.service';
import { GlobalService } from './shared/global.service';

@Injectable()
export class AppInitService {

  constructor(public global: GlobalService, public api: ApiService) {}

  async loadClients() {
    const clients = await this.api.getClients();
    const data = {
      key: 'list_clientes',
      value: clients
    };
    this.global.setGlobal(data);
  }

  loadBairros() {
    const clients = this.global.getGlobal('list_clientes').value;

    let bairros = [];
    let items = clients.features;

    for (let i=0; i<items.length; i++) {
      let bairro = {
        value: i+1,
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
  }

  init() {
    return new Promise<void>(async (resolve) => {
        await this.loadClients();
        this.loadBairros();

        resolve();
      });
  }
}
