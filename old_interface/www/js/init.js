setupMap(); // map/support.js

updateDrawColors(); // map/support.js

initFilter(); // form/support.js

// Recebimento de parametros pela URL
let query = location.search.slice(1);
let partes = query.split('&');
let params = {};
partes.forEach(function (parte) {
	let chaveValor = parte.split('=');
	let chave = chaveValor[0];
	let valor = chaveValor[1];
  params[chave] = valor;
});

initChartLeft(); // chart/support.js
//initChartRight();
initChartBottom(); // chart/support.js

// Faz a consulta por Schema e as duas por Bounds
initSchema(params); // api/support.js

/**
 * Solicita o schema e os limites geográficos e temporais.
 */
function initLoop() {
	// setTimeout é nativo do Javascript
	setTimeout(function () {
		let s = getGlobal("schema");
		let t = getGlobal("bounds_time");
		let g = getGlobal("bounds_geo");
		if (s.value && t.value && g.value) {
			request2HeatMap(); // map/control.js
			requestFilter2ChartBottom("Map", "#AAAAAA"); // api/support.js
			requestMap2ChartLeft(); // map/control.js
			//requestMap2ChartRight();
		}	else {
			initLoop();			
		}
	}, 1000);
}

initLoop();

$('#start').val(moment.unix(getGlobal("ts_t0").value).format("MM/DD/YYYY"));
$('#end').val(moment.unix(getGlobal("ts_t1").value).format("MM/DD/YYYY"));

function initComboBoxBairros() {
	let bairros = [];
	let listBairro = {
		key: "list_bairro",
		value: []
	};

	let items = clientsData.features;
	for (let i=0; i<items.length; i++) {
		let bairro = {
			value: i+1,
			text: items[i].properties.NOME,
			item: items[i].properties
		};
		bairros.push(bairro);
		listBairro.value.push(bairro);
	}
	getCbBairro().setData(bairros); // form/support.js
	setGlobal(listBairro);
}

initComboBoxBairros();

function timeCheckerLoop(){
	initTimeBounds(function callback(changed){
		console.log("Changed: ", changed);

		let timeout_id = getGlobal("bounds_timeout_id");
		if (changed) {
			timeout_id.value = setTimeout(function() { timeCheckerLoop() }, 3000);
		}
		else {
			timeout_id.value = setTimeout(function() { timeCheckerLoop() }, 60000);
		}
		setGlobal(timeout_id);
	});
}
