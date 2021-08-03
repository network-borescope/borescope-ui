import { Injectable } from '@angular/core';
import { SchemaRequest } from './shared/api.models';
import { ApiService } from './shared/api.service';
import { GlobalService } from './shared/global.service';
import { UtilService } from './shared/util.service';

@Injectable()
export class AppInitService {

  constructor(public global: GlobalService, public api: ApiService, public utils: UtilService) { }

  async loadSchema() {
    const schema = await this.api.getSchema();
    console.log(schema);

    const data = {
      key: "schema_info",
      value: schema.result
    }

    this.global.setGlobal(data);
  }

  async loadTimeBounds() {
    const bounds = await this.api.getTimeBounds();
    console.log(bounds);

    let bounds_time = {
      key: "bounds_time",
      value: [bounds.result.vs[0][0], bounds.result.vs[1][0]]
    };
    this.global.setGlobal(bounds_time);

    let t0_filter = {
      key: "t0_filter",
      value: bounds_time.value[0]
    };
    this.global.setGlobal(t0_filter);

    let t1_filter = {
      key: "t1_filter",
      value: bounds_time.value[1]
    };
    this.global.setGlobal(t1_filter);


    let t0_vis = {
      key: "t0_vis",
      value: bounds_time.value[0]
    };
    this.global.setGlobal(t0_vis);

    let t1_vis = {
      key: "t1_vis",
      value: bounds_time.value[1]
    };
    this.global.setGlobal(t1_vis);
  }

  async loadGeoBounds() {
    const bounds = await this.api.getGeoBounds();
    console.log(bounds);

    const data = {
      key: "bounds_geo",
      value: bounds.result.vs
    }

    this.global.setGlobal(data);
  }

  async loadIPs() {
    const data = await this.api.getIPs();
    console.log(data);

    const list_ips = {
      key: 'list_ips',
      value: data
    };
    this.global.setGlobal(list_ips);
  }

  loadClients() {
    const schema = this.global.getGlobal('schema_info').value;

    const data = {
      key: 'list_clientes',
      value: schema.clientes_df
    };
    this.global.setGlobal(data);
  }

  init() {
    return new Promise<void>(async (resolve) => {

      await this.loadSchema();
      await this.loadTimeBounds();
      await this.loadGeoBounds();
      await this.loadIPs();

      this.loadClients();
      console.log('########## Initialization Done! ##########')

      resolve();
    });
  }
}
