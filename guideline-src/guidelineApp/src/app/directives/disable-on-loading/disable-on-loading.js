/*
Atenção essa diretiva necessita de alguns ajustes no start da aplicação.
É necessário adicionar uma regra nos interceptors no config

Código abaixo:

interceptor = ['$q', '$rootScope', '$location', '$injector', ($q, $rootScope, $location, $injector) ->
  success = (response) ->
    $http = $http or $injector.get('$http')
    $rootScope.networkStatus = 'idle' if ($http.pendingRequests.length < 1)
    response

  error = (response, status) ->
    $http = $http or $injector.get('$http')
    $rootScope.networkStatus = 'idle' if ($http.pendingRequests.length < 1)
    
  (promise) ->
      $rootScope.networkStatus = 'loading'
      promise.then(success, error)
  ]
  $httpProvider.responseInterceptors.push(interceptor);
 */
'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('disableOnPendingAnd', [
  '$http', '$rootScope', function($http, $rootScope) {
    return {
      restrict: 'A',
      replace: false,
      scope: true,
      link: function(scope, element, attrs) {
        var updateAttrDisabled;
        scope.hasDisabled = false;
        $rootScope.$watch('networkStatus', function(newVal) {
          scope.hasPendingRequests = newVal === 'loading';
          return updateAttrDisabled();
        });
        updateAttrDisabled = function() {
          if (scope.hasDisabled || scope.hasPendingRequests) {
            return element.attr('disabled', 'disabled');
          } else {
            return element.removeAttr('disabled');
          }
        };
        return scope.$watch(attrs.disableOnPendingAnd, function(value) {
          scope.hasDisabled = value;
          return updateAttrDisabled();
        });
      }
    };
  }
]).factory('RnpDisableOnPendingInterceptor', [
  '$q', '$rootScope', '$injector', function($q, $rootScope, $injector) {
    var updateNetworkStatus;
    updateNetworkStatus = function() {
      var $http;
      $http = $injector.get('$http');
      if ($http.pendingRequests.length < 1) {
        $rootScope.networkStatus = 'idle';
      }
    };
    return {
      request: function(config) {
        var $http;
        $http = $injector.get('$http');
        $rootScope.networkStatus = 'loading';
        return config || $q.when(config);
      },
      requestError: function(rejection) {
        updateNetworkStatus();
        return $q.reject(rejection);
      },
      response: function(response) {
        updateNetworkStatus();
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        updateNetworkStatus();
        return $q.reject(rejection);
      }
    };
  }
]);
