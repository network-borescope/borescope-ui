/**
 * 
 * User Interface Functions
 * 
 */

/**
 * Atualiza a tela.
 */
function refreshInterface() { 

  let traceMode = {
    key: "trace_mode",
    value: document.getElementById("trace").checked
  };
  setGlobal(traceMode);

  request2HeatMap();
  if (isShowFilter()) {
    requestFilter2ChartBottom("Filter", "#606060");
    requestFilter2ChartLeft();  
    //requestFilter2ChartRight();
  }
  requestMap2ChartBottom("Map", "#AAAAAA");
  let listLayer = getListLayer();
  for (let i=0; i<listLayer.length; i++) {
    requestPoly2ChartBottom(listLayer[i]);
  }
  let listBairro = getListBairro();
  for (let i=0; i<listBairro.length; i++) {
    requestBairro2ChartBottom(listBairro[i].nome, listBairro[i].color, listBairro[i].codigo);
  }
  requestMap2ChartLeft();
  //requestMap2ChartRight();
  updatePoly();
  updateBairro();
}
