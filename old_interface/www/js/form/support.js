/**
 * 
 * Operações sobre o formulário.
 * 
 */

let cbBairro = null;
let showFilter = false;

/**
 * Previne exibição no filtro ao mover data e acionar o refresh
 */
function isShowFilter() {
  return showFilter;
}

/**
 * Permite exibição do filtro pelo refresh após primeiro uso.
 * @param {*} show 
 */
function setShowFilter(show) {
  showFilter = show;
}

/**
 * Redefine o filtro com base nos parametros da URL compartilhada.
 * @param {*} data 
 */
function setupFilter(data) {
  let resultTitle = {
    key: "result_title",
    value: decodeURIComponent(data['rt'])
  };
  setGlobal(resultTitle);
  $('#resultOptions').val(decodeURIComponent(data['rt']));
  if (typeof data['ru'] !== 'undefined') {
    let resultUnity = {
      key: "result_unity",
      value: decodeURIComponent(data['ru'])
    };
    setGlobal(resultUnity);
  }
  if (typeof data['sc'] !== 'undefined') {
    let selectedChannel = {
      key: "selected_channel",
      value: decodeURIComponent(data['sc'])
    };
    setGlobal(selectedChannel);
  }
  $('#cb_ufs').val(decodeURIComponent(data['uf'])).change();
  $('#cb_cidades').val(decodeURIComponent(data['cd'])).change();

  let list = decodeURIComponent(data['br']);
  for (let i=0; i<list.length; i++) {
    getCbBairro().setSelected(list[i]);
  }

  if (typeof data['t0'] !== 'undefined') {
    let global = {
      key: "ts_t0",
      value: parseInt(decodeURIComponent(data['t0']))
    };
    setGlobal(global); 
    $('#start').val(moment.unix(global.value).format("MM/DD/YYYY"));
  }
  if (typeof data['t1'] !== 'undefined') {
    let global = {
      key: "ts_t1",
      value: parseInt(decodeURIComponent(data['t1']))
    };
    setGlobal(global); 
    $('#end').val(moment.unix(global.value).format("MM/DD/YYYY"));
  }
  let t = {
    key: "bounds_time",
    value: true
  };
  setGlobal(t);
  let g = {
    key: "bounds_geo",
    value: true
  };
  setGlobal(g);
}

/**
 * Retorna a seleção multipla de bairros do filtro.
 * Utilizado em:
 *   ~/js/api/support.js
 *   ~/js/form/control.js
 *   ~/js/form/support.js
 */
function getCbBairro() {
	return cbBairro;
}

/**
 * Inicializa os componentes de seleção multipla de
 * bairros e do intervalo temporal no filtro.
 */
function initFilter() {
  cbBairro = new SlimSelect({
    select: '#demo',
    placeholder: 'Client',
    showSearch: true, // shows search field
    searchText: 'Not found',
    beforeOnChange: (info) => {
      //console.log(info);
      return true; // this will stop propagation
    },
    onChange: (info) => {
      //console.log(info);
      onChangeBairro();
    }
  });
  
  $('#filterModal .input-daterange').datepicker({
    language: "en"
  });  
}

/**
 * Copia a URL para area de transferência.
 * @param {*} text 
 */
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
    window.prompt("Copy to clipboard: Ctrl+C and press Enter", text);
  }

  document.body.removeChild(textArea);
}

/**
 * Popula a primeira comboBox do filtro.
 */
function loadResultOptions() {
  let cb = document.getElementById("resultOptions");
  
  let option, value;
  let schemaInfo = getGlobal("schema_info");
  let contents = schemaInfo.value.terminal.contents;
  
  let tsFieldname = getGlobal("ts_fieldname");
  
  let i, j;
  for (i=0; i<contents.length; i++) {
    if (contents[i].id == tsFieldname.value && contents[i].container) {
      contents = contents[i].container.contents;
      for (j=0; j<contents.length;j++) {
        option = document.createElement("option");
        let caption = contents[j].caption || contents[j].id;
        option.caption = caption;
        option.order = j;
        option.unity = contents[j].unity || "";
        option.schema_id = contents[j].id;
        value = document.createTextNode(caption);
        option.appendChild(value);
        cb.appendChild(option);
      }
      cb.selectedIndex = 1;
      //setTimeout(onResultOptions,1000);
      break;
    }
  }
}

/**
 * Popula Multi Select ComboBox de Bairros.
 * @param {*} items 
 */
function loadMultiSelectComboBairro(items) {
  let bairros = [];
  let listBairro = {
    key: "list_bairro",
    value: []
  };
  for (let i=0; i<items.length; i++) {
    let bairro = {
      value: i+1,
      text: items[i].id,
      item: items[i]
    };
    bairros.push(bairro);
    listBairro.value.push(bairro);
  }
  getCbBairro().setData(bairros);
  setGlobal(listBairro);
}

/**
 * Popula comboBox do filtro.
 * @param {*} cb 
 * @param {*} items 
 * @param {*} title 
 */
function loadCombo(cb, items, title) {
  let option, value;
  let i, j;
  while (cb.length) cb.remove(0);

  option = document.createElement("option");
  value = document.createTextNode(title);	
  option.appendChild(value);
  cb.appendChild(option);

  for (i=0; i < items.length; i++) {
    option = document.createElement("option");
    let caption = items[i].caption || items[i].id;

    option.caption = caption;
    option.order = j;
    option.sub = items[i].sub;
    option.cod  = items[i].cod;
    option.cod1 = items[i].cod1;
    option.cod2 = items[i].cod2;
    option.cod3 = items[i].cod3;
    option.cod4 = items[i].cod4;
    option.lat0 = items[i].lat0;
    option.lat1 = items[i].lat1;
    option.lon0 = items[i].lon0;
    option.lon1 = items[i].lon1;

    value = document.createTextNode(caption);
    option.appendChild(value);

    cb.appendChild(option);
  }
  cb.selectedIndex = 0;
  if (cb.onchange) cb.onchange();
}

/**
 * Popula comboBox de UFs.
 */
function loadUFs() {
  let schemaInfo = getGlobal("schema_info");
  let ufs = schemaInfo.value.estados;
  if (ufs == undefined) return;
  
  let cb = document.getElementById("cb_ufs");
  loadCombo(cb, ufs.items, "States");
}
