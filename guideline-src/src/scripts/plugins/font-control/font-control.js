(function($) {
    if ($.fn.livequery) {
        $('[data-fontcontrol]').livequery(function(event) {
        	$('[data-fontcontrol]').on('click', function(event) {
			        event.preventDefault();

			        // Trigger element
			        var $el  = $(event.target);
			        if ( $el.is('i') ) {$el = $el.parent();}

			        // If element is not disabled, do the font control
			        if (!$el.attr('disabled')) {

			            // Container that will have its font size controlled
			            var $container = $('.font-control');

			            // Control method can be "increment" or "decrement"
			            var method = $el.data('fontcontrol');

			            if (method == 'increment') {
			                $('[data-fontcontrol="decrement"]').removeAttr('disabled');

			                if ($container.hasClass('font-large')) {
			                    $container.addClass('font-xlarge');
			                    $('[data-fontcontrol="increment"]').attr('disabled', true);
			                } else {
			                    $container.addClass('font-large');
			                }
			            } else {
			                $('[data-fontcontrol="increment"]').removeAttr('disabled');

			                if ($container.hasClass('font-xlarge')) {
			                    $container.removeClass('font-xlarge');
			                } else {
			                    $container.removeClass('font-large');
			                    $('[data-fontcontrol="decrement"]').attr('disabled', true);
			                }
			            }
			        }
			    });

        });
    }
}(jQuery));