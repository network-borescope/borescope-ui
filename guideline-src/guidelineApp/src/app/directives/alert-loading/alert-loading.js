'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('rnpLoading', [
  '$http', '$timeout', function($http, $timeout) {
    return {
      template: "<span class=\"message-center-important\" ng-hide=\"isLoadingAlertHidden()\">\n    <div class=\"message-box\" ng-class=\"message.classes\"> \n      <span class=\"message\">Carregando...</span> \n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"removeItem(message)\">&times;</button> \n    </div>\n</span>",
      replace: true,
      restrict: 'EA',
      link: function(scope) {
        var hasPendingRequests;
        hasPendingRequests = function() {
          return $http.pendingRequests.length > 0;
        };
        scope.isLoadingAlertHidden = function() {
          if (hasPendingRequests() && angular.isUndefined(scope.timeoutID)) {
            scope.timeoutID = $timeout(function() {
              scope.isSlow = true;
            }, 2000);
          } else if (!hasPendingRequests()) {
            if (scope.timeoutID) {
              $timeout.cancel(scope.timeoutID);
            }
            scope.timeoutID = void 0;
            scope.isSlow = false;
          }
          return !($http.pendingRequests.length > 0 && scope.isSlow);
        };
      }
    };
  }
]);
