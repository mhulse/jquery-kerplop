/*!
 * jQuery Kerplop!
 * Move stuff from one place to another.
 *
 * @author Micky Hulse
 * @link http://hulse.me
 * @docs https://github.com/registerguard/jquery-kerplop
 * @copyright Copyright (c) 2013 Micky Hulse.
 * @license Released under the Apache License, Version 2.0.
 * @version 1.1.0
 * @date 2013/02/16
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
	
	/**
	 * Function-level strict mode syntax.
	 *
	 * @see rgne.ws/XcZgn8
	 */
	
	'use strict';
	
	//--------------------------------------------------------------------------
	//
	// Local "globals":
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Javascript console.
	 *
	 * @see rgne.ws/12p2bvl
	 */
	
	var console = window.console || { log : function() {}, warn : function() {} },
	
	//----------------------------------
	
	/**
	 * The plugin namespace.
	 */
	
	NS = 'kerplop',
	
	//--------------------------------------------------------------------------
	//
	// Defaults and settings:
	//
	//--------------------------------------------------------------------------
	
	defaults = {
		
		from : '',           // Element, ID name, to copy from. Used if `data-from` local is not defined.
		to   : '',           // Element, ID name, to copy to. Used if `data-to` local is not defined.
		use  : 'html',       // Replacement function to use when copying content from, or to, other elements. Allowed values are `after`, `append`, `before`, `html` (default), `prepend` and `text`.
		flag : 'kerplopped', // CSS class name to apply to element that's copied from, or the the element that's copying its contents to another element; useful for when you want to hide the `kerplopped` element using CSS techniques.
		
		onInit      : $.noop, // Callback on plugin initialization; this function gets passed two arguments 1) the "from" element 2) the "to" element and "this" is the context of the current element.
		onAfterInit : $.noop  // Callback after plugin initialization; this function gets passed two arguments 1) the "from" element 2) the "to" element and "this" is the context of the current element.
		
	}, // defaults
	
	//--------------------------------------------------------------------------
	//
	// Public methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Methods object.
	 *
	 * @type { object }
	 */
	
	methods = {
		
		/**
		 * Init constructor.
		 *
		 * @type { function }
		 * @param { object } opts Options object literal.
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		init : function(options) {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),        // Target object.
				    data  = $this.data(NS), // Namespace instance data.
				    settings,
				    data_from,
				    data_to,
				    data_use,
				    data_flag;
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if ( ! data) {
					
					//----------------------------------
					// Initialize:
					//----------------------------------
					
					settings  = $.extend({}, defaults, options); // Merge defaults and options.
					data_from = $this.data('kerplop-from');      // See `defaults.from` docs.
					data_to   = $this.data('kerplop-to');        // See `defaults.to` docs.
					data_use  = $this.data('kerplop-use');       // See `defaults.use` docs.
					data_flag = $this.data('kerplop-flag');      // See `defaults.flag` docs.
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.data(NS, {
						
						flag     : (data_flag || settings.flag),
						from     : ((data_from) ? $('#' + data_from) : ((settings.from.length) ? $('#' + settings.from) : '')),
						init     : false,
						settings : settings,
						target   : $this,
						to       : ((data_to) ? $('#' + data_to) : ((settings.to.length) ? $('#' + settings.to) : '')),
						use      : ((data_use && (/^(?:after|append|before|html|prepend|text)$/).test(data_use)) ? data_use : settings.use)
						
					});
					
					//----------------------------------
					// Easy access:
					//----------------------------------
					
					data = $this.data(NS);
					
				}
				
				//----------------------------------
				// Data initialization check:
				//----------------------------------
				
				if ( ! data.init) {
					
					//----------------------------------
					// Call main:
					//----------------------------------
					
					_main.call($this, data);
					
				} else {
					
					//----------------------------------
					// Ouch!
					//----------------------------------
					
					console.warn('jQuery.' + NS, 'thinks it\'s already initialized on', this);
					
					//return this; // Needed?
					
				}
				
			});
			
		}, // init
		
		//----------------------------------
		
		/**
		 * Removes plugin from element.
		 *
		 * @type { function }
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		destroy : function() {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),
				    data  = $this.data(NS);
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if (data) {
					
					//----------------------------------
					// Remove CSS class:
					//----------------------------------
					
					(data.from || data.to).removeClass(data.flag);
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.removeData(NS); // Move along. Nothing to see here.
					
					// What's the best way to restore things back to their original states?
					
				} // ... else warn that this hasn't been initialzed with kerplop?
				
			});
			
		} // destroy
		
	}, // methods
	
	//--------------------------------------------------------------------------
	//
	// Private methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Called after plugin initialization.
	 *
	 * @private
	 * @type { function }
	 * @this { object.jquery }
	 */
	
	_main = function(data) {
		
		//----------------------------------
		// Data?
		//----------------------------------
		
		if (typeof data == 'undefined') {
			
			//----------------------------------
			// Attempt to determine data:
			//----------------------------------
			
			data = this.data(NS);
			
		}
		
		//----------------------------------
		// Data?
		//----------------------------------
		
		if (data) {
			
			//----------------------------------
			// Yup!
			//----------------------------------
			
			data.init = true; // Data initialization flag.
			
			//----------------------------------
			// Callback:
			//----------------------------------
			
			data.settings.onInit.call(data.target, data.from, data.to);
			
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
			
			//----------------------------------
			// From?
			//----------------------------------
			
			if (data.from.length) {
				
				//----------------------------------
				// Yup! Copy "from" & apply class:
				//----------------------------------
				
				data.target[data.use](data.from.addClass(data.flag).html());
				
			}
			
			//----------------------------------
			// To?
			//----------------------------------
			
			if (data.to.length) {
				
				//----------------------------------
				// Yup! Copy "to" & apply class:
				//----------------------------------
				
				data.to[data.use](data.target.addClass(data.flag).html());
				
			}
			
			//----------------------------------
			// Callback:
			//----------------------------------
			
			data.settings.onAfterInit.call(data.target, data.from, data.to);
			
		}
		
	}; // _main
	
	//--------------------------------------------------------------------------
	//
	// Method calling logic:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Boilerplate plugin logic.
	 *
	 * @constructor
	 * @see rgne.ws/OvKpPc
	 * @type { function }
	 * @param { string } method String method identifier.
	 * @return { method } Calls plugin method with supplied params.
	 */
	
	$.fn[NS] = function(method) {
		
		if (methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if ((typeof method == 'object') || ( ! method)) {
			
			return methods.init.apply(this, arguments);
			
		} else {
			
			$.error('jQuery.' + NS + ' thinks that ' + method + ' doesn\'t exist'); // Should I override? rgne.ws/MwgkP8
			
		}
		
	}; // $.fn[NS]
	
}(jQuery, window, document));