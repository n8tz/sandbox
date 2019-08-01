/** wi externals **/
require('webpack-inherit/etc/node/loadModulePaths.js').loadPaths({allModulePath:["layers","node_modules"],cDir:__dirname+'/..\..'},"dist\\api");/** /wi externals **/

module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App/.wpiConfig.json":
/*!*****************************!*\
  !*** ./App/.wpiConfig.json ***!
  \*****************************/
/*! exports provided: project, buildDate, profile, projectRoot, vars, allCfg, allModId, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"project\":{\"name\":\"widget-desk\",\"author\":\"Nathan Braun <n8tz.js@gmail.com>\",\"version\":\"1.0.0\"},\"buildDate\":1564675852675,\"profile\":\"api\",\"projectRoot\":\"G:\\\\n8tz\\\\sandbox\\\\test\",\"vars\":{\"rootAlias\":\"App\",\"targetDir\":\"dist/api\",\"DefinePluginCfg\":{\"__IS_DEV__\":true,\"__IS_SERVER__\":true},\"production\":false,\"externals\":true},\"allCfg\":[{\"basedOn\":\"defaultServer\",\"rootFolder\":\"App\",\"libsPath\":\"./layers\",\"vars\":{\"targetDir\":\"dist/api\",\"DefinePluginCfg\":{\"__IS_DEV__\":false,\"__IS_SERVER__\":true}},\"extend\":[\"widget-management\",\"wi-layer-redux-thunk\",\"wi-layer-react-express\"]},{\"rootFolder\":\"App\",\"vars\":{},\"extend\":[]},{\"rootFolder\":\"App\",\"extend\":[]},{\"rootFolder\":\"App\",\"config\":\"./etc/wp/webpack.config.api.js\",\"extend\":[]}],\"allModId\":[\"widget-management\",\"wi-layer-redux-thunk\",\"wi-layer-react-express\"]}");

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "undefined?9283");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var $super__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! $super */ "./layers/widget-management/App/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ui_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/components/(*).js */ "./App/MapOf.App_ui_components_____js.gen.js");
/* harmony import */ var _ui_containers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/containers/(*).js */ "./App/MapOf.App_ui_containers_____js.gen.js");
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/styles/index.scss */ "./App/ui/styles/index.scss");
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11__);







var _dec, _class, _temp;

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */






var App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (_ref) {
  var appState = _ref.appState;
  return {
    appState: appState
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "render",
    value: function render() {
      var _this$props$widgets = this.props.widgets,
          widgets = _this$props$widgets === void 0 ? {} : _this$props$widgets;

      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_components_js__WEBPACK_IMPORTED_MODULE_9__["AppBar"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_containers_js__WEBPACK_IMPORTED_MODULE_10__["ToolBar"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "desk"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement($super__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _temp)) || _class);


/***/ }),

/***/ "./App/MapOf.App_api_____js.gen.js":
/*!*****************************************!*\
  !*** ./App/MapOf.App_api_____js.gen.js ***!
  \*****************************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-react-express/App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var index = _exports.index;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_store_____actions_js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_store_____actions_js.gen.js ***!
  \***************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/actions\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/actions\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/actions\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var appState = _exports.appState;
var widgets = _exports.widgets;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_store_____initialState_js.gen.js":
/*!********************************************************!*\
  !*** ./App/MapOf.App_store_____initialState_js.gen.js ***!
  \********************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/initialState\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/initialState\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/initialState\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var appState = _exports.appState;
var widgets = _exports.widgets;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_store_____reducers_js.gen.js":
/*!****************************************************!*\
  !*** ./App/MapOf.App_store_____reducers_js.gen.js ***!
  \****************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/reducers\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/reducers\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/reducers\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var appState = _exports.appState;
var widgets = _exports.widgets;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_store_widgets_____actions_js.gen.js":
/*!***********************************************************!*\
  !*** ./App/MapOf.App_store_widgets_____actions_js.gen.js ***!
  \***********************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidget", function() { return WeatherWidget; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/actions\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/actions\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var WeatherWidget = _exports.WeatherWidget;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_store_widgets_____reducers_js.gen.js":
/*!************************************************************!*\
  !*** ./App/MapOf.App_store_widgets_____reducers_js.gen.js ***!
  \************************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidget", function() { return WeatherWidget; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/reducers\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\/reducers\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var WeatherWidget = _exports.WeatherWidget;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_ui_components_____js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_ui_components_____js.gen.js ***!
  \***************************************************/
/*! exports provided: AppBar, WeatherInfos, Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherInfos", function() { return WeatherInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-redux-thunk/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var AppBar = _exports.AppBar;
var WeatherInfos = _exports.WeatherInfos;
var Widget = _exports.Widget;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_ui_containers_____js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_ui_containers_____js.gen.js ***!
  \***************************************************/
/*! exports provided: ToolBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBar", function() { return ToolBar; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var ToolBar = _exports.ToolBar;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/MapOf.App_ui_widgets_____js.gen.js":
/*!************************************************!*\
  !*** ./App/MapOf.App_ui_widgets_____js.gen.js ***!
  \************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidget", function() { return WeatherWidget; });
/* This is a virtual file generated by webpack-inherit */
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
req = __webpack_require__("./layers/widget-management/App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$");
req.keys().forEach(function (key) {
  var mod,
      name = key.match(/^\.\/([^\\\/]+)\.js$/),
      i = 0,
      modExport = _exports;
  name = name && name[1] || key.substr(2);
  name = name.split('/');
  mod = req(key);

  while (i < name.length - 1) {
    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;
  }

  modExport[name[i]] = Object.keys(mod).length === 1 && mod["default"] || mod;
});
var WeatherWidget = _exports.WeatherWidget;
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*******************************************!*\
  !*** ./App/api sync ^\.\/([^\\\/]+)\.js$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./App/api/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./App/api/index.js":
/*!**************************!*\
  !*** ./App/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/index.js */ "./App/index.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


var wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ "./App/.wpiConfig.json"),
    fs = __webpack_require__(/*! fs */ "fs"),
    express = __webpack_require__(/*! express */ "undefined?22fe"),
    indexTpl = __webpack_require__(/*! ../index.html.tpl */ "./App/index.html.tpl");

var currentState;
/**
 * Add the rendering services to the main express instance
 * @param server {express}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (server) {
  var servePage = function servePage(req, res, next) {
    App_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderSSR({
      location: req.url,
      state: currentState,
      indexTpl: indexTpl
    }, function (err, html, nstate) {
      res.send(200, err && "" + err || html);
    });
  };

  server.get('/', servePage);
  server.get('/settings', servePage);
  server.use(express["static"](wpiConf.projectRoot + '/dist'));
  server.post('/', function (req, res, next) {
    console.log("New state pushed");
    currentState = req.body;
    res.send(200, 'ok');
  });
});

/***/ }),

/***/ "./App/index.html.tpl":
/*!****************************!*\
  !*** ./App/index.html.tpl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function () {
  var fn = function anonymous(it
/*``*/) {
var out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --><html lang="en"><head> <meta charset="UTF-8"> <title>Weather desk</title> <script>window.__STATE__  ='+(it.state || "{}")+';</script> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></head><body><div id="app">'+(it.app || '')+'</div><script src="./App.vendors.js"></script><script src="./App.js"></script></body></html>';return out;
};
  fn.render = fn;
  return fn;
})();

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ "./App/App.js");
/* harmony import */ var App_store_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/store/configure */ "./layers/wi-layer-redux-thunk/App/store/configure.js");
/* harmony import */ var App_store_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/store/initialState */ "./layers/wi-layer-redux-thunk/App/store/initialState.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "undefined?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader/root */ "undefined?328e");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */








var ctrl = {
  renderTo: function renderTo(node) {
    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = Object(App_store_configure__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState),
        isDev = "development" !== 'production',
        HMRApp = isDev ? Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__["hot"])(App_App__WEBPACK_IMPORTED_MODULE_0__["default"]) : App_App__WEBPACK_IMPORTED_MODULE_0__["default"];
    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HMRApp, null)), node);

    if (false) {}
  },
  renderSSR: function renderSSR(_ref, cb) {
    var state = _ref.state,
        location = _ref.location,
        indexTpl = _ref.indexTpl;
    var store = Object(App_store_configure__WEBPACK_IMPORTED_MODULE_1__["default"])(state || App_store_initialState__WEBPACK_IMPORTED_MODULE_2__["default"]);
    var content = "",
        html,
        preloadedState;

    try {
      content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
        location: location
      })));
      preloadedState = store.getState();
      html = indexTpl.render({
        app: content,
        state: JSON.stringify(preloadedState)
      });
    } catch (e) {
      html = indexTpl.render({
        app: "<div class=\"error\">".concat(e + "", "<br><pre>").concat(e.stack + "", "</pre></div>"),
        state: "{}"
      });
    }

    cb(null, html);
  }
};
if (typeof window !== 'undefined') window.App = ctrl;
/* harmony default export */ __webpack_exports__["default"] = (ctrl);

/***/ }),

/***/ "./App/index.server.js":
/*!*****************************!*\
  !*** ./App/index.server.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ "./App/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./layers/wi-layer-react-express/App/api.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */





var express = __webpack_require__(/*! express */ "undefined?22fe"),
    server = express(),
    http = __webpack_require__(/*! http */ "http").Server(server),
    argz = __webpack_require__(/*! minimist */ "undefined?2efa")(process.argv.slice(2)),
    wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ "./App/.wpiConfig.json"),
    debug = __webpack_require__(/*! App/console */ "./layers/wi-layer-react-express/App/console.js")["default"]("server");

process.title = wpiConf.project.name + '::server';
debug.log("process.env.DEBUG : ", process.env.DEBUG);
server.use(express.json()); // to support JSON-encoded bodies

server.use(express.urlencoded()); // to support URL-encoded bodies

Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])(server, http);
var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
  debug.info('Running on ', server_instance.address().port);
});

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!******************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./appState/actions.js": "./App/store/appState/actions.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$";

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!***********************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./appState/initialState.js": "./App/store/appState/initialState.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$";

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!*******************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./appState/reducers.js": "./App/store/appState/reducers.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$";

/***/ }),

/***/ "./App/store/appState/actions.js":
/*!***************************************!*\
  !*** ./App/store/appState/actions.js ***!
  \***************************************/
/*! exports provided: SAVING_STATE, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVING_STATE", function() { return SAVING_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

var SAVING_STATE = 'SAVING_STATE';
function saveState(then) {
  return function (dispatch, getState) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.post('/', getState()).then(function (res) {
      console.log('Saved');
    })["catch"](function (e) {
      console.log('Not Saved');
    });
  };
}

/***/ }),

/***/ "./App/store/appState/initialState.js":
/*!********************************************!*\
  !*** ./App/store/appState/initialState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
  selectedWidgetId: null
});

/***/ }),

/***/ "./App/store/appState/reducers.js":
/*!****************************************!*\
  !*** ./App/store/appState/reducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appState; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./App/store/appState/actions.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

function appState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!**************************************************************!*\
  !*** ./App/store/widgets sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./WeatherWidget/actions.js": "./App/store/widgets/WeatherWidget/actions.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$";

/***/ }),

/***/ "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!***************************************************************!*\
  !*** ./App/store/widgets sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./WeatherWidget/reducers.js": "./App/store/widgets/WeatherWidget/reducers.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$";

/***/ }),

/***/ "./App/store/widgets/WeatherWidget/actions.js":
/*!****************************************************!*\
  !*** ./App/store/widgets/WeatherWidget/actions.js ***!
  \****************************************************/
/*! exports provided: weatherSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherSearch", function() { return weatherSearch; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./layers/widget-management/App/store/widgets/actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


function weatherSearch(record, location, then) {
  return function (dispatch, getState) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateWidget"])(_objectSpread({}, record, {
      fetching: location
    })));
    return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(getState().appState.src + location).then(function (res) {
      var current = getState().widgets.items[record._id];

      if (current && current.fetching === location) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateWidget"])(_objectSpread({}, record, {
        fetching: false,
        fetched: Date.now(),
        results: res.body,
        location: location
      })));
    })["catch"](function (e) {
      var current = getState().widgets.items[record._id];

      if (current && current.fetching === location) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateWidget"])(_objectSpread({}, record, {
        fetching: false
      })));
    });
  };
}

/***/ }),

/***/ "./App/store/widgets/WeatherWidget/reducers.js":
/*!*****************************************************!*\
  !*** ./App/store/widgets/WeatherWidget/reducers.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return widgets; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./layers/widget-management/App/store/widgets/actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

function widgets(widget, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["WIDGET_CHANGED"]:
      return _objectSpread({}, widget, {}, action.record);

    default:
      return widget;
  }
}

/***/ }),

/***/ "./App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*****************************************************!*\
  !*** ./App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppBar.js": "./App/ui/components/AppBar.js",
	"./WeatherInfos.js": "./App/ui/components/WeatherInfos.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./App/ui/components/AppBar.js":
/*!*************************************!*\
  !*** ./App/ui/components/AppBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "undefined?91cd");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "undefined?36e2");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "undefined?0beb");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    position: "static",
    className: "AppBar"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    cvariant: "h6",
    color: "inherit",
    noWrap: true
  }, "Widget desk"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "tools"
  }, children)));
});

/***/ }),

/***/ "./App/ui/components/WeatherInfos.js":
/*!*******************************************!*\
  !*** ./App/ui/components/WeatherInfos.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "undefined?bd76");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var weatherData = _ref.weatherData,
      lastQuery = _ref.lastQuery;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "WeatherInfos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location"
  }, weatherData.name, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sub", null, "(", moment__WEBPACK_IMPORTED_MODULE_1___default()(weatherData.dt * 1000).fromNow(), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://source.unsplash.com/600x400/?day,sky," + weatherData.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picto"
  }, weatherData.weather[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + '.png'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), weatherData.weather[0] && weatherData.weather[0].description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "temp"
  }, weatherData.main.temp, "\xB0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wind"
  }, weatherData.wind.speed, " mh")));
});

/***/ }),

/***/ "./App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*****************************************************!*\
  !*** ./App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ToolBar.js": "./App/ui/containers/ToolBar.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./App/ui/containers/ToolBar.js":
/*!**************************************!*\
  !*** ./App/ui/containers/ToolBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "undefined?9283");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "undefined?8406");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Add */ "undefined?3b94");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Save */ "undefined?128e");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! App/store/actions */ "./layers/wi-layer-redux-thunk/App/store/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);







var _class, _temp;

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */






/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])()((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ToolBar, _React$Component);

  function ToolBar() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ToolBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ToolBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.newWidget = function (record) {
      var dispatch = _this.props.dispatch;
      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_9__["default"].widgets.newWidget({
        type: "WeatherWidget"
      }));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ToolBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dispatch = _this$props.dispatch,
          editable = _this$props.editable;

      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "ToolBar"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
        "aria-label": "new",
        size: "small",
        color: "secondary",
        onClick: this.newWidget
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default.a, null)), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
        "aria-label": "SaveState",
        size: "small",
        color: "secondary",
        onClick: function onClick(e) {
          return dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_9__["default"].appState.saveState());
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default.a, null))));
    }
  }]);

  return ToolBar;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component), _class.propTypes = {}, _temp)));

/***/ }),

/***/ "./App/ui/styles/index.scss":
/*!**********************************!*\
  !*** ./App/ui/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!**************************************************!*\
  !*** ./App/ui/widgets sync ^\.\/([^\\\/]+)\.js$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./WeatherWidget.js": "./App/ui/widgets/WeatherWidget.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./App/ui/widgets/WeatherWidget.js":
/*!*****************************************!*\
  !*** ./App/ui/widgets/WeatherWidget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherWidget; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "undefined?8406");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "undefined?a433");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Edit */ "undefined?52bc");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Save */ "undefined?128e");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! App/store/actions */ "./layers/wi-layer-redux-thunk/App/store/actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "undefined?3832");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/WeatherInfos.js */ "./App/ui/components/WeatherInfos.js");







var _dec, _class, _class2, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */









var WeatherWidget = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(function (state, props) {
  return {
    record: state.widgets.items[props.id]
  };
}, function (dispatch) {
  return _objectSpread({
    dispatch: dispatch
  }, App_store_actions__WEBPACK_IMPORTED_MODULE_10__["default"].widgets.WeatherWidget);
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WeatherWidget, _React$Component);

  function WeatherWidget() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WeatherWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WeatherWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.checkUpdate = function () {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          record = _this$props.record,
          weatherSearch = _this$props.weatherSearch;
      if (record.location && record.fetched < Date.now() - 1000 * 60) dispatch(weatherSearch(record, record.location));
    };

    _this.toggleEdit = function () {
      _this.setState({
        editing: !_this.state.editing
      });
    };

    _this.updateSearch = function (_ref) {
      var searching = _ref.target.value;
      var _this$props2 = _this.props,
          record = _this$props2.record,
          dispatch = _this$props2.dispatch,
          weatherSearch = _this$props2.weatherSearch;

      _this.setState({
        searching: searching
      });

      if (searching.length > 2) dispatch(weatherSearch(record, searching));
    };

    _this.stopPropagation = function (e) {
      return e.stopPropagation();
    };

    _this.doClose = function (e) {
      var _this$props3 = _this.props,
          record = _this$props3.record,
          onClose = _this$props3.onClose;
      onClose && onClose(record);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WeatherWidget, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props4 = this.props,
          dispatch = _this$props4.dispatch,
          record = _this$props4.record,
          weatherSearch = _this$props4.weatherSearch;
      if (record.location && !record.results) dispatch(weatherSearch(record, record.location));
      this._refreshTm = setInterval(this.checkUpdate, 1000 * 10);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this._refreshTm);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          record = _this$props5.record,
          dispatch = _this$props5.dispatch,
          editable = _this$props5.editable,
          onClose = _this$props5.onClose,
          _this$state = this.state,
          editing = _this$state.editing,
          searching = _this$state.searching;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "WeatherWidget"
      }, !editing && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, record.results && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        weatherData: record.results
      }) || record.fetching && "Loading...." || "Edit me !", editable && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
        "aria-label": "edit",
        className: "edit",
        onClick: this.toggleEdit
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
        "aria-label": "Delete",
        className: "delete",
        onClick: this.doClose
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null)))) || react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "search"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("input", {
        type: "text",
        onChange: this.updateSearch,
        value: searching !== undefined ? searching : record.location,
        onMouseDown: this.stopPropagation
      })), record.fetching && "Loading...." || record.results && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        weatherData: record.results
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
        "aria-label": "Save",
        className: "save",
        disabled: !!record.fetching,
        onClick: this.toggleEdit
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default.a, null))));
    }
  }]);

  return WeatherWidget;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component), _class2.propTypes = {
  record: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
}, _class2.defaultProps = {
  editable: true
}, _temp)) || _class);

;

/***/ }),

/***/ "./layers/wi-layer-react-express/App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*************************************************************************!*\
  !*** ./layers/wi-layer-react-express/App/api sync ^\.\/([^\\\/]+)\.js$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./App/api/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./layers/wi-layer-react-express/App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./layers/wi-layer-react-express/App/api.js":
/*!**************************************************!*\
  !*** ./layers/wi-layer-react-express/App/api.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).js */ "./App/MapOf.App_api_____js.gen.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */



var debug = __webpack_require__(/*! App/console */ "./layers/wi-layer-react-express/App/console.js")["default"]("server");

/* harmony default export */ __webpack_exports__["default"] = (function (server, http) {
  return Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"]).map(function (service) {
    return is__WEBPACK_IMPORTED_MODULE_0___default.a.fn(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service]) ? {
      name: service,
      priorityLevel: 0,
      service: _api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service]
    } : _api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service];
  }).sort(function (a, b) {
    return a.priorityLevel > b.priorityLevel ? -1 : 1;
  }).forEach(function (service) {
    try {
      service.service(server, http);
    } catch (e) {
      debug.error("Api fail loading service ", service.name, "\n", e);
    }
  });
});

/***/ }),

/***/ "./layers/wi-layer-react-express/App/console.js":
/*!******************************************************!*\
  !*** ./layers/wi-layer-react-express/App/console.js ***!
  \******************************************************/
/*! exports provided: console, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return d_console; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "undefined?0db5");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
var cfg = __webpack_require__(/*! App/.wpiConfig.json */ "./App/.wpiConfig.json"),
    debug = __webpack_require__(/*! debug-logger */ "undefined?63f7"),
    isFunction = __webpack_require__(/*! is */ "undefined?63a5")["function"],
    isBrowserSide = new Function("try {return this===window;}catch(e){ return false;}")(),
    debounce = __webpack_require__(/*! debounce */ "undefined?508e"),
    _console = !isBrowserSide && function _console(ns) {
  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return '';
  };

  var c = debug(ns),
      fn = function fn(ns2) {
    return new _console(ns + "::" + ns2);
  };

  for (var k in c) {
    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(c, nmFn(ns));
  }

  fn.beep = function () {
    process.stdout.write('\x07'); // do a beep

    this.error.apply(this, arguments);
  };

  return fn;
} || function _console(ns) {
  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return '';
  };

  var c = console,
      fn = function fn(ns2) {
    return new _console(ns + "::" + ns2);
  };

  for (var k in c) {
    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(console, nmFn(ns));
  }

  fn.beep = function () {
    this.error.apply(this, arguments);
  };

  return fn;
};

debug.inspectOptions = {
  colors: true
};
debug.debug.enable(cfg.project.name + '*');

console.watch = console.watch || function (oObj, sProp) {
  var sPrivateProp = "$_" + sProp + "_$"; // to minimize the name clash risk

  oObj[sPrivateProp] = oObj[sProp]; // overwrite with accessor

  Object.defineProperty(oObj, sProp, {
    get: function get() {
      return oObj[sPrivateProp];
    },
    set: function set(value) {
      console.log("setting " + sProp + " to " + value);
      debugger; // sets breakpoint

      oObj[sPrivateProp] = value;
    }
  });
}; // well group the react/vendors warns as they abuse of it each minors versions


isBrowserSide && !window.consoleHookDone && function () {
  window.consoleHookDone = true;

  function truncate(string, ln) {
    if (string.length > ln) return string.substring(0, ln) + '...';else return string;
  }

  ;
  var hookedWarn = console.warn,
      hookedError = console.error,
      recentWarn = [],
      recentErrors = [],
      warn = debounce(function () {
    console.groupCollapsed(" %d %cvendors warns happen%c (%s)", recentWarn.length, "color: orange; text-decoration: underline", "color: gray; font-style: italic;font-size:.8em", truncate(recentWarn.map(function (v) {
      return v.join(', ');
    }).join('\t'), 50));
    recentWarn.forEach(function (_ref) {
      var _console2;

      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
          argz = _ref2[0],
          trace = _ref2[1];

      (_console2 = console).groupCollapsed.apply(_console2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));

      hookedWarn.call(console, trace);
      console.groupEnd();
    });
    recentWarn = [];
    console.groupEnd();
  }, 2000),
      error = debounce(function () {
    console.groupCollapsed(" %d %cvendors errors happen%c (%s)", recentErrors.length, "color: red; text-decoration: underline", "color: gray; font-style: italic;font-size:.8em", truncate(recentErrors.map(function (v) {
      return v.join(', ');
    }).join('\t'), 50)); // recentErrors.forEach(argz => hookedWarn.apply(console, argz));

    recentErrors.forEach(function (_ref3) {
      var _console3;

      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
          argz = _ref4[0],
          trace = _ref4[1];

      (_console3 = console).groupCollapsed.apply(_console3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));

      hookedError.call(console, trace);
      console.groupEnd();
    });
    recentErrors = [];
    console.groupEnd();
  }, 2000);

  console.warn = function () {
    for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
      argz[_key] = arguments[_key];
    }

    if (!argz[0] && argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);
    recentWarn.push([argz, new Error().stack]);
    warn();
  };

  console.trace = function () {//if ( /^Caipi/.test(argz[0]) )
    //    return hookedWarn(...argz);
    //recentWarn.push([argz, (new Error()).stack]);
    //warn();
  };

  console.error = function () {
    for (var _len2 = arguments.length, argz = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      argz[_key2] = arguments[_key2];
    }

    if (argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);
    recentErrors.push([argz, new Error().stack]);
    error();
  };
}();
var d_console = new _console(cfg.project.name);

/* harmony default export */ __webpack_exports__["default"] = (d_console);

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!**********************************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$";

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!***************************************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$";

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!***********************************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$";

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store/actions.js":
/*!**********************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store/actions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "undefined?d325");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/actions.js */ "./App/MapOf.App_store_____actions_js.gen.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


/* harmony default export */ __webpack_exports__["default"] = (_actions_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store/configure.js":
/*!************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store/configure.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "undefined?d325");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "undefined?5aa9");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "undefined?8808");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./layers/wi-layer-redux-thunk/App/store/reducers.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */




function configureStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));

  if (false) {}

  return store;
}

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store/initialState.js":
/*!***************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store/initialState.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./(*)/initialState.js */ "./App/MapOf.App_store_____initialState_js.gen.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

/* harmony default export */ __webpack_exports__["default"] = (_initialState_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/store/reducers.js":
/*!***********************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/store/reducers.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "undefined?d325");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/reducers.js */ "./App/MapOf.App_store_____reducers_js.gen.js");
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*********************************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/wi-layer-redux-thunk/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./layers/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*********************************************************************************!*\
  !*** ./layers/wi-layer-redux-thunk/App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/App.js":
/*!*********************************************!*\
  !*** ./layers/widget-management/App/App.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "undefined?9283");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/store/actions */ "./layers/wi-layer-redux-thunk/App/store/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ui_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/components/(*).js */ "./App/MapOf.App_ui_components_____js.gen.js");
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/styles/index.scss */ "./App/ui/styles/index.scss");
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ui_widgets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/widgets/(*).js */ "./App/MapOf.App_ui_widgets_____js.gen.js");







var _dec, _class, _temp;

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */






var App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (_ref) {
  var widgets = _ref.widgets,
      appState = _ref.appState;
  return {
    widgets: widgets,
    appState: appState
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.rmWidget = function (record) {
      var dispatch = _this.props.dispatch;
      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__["default"].widgets.rmWidget(record._id));
    };

    _this.selectWidget = function (record) {
      var dispatch = _this.props.dispatch;
      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__["default"].widgets.selectWidget(record._id));
    };

    _this.updateWidget = function (record) {
      var dispatch = _this.props.dispatch;
      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__["default"].widgets.updateWidget(record));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$widgets = this.props.widgets,
          widgets = _this$props$widgets === void 0 ? {} : _this$props$widgets;

      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, Object.keys(widgets.items).map(function (wid) {
        var WidgetComp = _ui_widgets_js__WEBPACK_IMPORTED_MODULE_11__["default"][widgets.items[wid].type];
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_components_js__WEBPACK_IMPORTED_MODULE_9__["Widget"], {
          key: wid,
          record: widgets.items[wid],
          onSelect: _this2.selectWidget,
          onWidgetUpdated: _this2.updateWidget,
          selected: wid === widgets.selectedWidgetId
        }, WidgetComp && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WidgetComp, {
          id: wid,
          onClose: _this2.rmWidget
        }));
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _temp)) || _class);


/***/ }),

/***/ "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!*******************************************************************************!*\
  !*** ./layers/widget-management/App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./widgets/actions.js": "./layers/widget-management/App/store/widgets/actions.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!************************************************************************************!*\
  !*** ./layers/widget-management/App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./widgets/initialState.js": "./layers/widget-management/App/store/widgets/initialState.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!********************************************************************************!*\
  !*** ./layers/widget-management/App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./widgets/reducers.js": "./layers/widget-management/App/store/widgets/reducers.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./layers/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!***************************************************************************************!*\
  !*** ./layers/widget-management/App/store/widgets sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!****************************************************************************************!*\
  !*** ./layers/widget-management/App/store/widgets sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/store/widgets/actions.js":
/*!***************************************************************!*\
  !*** ./layers/widget-management/App/store/widgets/actions.js ***!
  \***************************************************************/
/*! exports provided: WIDGET_CHANGED, WIDGET_NEW, WIDGET_RM, SELECTED_WIDGET_CHANGED, selectWidget, newWidget, updateWidget, rmWidget, WeatherWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_CHANGED", function() { return WIDGET_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_NEW", function() { return WIDGET_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_RM", function() { return WIDGET_RM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_WIDGET_CHANGED", function() { return SELECTED_WIDGET_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWidget", function() { return selectWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newWidget", function() { return newWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWidget", function() { return updateWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rmWidget", function() { return rmWidget; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "undefined?beec");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./(*)/actions.js */ "./App/MapOf.App_store_widgets_____actions_js.gen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherWidget", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_2__["WeatherWidget"]; });



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

var WIDGET_CHANGED = 'WIDGET_CHANGED';
var WIDGET_NEW = 'WIDGET_NEW';
var WIDGET_RM = 'WIDGET_RM';
var SELECTED_WIDGET_CHANGED = 'SELECTED_WIDGET_CHANGED';

function selectWidget(wid) {
  return {
    type: SELECTED_WIDGET_CHANGED,
    wid: wid
  };
}
function newWidget(record) {
  return {
    type: WIDGET_NEW,
    record: _objectSpread({
      _id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      size: {
        width: 350,
        height: 400
      },
      position: {
        x: 100 + ~~(Math.random() * 600),
        y: 100 + ~~(Math.random() * 600)
      }
    }, record)
  };
}
function updateWidget(record) {
  return {
    type: WIDGET_CHANGED,
    record: record
  };
}
function rmWidget(wid) {
  return {
    type: WIDGET_RM,
    wid: wid
  };
}

/***/ }),

/***/ "./layers/widget-management/App/store/widgets/initialState.js":
/*!********************************************************************!*\
  !*** ./layers/widget-management/App/store/widgets/initialState.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  selectedWidgetId: null,
  items: {
    "rkUQHZrqM": {
      "_id": "rkUQHZrqM",
      "location": "Lisbonne",
      "type": "WeatherWidget",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 403,
        "y": 111
      }
    },
    "YDNiVOf1j": {
      "_id": "YDNiVOf1j",
      "type": "WeatherWidget",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 21,
        "y": 108
      },
      "location": "paris"
    },
    "FkQ3V9Hcb": {
      "_id": "FkQ3V9Hcb",
      "type": "WeatherWidget",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 771,
        "y": 108
      },
      "location": "rome"
    },
    "bYNiMYG_0": {
      "_id": "bYNiMYG_0",
      "type": "WeatherWidget",
      "size": {
        "width": 514,
        "height": 329
      },
      "position": {
        "x": 28,
        "y": 525
      },
      "location": "marseille"
    },
    "5SJehewl2": {
      "_id": "5SJehewl2",
      "type": "WeatherWidget",
      "size": {
        "width": 563,
        "height": 328
      },
      "position": {
        "x": 558,
        "y": 526
      },
      "location": "montpellier"
    }
  }
});

/***/ }),

/***/ "./layers/widget-management/App/store/widgets/reducers.js":
/*!****************************************************************!*\
  !*** ./layers/widget-management/App/store/widgets/reducers.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return widgets; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/reducers.js */ "./App/MapOf.App_store_widgets_____reducers_js.gen.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./layers/widget-management/App/store/widgets/actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */


function widgets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    items: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["SELECTED_WIDGET_CHANGED"]:
      return _objectSpread({}, state, {
        selectedWidgetId: action.wid
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["WIDGET_CHANGED"]:
      var lastWState = state.items[action.record._id];
      return _objectSpread({}, state, {
        items: _objectSpread({}, state.items, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.record._id, _reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"][lastWState.type](lastWState, action)))
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["WIDGET_NEW"]:
      return _objectSpread({}, state, {
        items: _objectSpread({}, state.items, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.record._id, action.record))
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["WIDGET_RM"]:
      var newState = _objectSpread({}, state, {
        items: _objectSpread({}, state.items)
      });

      delete newState.items[action.wid];
      return newState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./layers/widget-management/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!******************************************************************************!*\
  !*** ./layers/widget-management/App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Widget.js": "./layers/widget-management/App/ui/components/Widget.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./layers/widget-management/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/ui/components/Widget.js":
/*!**************************************************************!*\
  !*** ./layers/widget-management/App/ui/components/Widget.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "undefined?3832");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ "undefined?84ab");
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_8__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */



var resizeHandles = {
  bottom: true,
  bottomLeft: true,
  bottomRight: true,
  left: true,
  right: true,
  top: true,
  topLeft: true,
  topRight: true
};

var Widget =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Widget, _React$Component);

  function Widget() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Widget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Widget)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.saveState = function (e, d) {
      var _this$props = _this.props,
          onWidgetUpdated = _this$props.onWidgetUpdated,
          record = _this$props.record;
      onWidgetUpdated(_objectSpread({}, record, {
        size: _this.state.size || record.size,
        position: _this.state.position || record.position
      }));
    };

    _this.select = function (e, d) {
      var _this$props2 = _this.props,
          record = _this$props2.record,
          onSelect = _this$props2.onSelect,
          selected = _this$props2.selected;
      !selected && onSelect(record);
    };

    _this.drag = function (e, d) {
      var _this$props3 = _this.props,
          record = _this$props3.record,
          onSelect = _this$props3.onSelect,
          selected = _this$props3.selected;
      !selected && onSelect(record);

      _this.setState({
        position: {
          x: d.x,
          y: d.y
        }
      });
    };

    _this.resize = function (e, direction, ref, delta, position) {
      _this.setState({
        position: position,
        size: {
          width: ref.offsetWidth,
          height: ref.offsetHeight
        }
      });
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Widget, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          _this$props4$record = _this$props4.record;
      _this$props4$record = _this$props4$record === void 0 ? {} : _this$props4$record;
      var position = _this$props4$record.position,
          size = _this$props4$record.size,
          children = _this$props4.children,
          editable = _this$props4.editable,
          selected = _this$props4.selected,
          state = this.state;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_rnd__WEBPACK_IMPORTED_MODULE_8__["Rnd"], {
        className: "Widget",
        disableDragging: !editable,
        enableResizing: editable && resizeHandles,
        style: {
          zIndex: selected ? 2000 : 1
        },
        size: state.size || size,
        position: state.position || position,
        onDragStop: this.saveState,
        onResizeStop: this.saveState,
        onDrag: this.drag,
        onResize: this.resize,
        onClick: this.select
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content"
      }, children));
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Widget.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  record: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  onWidgetUpdated: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
Widget.defaultProps = {
  editable: true,
  onWidgetUpdated: function onWidgetUpdated(state) {
    return false;
  },
  onSelect: function onSelect(state) {
    return false;
  }
};

;

/***/ }),

/***/ "./layers/widget-management/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!******************************************************************************!*\
  !*** ./layers/widget-management/App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/widget-management/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ "./layers/widget-management/App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!***************************************************************************!*\
  !*** ./layers/widget-management/App/ui/widgets sync ^\.\/([^\\\/]+)\.js$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./layers/widget-management/App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$";

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi App/index.server ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! App/index.server */"./App/index.server.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?0beb":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "undefined?0db5":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "undefined?128e":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "undefined?188d":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?22fe":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),

/***/ "undefined?328e":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?36e2":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "undefined?3832":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "undefined?3b94":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?508e":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "undefined?52bc":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?5aa9":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "undefined?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),

/***/ "undefined?63f7":
/*!*******************************!*\
  !*** external "debug-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug-logger");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?78cd":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "undefined?8406":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "undefined?84ab":
/*!****************************!*\
  !*** external "react-rnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),

/***/ "undefined?8808":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "undefined?91cd":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "undefined?9283":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/objectDestructuringEmpty" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectDestructuringEmpty");

/***/ }),

/***/ "undefined?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "undefined?a026":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "undefined?a433":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "undefined?bd76":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "undefined?beec":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "undefined?d325":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=App.server.js.map