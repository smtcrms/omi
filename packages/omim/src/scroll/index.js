(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("omi"));
	else if(typeof define === 'function' && define.amd)
		define(["omi"], factory);
	else if(typeof exports === 'object')
		exports["MScroll"] = factory(require("omi"));
	else
		root["MScroll"] = factory(root["Omi"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_omi__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scroll/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/scroll/index.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./src/scroll/index.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n.card {\n  display: inline-block;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  text-decoration: none;\n  height: 85px;\n  white-space: nowrap;\n  width: 100%;\n  text-align: center;\n  border-radius: 4px;\n  overflow: hidden; }\n\n.icon {\n  display: inline-block;\n  width: 50%;\n  height: 85px;\n  vertical-align: top;\n  padding-top: 20px; }\n\n* {\n  box-sizing: border-box; }\n\n.text {\n  display: inline-block;\n  width: 50%;\n  height: 85px;\n  vertical-align: top;\n  color: white;\n  line-height: 20px;\n  padding-top: 20px; }\n\n.info {\n  font-weight: bold;\n  margin-bottom: 5px; }\n\n.caption {\n  font-size: 14px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/_phy-scroll@1.0.3@phy-scroll/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_phy-scroll@1.0.3@phy-scroll/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* phy-scroll v1.0.3
 * By dntzhang https://github.com/dntzhang
 * Github: https://github.com/Tencent/omi/tree/master/packages/phy-scroll
 * MIT Licensed.
 */

; (function () {
  'use strict';

  if (!Date.now)
    Date.now = function () { return new Date().getTime(); };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame']
      || window[vp + 'CancelRequestAnimationFrame']);
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () { callback(lastTime = nextTime); },
        nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
}());

; (function () {

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassiveOption = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}

  var _elementStyle = document.createElement('div').style,
    endTransitionEventName,
    transitionDuration,
    transitionTimingFunction,
    transform;

  if ('transform' in _elementStyle) {
    transform = 'transform';
    endTransitionEventName = 'transitionend';
    transitionDuration = 'transitionDuration';
    transitionTimingFunction = 'transitionTimingFunction';
  } else if ('webkitTransform' in _elementStyle) {
    transform = 'webkitTransform';
    endTransitionEventName = 'webkitTransitionEnd';
    transitionDuration = 'webkitTransitionDuration';
    transitionTimingFunction = 'webkitTransitionTimingFunction';
  } else {
    throw 'please use a modern browser'
  }

  var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)';

  function reverseEase(y) {
    return 1 - Math.sqrt(1 - y * y);
  }

  function bind(element, type, callback) {
    element.addEventListener(type, callback, false);
  }

  function unbind(element, type, callback) {
    element.removeEventListener(type, callback);
  }

  function preventDefaultTest(el, exceptions) {
    for (var i in exceptions) {
      if (exceptions[i].test(el[i])) {
        return true;
      }
    }
    return false;
  }

  function getTransform(ele) {
    return +ele.style[transform].replace(/[^\-?\d.]/g, '')
  }

  function setTransform(ele, prop, val) {
    ele.style[transform] = prop + '(' + val + 'px)'
  }

  var PhyScroll = function (option) {
    this.scroll = typeof option.scroll === "string" ? document.querySelector(option.scroll) : option.scroll;

    //内部会有scroll出现的DOM
    //如果配置这个属性，需要min=max=0，否则会有意想不到的糟糕效果
    this.scrollDom = option.scrollDom;

    this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
    this.vertical = this._getValue(option.vertical, true);
    this.property = this.vertical ? 'translateY' : 'translateX';
    this.preventDefault = this._getValue(option.preventDefault, true);
    this.sensitivity = this._getValue(option.sensitivity, 1);
    this.lockDirection = this._getValue(option.lockDirection, true);

    this.value = this._getValue(option.value, 0);

    setTransform(this.scroll, this.property, this.value)

    this.moveFactor = this._getValue(option.moveFactor, 1);
    this.factor = this._getValue(option.factor, 1);
    this.outFactor = this._getValue(option.outFactor, 0.3);

    this.min = option.min;
    this.max = option.max;

    this.maxRegion = this._getValue(option.maxRegion, 60);

    this.deceleration = 0.0006;
    this.maxRegion = this._getValue(option.maxRegion, 600);
    this.springMaxRegion = this._getValue(option.springMaxRegion, 60);

    this.change = option.change || function () { };
    this.touchEnd = option.touchEnd || function () { };
    this.touchStart = option.touchStart || function () { };
    this.touchMove = option.touchMove || function () { };
    this.touchCancel = option.touchMove || function () { };
    this.animationEnd = option.animationEnd || function () { };

    this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
    this.hasMin = !(this.min === void 0);
    this.hasMax = !(this.max === void 0);
    this.isTouchStart = false;
    this.step = option.step;
    this.inertia = this._getValue(option.inertia, true);
    this.maxSpeed = option.maxSpeed;
    this.hasMaxSpeed = !(this.maxSpeed === void 0);

    if (this.hasMax && this.hasMin) {
      if (this.min > this.max) throw "min value can't be greater than max value";
      this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
    }

    this._startHandler = this._start.bind(this);
    this._moveHandler = this._move.bind(this);
    this._transitionEndHandler = this._transitionEnd.bind(this);
    this._endHandler = this._end.bind(this);
    this._cancelHandler = this._cancel.bind(this);
    bind(this.element, "touchstart", this._startHandler);
    bind(this.scroll, endTransitionEventName, this._transitionEndHandler);
    document.addEventListener('touchmove', this._moveHandler, supportsPassiveOption ? {
      passive: false
    }: false)
    bind(document, "touchend", this._endHandler);
    bind(document, "touchcancel", this._cancelHandler);
    //当有step设置的时候防止执行两次end
    this._endCallbackTag = true;

    this._endTimeout = null;
  };

  PhyScroll.prototype = {
    _getValue: function (obj, defaultValue) {
      return obj === void 0 ? defaultValue : obj;
    },
    _transitionEnd: function () {
      if (!this._triggerTransitionEnd) return;
      var current = getTransform(this.scroll);
      if (current < this.min) {
        this.to(this.min, 600, ease);
        return;
      } else if (current > this.max) {
        this.to(this.max, 600, ease);
        return;
      }

      if (this.step) {
        this.correction();
        if (this._endCallbackTag) {
          this._endTimeout = setTimeout(function () {
            this.animationEnd.call(this, current, this.index);
            cancelAnimationFrame(this.tickID);
          }.bind(this), 400);
          this._endCallbackTag = false;
        }
      } else {
        this.animationEnd.call(this, current, this.index);
        cancelAnimationFrame(this.tickID);
      }
    },
    _cancelAnimation: function () {
      this.scroll.style[transitionDuration] = '0ms';
      setTransform(this.scroll, this.property, this.getComputedPosition());

    },
    getComputedPosition: function () {
      var matrix = window.getComputedStyle(this.scroll, null);
      matrix = matrix[transform].split(')')[0].split(', ');
      return this.vertical ? (+(matrix[13] || matrix[5])) : (+(matrix[12] || matrix[4]));
    },
    _tick: function () {
      this.change.call(this, this.getComputedPosition());
      this.tickID = requestAnimationFrame(this._tick.bind(this));
    },
    stop: function () {
      cancelAnimationFrame(this.tickID);
      this._cancelAnimation();
      clearTimeout(this._endTimeout);
      if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
      }
    },
    _start: function (evt) {
      cancelAnimationFrame(this.tickID);
      this._tick();

      this._endCallbackTag = true;
      this.isTouchStart = true;
      this._firstTouchMove = true;
      this._preventMove = false;
      this.touchStart.call(this, evt, getTransform(this.scroll));
      this._cancelAnimation();
      clearTimeout(this._endTimeout);
      if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - getTransform(this.scroll)) / this.step);
      }
      this.startTime = new Date().getTime();
      this._startX = this.preX = evt.touches[0].pageX;
      this._startY = this.preY = evt.touches[0].pageY;
      this.start = this.vertical ? this.preY : this.preX;
    },
    /**
     * 根据滑动方向判断
     * @param element 具有scroll的DOM
     * @param move 滚动的距离
     * @param property 滚动的方向
     * @returns {*} 返回当前滑动状态下，element元素的scroll位置信息，'middle'-scroll正在滚动
     * @private
     */
    _scrollPosition: function (element, move, property) {
      var scrollKeys = property === 'translateY'
        ? ['scrollTop', 'offsetHeight', 'scrollHeight']
        : property === 'translateX' ? ['scrollLeft', 'offsetWidth', 'scrollWidth'] : null;
      if (!scrollKeys) { return '' }

      var scroll_start = element[scrollKeys[0]] || 0;
      if (scroll_start === 0 && move >= 0) {
        return 'start'
      }
      var visible_range = element[scrollKeys[1]] || 0,
        scroll_range = element[scrollKeys[2]] || 0;
      if (scroll_range === visible_range + scroll_start) {
        return 'end'
      }
      return 'middle'
    },
    _move: function (evt) {

      //如果当前滑动的时候，滚动元素scrollDOM非触发边界，则不触发滚动效果
      if (this.scrollDom && this._scrollPosition(
        this.scrollDom,
        getTransform(this.scroll),
        this.property
      ) === 'middle') {
        evt.preventDefault();
        return false;
      }

      if (this.isTouchStart) {
        var dx = Math.abs(evt.touches[0].pageX - this._startX), dy = Math.abs(evt.touches[0].pageY - this._startY);
        if (this._firstTouchMove && this.lockDirection) {
          var dDis = dx - dy;
          if (dDis > 0 && this.vertical) {
            this._preventMove = true;
          } else if (dDis < 0 && !this.vertical) {
            this._preventMove = true;
          }
          this._firstTouchMove = false;
        }
        if (dx < 10 && dy < 10) return;

        if (!this._preventMove) {
          var f = this.moveFactor;
          var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sensitivity;
          if (this.hasMax && getTransform(this.scroll) > this.max && d > 0) {
            f = this.outFactor;
          } else if (this.hasMin && getTransform(this.scroll) < this.min && d < 0) {
            f = this.outFactor;
          }
          d *= f;
          this.preX = evt.touches[0].pageX;
          this.preY = evt.touches[0].pageY;
          setTransform(this.scroll, this.property, getTransform(this.scroll) + d);

          var timestamp = new Date().getTime();
          if (timestamp - this.startTime > 300) {
            this.startTime = timestamp;
            this.start = this.vertical ? this.preY : this.preX;
          }
          this.touchMove.call(this, evt, getTransform(this.scroll));

        }

        if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
          evt.preventDefault();
        }
      }
    },
    _end: function (evt) {
      if (this.isTouchStart) {
        var self = this,
          current = getTransform(this.scroll);
        if (this.touchEnd.call(this, evt, current) === false) {
          this._triggerTransitionEnd = false;
          cancelAnimationFrame(this.tickID);
          return;
        } else {
          this._triggerTransitionEnd = true;
        }
        if (this.hasMax && current > this.max) {
          this.to(this.max, 600, ease);
        } else if (this.hasMin && current < this.min) {
          this.to(this.min, 600, ease);
        } else if (this.inertia && !this._preventMove) {
          var dt = new Date().getTime() - this.startTime;
          if (dt < 300) {

            var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
              speed = Math.abs(distance) / dt,
              speed2 = this.factor * speed;
            if (this.hasMaxSpeed && speed2 > this.maxSpeed) {
              speed2 = this.maxSpeed;
            }
            var destination = current + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

            var tRatio = 1;
            if (destination < this.min) {
              if (destination < this.min - this.maxRegion) {
                tRatio = reverseEase((current - this.min + this.springMaxRegion) / (current - destination));
                destination = this.min - this.springMaxRegion;
              } else {
                tRatio = reverseEase((current - this.min + this.springMaxRegion * (this.min - destination) / this.maxRegion) / (current - destination));
                destination = this.min - this.springMaxRegion * (this.min - destination) / this.maxRegion;
              }
            } else if (destination > this.max) {
              if (destination > this.max + this.maxRegion) {
                tRatio = reverseEase((this.max + this.springMaxRegion - current) / (destination - current));
                destination = this.max + this.springMaxRegion;
              } else {
                tRatio = reverseEase((this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion - current) / (destination - current));
                destination = this.max + this.springMaxRegion * (destination - this.max) / this.maxRegion;

              }
            }
            var duration = Math.round(speed / self.deceleration) * tRatio;

            self.to(Math.round(destination), duration, ease);
          } else {
            if (self.step) {
              self.correction();
            }
          }
        } else {
          if (self.step) {
            self.correction();
          }
        }
        // if (this.preventDefault && !preventDefaultTest(evt.target, this.preventDefaultException)) {
        //     evt.preventDefault();
        // }
        this.isTouchStart = false;
      }
    },
    _cancel: function (evt) {
      cancelAnimationFrame(this.tickID);
      if (this.step) {
        this.correction();
      }
      this.touchCancel.call(this, evt);
    },
    to: function (value, time, u_ease) {
      var el = this.scroll,
        property = this.property;

      el.style[transitionDuration] = this._getValue(time, 600) + 'ms';
      el.style[transitionTimingFunction] = u_ease || ease;
      setTransform(el, property, value)
    },
    correction: function (time) {
      var time = typeof time === 'number' ? time : 400;

      var value = getTransform(this.scroll)
      var rpt = Math.floor(Math.abs(value / this.step));
      var dy = value % this.step;
      var result;
      if (Math.abs(dy) > this.step / 2) {
        result = (value < 0 ? -1 : 1) * (rpt + 1) * this.step;
        if (result > this.max) result = this.max;
        if (result < this.min) result = this.min;
        this.to(result, time, ease);
        this.index = (value < 0 ? -1 : 1) * (rpt + 1)
      } else {
        result = (value < 0 ? -1 : 1) * rpt * this.step;
        if (result > this.max) result = this.max;
        if (result < this.min) result = this.min;
        this.to(result, time, ease);
        this.index = (value < 0 ? -1 : 1) * rpt 
      }
    },
    destroy: function () {
      unbind(this.element, "touchstart", this._startHandler);
      unbind(this.scroll, endTransitionEventName, this._transitionEndHandler);
      unbind(window, "touchmove", this._moveHandler);
      unbind(window, "touchend", this._endHandler);
      unbind(window, "touchcancel", this._cancelHandler);
    }
  };

  if (true) {
    module.exports = PhyScroll;
  } else {}

})();


/***/ }),

/***/ "./src/scroll/index.scss":
/*!*******************************!*\
  !*** ./src/scroll/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.1@css-loader!../../node_modules/_resolve-url-loader@3.1.0@resolve-url-loader!../../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js??ref--4-3!./index.scss */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_resolve-url-loader@3.1.0@resolve-url-loader/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js?!./src/scroll/index.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/scroll/index.tsx":
/*!******************************!*\
  !*** ./src/scroll/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var css = __webpack_require__(/*! ./index.scss */ "./src/scroll/index.scss");
var omi_1 = __webpack_require__(/*! omi */ "omi");
var PhyScroll = __webpack_require__(/*! phy-scroll */ "./node_modules/_phy-scroll@1.0.3@phy-scroll/index.js");
var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scroll.prototype.installed = function () {
        var target = this.rootNode.firstChild;
        new PhyScroll({
            touch: this.rootNode,
            vertical: this.props.vertical === false ? false : true,
            scroll: target,
            min: this.props.min,
            max: this.props.max,
            sensitivity: this.props.sensitivity,
            factor: this.props.factor,
            step: this.props.step,
            bindSelf: this.props.bindSelf,
            preventDefault: this.props.preventDefault === false ? false : true,
            change: this.props.onChange,
            touchStart: this.props.onTouchStart,
            touchMove: this.props.onTouchMove,
            touchEnd: this.props.onTouchEnd,
            tap: this.props.onTap,
            pressMove: this.props.onPressMove,
            animationEnd: this.props.onAnimationEnd
        });
    };
    Scroll.prototype.render = function () {
        return this.props.children[0];
    };
    Scroll.css = css;
    Scroll.propTypes = {
        vertical: Boolean
    };
    Scroll = __decorate([
        omi_1.tag('m-scroll')
    ], Scroll);
    return Scroll;
}(omi_1.WeElement));
exports.default = Scroll;


/***/ }),

/***/ "omi":
/*!******************************************************************************!*\
  !*** external {"commonjs":"omi","commonjs2":"omi","amd":"omi","root":"Omi"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map