/**
 * Schema Request Class
 */
 export class SchemaRequest {
  schema: any[];
  id: number;
  from: string;

  constructor() {
    this.schema = [1];
    this.id = 1;
    this.from = "covid";
  }
}

/**
 * Bounds Request Class
 */
export class BoundsRequest {
  bounds: string;
  where: any[];
  dummy: number[];
  id: number;
  from: string;

  constructor(zoom: number) {
    let location = ["location", "zrect", zoom, 85, -179, -85, 179];
    this.bounds = "location";
    this.where = [location];
    this.dummy = [1];
    this.id = 1;
    this.from = "covid"
  }
}

/**
 * Query Request Class
 */
export class QueryRequest {
  'select': any[];
  'where': any[];
  'id': number;
  'from': string;
  'group-by': string;
  'group-by-output': string;

  constructor() {
    let location = ["location", "zrect", 14, -22.75212144238171, -43.90960693359376, -23.073414748499108, -42.944183349609375];
    let time = [ "time", "between", 1583020800, 1585698900];
    let estado = ["estado", "eq", 19];
    let cidade = ["cidade", "eq", 1];
    let bairro = ["bairro", "eq", 128, 132];
    this['select'] = ["hc"];
    this['group-by'] = "evolucao";
    this['group-by-output']= "kv";
    this['where'] = [ time, location, estado, cidade, bairro ];
    this['id'] = 1;
    this['from'] = "covid";
  }
}
