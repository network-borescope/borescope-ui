/**
 * 
 * Funções auxiliares
 * 
 */

/**
 * Converte "tile" em longitude.
 * @param {*} x 
 * @param {*} z 
 */
function tile2long(x,z) {
  return (x/Math.pow(2,z)*360-180);
}

/**
 * Converte "tile" em latitude.
 * @param {*} y 
 * @param {*} z 
 */
function tile2lat(y,z) {
	var n=Math.PI-2*Math.PI*y/Math.pow(2,z);
	return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
}

/**
 * Converte "tile" em longitude média.
 * @param {*} x 
 * @param {*} z 
 */
function tile2longX(x,z) {
	let c1 = tile2long(x,z);
	let c2 = tile2long(x+1,z);
	return (c1+c2)/2;
}

/**
 * Converte "tile" em latitude média.
 * @param {*} x 
 * @param {*} z 
 */
function tile2latX(x,z) {
	let c1 = tile2lat(x,z);
	let c2 = tile2lat(x+1,z);
	return (c1+c2)/2;
}

/**
 * Ajusta o intervalo da série temporal.
 * @param {*} t0 
 * @param {*} t1 
 */
function time_nice(t0, t1) {
  let dt0 = new Date(0); // The 0 there is the key, which sets the date to the epoch
  let Y0,M0,D0,h0,m0,s0;
  dt0.setUTCSeconds(t0);
  s0 = dt0.getSeconds();
  m0 = dt0.getMinutes();
  h0 = dt0.getHours();
  D0 = dt0.getDate();
  M0 = dt0.getMonth();
  Y0 = dt0.getYear();

  let dt1 = new Date(0); // The 0 there is the key, which sets the date to the epoch
  let Y1, M1, D1, h1, m1, s1;
  dt1.setUTCSeconds(t0);
  s1 = dt1.getSeconds();
  m1 = dt1.getMinutes();
  h1 = dt1.getHours();
  D1 = dt1.getDate();
  M1 = dt1.getMonth();
  Y1 = dt1.getYear();

  let d = t1 - t0;
  let changed = 0;
  if (d < 180) {
    if (s0 > 0) { t0 -= s0; s0 = 0; changed=1; }
    if (s1 > 0) { t1 += 60 - s1;  s1 = 0; changed=1; }
  } else if (d < 600) {
    if (s0 > 0) { t0 -= s0; s0 = 0; changed=1; }
    if (s1 > 0) { t1 += 60 - s1; s1 = 0; changed=1; }
    let x;
    x = m0 % 5;
    if (x != 0) { t0 -= x * 60; m0 -= x; changed=1; }
    x = m1 % 5;
    if (x != 0) { t1 -= x * 60; m1 -= x; changed=1; }
  }
  
  if (changed) {
    let o0 = new Date(0);
    o0.setSeconds(s0);
    o0.setMinutes(m0);
    o0.setHours(h0);
    o0.setDate(D0);
    o0.setMonth(M0);
    o0.setYear(Y0);
    
    let o1 = new Date(0);
    o1.setSeconds(s1);
    o1.setMinutes(m1);
    o1.setHours(h1);
    o1.setDate(D1);
    o1.setMonth(M1);
    o1.setYear(Y1);
  }
  return { t0: t0, t1: t1 };
}

/**
 * Recupera URL base.
 */
function getUrlBase() {
  var getUrl = window.location;
  return getUrl.protocol + "//" + getUrl.host;
}

/**
 * Exibe o json usado nas requisições a API.
 * @param {*} json 
 */
function showTrace(title, json) {
  let trace_mode = getGlobal("trace_mode");
  if (trace_mode.value) {
    console.log(title);
    console.log(JSON.stringify(json));
  }
}