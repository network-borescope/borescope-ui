'use strict';

angular.module('RnpAgendamentoWeb.directives')
  .directive('possuiPermissao', function ($timeout, $compile,$rootScope,PermissaoService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        
        var permissaoKeys;

        element.hide();
        permissaoKeys = attrs.possuiPermissao;
        
        if (angular.isDefined(permissaoKeys)) {
          permissaoKeys.trim();
          permissaoKeys = permissaoKeys.split(',');
        }

        $rootScope.$watch('configData', function(newVal) {
          var permissoes;
          if (angular.isDefined(newVal) && (newVal !== null) && !angular.equals(newVal.roles, $rootScope.permissoes) && angular.isObject($rootScope.configData) && $rootScope.configData.autenticado)  {
            permissoes = {};
            _.each(newVal.roles, function(role){
              permissoes[role] = true;
            });
            $rootScope.permissoes = permissoes;
          }
          PermissaoService.atualizarPermissoes(element, permissaoKeys, scope.$eval(attrs.ngShow));
        }, true);

        PermissaoService.atualizarPermissoes(element, permissaoKeys, scope.$eval(attrs.ngShow));
      }
    };
  });