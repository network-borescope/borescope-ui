'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('modalAddContact', [
  '$modal', function($modal) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        output: '=',
        subject: '@'
      },
      templateUrl: 'app/views/directives/modal-add-contact/modal-add-contact-directive.html',
      link: function(scope) {

        scope.openModal = function(){
          scope.modalInstance = $modal.open({
              templateUrl: 'app/views/directives/modal-add-contact/modal-add-contact-directive-modal.html',
              backdrop: 'static',
              scope: scope,
              size: 'sm',
              controller: 'ModalAddContactCtrl',
          });
          scope.modalInstance.result.then(function(result) {
            var array = angular.copy(scope.output);
            array.push(result);
            scope.output = array;
          });
          return scope.modalInstance;
        };

        scope.remover = function(item){
          scope.output = _.without(scope.output, item);
        };
      }

    };
  }
]).controller('ModalAddContactCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

  $scope.salvarPopup = function(item) {
    $modalInstance.close(item);
  };

  $scope.cancelarPopup = function() {
    $modalInstance.dismiss('cancel');
  };

}]);
