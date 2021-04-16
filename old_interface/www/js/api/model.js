/**
 *
 *  Entidades que são utilizadas para modelar os parametros enviados a API.
 * 
 */

/**
 * Classe Schema
 */
let SchemaRequest = function() {
  this.schema = [1];
  this.id = 1;
  this.from = "covid";
}

/**
 * Classe Bounds
 * @param {*} zoom 
 */
let BoundsRequest = function(zoom) {
  let location = ["location", "zrect", zoom, 85, -179, -85, 179];
  this.bounds = "location";
  this.where = [location];
  this.dummy = [1];
  this.id = 1;
  this.from = "covid";
}

/**
 * Classe Query
 */
let QueryRequest = function() {
  let location = ["location", "zrect", 14, -22.75212144238171, -43.90960693359376, -23.073414748499108, -42.944183349609375];
  let time = [ "time", "between", 1583020800, 1585698900];
  let estado = ["estado", "eq", 19];
  let cidade = ["cidade", "eq", 1];
  let bairro = ["bairro", "eq", 128, 132];
  this.select = ["hc"];
  this["group-by"] = "evolucao";
  this["group-by-output"] = "kv";
  this.where = [ location, estado, cidade, bairro, time ];
  this.id = 1;
  this.from = "covid";
}