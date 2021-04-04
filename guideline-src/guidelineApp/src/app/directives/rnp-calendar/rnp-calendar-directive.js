'use strict';
/* jshint ignore:start */
angular.module('RnpAgendamentoWeb.directives')
  .directive('rnpCalendar', function ($rootScope, $timeout, $compile, $state) {
    return {
      scope    : {
        filter       : '=',
        eventSources : '=',
        onEventDrop  : '='
      },

      restrict: 'A',
      /*jshint multistr: true */
      template :
        '<div id="calendarFilter" class="rnp-calendar-filter" menu-collapse menu-height="document" menu-height-sub="#main-bar" menu-width="20%" menu-collapse-width="2%" target=".calendar-container" target-width="80%" target-collapse-width="98%">'
        + '<div class="rnp-calendar-filter-icon"></div>'
        + '<div class="rnp-calendar-filter-container">'
        +   '<button possui-permissao="ROLE_SOLICITAR_SALA_VIRTUAL, ROLE_SOLICITAR_SALA_PRESENCIAL, ROLE_ADMINISTRADOR_SALA_VIRTUAL,ROLE_ADMINISTRADOR_SALA_PRESENCIAL" class="btn btn-primary-color btn-block margin-top margin-bottom" type="button" ui-sref="solicitacao-reserva" translate>'
        +     'agenda.SOLICITAR_RESERVA'
        +   '</button>'
        +   '<div id="calendarFilterReservas" class="rnp-calendar-filter-reservas margin-bottom-big">'
        +     '<label>Reservas</label>'

        +     '<div class="form-group indent">'
        +       '<div class="no-padding">'
        +         '<div class="checkbox">'
        +           '<label>'
        +             '<input type="radio" name="status" value="" ng-model="filter.status">'
        +             '<span translate>form.TODAS</span>'
        +           '</label>'
        +         '</div>'
        +       '</div>'

        +       '<div class="no-padding">'
        +         '<div class="checkbox">'
        +           '<label>'
        +             '<input type="radio" name="status" ng-value="$root.configData.id" ng-model="filter.status">'
        +             '<span translate>form.MINHAS</span>'
        +           '</label>'
        +         '</div>'
        +       '</div>'
        +     '</div>'

        +     '<div class="no-padding">'
        +       '<select name="organizacao" ng-model="filter.organizacao" ng-options="organizacao.id as organizacao.nome for organizacao in $parent.organizacoes" required>'
        +         '<option value="">Organização</option>'
        +       '</select>'
        +     '</div>'

        +     '<div class="no-padding">'
        +       '<select name="instituicao" ng-model="filter.instituicao" ng-options="instituicao.id as instituicao.nome for instituicao in $parent.instituicoes" ng-disabled="!filter.organizacao" required>'
        +         '<option value="">Instituição</option>'
        +       '</select>'
        +      '</div>'
        +   '</div>'

        +   '<div id="calendarFilterSalas" class="rnp-calendar-filter-salas">'
        +     '<label>Salas</label>'
        +     '<div class="indent">'

        +       '<div class="rnp-calendar-filter-sala" ng-repeat="sala in $parent.salas">'
        +         '<span class="rnp-calendar-filter-sala-color" ng-style="{ \'background-color\': sala.color }">'
        +           '<input id="{{sala.nome}}" type="radio" ng-model="filter.sala" name="filter_sala" ng-value="sala.id" />'
        +         '</span>'
        +         '<label for="{{sala.nome}}" class="rnp-calendar-filter-sala-name" ng-bind="sala.nome" ng-class="{checked: filter.sala === sala.id}"></label>'
        +       '</div>'

        +     '</div>'
        +   '</div>'
        + '</div>'
        +'</div>'

        +'<div class="calendar-container">'
        + '<div id="calendarMenu" class="rnp-calendar-menu">'

        +  '<div>'
        +   '<div class="float-left">'
        +     '<button class="btn rnp-calendar-btn" ng-click="today()">Hoje</button>'
        +     '<div class="rnp-calendar-btn-group">'
        +       '<button class="btn rnp-calendar-btn glyphicon glyphicon-chevron-left" ng-click="prev()"></button>'
        +       '<button class="btn rnp-calendar-btn glyphicon glyphicon-chevron-right" ng-click="next()"></button>'
        +     '</div>'
        +   '</div>'
        +  '</div>'

        +  '<div class="margin-left-big text-align-center">'
        +    '<div class="inline-block">'
        +      '<p class="rnp-calendar-current-date" ng-bind="title"></p>'
        +      '<div class="ui-date no-margin">'
        +        '<input ui-date class="ui-date-input" ng-model="datePicker" placeholder="Buscar data">'
        +        '<span class="ui-date-calendar-icon"></span>'
        +      '</div>'
        +    '</div>'
        +  '</div>'

        +  '<div>'
        +    '<div class="float-right">'
        +      '<button class="btn rnp-calendar-btn" ng-click="getDate()">Atualizar</button>'
        +      '<button class="btn rnp-calendar-btn" ng-click="print()" ng-disabled="reunioesLength === 0">Imprimir</button>'
        +      '<div class="rnp-calendar-btn-group no-margin">'
        +        '<button class="btn rnp-calendar-btn" ng-click="changeViewToMonth()"'
        +        'ng-class="{'
        +          'active : currentView.name === \'month\''
        +        '}"'
        +        '>Mês</button>'
        +        '<button class="btn rnp-calendar-btn" ng-click="changeViewToAgendaWeek()"'
        +        'ng-class="{'
        +          'active : currentView.name === \'agendaWeek\''
        +        '}"'
        +        '>Semana</button>'
        +      '</div>'
        +    '</div>'
        +  '</div>'
        + '</div>'

        + '<div id="calendar" ui-calendar="calendarConfig" ng-model="eventSources"></div>'
        +'</div>'

        +'<div id="popupBackdrop" class="popupBackdrop" ng-show="popups.length > 0" ng-click="removePopups()"></div>',

      link: function(scope, elem, attrs) {
        var dateNames;

        // =======================
        // Attributes
        // =======================
        scope.calendar             = angular.element(elem).find('#calendar');
        scope.currentView          = null;
        scope.title                = null;
        scope.popups               = [];
        scope.newEventPopup        = null;
        scope.eventDetailsPopup    = null;
        scope.bgEventArray         = [];
        scope.bgEventArrayTracking = [];
        scope.datePicker           = null;
        dateNames                  = {
          dayNamesShort   : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
          monthNames      : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          monthNamesShort : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        };

        // =======================
        // Métodos
        // =======================
        scope.today = function() {
          scope.calendar.fullCalendar('today');
          scope.getDate();
        };

        scope.prev = function() {
          scope.calendar.fullCalendar('prev');
          scope.getDate();
        };

        scope.next = function() {
          scope.calendar.fullCalendar('next');
          scope.getDate();
        };

        scope.getTitle = function() {
          scope.title = scope.currentView.title;
        };

        scope.print = function() {
          var requestObj = {};

          requestObj.dataInicial = scope.calendar.fullCalendar('getView').start;
          requestObj.dataFinal   = scope.calendar.fullCalendar('getView').end;

          requestObj.dataInicial = moment(requestObj.dataInicial).format('DD/MM/YYYY')
          requestObj.dataFinal   = moment(requestObj.dataFinal).format('DD/MM/YYYY')

          scope.$emit('calendarDirective:print', requestObj);
        }

        scope.goToDate = function(date) {
          if (date) {
            if (typeof(date) === 'string' && date.length === 10) {
              scope.calendar.fullCalendar('gotoDate', date);
            } else if (typeof(date) === 'object') {
              scope.calendar.fullCalendar('gotoDate', date);
            }

            scope.getDate();
          }
        };

        scope.getDate = function(val) {
          scope.$parent.calendarStartDate = scope.calendar.fullCalendar('getView').start;
          scope.$parent.calendarEndDate = scope.calendar.fullCalendar('getView').end;
          scope.$emit('calendarDirective:dateOrSalaChanged', val, scope.bgEventArrayTracking);
        };

        scope.setCurrentView = function() {
          if (scope.bgEventArray.length) {
            scope.bgEventArray = _.uniq(scope.bgEventArray, function(elem) {
              return elem.data().eventId;
            });

            var difference = _.difference(scope.bgEventArray, scope.bgEventArrayTracking);

            _.each(difference, function(bgEvent) {
              scope.calendar.append(bgEvent);
              scope.bgEventArrayTracking.push(bgEvent);
              $compile(bgEvent)(scope);
            });

          }

          scope.currentView = scope.calendar.fullCalendar('getView');
          scope.$watch('currentView.title', function() {
            scope.getTitle();
          });
        };

        scope.aprovarReuniao = function(reuniaoId) {
          scope.$emit('calendarDirective:aprovarReuniao', reuniaoId);
        }

        scope.reprovarReuniao = function(reuniaoId) {
          scope.$emit('calendarDirective:reprovarReuniao', reuniaoId);
        }



        scope.changeViewToMonth = function() {
          $rootScope.calendarView = 'MONTH';
          scope.calendar.fullCalendar('changeView', 'month');
          scope.getDate();
        };

        scope.changeViewToAgendaWeek = function() {
          $rootScope.calendarView = 'AGENDAWEEK';
          scope.calendar.fullCalendar('changeView', 'agendaWeek');
          scope.getDate();
        };

        scope.createNewEventPopup = function(date, jsEvent, view) {
          /*jshint multistr: true */
          var template =
            '<div class="rnp-calendar-popup-new-event">'
            + '<p class="rnp-calendar-popup-title">Novo Evento</p>'
            + '<i class="rnp-calendar-popup-close" ng-click="removePopups()"></i>'
            + '<div class="rnp-calendar-popup-fields">'
            +   '<div class="rnp-calendar-popup-field">'
            +     '<p class="rnp-calendar-popup-label">Quando</p>'
            +     '<p class="rnp-calendar-popup-date" ng-bind="newEventPopup.date.formatted"></p>'
            +   '</div>'
            + '</div>'
            + '<div class="rnp-calendar-popup-actions">'
            +   '<button class="btn btn-primary-color" ng-hide="dataInvalida" ng-click="newEvent()">Solicitar sala</button>'
            + '</div>'
            +'</div>';

          if (date < moment().startOf('day').subtract(1, 'day')) {
            scope.dataInvalida = true;
          } else {
            scope.dataInvalida = false;
          }

          $timeout(function() {
            // Position popup
            scope.newEventPopup = scope.createNewPopup();
            $(scope.newEventPopup).height(130);
            $(scope.newEventPopup).width(300);

            // Set popup date
            scope.newEventPopup.date = date;

            if (view.name === 'month') {
              scope.newEventPopup.newEventPopupOffsetTop  = jsEvent.pageY - $(scope.newEventPopup).outerHeight(true) - 5 // 5 é um valor para ajustar a ponta do balão
              scope.newEventPopup.newEventPopupOffsetLeft = jsEvent.pageX - $(scope.newEventPopup).outerWidth(true) / 2

              // Event info
              scope.newEventPopup.date.formatted = moment(date).format("ddd, DD [de] MMMM [de] YYYY");
            } else if (view.name === 'agendaWeek') {
              $(scope.newEventPopup).addClass('center-popup');

              scope.newEventPopup.newEventPopupOffsetTop  = $('.fc-view-container').offset().top + ($('.fc-view-container').height() / 2) - ($(scope.newEventPopup).outerHeight(true) / 2);
              scope.newEventPopup.newEventPopupOffsetLeft = $(jsEvent.target).offset().left - ($(scope.newEventPopup).outerWidth(true) - jsEvent.target.clientWidth) / 2;

              // Event info
              scope.newEventPopup.date.formatted = moment(date).format("ddd, DD [de] MMMM [de] YYYY - HH:mm[h]");
            }

            $(scope.newEventPopup).offset({top: scope.newEventPopup.newEventPopupOffsetTop, left: scope.newEventPopup.newEventPopupOffsetLeft});

            // Compile popup info
            angular.element(scope.newEventPopup).append($compile(template)(scope));
          }, 0);
        };

        scope.createEventDetailsPopup = function(event, jsEvent, view) {
          var template =
            '<div class="rnp-calendar-popup-event-details" >'
            + '<p class="rnp-calendar-popup-title" ng-bind="eventDetailsPopup.title"></p>'
            + '<i class="rnp-calendar-popup-close" ng-click="removePopups()"></i>'
            + '<p class="rnp-calendar-popup-date" ng-bind="eventDetailsPopup.start"></p>'
            + '<p class="rnp-calendar-popup-date" ng-bind="eventDetailsPopup.end"></p>'
            + '<p class="rnp-calendar-popup-room" ng-repeat="sala in eventDetailsPopup.salas" ng-bind="sala.nome"></p>'

            + '<div class="rnp-calendar-popup-actions">'

            +   '<div ng-if="eventDetailsPopup.aprovado !== null" possui-permissao="ROLE_SOLICITAR_SALA_VIRTUAL,ROLE_SOLICITAR_SALA_PRESENCIAL,ROLE_ADMINISTRADOR_SALA_VIRTUAL,ROLE_ADMINISTRADOR_SALA_PRESENCIAL">'
            +     '<button class="btn btn-small btn-primary-color " ng-click="detalhes(reuniaoId)">Detalhes</button>'
            +   '</div>'

            +   '<div ng-if="eventDetailsPopup.exigeConfirmacao && eventDetailsPopup.aprovado === null" possui-permissao="ROLE_ADMINISTRADOR_SALA_VIRTUAL,ROLE_ADMINISTRADOR_SALA_PRESENCIAL">'
            +     '<p>Confirmar</p>'
            +     '<button class="btn btn-small btn-primary-color  margin-right" ng-click="aprovarReuniao(reuniaoId)">Sim</button>'
            +     '<button class="btn btn-small btn-primary-color " ng-click="reprovarReuniao(reuniaoId)">Não</button>'
            +   '</div>'

            + '</div>'
            +'</div>';

          $timeout(function() {
            // Position popup
            scope.eventDetailsPopup = scope.createNewPopup();
            if (event.confirmacao && event.aprovado === null) {
              $(scope.eventDetailsPopup).height(160);
            } else {
              $(scope.eventDetailsPopup).height(130);
            }

            $(scope.eventDetailsPopup).width(200);

            scope.eventDetailsPopup.eventDetailsPopupOffsetTop  = Math.abs($(jsEvent.currentTarget).offset().top - $(scope.eventDetailsPopup).outerHeight(true));
            scope.eventDetailsPopup.eventDetailsPopupOffsetLeft = $(jsEvent.currentTarget).offset().left - ($(scope.eventDetailsPopup).outerWidth(true) - jsEvent.currentTarget.clientWidth) / 2;

            $(scope.eventDetailsPopup).offset({top: scope.eventDetailsPopup.eventDetailsPopupOffsetTop, left: scope.eventDetailsPopup.eventDetailsPopupOffsetLeft});

            // Event info
            scope.eventDetailsPopup.start = moment(event.start).format('ddd, DD [de] MMMM [de] YYYY - HH:mm');
            scope.eventDetailsPopup.end   = moment(event.end).format('ddd, DD [de] MMMM [de] YYYY - HH:mm');
            scope.eventDetailsPopup.title = event.title;
            scope.eventDetailsPopup.salas = event.salas || [];
            scope.eventDetailsPopup.exigeConfirmacao = event.confirmacao;
            scope.eventDetailsPopup.aprovado = event.aprovado;
            scope.reuniaoId = event.id;

            // Compile popup info
            angular.element(scope.eventDetailsPopup).append($compile(template)(scope));
          }, 0);
        };

        scope.createNewPopup = function() {
          var popup = angular.element('<div class="rnp-calendar-popup"></div>');
          angular.element(document).find('body').append(popup);
          scope.popups.push(popup);
          return popup[0];
        };

        scope.removePopups = function() {
          for (var i = 0; i < scope.popups.length; i++) {
            scope.popups[i].remove();
            scope.popups.splice(i, 1);
          }

          scope.getDate();
        };

        scope.newEvent = function() {
          console.log(scope.filter, scope.newEventPopup.date);
          $state.go('solicitacao-reserva', {data: {organizacaoId: scope.filter.organizacao, instituicaoId: scope.filter.instituicao, date: scope.newEventPopup.date}});
          scope.removePopups();
        }

        scope.detalhes = function(sala) {
          $state.go('solicitacao-reserva-editar', {id: scope.reuniaoId});
          scope.removePopups();
        };

        scope.eventRender = function(event, element, view) {
          if (event.confirmacao && event.aprovado === null) {
            var html = element.children().html();
            element.html('');
            element.append('<span class="fc-event-waiting-aproval-icon"></span>');
            element.append(html);
            element.css({opacity: 0.7});
          }

          $compile(element)(scope);
        };

        scope.eventAfterRender = function(event, element, view) {
          if (element.width() && event.rendering === 'background') {
            var offsetTop, offsetLeft, tooltip, template, templateWidth;

            offsetTop     = element.offsetParent().offsetParent().position().top;
            offsetLeft    = element.position().left;
            templateWidth = element.width();

            if (event.cidade && event.estado) {
              tooltip = "Cidade: " + event.cidade + " - UF: " + event.estado;
            } else if (event.cidade) {
              tooltip = "Cidade: " + event.cidade;
            } else if (event.estado) {
              tooltip = "UF: " + event.estado;
            }

            if (tooltip) {
              template = '<div data-event-id="'+ event.id +'" class="fc-bgevent-title" tooltip="'+ tooltip +'" tooltip-append-to-body="false" style="position: absolute; width: '+ templateWidth +'px; top: '+ offsetTop +'px; left: '+ offsetLeft +'px; z-index: 9999;">'+event.title+'</div>';
            } else {
              template = '<div data-event-id="'+ event.id +'" class="fc-bgevent-title" style="position: absolute; width: '+ templateWidth +'px; top: '+ offsetTop +'px; left: '+ offsetLeft +'px; z-index: 9999;">'+event.title+'</div>';
            }

            template = angular.element(template);

            scope.bgEventArray.push(template);
          }
        };

        scope.organizacaoChanged = function(val) {
          scope.$emit('calendarDirective:organizacaoChanged', val);
        };

        scope.instituicaoChanged = function(val) {
          scope.$emit('calendarDirective:instituicaoChanged', val);
        };

        scope.salaChanged = function(val) {
          $timeout(function() {
            scope.getDate(val);
          }, 0);
        };

        scope.eventDropped = function(event, element, view) {
          scope.$emit('calendarDirective:eventDropped', event);
          scope.removePopups();
        }

        // =======================
        // Watchers
        // =======================
        scope.$watch('eventSources', function(newVal, oldVal) {
          scope.calendar.fullCalendar('removeEvents');
          scope.calendar.fullCalendar('refetchEvents');
          scope.calendar.fullCalendar('addEventSource', newVal);
          scope.calendar.fullCalendar('refetchEvents');
        });

        scope.$watch('filter.organizacao', function(newVal) {
          scope.organizacaoChanged(newVal);
        });

        scope.$watch('filter.instituicao', function(newVal) {
          scope.instituicaoChanged(newVal);
        });

        scope.$watch('filter.sala', function(newVal) {
          scope.salaChanged(scope.filter);
        });

        scope.$watch('filter.status', function(newVal) {
          scope.salaChanged(scope.filter);
        });

        scope.$watch('datePicker', function(newVal) {
          scope.goToDate(newVal);
        });

        scope.$on('calendarDirective:reunioesLength', function(event, reunioesLength) {
          scope.reunioesLength = reunioesLength;
        });

        scope.$on('calendarDirective:cleanNomeFeriados', function() {
          _.each(scope.bgEventArrayTracking, function(bgEvent) {
            $(document).find(bgEvent).remove();
          });

          scope.bgEventArray         = [];
          scope.bgEventArrayTracking = [];
        });

        scope.$on('calendarDirective:reuniaoAprovadaOuReprovada', function(event, reunioesLength) {
          scope.removePopups();
          scope.getDate();
        });

        // =======================
        // Config do Calendário
        // =======================
        scope.calendarConfig = {
          lang                : "pt-br",
          editable            : true,
          header              : false,
          height              : 550,
          loading: function( isLoading, view ){
            console.log('isloading');
          },
          dayClick            : scope.createNewEventPopup,
          eventClick          : scope.createEventDetailsPopup,
          eventDrop           : scope.eventDropped,
          eventResize         : scope.eventDropped,
          eventAfterRender    : scope.eventAfterRender,
          eventAfterAllRender : scope.setCurrentView,
          windowResize        : scope.removePopups,
          timeFormat          : 'H:mm',
          axisFormat          : 'H:mm',
          dayNamesShort       : dateNames.dayNamesShort,
          monthNames          : dateNames.monthNames,
          monthNamesShort     : dateNames.monthNamesShort,
          firstHour           : 6,
          defaultEventMinutes : 60,
          slotMinutes         : 30,
          displayEventEnd     : true,
          eventRender         : scope.eventRender
        };

        // =======================
        // Verifica última estado da View
        // =======================
        $timeout(function() {
          switch($rootScope.calendarView) {
            case 'MONTH':
              scope.changeViewToMonth();
              break;
            case 'AGENDAWEEK':
              scope.changeViewToAgendaWeek();
              break;
            default:
              scope.changeViewToMonth();
          }
        });
      }
    };
  });
/* jshint ignore:end */
