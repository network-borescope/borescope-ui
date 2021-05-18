/**
 * Schema Request Class
 */
 export class SchemaRequest {
  // TODO: fix the types
  schema: any;
  id: any;
  from: any;

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
  // TODO: fix the types
  bounds: any;
  where: any;
  dummy: any;
  id: any;
  from: any;

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
  'select': any;
  'where': any;
  'id': any;
  'from': any;
  'group-by': any;
  'group-by-output': any;

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
