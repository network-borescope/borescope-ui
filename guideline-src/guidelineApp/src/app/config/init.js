'use strict';

$(document).ready(function() {
  var error, opts, retrieveUserLogged, spinner, target, intranetRegex, u, d, intranet, request;
  opts = {
    lines: 13,
    length: 13,
    width: 5,
    radius: 13,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: '#000',
    speed: 1,
    trail: 40,
    shadow: false,
    hwaccel: false,
    className: 'spinner',
    zIndex: 2e9,
    top: 'auto',
    left: 'auto'
  };
  target = document.getElementById("loading-content");
  spinner = new Spinner(opts).spin(target);

  $("#loading-content").remove();
  return angular.bootstrap(document, ['RnpAgendamentoWeb']);
});
