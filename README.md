# jQuery Kerplop!

### Move stuff from one place to another.

---

#### USAGE

Put [jQuery](http://jquery.com/) on your page:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
```

… and link to the plugin:

```html
<script src="jquery.kerplop.min.js"></script>
```

Next, Kerplop can be instantiated like so:

```html
<script>
	<!--
		
		$('.kerplop').kerplop();
		
	//-->
</script>
```

Here's an example with all the "global" options:

```html
<script>
	<!--
		
		var $kerplop = $('.kerplop');
		
		if ($kerplop.length) {
			
			$('.kerplop').kerplop({
				from        : '',
				to          : '',
				use         : 'html',
				flag        : 'kerplopped',
				onInit      : function($from, $to) { console.log('onInit', this, $from, $to); },
				onAfterInit : function($from, $to) { console.log('onAfterInit', this, $from, $to); }
			});
			
		}
		
	//-->
</script>
```

… where:

* `from`: Element, ID name, to copy from. Used if `data-from` local is not defined.
* `to`: Element, ID name, to copy to. Used if `data-to` local is not defined.
* `use`: Replacement function to use when copying content from, or to, other elements. Allowed values are [`after`](http://api.jquery.com/after/), [`append`](http://api.jquery.com/append/), [`before`](http://api.jquery.com/before/), [`html`](http://api.jquery.com/html/) (default), [`prepend`](http://api.jquery.com/prepend/) and [`text`](http://api.jquery.com/text/).
* `flag`: CSS class name to apply to element that's copied from, or the the element that's copying its contents to another element; useful for when you want to hide the `kerplopped` element using CSS techniques.
* `onInit`: Callback on plugin initialization; this function gets passed two arguments 1) the "from" element 2) the "to" element and "this" is the context of the current element.
* `onAfterInit`: Callback after plugin initialization; this function gets passed two arguments 1) the "from" element 2) the "to" element and "this" is the context of the current element.

The beauty of this plugin is that it uses [HTML5 `data` attributes](http://html5doctor.com/html5-custom-data-attributes/) to "localize" the plugin options.

Kerplop's `data-` options are:

* `data-kerplop-from`: IBID.
* `data-kerplop-to`: IBID.
* `data-kerplop-use`: IBID.
* `data-kerplop-flag`: IBID.

##### Example 1: Copy from another element:

```html
<div class="kerplop" data-kerplop-from="other"></div>
```

##### Example 2: Copy from another element using jQuery's [`prepend`](http://api.jquery.com/prepend/).

```html
<div class="kerplop" data-kerplop-from="outgoing" data-kerplop-use="prepend"></div>
```

##### Example #3: Not use any `data-` locals:

```html
<div class="kerplop2" class="kerplopped"><p><b>Out</b>going #2</p></div>
```

In this case, Kerplop will use options defined in plugin call (see examples above).

##### Example 4: Copy to another element using jQuery's [`append`](http://api.jquery.com/append/) and use a class name of "off".

```html
<div class="kerplop" data-kerplop-to="incoming" data-kerplop-use="append" data-kerplop-flag="off"><p>HTML here!</p></div>
```

---

#### DEMO

[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=https://github.com/registerguard/jquery-kerplop/&chs=240x240)](http://registerguard.github.com/jquery-kerplop/demo/)

(Scan QR code with phone and/or click to [view the latest demo](http://registerguard.github.com/jquery-kerplop/demo/).)

---

#### LEGAL

Copyright © 2013 [Micky Hulse](http://hulse.me)/[The Register-Guard](http://registerguard.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.