/* jshint ignore:start */

/**
Name             Type       Default                      Description
format          string     DD-MM-YYYY HH:mm           In this format date is stored in original input. List of tokens.
template        string     D / MMM / YYYY H : mm      In this format dropdowns are displayed. Spaces are converted to &nbsp; for layout tuning.
value           mixed      null                       Initial value. Used as default value if not defined in <input>.
minYear         int        1970                       Minimum value in years dropdown.
maxYear         int        2015                       Maximum value in years dropdown.
yearDescending  bool       true                       Years order.
minuteStep      int        5                          Step of values in minutes dropdown.
secondStep      int        1                          Step of values in seconds dropdown.
firstItem       string     'empty'                    What is shown in first item of all dropdown. Can be empty|name|none.
errorClass      string     null                       Css class applied if date is incorrect, e.g. Feb, 31. If null dropdowns appears in red border.
customClass     string     null                       Css class applied to each dropdown.
roundTime       bool       true                       Whether to round minutes and seconds if step > 1. E.g. if minuteStep = 5 date 2013-05-04 12:21 will be shown as 2013-05-04 12:20.
smartDays       bool       false                      If false - number of days in dropdown is always 31.
                                                      If true - number of days depends on selected month and year
**/

'use strict';
angular.module('RnpAgendamentoWeb.directives').directive('combodateTime', [
  function() {
    return {
      restrict: 'AE',
      require: 'ngModel',
      template: ' <input type="text" data-format="DD/MM/YYYY HH:mm" data-template="DD / MM / YYYY     HH : mm" required />',
      replace: true,
      scope: {
        model: '=ngModel',
        desabilitar: '='
      },
      link: function(scope, elem, attrs, ngModel) {

        $(elem).combodate();
        
        //var options = scope.$eval(attrs.options);
        // scope.$watch('desabilitar', function(newVal){
        //   if(newVal){
        //     attrs.$set('disabled', 'disabled');
        //     console.log('disable');
        //     $(elem).combodate();
        //   }else{
        //    // elem.removeAttr('disabled');
        //     $(elem).combodate();
        //     console.log('enabled');
        //   }
        //   //console.log('ngDisabled ' + newVal);
        // });

        scope.$watch('model', function(newVal, oldval){
          $(elem).combodate('setValue', newVal);
        });

        scope.$watch(function(newVal, oldval){
          scope.model = $(elem).combodate('getValue');
        });


      }
    };
  }
]);
/* jshint ignore:end */
