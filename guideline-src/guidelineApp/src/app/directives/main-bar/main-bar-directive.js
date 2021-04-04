/* jshint ignore:start */
'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('rnpMainBar', [
  function() {
    return {
      restrict: 'A',
      replace: true,
      scope: {},
      templateUrl:'app/views/directives/main-bar/main-bar-directive.html',
      controller: [
        '$scope', '$state', '$timeout', '$rootScope', function($scope, $state, $timeout, $rootScope) {
          /////////////////////
          // Attributes
          /////////////////////
          $scope.menuItem = null;
          var menuList = [
            {state: 'solicitacao-reserva', nome: 'Reservas'},
            {state: 'relatorio', nome: 'Relatórios'},
            {state: 'feriados.buscar', nome: 'Feriados'},
            {state: 'aprovacao-reserva', nome: 'Aprovação Reserva'},
            {state: 'salas.buscar', nome: 'Salas'},
            {state: 'salaIntegrada.buscar', nome: 'Salas Integradas'}
          ];

          $scope.currentParentState = $state.current.parent || $state.current.name;

          /////////////////////
          // Methods
          /////////////////////
          $scope.goToState = function(state) {
            return $state.go(state);
          };

          $scope.updateCurrentState = function() {
            $scope.currentState = $state.current.name;
            $scope.menuItem = null;
          };

        }
      ],
      link: function(scope) {

        /////////////////////
        // Init
        /////////////////////
        scope.$on('$stateChangeSuccess', function() {
          scope.updateCurrentState();
        });

        scope.$watch('menuItem', function(newVal) {
          if (newVal) {
            scope.goToState(newVal);
          }
        });
      }
    };
  }
]);
/* jshint ignore:end */
