'use strict';
angular.module('RnpAgendamentoWeb.controllers').controller('FullcalendarController', function($window, $rootScope, $q, $scope, $state, $translate, $timeout) {

    ////////////////////////
    // Attributes
    ////////////////////////
    var dateNames;

    dateNames = {
      dayNamesShort   : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      monthNames      : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    };

    ////////////////////////
    // Methods
    ////////////////////////

    ////////////////////////
    // Init
    ////////////////////////
    $scope.calendarConfig = {
      lang                : "pt-br",
      editable            : true,
      header              : false,
      height              : 550,
      loading: function( isLoading, view ){
        console.log('isloading');
      },
      timeFormat          : 'H:mm',
      axisFormat          : 'H:mm',
      dayNamesShort       : dateNames.dayNamesShort,
      monthNames          : dateNames.monthNames,
      monthNamesShort     : dateNames.monthNamesShort,
      firstHour           : 6,
      defaultEventMinutes : 60,
      slotMinutes         : 30,
      displayEventEnd     : true
    };
    $scope.eventSources = [];

});
