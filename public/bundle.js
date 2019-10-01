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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_calls__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', () => {
  Object(__WEBPACK_IMPORTED_MODULE_0__api_calls__["a" /* addCompanyInfo */])('AAPL').then(res => {
    console.log(res);
    const sym = document.getElementById('sym');
    const cName = document.getElementById('cName');
    const web = document.getElementById('web');
    const ceo = document.getElementById('ceo');
    const sec = document.getElementById('sec');
    const emp = document.getElementById('emp');
    const add = document.getElementById('add');
    const st = document.getElementById('st');
    const cty = document.getElementById('cty');
    const des = document.getElementById('des');

    sym.innerHTML = res.symbol;
    cName.innerHTML = res.companyName;
    web.innerHTML = res.website;
    web.href = res.website;
    ceo.innerHTML = res.CEO;
    sec.innerHTML = res.sector;
    emp.innerHTML = res.employees;
    add.innerHTML = res.address;
    st.innerHTML = res.state;
    cty.innerHTML = res.city;
    des.innerHTML = res.description;
  });
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const addCompanyInfo = sym => {
  return fetch(`/companyinfo/${sym}`).then(res => res.json());
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addCompanyInfo;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map