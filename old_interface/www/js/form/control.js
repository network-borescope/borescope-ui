/**
 * 
 * User Interface Functions
 * 
 */

/**
 * Monta URL para compartilhamento e copia para area de transferência.
 */
async function onShare() {
  let list = [];
  await getCbBairro().selected().forEach(function (value, index, array) {
    list.push(value);
  });
  let params = "rt=" + encodeURIComponent(getGlobal("result_title").value);
  params = params + "&ru=" + encodeURIComponent(getGlobal("result_unity").value);
  params = params + "&sc=" + encodeURIComponent(getGlobal("selected_channel").value);
  params = params + "&uf=" + encodeURIComponent($('#cb_ufs').val());
  params = params + "&cd=" + encodeURIComponent($('#cb_cidades').val());
  params = params + "&br=" + encodeURIComponent(list);
  params = params + "&t0=" + encodeURIComponent(getGlobal("ts_t0").value);
  params = params + "&t1=" + encodeURIComponent(getGlobal("ts_t1").value);
  copyTextToClipboard(getUrlBase() + "?" + params);
}

/**
 * Salva o intervalo temporal do filtro para uso futuro.
 */
function onInterval() {
  let start = moment($("#start").val(), "MM/DD/YYYY").unix();
  let global = {
    key: "ts_t0",
    value: start 
  };  
  setGlobal(global); 

  let end = moment($("#end").val(), "MM/DD/YYYY").unix();
  global = {
    key: "ts_t1",
    value: end
  };
  setGlobal(global); 
}

/**
 * Atualiza variáveis globais e a interface
 * conforme posição do primeiro comboBox do filtro.
 */
function onResultOptions() {
  let cb = document.getElementById("resultOptions");
  let e = cb.options[cb.selectedIndex];
  let resultTitle = {
    key: "result_title",
    value: e.caption
  };
  setGlobal(resultTitle);
  let resultUnity = {
    key: "result_unity",
    value: e.unity
  };
  setGlobal(resultUnity);
  let selectedChannel = {
    key: "selected_channel",
    value: e.schema_id
  };
  setGlobal(selectedChannel);
}

/**
 * Redefine o mapa conforme os bairros selecionados no filtro.
 */
async function multiBairro() {
  let lat0 = null;
  let lon0 = null;
  let lat1 = null;
  let lon1 = null;
  let listBairro = getGlobal("list_bairro");
  await getCbBairro().selected().forEach(function (value, index, array) {
    let b = listBairro.value[value-1].item;
    if (lat0 == null || lat0<b.lat0) {
      lat0 = b.lat0;
    }
    if (lon0 == null || lon0>b.lon0) {
      lon0 = b.lon0;
    }
    if (lat1 == null || lat1>b.lat1) {
      lat1 = b.lat1;
    }
    if (lon1 == null || lon1<b.lon1) {
      lon1 = b.lon1;
    }      
  });
  if (lat0 != null) {
    getMap().fitBounds([[lat0,lon0],[lat1,lon1]]);
  }
}

/**
 * Redefine limites do mapa, popula comboBox
 * filha e atualiza interface.
 */
function onChangeCombo(combo_id, title, subcombo_id) {  
  if (combo_id == "cb_bairros") {
    multiBairro();
  } else {
    let e = document.getElementById(combo_id);
    let o = e.options[e.selectedIndex];

    if (o.lat0 != undefined) {
      getMap().fitBounds([[o.lat0,o.lon0],[o.lat1,o.lon1]]);
    }

    let sub = o.sub;
    let cb;

    if (sub != undefined && subcombo_id != undefined) {
      let schemaInfo = getGlobal("schema_info");
      let items = schemaInfo.value[sub];
      if (items == undefined) return;
      cb = document.getElementById(subcombo_id);
      if (subcombo_id == "cb_bairros") {
        loadMultiSelectComboBairro(items.items);
      } else {
        loadCombo(cb, items.items, title);
      }
      return;
    }
  }
}

/**
 * Limita o mapa na UF e popula comboBox das cidades.
 */
function onChangeUF() {
  onChangeCombo("cb_ufs","Cities ...","cb_cidades");
}

/**
 * Limita o mapa na cidade e popula comboBox dos bairros.
 */
function onChangeCidade() {
  onChangeCombo("cb_cidades","Client ...","cb_bairros");
}

/**
 * Limita o mapa no bairro.
 */
function onChangeBairro() {
  onChangeCombo("cb_bairros");
}

/**
 * Dispara consultas para obtenção dos limites geográficos e temporais.
 */
function onBounds() {
  // Recupera a menor e maior data do banco de dados e salva em globais.
  initTimeBounds();
  // Recupera limites geograficos do banco de dados e aplica no mapa.
  initGeoBounds();
}

/**
 * Move o gráfico e o mapa no tempo ao alterar
 * as variáveis globais.
 */
function onClickTime(id) {
  let tsT0 = getGlobal("ts_t0");
  let tsT1 = getGlobal("ts_t1");
  let d = (tsT1.value - tsT0.value);
  let small = 20;
  let midi = 10;
  let large = 2;
  
  if (id == "NextSmall") {
    d = d / small;
  } else if (id == "PrevSmall") {
    d = - d / small;
  } else if (id == "NextMidi") {
    d = d / midi;
  } else if (id == "PrevMidi") {
    d = - d / midi;
  } else if (id == "NextLarge") {
    d = d / large;
  } else if (id == "PrevLarge") {
    d = - d / large;
  } else if (id == "ZoomIn") {
    d >>= 1;
    let tmid = tsT0.value + d;
    d >>= 1;
    let t0 = tmid - d;
    t0 = t0 - (t0 % 10);
    let t1 = tmid + d;
    if (t0 >= t1) t1 = t0 + 1;
    tsT0.value = t0;
    tsT1.value = t1;
    setGlobal(tsT0);
    setGlobal(tsT1);
    $('#start').val(moment.unix(tsT0.value).format("MM/DD/YYYY"));
    $('#end').val(moment.unix(tsT1.value).format("MM/DD/YYYY"));
    d = 0;
  } else if (id == "ZoomOut") {
    d >>= 1;
    let tmid = tsT0.value + d;
    d <<= 1;
    let t0 = tmid - d;
    let t1 = tmid + d;
    tsT0.value = t0;
    tsT1.value = t1;
    setGlobal(tsT0);
    setGlobal(tsT1);
    $('#start').val(moment.unix(tsT0.value).format("MM/DD/YYYY"));
    $('#end').val(moment.unix(tsT1.value).format("MM/DD/YYYY"));
    d = 0;
  }
  
  d = Math.floor(d);
  let xt0 = tsT0.value + d;
  let xt1 = tsT1.value + d;
  let tnice = time_nice(xt0, xt1);
  
  tsT0.value = tnice.t0;
  tsT1.value = tnice.t1;
  setGlobal(tsT0);
  setGlobal(tsT1);
  $('#start').val(moment.unix(tsT0.value).format("MM/DD/YYYY"));
  $('#end').val(moment.unix(tsT1.value).format("MM/DD/YYYY"));
  refreshInterface();
  clearCovidBairro();
}

/**
 * Atualiza a interface ao fechar o filtro.
 */
function onClose() {
  setShowFilter(true);
  refreshInterface();
  requestFilter2ChartLeft();
  //requestFilter2ChartRight();
  clearCovidBairro();
}

function onCheckTimeBounds(){
  var selected_value = document.getElementById("check_time_bounds").value;
  let window_size = getGlobal("window_size");
  
  clearTimeout(getGlobal("bounds_timeout_id").value); // mata o loop anterior

  if (selected_value > 0 ) { // check time bounds fixed
    window_size.value = selected_value;
    
    setGlobal(window_size);

    console.log(check_time_bounds);
    console.log(window_size);

    refreshInterface();
  }
  else {
    // verifica se antes a janela estava diferente do default
    if (window_size.value != undefined) {
      window_size.value = undefined;
      setGlobal(window_size);
      
      refreshInterface();
    }

    console.log(window_size);

    // se a opcao selecionada for No Check Time Bounds
    // retorna sem iniciar o timeCheckerLoop
    if (selected_value == "undefined") { return; }
  }
  
  timeCheckerLoop();
}