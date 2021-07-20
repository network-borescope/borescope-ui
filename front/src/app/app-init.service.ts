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


    let tsT0_filter = {
      key: "ts_t0_filter",
      value: tsT0.value
    };
    this.global.setGlobal(tsT0_filter);

    let tsT1_filter = {
      key: "ts_t1_filter",
      value: tsT1.value
    };
    this.global.setGlobal(tsT1_filter);


    let tsT0_vis = {
      key: "ts_t0_vis",
      value: tsT0.value
    };
    this.global.setGlobal(tsT0_vis);

    let tsT1_vis = {
      key: "ts_t1_vis",
      value: tsT1.value
    };
    this.global.setGlobal(tsT1_vis);
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

  loadClients() {
    const schema = this.global.getGlobal('schema_info').value;
    const result = schema.result;

    const data = {
      key: 'list_clientes',
      value: result.clientes_df
    };
    this.global.setGlobal(data);
  }

  init() {
    return new Promise<void>(async (resolve) => {

      await this.loadSchema();
      await this.loadTimeBounds();
      await this.loadGeoBounds();

      this.loadClients();

      console.log('########## Initialization Done! ##########')

      resolve();
    });
  }
}
