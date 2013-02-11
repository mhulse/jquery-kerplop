# Changelog

## v1.1.0
#### February 9, 2013

* Using Grunt as a build/validation tool.
	* Created `/build` on root level.
	* The source JS file can be found in `/build/src`.
	* Minified version is now located in `/kerplop/jquery.kerplop.min.js`.
	* Un-minified version, with banner, located in `/kerplop/jquery.kerplop.js`.
* Removed `/kerplop/jquery.kerplop.js`.
* Updated `demo/index.html` to use the minified version.
* Fixed logic error; I was using `this` as an object key, but that's a reserved work in javascript.
* Code passes linting.

---

## v1.0.0
#### January 27, 2013

* Initial public release to GitHub.

---

## vX.X.X
#### Mmmmm [D]D, YYYY

* ...

---