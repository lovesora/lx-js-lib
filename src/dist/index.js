/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$ = exports.Compat = exports.Algorithm = exports.API = undefined;

var _api = __webpack_require__(2);

var _api2 = _interopRequireDefault(_api);

var _descartes = __webpack_require__(3);

var _classOpt = __webpack_require__(4);

var _classOpt2 = _interopRequireDefault(_classOpt);

var _detectBrowser = __webpack_require__(5);

var _detectBrowser2 = _interopRequireDefault(_detectBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Algorithm = {
    descartes: _descartes.descartes
};

exports.API = _api2.default;
exports.Algorithm = Algorithm;
exports.Compat = _detectBrowser2.default;
exports.$ = _classOpt2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
    function API() {
        var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof location !== "undefined" && location.origin || '';

        _classCallCheck(this, API);

        this.data = {};
        this.data.host = host;
    }

    _createClass(API, [{
        key: 'api',
        value: function api(method, url, newUrl) {
            // let urlFormat = url.split(/\//).filter(v => !!v).map((v, k) => !!k && v.replace(/^(\w)/,v => v.toUpperCase()) || v).join('');
            var urlFormat = method.toLowerCase() + url.split(/\//).filter(function (v) {
                return !!v;
            }).map(function (v) {
                return v.replace(/^(\w)/, function (v) {
                    return v.toUpperCase();
                });
            }).join('');
            url = !!newUrl && newUrl || url;
            var absUrl = this.data.host + url;
            this.data[urlFormat] = {
                method: method,
                url: url,
                absUrl: absUrl
            };
            return this;
        }
    }, {
        key: 'apis',
        value: function apis() {
            return this.data;
        }
    }]);

    return API;
}();

exports.default = API;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.descartes = descartes;
/**
 * 输入：{a: ['a1', 'a2', 'a3'], b: ['b1', 'b2']}
 * 输出：[ [ 'a1', 'b1' ], [ 'a1', 'b2' ], [ 'a2', 'b1' ], [ 'a2', 'b2' ], [ 'a3', 'b1' ], [ 'a3', 'b2' ] ]
 * 
 * @param {Object} list 
 */
function descartes(list) {
    //parent上一级索引;count指针计数  
    var point = {};
    var result = [];
    var pIndex = null;
    var tempCount = 0;
    var temp = [];
    //根据参数列生成指针对象  
    for (var index in list) {
        if (_typeof(list[index]) == 'object') {
            point[index] = {
                'parent': pIndex,
                'count': 0
            };
            pIndex = index;
        }
    }
    //单维度数据结构直接返回  
    if (pIndex == null) {
        return list;
    }
    //动态生成笛卡尔积  
    while (true) {
        for (var index in list) {
            tempCount = point[index]['count'];
            temp.push(list[index][tempCount]);
        }
        //压入结果数组  
        result.push(temp);
        temp = [];
        //检查指针最大值问题  
        while (true) {
            if (point[index]['count'] + 1 >= list[index].length) {
                point[index]['count'] = 0;
                pIndex = point[index]['parent'];
                if (pIndex == null) {
                    return result;
                }
                //赋值parent进行再次检查  
                index = pIndex;
            } else {
                point[index]['count']++;
                break;
            }
        }
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function () {
    function $() {
        _classCallCheck(this, $);
    }

    _createClass($, null, [{
        key: 'hasClass',
        value: function hasClass(ele, cls) {
            cls = cls || '';
            if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
            return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
        }
    }, {
        key: 'addClass',
        value: function addClass(ele, cls) {
            if (!$.hasClass(ele, cls)) {
                ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
            }
        }
    }, {
        key: 'removeClass',
        value: function removeClass(ele, cls) {
            if ($.hasClass(ele, cls)) {
                var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
                while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                    newClass = newClass.replace(' ' + cls + ' ', ' ');
                }
                ele.className = newClass.replace(/^\s+|\s+$/g, '');
            }
        }
    }, {
        key: 'toggleClass',
        value: function toggleClass(obj, cls) {
            $.hasClass(obj, cls) ? $.removeClass(obj, cls) : $.addClass(obj, cls);
        }
    }]);

    return $;
}();

exports.default = $;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Compat = function Compat() {
    _classCallCheck(this, Compat);
};

Compat.css = {
    /**
     * 判断浏览器是否支持动画
     * @return  {Boolean} true/false
     * @version 1.0
     * @author  liuxin
     * 2017-09-11 19:40:26
     */
    isAbleAnimate: function isAbleAnimate() {
        return Compat.css.isAbleByStyleName('animation');
    },


    /** 
     * 判断浏览器是否支持某一个CSS3属性 
     * @param   {String} 属性名称 
     * @return  {Boolean} true/false 
     * @version 1.0 
     * @author  liuxin 
     * 2017-09-11 19:24:47
     */
    isAbleByStyleName: function isAbleByStyleName(style) {
        var prefix = ['webkit', 'Moz', 'ms', 'o'],
            jsStyle = [style],
            htmlStyle = document.documentElement.style;

        jsStyle.push(prefix.map(function (pre) {
            return pre + style.replace(/^(\w)/, function (v) {
                return v.toUpperCase();
            });
        }));

        return jsStyle.filter(function (item) {
            return htmlStyle.hasOwnProperty(item);
        }).length > 0;
    }
};
Compat.browser = {
    /**
     * 获取微信客户端版本
     * @return  {string} 微信版本号，如果不是微信浏览器则返回 ''
     * @version 1.0
     * @author  liuxin
     * 2017-09-11 20:10:29
     */
    getWechatVersion: function getWechatVersion() {
        var wechatInfo = navigator.userAgent.match(/MicroMessenger\/(\d)\.(\d)\./i);
        return null === wechatInfo ? '' : wechatInfo[1] + '.' + wechatInfo[2];
    },


    /**
     * 获取浏览器版本信息
     * @return  {String} ['IE', 'IE7', 'IE8', 'IE9', 'IE10', 'IE11', 'FF', 'Opera', 'Safari', 'Chorome', 'Edge', 'Unknown']
     * @version 1.0
     * @author  LittleQiang_w
     * 2017-09-11 19:48:03
     */
    getType: function getType() {
        var userAgent = navigator.userAgent;
        var isOpera = userAgent.indexOf('Opera') > -1;
        var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
        var isEdge = userAgent.indexOf('Windows NT 6.1; Trident/7.0;') > -1 && !isIE;
        var isFF = userAgent.indexOf('Firefox') > -1;
        var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1;
        var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;

        if (isIE) {
            var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp['$1']);
            if (fIEVersion == 7) {
                return 'IE7';
            } else if (fIEVersion == 8) {
                return 'IE8';
            } else if (fIEVersion == 9) {
                return 'IE9';
            } else if (fIEVersion == 10) {
                return 'IE10';
            } else if (fIEVersion == 11) {
                return 'IE11';
            } else {
                return 'IE';
            }
        }

        if (isFF) {
            return 'FF';
        }
        if (isOpera) {
            return 'Opera';
        }
        if (isSafari) {
            return 'Safari';
        }
        if (isChrome) {
            return 'Chrome';
        }
        if (isEdge) {
            return 'Edge';
        }
        return 'Unknown';
    }
};
exports.default = Compat;

/***/ })
/******/ ]);