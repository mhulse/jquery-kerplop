# Changelog

## v1.1.0
#### February 9, 2013

* Using Grunt as a build/validation tool.
	* Created `/build` on root level.
	* The source JS file can be found in `/build/src`.
	* Minified version is now located in `/kerplop/jquery.kerplop.min.js`.
	* Un-minified version, with banner, located in `/kerplop/jquery.kerplop.js`.
	* Added `.jshintrc` file with a nice set of reasonable defaults.
* Removed `/kerplop/jquery.kerplop.js`.
* Updated `demo/index.html` to use the minified version.
* Fixed logic error; I was using `this` as an object key, but that's a reserved work in javascript.
* Code passes linting.
* Removed `type="text/javascript"` from demo page and `README.md`
* Using one var per block.

##### Browser tests:

* MAC Snow Leopard:
	* Firefox `18.0.2`, Safari `6.0.2 (8536.26.17)`, Opera `12.14 (1738)`, Chrome `24.0.1312.57`
* PC Windows 7:
	* Firefox `4.0`, Firefox `12.0`, Firefox `18.0.2`
	* IE `9.0.8112.16421`
* PC Vista:
	* Firefox `3.6.2.8`, Firefox `14.0.1`, Chrome `24.0.1312.57 m`, Safari `5.1.7 (7534.57.2)`, Opera `12.14 (1738)`
	* IE `7.0.6002.18005`
* PC XP:
    * IE `8.0.6001.18702`, IE `6.0.2900.5512.xpsp_sp3_gdr.120504-1619`
* iPhone (Retina 4-inch), iOS `6.1`:
	* Safari (simulated)
* iPhone (Retina 3.5-inch), iOS `6.1`:
	* Safari (simulated), Safari, Chrome `23.0.1271.100`, Opera Mini `7.0.5.45389`, Dolphin `v7.1`
* iPhone, iOS `6.1`:
	* Safari (simulated)
* iPad (Retina), iOS `6.1`:
	* Safari (simulated), Safari
* iPad, iOS `6.1`:
	* Safari (simulated)
* Motorola Droid 4, Android 4.0.4
	* Browser, Dolphin 9.3.1

---

## v1.0.0
#### January 27, 2013

* Initial public release to GitHub.

---

## vX.X.X
#### Mmmmm [D]D, YYYY

* ...

---