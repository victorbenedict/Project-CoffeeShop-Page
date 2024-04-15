/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_ContactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/ContactPage */ \"./src/pages/ContactPage.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/HomePage */ \"./src/pages/HomePage.js\");\n/* harmony import */ var _pages_MenuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/MenuPage */ \"./src/pages/MenuPage.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./src/components/NavButton.js\");\n\n\n\n\n\nconst NavBar = () => {\n  const container = document.getElementById('navbar');\n  container.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Home', _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  container.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Menu', _pages_MenuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n  container.appendChild((0,_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Contact Us', _pages_ContactPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/NavButton.js":
/*!*************************************!*\
  !*** ./src/components/NavButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleTabNavigation = (page) => {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n  page();\n};\n\nconst NavButton = (label, page) => {\n  const button = document.createElement('button');\n  button.textContent = label;\n  button.addEventListener('click', () => handleTabNavigation(page));\n\n  return button;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/components/NavButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.js\");\n\n\n\nconst initializePage = () => {\n  (0,_components_NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\ndocument.body.onload = initializePage;\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/ContactPage.js":
/*!**********************************!*\
  !*** ./src/pages/ContactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContactPage = () => {\n  const content = document.getElementById('content');\n  const createHeading = document.createElement('h1');\n\n  createHeading.textContent = 'Contact Us';\n  content.appendChild(createHeading);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/pages/ContactPage.js?");

/***/ }),

/***/ "./src/pages/HomePage.js":
/*!*******************************!*\
  !*** ./src/pages/HomePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuPage */ \"./src/pages/MenuPage.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactPage */ \"./src/pages/ContactPage.js\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavButton */ \"./src/components/NavButton.js\");\n\n\n\n\nconst HomePage = () => {\n  const content = document.getElementById('content');\n  const createHeading = document.createElement('h1');\n  const paragraph = document.createElement('p');\n  const buttonContainer = document.createElement('div');\n\n  createHeading.textContent = 'Welcome to SisBrew!';\n  paragraph.textContent =\n    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dolorem veniam dolorum ex, ipsa explicabo magnam accusamus aspernatur repellendus ut vero ducimus. Magni, illum qui incidunt error libero ex cupiditate!';\n\n  buttonContainer.appendChild((0,_components_NavButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Our Menu', _MenuPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n  buttonContainer.appendChild((0,_components_NavButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Contact Us', _ContactPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n  content.appendChild(createHeading);\n  content.appendChild(paragraph);\n  content.appendChild(buttonContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/pages/HomePage.js?");

/***/ }),

/***/ "./src/pages/MenuPage.js":
/*!*******************************!*\
  !*** ./src/pages/MenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MenuPage = () => {\n  const content = document.getElementById('content');\n  const createHeading = document.createElement('h1');\n\n  createHeading.textContent = 'Our Menu';\n  content.appendChild(createHeading);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPage);\n\n\n//# sourceURL=webpack://project-coffeeshop-page/./src/pages/MenuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;