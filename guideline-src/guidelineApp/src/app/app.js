'use strict';
angular.module('RnpAgendamentoWeb.controllers', []);
angular.module('RnpAgendamentoWeb.filters', []);
angular.module('RnpAgendamentoWeb.factories', []);
angular.module('RnpAgendamentoWeb.services', []);
angular.module('RnpAgendamentoWeb.providers', []);
angular.module('RnpAgendamentoWeb.constants', []);
angular.module('RnpAgendamentoWeb.directives', []);
angular.module('RnpAgendamentoWeb.config', []);
angular.module('RnpAgendamentoWeb.scripts', ['RnpAgendamentoWeb.controllers',
                                             'RnpAgendamentoWeb.constants',
                                             'RnpAgendamentoWeb.filters',
                                             'RnpAgendamentoWeb.factories',
                                             'RnpAgendamentoWeb.services',
                                             'RnpAgendamentoWeb.providers',
                                             'RnpAgendamentoWeb.directives',
                                             'RnpAgendamentoWeb.config'
                                            ]);

angular.module('RnpAgendamentoWeb', ['ngSanitize',
                                     'ngAnimate',
                                     'ngDialog',
                                     'ui.router',
                                     'ui.bootstrap',
                                     'ui.select',
                                     'ui.mask',
                                     'ui.date',
                                     'ngGrid',
                                     'RnpAgendamentoWeb.scripts',
                                     'pascalprecht.translate',
                                     'MessageCenter',
                                     'checklist-model',
                                     'match',
                                     'ui.calendar',
                                     'ncy-angular-breadcrumb',
                                     'highcharts-ng']).run(
  ['$rootScope', function($rootScope) {
    $rootScope.$on("$stateChangeSuccess", function(event, toState) {
      $rootScope.currentState = toState.name;
    });
  }

]);
                                     
angular.module("RnpAgendamentoWeb").config(['$breadcrumbProvider', function($breadcrumbProvider){
    $breadcrumbProvider.setOptions({
      includeAbstract: true
    });
}]);