(function($){

	'use strict';

	var resizeFn = function() {
		$('.dataTable').css({
			'width': $('.dataTable').parent().width()
		});
	};

	$(window).resize(resizeFn);

})(jQuery);