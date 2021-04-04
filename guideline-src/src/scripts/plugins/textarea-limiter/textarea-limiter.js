/*global document:true*/
(function($){

    "use strict";

    function TextareaLimit(element, options){
        this.$textarea = $(element);
        this.options = $.extend({}, $.textareaLimit.defaults, options);

        if(this.options.label){
            this.labelElement = $(this.options.label);
        }
        else {
            var $label = $('<label></label>');
            this.$textarea.after($label);
            this.labelElement = $label;
        }

        if(!this.$textarea.is('textarea')){
            throw new Error('The data [data-textarea-range] should be used only with textarea elements');
        }

        this.init();
    }

    /**
     * [prototype description]
     * @type {Object}
     */
    TextareaLimit.prototype = {
        /**
         * [init description]
         */
        init : function(){
            this.$textarea.removeAttr('maxlength');

            this.$textarea.keyup($.proxy(this.change, this));
            this.updateLabel();
        },

        /**
         * [updateLabel description]
         * @return {[type]} [description]
         */
        updateLabel: function(){
            var text = this.$textarea.val();
            text = text.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');
            var availableCount = Math.abs(text.length - this.options.maxlength);
            var message = this.options.labelText.replace(/\{\#\}/g, availableCount);
            this.labelElement.text(message);
        },

        /**
         * [change description]
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        change : function(event){
            var text = this.$textarea.val();
            text = text.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');

            if(text.length >= this.options.maxlength){
                this.$textarea.val(text.slice(0, this.options.maxlength));
            }

            this.updateLabel();
        }
    };

    /**
     * [textareaLimit description]
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    $.fn.textareaLimit = function ( option ) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('textareaLimit'),
                options = typeof option === 'object' && option;

            if (!data || typeof data === 'string'){
                $this.data('textareaLimit', (data = new TextareaLimit(this, options)));
            }

            if (typeof option === 'string'){
                data[option]();
            }
        });
    };

    $.textareaLimit = {};
    $.textareaLimit.defaults = {
        labelText: 'Restam {#} caracteres',
        defaultMaxLength: !('maxLength' in document.createElement('textarea'))
    };

    $.fn.textareaLimit.Constructor = TextareaLimit;

    if ($.fn.livequery) {
        $('textarea[maxlength]').livequery(function(event) {
            var $target = $(this),
                data = $target.data();

            data = $.extend(data, {
                maxlength : $target.attr('maxlength')
            });

            $target.textareaLimit(data);
        });
    }
}(jQuery));