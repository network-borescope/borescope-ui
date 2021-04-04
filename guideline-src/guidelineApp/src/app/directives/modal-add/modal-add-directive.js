'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('modalAdd', [
  '$modal', function($modal) {
    return {
      restrict: 'A',
      require: ['ngModel'],
      replace: true,
      scope: {
        model: '=ngModel',
        output: '=',
        subject: '@',
        placeholder: '@',
        field: '@'
      },
      templateUrl: 'app/views/directives/modal-add/modal-add-directive.html',
      link: function(scope) {

        var field = scope.field || 'id';

        scope.collection = angular.copy(scope.model);

        scope.$watch('output', function() {
          scope.filterCollectionList();
        });

        scope.filterCollectionList = function() {
          var idList = _.pluck(scope.output, field);
          scope.collection = angular.copy(scope.model);
          scope.collection = _.filter(scope.collection, function(item) {
            return _.indexOf(idList, item.id) === -1;
          });
        };

        scope.openModal = function(){
          scope.modalInstance = $modal.open({
              templateUrl: 'app/views/directives/modal-add/modal-add-directive-modal.html',
              backdrop: 'static',
              scope: scope,
              size: 'sm',
              controller: 'ModalAddCtrl',
          });
          scope.modalInstance.result.then(function(result) {
            var array = angular.copy(scope.output);
            if(angular.isDefined(field) && field !== 'id'){
              result[field] = result.id;
              delete result.id;
            }
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
]).filter('nameFilter', function() {
  return function(itemId, params) {
    var filtered;

    _.filter(params.collection, function(item){
      if(item.id === itemId){
        filtered = item.nome;
      }
    });

    return filtered;
  };
}).controller('ModalAddCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

  $scope.salvarPopup = function(item) {
    $modalInstance.close(item);
  };

  $scope.cancelarPopup = function() {
    $modalInstance.dismiss('cancel');
  };

}]);
