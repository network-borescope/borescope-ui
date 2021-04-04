'use strict';
/* jshint ignore:start */
angular.module('RnpAgendamentoWeb.directives')
  .directive('menuCollapse', function ($rootScope, $window, $compile, $state, $timeout) {
    return {
      scope : {
        menuHeight          : '@',
        menuHeightSub       : '@',
        menuWidth           : '@',
        menuCollapseWidth   : '@',
        target              : '@',
        targetWidth         : '@',
        targetCollapseWidth : '@'
      },

      restrict   : 'A',
      replace    : true,

      templateUrl : 'app/views/directives/menu-collapse/menu-collapse-directive.html',

      link: function(scope, elem, attrs) {
        // =======================
        // Attributes
        // =======================
        scope.collapsed = false;

        // =======================
        // Métodos
        // =======================
        scope.collapseMenu = function() {
          elem.css({width: scope.menuCollapseWidth});
          $(scope.target).css({width: scope.targetCollapseWidth});
          scope.collapsed = true;
          elem.addClass('collapsed');
        }

        scope.uncollapseMenu = function() {
          elem.css({width: scope.menuWidth});
          $(scope.target).css({width: scope.targetWidth});
          scope.collapsed = false;
          elem.removeClass('collapsed');
        }

        scope.setMenuHeight = function() {
          if (scope.menuHeight) {
            if (scope.menuHeight === 'document') {
              scope.menuHeight = eval(scope.menuHeight);
            }

            elem.height($(scope.menuHeight).height());
          }

          if (scope.menuHeight && scope.menuHeightSub) {
            elem.height(elem.height() - $(scope.menuHeightSub).height());
          }
        }

        scope.setTargetWidth = function() {
          $(scope.target).css({width: scope.targetWidth});
        }

        // =======================
        // Watchers
        // =======================
        $($window).on('resize', function() {
          scope.setMenuHeight();
        });

        $rootScope.$on("$stateChangeSuccess", function(event, toState) {
          $timeout(function() {
            scope.setMenuHeight();
            scope.setTargetWidth();
          });
        });

        // $rootScope.$on("$viewContentLoaded", function(event, toState) {
        //   $timeout(function() {
        //     scope.setMenuHeight();
        //     scope.setTargetWidth();
        //   });
        // });

        // =======================
        // Init
        // =======================
        $timeout(function() {
          scope.setMenuHeight();
          scope.setTargetWidth();

          $(elem).click(function() {
            if (scope.collapsed) {
              scope.uncollapseMenu();
            }
          });

          $(elem.find('.collapse-menu-icon')).click(function(e) {
            e.stopPropagation();

            if (scope.collapsed) {
              scope.uncollapseMenu();
            } else {
              scope.collapseMenu();
            }
          });
        });
      }
    };
  });
/* jshint ignore:end */
