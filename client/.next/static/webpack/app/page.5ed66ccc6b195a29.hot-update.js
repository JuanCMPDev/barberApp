"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Carousel.jsx":
/*!*************************************!*\
  !*** ./src/components/Carousel.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/dist/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst CarouselComponent = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            slideInterval: 5000,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"carousel-images/1.jpg\",\n                    alt: \"...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Carousel.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"carousel-images/2.jpg\",\n                    alt: \"...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Carousel.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"carousel-images/3.jpg\",\n                    alt: \"...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Carousel.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Carousel.jsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Carousel.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CarouselComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselComponent);\nvar _c;\n$RefreshReg$(_c, \"CarouselComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsLmpzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRTBDO0FBRTFDLE1BQU9DLG9CQUFvQjtJQUN2QixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0gsb0RBQVFBO1lBQUNJLGVBQWU7OzhCQUNyQiw4REFBQ0M7b0JBQUlDLEtBQUk7b0JBQXdCQyxLQUFJOzs7Ozs7OEJBQ3JDLDhEQUFDRjtvQkFBSUMsS0FBSTtvQkFBd0JDLEtBQUk7Ozs7Ozs4QkFDckMsOERBQUNGO29CQUFJQyxLQUFJO29CQUF3QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7S0FWT047QUFZUCwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsLmpzeD84OWQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiZmxvd2JpdGUtcmVhY3RcIjtcclxuXHJcbmNvbnN0ICBDYXJvdXNlbENvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTU2IHNtOmgtNjQgeGw6aC04MCAyeGw6aC05NiBtdC0yXCI+XHJcbiAgICAgICAgPENhcm91c2VsIHNsaWRlSW50ZXJ2YWw9ezUwMDB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImNhcm91c2VsLWltYWdlcy8xLmpwZ1wiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiY2Fyb3VzZWwtaW1hZ2VzLzIuanBnXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJjYXJvdXNlbC1pbWFnZXMvMy5qcGdcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENvbXBvbmVudDsiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJDYXJvdXNlbENvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsInNsaWRlSW50ZXJ2YWwiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Carousel.jsx\n"));

/***/ })

});