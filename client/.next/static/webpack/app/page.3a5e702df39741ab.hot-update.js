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

/***/ "(app-pages-browser)/./src/components/Booking.jsx":
/*!************************************!*\
  !*** ./src/components/Booking.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-3YEK3JGC.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/avatar/dist/chunk-QXREVWCS.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst barbers = [\n    {\n        name: \"Carlos L\\xf3pez\",\n        avatar: \"https://i.pravatar.cc/150?u=a042581f4e29026024h\"\n    },\n    {\n        name: \"Roberto D\\xedaz\",\n        avatar: \"https://i.pravatar.cc/150?u=a042581f4e29026024i\"\n    },\n    {\n        name: \"Marta S\\xe1nchez\",\n        avatar: \"https://i.pravatar.cc/150?u=a042581f4e29026024j\"\n    }\n];\nconst services = [\n    {\n        nombre: \"Corte de Cabello\",\n        descripcion: \"Corte de cabello para hombre\",\n        precio: \"40.000\"\n    },\n    {\n        nombre: \"Afeitado de Barba\",\n        descripcion: \"Afeitado y arreglo de barba\",\n        precio: \"25.000\"\n    },\n    {\n        nombre: \"Depilaci\\xf3n Facial\",\n        descripcion: \"Depilaci\\xf3n de cejas y bigote\",\n        precio: \"15.000\"\n    },\n    {\n        nombre: \"Tratamiento Facial\",\n        descripcion: \"Limpieza facial profunda\",\n        precio: \"50.000\"\n    }\n];\nconst BookingSection = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-extrabold text-center mb-6\",\n                children: \"Reserva tu Cita\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center gap-14\",\n                children: barbers.map((barber, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.dropdown_default, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.dropdown_trigger_default, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center flex-col my-4 cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.avatar_default, {\n                                            src: barber.avatar,\n                                            alt: barber.name,\n                                            size: \"lg\",\n                                            className: \"mb-4\",\n                                            isBordered: true,\n                                            color: \"warning\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-bold text-lg text-center\",\n                                            children: barber.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.dropdown_menu_default, {\n                                \"aria-label\": \"Barber Services\",\n                                items: services,\n                                children: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.menu_item_base_default, {\n                                        children: item.nombre\n                                    }, item.nombre, false, {\n                                        fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\components\\\\Booking.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BookingSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingSection);\nvar _c;\n$RefreshReg$(_c, \"BookingSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Jvb2tpbmcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFd0M7QUFDMEQ7QUFFbEcsTUFBTU8sVUFBVTtJQUNkO1FBQ0VDLE1BQU07UUFDTkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLFFBQVE7SUFDVjtDQUNEO0FBRUQsTUFBTUMsV0FBVztJQUNmO1FBQ0VDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFRixRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsUUFBUTtRQUNSQyxhQUFhO1FBQ2JDLFFBQVE7SUFDVjtJQUNBO1FBQ0VGLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVELE1BQU1DLGlCQUFpQjtJQUNyQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQzs7Ozs7OzBCQUN6RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pULFFBQVFXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNqQiwrREFBUUE7OzBDQUNQLDhEQUFDQyx1RUFBZUE7MENBQ2QsNEVBQUNXO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2QsNkRBQU1BOzRDQUFDbUIsS0FBS0YsT0FBT1YsTUFBTTs0Q0FBRWEsS0FBS0gsT0FBT1gsSUFBSTs0Q0FBRWUsTUFBSzs0Q0FBS1AsV0FBVTs0Q0FBT1EsVUFBVTs0Q0FBQ0MsT0FBTTs7Ozs7O3NEQUMxRiw4REFBQ0M7NENBQUVWLFdBQVU7c0RBQWlDRyxPQUFPWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHN0QsOERBQUNILG9FQUFZQTtnQ0FBQ3NCLGNBQVc7Z0NBQWtCQyxPQUFPbEI7MENBQy9DLENBQUNtQixxQkFDQSw4REFBQ3ZCLHFFQUFZQTtrREFDVnVCLEtBQUtsQixNQUFNO3VDQURLa0IsS0FBS2xCLE1BQU07Ozs7Ozs7Ozs7O3VCQVRyQlM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnpCO0tBekJNTjtBQTJCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Cb29raW5nLmpzeD81NDE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIERyb3Bkb3duLCBEcm9wZG93blRyaWdnZXIsIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xyXG5cclxuY29uc3QgYmFyYmVycyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQ2FybG9zIEzDs3BleicsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP3U9YTA0MjU4MWY0ZTI5MDI2MDI0aCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdSb2JlcnRvIETDrWF6JyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/dT1hMDQyNTgxZjRlMjkwMjYwMjRpJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01hcnRhIFPDoW5jaGV6JyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/dT1hMDQyNTgxZjRlMjkwMjYwMjRqJ1xyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG4gIHtcclxuICAgIG5vbWJyZTogJ0NvcnRlIGRlIENhYmVsbG8nLFxyXG4gICAgZGVzY3JpcGNpb246ICdDb3J0ZSBkZSBjYWJlbGxvIHBhcmEgaG9tYnJlJyxcclxuICAgIHByZWNpbzogJzQwLjAwMCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5vbWJyZTogJ0FmZWl0YWRvIGRlIEJhcmJhJyxcclxuICAgIGRlc2NyaXBjaW9uOiAnQWZlaXRhZG8geSBhcnJlZ2xvIGRlIGJhcmJhJyxcclxuICAgIHByZWNpbzogJzI1LjAwMCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5vbWJyZTogJ0RlcGlsYWNpw7NuIEZhY2lhbCcsXHJcbiAgICBkZXNjcmlwY2lvbjogJ0RlcGlsYWNpw7NuIGRlIGNlamFzIHkgYmlnb3RlJyxcclxuICAgIHByZWNpbzogJzE1LjAwMCdcclxuICB9LFxyXG4gIHtcclxuICAgIG5vbWJyZTogJ1RyYXRhbWllbnRvIEZhY2lhbCcsXHJcbiAgICBkZXNjcmlwY2lvbjogJ0xpbXBpZXphIGZhY2lhbCBwcm9mdW5kYScsXHJcbiAgICBwcmVjaW86ICc1MC4wMDAnXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgQm9va2luZ1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcHktMTBcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtY2VudGVyIG1iLTZcIj5SZXNlcnZhIHR1IENpdGE8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTE0XCI+XHJcbiAgICAgICAge2JhcmJlcnMubWFwKChiYXJiZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8RHJvcGRvd24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteS00IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17YmFyYmVyLmF2YXRhcn0gYWx0PXtiYXJiZXIubmFtZX0gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwibWItNFwiIGlzQm9yZGVyZWQgY29sb3I9XCJ3YXJuaW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyXCI+e2JhcmJlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ecm9wZG93blRyaWdnZXI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgYXJpYS1sYWJlbD1cIkJhcmJlciBTZXJ2aWNlc1wiIGl0ZW1zPXtzZXJ2aWNlc30+XHJcbiAgICAgICAgICAgICAgeyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGtleT17aXRlbS5ub21icmV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5ub21icmV9XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF2YXRhciIsIkRyb3Bkb3duIiwiRHJvcGRvd25UcmlnZ2VyIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiYmFyYmVycyIsIm5hbWUiLCJhdmF0YXIiLCJzZXJ2aWNlcyIsIm5vbWJyZSIsImRlc2NyaXBjaW9uIiwicHJlY2lvIiwiQm9va2luZ1NlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImJhcmJlciIsImluZGV4Iiwic3JjIiwiYWx0Iiwic2l6ZSIsImlzQm9yZGVyZWQiLCJjb2xvciIsInAiLCJhcmlhLWxhYmVsIiwiaXRlbXMiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Booking.jsx\n"));

/***/ })

});