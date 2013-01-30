/**
 * jQuery Kerplop!
 * Move stuff from one place to another.
 *
 * @author    Micky Hulse
 * @link      http://hulse.me
 * @docs      http://github.com/registerguard/jquery-kerplop
 * @copyright Copyright (c) 2013 Micky Hulse.
 * @license   Released under the Apache License, Version 2.0.
 * @version   1.0.0
 * @date      2013/01/27
 */

//----------------------------------

// Notes to self:
//console.profile('profile foo');
// ... code here ...
//console.profileEnd('profile foo');
// ... or:
// console.time('timing foo');
// ... code here ...
// console.timeEnd('timing foo');

//----------------------------------

;(function($, window, document, undefined) {
	
	'use strict';
	
	var console = window.console || { log : function() {}, warn : function() {} },
	
	defaults = {
		
		from : '',
		to   : '',
		use  : 'html',
		flag : 'kerplopped',
		
		onInit      : $.noop,
		onAfterInit : $.noop
		
	},
	
	methods = {
		
		init: function(options) {
			
			return this.each(function() {
				
				var settings = $.extend({}, defaults, options),
				$this        = $(this),
				data         = $this.data('kerplop'),
				data_from    = $this.data('kerplop-from'),
				data_to      = $this.data('kerplop-to'),
				data_use     = $this.data('kerplop-use'),
				data_flag    = $this.data('kerplop-flag'),
				$from        = ((data_from) ? $('#' + data_from) : ((settings.from.length) ? $('#' + settings.from) : '')),
				$to          = ((data_to) ? $('#' + data_to) : ((settings.to.length) ? $('#' + settings.to) : '')),
				use          = ((data_use && (/^(?:after|append|before|html|prepend|text)$/).test(data_use)) ? data_use : settings.use),
				flag         = (data_flag || settings.flag);
				
				if ( ! data) {
					
					$this.data('kerplop', {
						
						this     : $this,
						from     : $from,
						to       : $to,
						use      : use,
						flag     : flag,
						settings : settings,
						init     : false
						
					});
					data = $this.data('kerplop');
					
				}
				
				if ( ! data.init) {
					
					data.init = true;
					
					settings.onInit.call($this, $from, $to);
					
					/**
					 * Reference:
					 *
					 * $('.inner').after('<p>Test</p>');
					 * $('.inner').append('<p>Test</p>');
					 * $('.inner').before('<p>Test</p>');
					 * $('.inner').html('<p>Test</p>');
					 * $('.inner').prepend('<p>Test</p>');
					 * $('.inner').text('<p>Test</p>');
					 *
					 * @see http://api.jquery.com/category/manipulation/
					 */
					
					if ($from.length) {
						
						$this[use]($from.addClass(flag).html());
						
					}
					
					if ($to.length) {
						
						$to[data.use]($this.addClass(flag).html());
						
					}
					
					settings.onAfterInit.call($this, $from, $to);
					
				} else {
					
					console.warn('Kerplop already initialized on', this);
					
					return this;
					
				}
				
			});
			
		},
		
		destroy: function() {
			
			return this.each(function() {
				
				var $this = $(this),
				data      = $this.data('kerplop');
				
				if (data) {
					
					(data.from || data.to).removeClass(data.flag);
					
					$this.removeData('kerplop'); // Move along. Nothing to see here.
					
					// What's the best way to restore things back to their original states?
					
				}
			
			});
			
		}
		
	};
	
	//--------------------------------------------------------------------
	
	$.fn.kerplop = function(method) {
		
		if (methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if ((typeof method === 'object') || ( ! method)) {
			
			return methods.init.apply(this, arguments);
			
		} else {
			
			$.error('Method ' + method + ' does not exist on jQuery.kerplop.');
			
		}
		
	};
	
}(jQuery, window, document));