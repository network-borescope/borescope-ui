/**
 * [options description]
 * @type {[type]}
 */
(function($) {
    $.mask.options = $.extend($.mask.options, {
      attr: 'mask',
      selectCharsOnFocus: true
    });

    $.mask.masks['numeric'] = { mask: '9', type: 'repeat' };
    $.mask.masks['alphanumeric'] = { mask: '@', type: 'repeat' };
    $.mask.masks['alpha'] = { mask: 'a', type: 'repeat' };

    if ($.fn.livequery) {
        $('[mask]').livequery(function(event) {
            var $target = $(this);

            if ($target.is(':input')) {
                $target.setMask();
            }
        });
    }
}(jQuery));