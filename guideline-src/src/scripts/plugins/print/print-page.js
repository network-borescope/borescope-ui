/*global window:true*/
(function($){

  $('body').on('click.page.print', '.print-page', function(event){
    window.print();
    event.preventDefault();
  });

}(jQuery));