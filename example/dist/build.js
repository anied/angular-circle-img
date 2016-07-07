(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = circleImg;
function circleImg() {
	var directive = {};
	directive.restrict = 'E';
	directive.scope = {
		ciSrc: '@',
		ciDiameter: '@'
	};
	directive.link = function (scope, elem, attrs) {
		console.log('it worked!');
	};
	return directive;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = angular.module('angularCircleImgModule', []);

},{}],3:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _angularCircleImg = require('./angularCircleImg');

var _angularCircleImg2 = _interopRequireDefault(_angularCircleImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.directive('circleImg', _angularCircleImg2.default);

},{"./angularCircleImg":1,"./app":2}]},{},[3])


//# sourceMappingURL=build.js.map
