/*global setTimeout:true*/
(function($) {
  var navActions = {
    'close-application': function() { 
      if (confirm('Deseja sair da aplicação?')) {
    	window.open("", "_self",""); //bug fix
        window.close();
      };
    },
  }

  if ($.fn.livequery) {
    $('.navbar [data-action]').livequery(function() {
      var $el = $(this);

      $el.on('click', function(event) {
        event.preventDefault();
        var action = navActions[$el.data('action')];
        if (action) action();
      });
    });
  }
}(jQuery));