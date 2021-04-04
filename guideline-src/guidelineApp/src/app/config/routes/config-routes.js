'use strict';
angular.module('RnpAgendamentoWeb.providers').provider('ConfigRoutes', ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('webapp', {
      abstract: true,
      controller: function(){ },
      views: {
        "": {
          template: '<div ui-view></div>'
        },
        "helpers@webapp" : {
          templateUrl: 'app/views/helpers.html'
        },
        "breadcrumbs@webapp" : {
          templateUrl: 'app/views/breadcrumbs.html'
        },
        "footer@webapp" : {
          templateUrl: 'app/views/footer.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Página Inicial'
      }
    })

    .state('webapp.inicio', {
      url: '/inicio',
      templateUrl: 'app/views/inicio/inicio.html',
      controller: function() { },
      ncyBreadcrumb: {
        
        label: 'Início'
      }
    })

    .state('webapp.identidade', {
      abstract: true,
      url: '/identidade',
      templateUrl: 'app/views/identidade/identidade.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Identidade'
      }
    })

    .state('webapp.identidade.logo', {
      url: '/logo',
      templateUrl: 'app/views/identidade/logo.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Logos na impressão'
      }
    })

    .state('webapp.identidade.cores', {
      url: '/cores',
      templateUrl: 'app/views/identidade/cores.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Cores'
      }
    })
    .state('webapp.identidade.wireframe', {
      url: '/wireframe',
      templateUrl: 'app/views/identidade/wireframe.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Wireframe'
      }
    })

    .state('webapp.conceitos', {
      abstract: true,
      url: '/conceitos',
      templateUrl: 'app/views/conceitos/conceitos.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Conceitos'
      }
    })

    .state('webapp.conceitos.botoes', {
      url: '/botoes',
      templateUrl: 'app/views/conceitos/botoes.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Botões'
      }
    })

    .state('webapp.conceitos.navegacao', {
      url: '/navegacao',
      templateUrl: 'app/views/conceitos/navegacao.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Navegação'
      }
    })

    .state('webapp.conceitos.inputs', {
      url: '/inputs',
      templateUrl: 'app/views/conceitos/inputs.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Inputs e Selects'
      }
    })

    .state('webapp.conceitos.tabs', {
	    url: '/tabs',
	    templateUrl: 'app/views/conceitos/tabs.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Abas'
      }
    })

    .state('webapp.conceitos.tooltip', {
      url: '/tooltip',
      templateUrl: 'app/views/conceitos/tooltip.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Tooltip'
      }
    })

    .state('webapp.conceitos.popover', {
	    url: '/popover',
	    templateUrl: 'app/views/conceitos/popover.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Popover'
      }
    })

    .state('webapp.conceitos.accordion', {
      url: '/accordion',
      templateUrl: 'app/views/conceitos/accordion.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Accordion'
      }
    })

    .state('webapp.conceitos.iconografia', {
      url: '/iconografia',
      templateUrl: 'app/views/conceitos/iconografia.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Iconografia'
      }
    })

    .state('webapp.conceitos.texto', {
	    url: '/texto',
	    templateUrl: 'app/views/conceitos/texto.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Textos'
      }
    })

    .state('webapp.conceitos.formulario', {
      url: '/formulario',
      templateUrl: 'app/views/conceitos/formulario.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Formulário'
      }
    })
    .state('webapp.conceitos.tabelas', {
      url: '/tabelas',
      templateUrl: 'app/views/conceitos/tabelas.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Tableas'
      }
    })
    .state('webapp.conceitos.mensageria', {
      url: '/mensageria',
      templateUrl: 'app/views/conceitos/mensageria.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Mensageria'
      }
    })
    .state('webapp.conceitos.modal', {
      url: '/modal',
      templateUrl: 'app/views/conceitos/modal.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Modais'
      }
    })
    .state('webapp.bibliotecas', {
      abstract: true,
      url: '/bibliotecas',
      templateUrl: 'app/views/bibliotecas/bibliotecas.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Componentes'
      }
    })

    .state('webapp.bibliotecas.textarea', {
      url: '/textarea-limiter',
      templateUrl: 'app/views/bibliotecas/textarea-limiter.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Textarea Limiter'
      }
    })

    .state('webapp.bibliotecas.datepicker', {
      url: '/datepicker',
      templateUrl: 'app/views/bibliotecas/datepicker.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Datepicker'
      }
    })

    .state('webapp.bibliotecas.mascara', {
	    url: '/mascara',
	    templateUrl: 'app/views/bibliotecas/mascara.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Máscara'
      }
    })

    .state('webapp.bibliotecas.validation', {
	    url: '/validation',
	    templateUrl: 'app/views/bibliotecas/validation.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Validação'
      }
    })

    .state('webapp.bibliotecas.closeapp', {
      url: '/close-application',
      templateUrl: 'app/views/bibliotecas/close-application.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Fechar aplicação'
      }
    })

    .state('webapp.bibliotecas.notification', {
      url: '/notification',
      templateUrl: 'app/views/bibliotecas/notification.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Central de Notificação'
      }
    })

    .state('webapp.bibliotecas.fullcalendar', {
      url: '/fullcalendar',
      templateUrl: 'app/views/bibliotecas/fullcalendar.html',
      controller: 'FullcalendarController',
      ncyBreadcrumb: {
        label: 'Fullcalendar'
      }
    })
    .state('webapp.bibliotecas.select2', {
      url: '/select2',
      templateUrl: 'app/views/bibliotecas/select2.html',
      controller: 'Select2Controller',
      ncyBreadcrumb: {
        label: 'Select2'
      }
    })

    .state('webapp.bibliotecas.datatables', {
      url: '/datatables',
      templateUrl: 'app/views/bibliotecas/datatables.html',
      controller: 'DatatablesController',
      ncyBreadcrumb: {
        label: 'DataTables'
      }
    })

    .state('webapp.bibliotecas.autocomplete', {
	    url: '/autocomplete',
	    templateUrl: 'app/views/bibliotecas/autocomplete.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Autocomplete'
      }
    })

    .state('webapp.builds', {
      abstract: true,
	    url: '/builds',
	    templateUrl: 'app/views/builds/builds.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Releases e Build'
      }
    })

    .state('webapp.builds.release', {
	    url: '/release',
	    templateUrl: 'app/views/builds/release.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Releases'
      }
    })

    .state('webapp.builds.projeto', {
	    url: '/projeto',
	    templateUrl: 'app/views/builds/projeto.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Construindo o Projeto'
      }
    })

    .state('webapp.builds.download', {
	    url: '/download',
	    templateUrl: 'app/views/builds/download.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Download'
      }
    })

    .state('webapp.builds.versionamento', {
	    url: '/versionamento',
	    templateUrl: 'app/views/builds/versionamento.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Versionamento'
      }
    })


    .state('webapp.sistemas', {
      abstract: true,
	    url: '/sistemas',
	    templateUrl: 'app/views/sistemas/sistemas.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Sistemas'
      }
    })

    .state('webapp.sistemas.compatibilidade', {
	    url: '/compatibilidade',
	    templateUrl: 'app/views/sistemas/compatibilidade.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Compatibilidade'
      }
    })

    .state('webapp.standards', {
      abstract: true,
	    url: '/standards',
	    templateUrl: 'app/views/standards/standards.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Inclusão de Padrões e Definições'
      }
    })

    .state('webapp.standards.definicao', {
	    url: '/definicao',
	    templateUrl: 'app/views/standards/definicao.html',
      controller: function() { },
      ncyBreadcrumb: {
        label: 'Definição'
      }
    })


    ;

    $urlRouterProvider.otherwise('/inicio');
    this.$get = function() {
      return this;
    };
  }
]);