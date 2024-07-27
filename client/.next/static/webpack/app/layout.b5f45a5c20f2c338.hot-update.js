"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/AuthContext.jsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SessionProvider: function() { return /* binding */ SessionProvider; },\n/* harmony export */   useSession: function() { return /* binding */ useSession; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst SessionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useSession = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SessionContext);\n};\n_s(useSession, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst SessionProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        const user = localStorage.getItem(\"currentUser\");\n        return user ? JSON.parse(user) : {};\n    });\n    const login = async (data)=>{\n        try {\n            const res = await fetch(\"http://localhost:8800/api/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data),\n                credentials: \"include\"\n            });\n            const user = await res.json();\n            // Actualiza el estado con la información del usuario\n            setCurrentUser(user);\n            // Almacena la información del usuario en localStorage\n            localStorage.setItem(\"currentUser\", JSON.stringify(user));\n            return res;\n        } catch (error) {\n            console.error(\"Error en la solicitud de login:\", error);\n            return {\n                ok: false,\n                message: error.message\n            };\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SessionContext.Provider, {\n        value: {\n            currentUser,\n            setCurrentUser,\n            login\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\fullstack\\\\react-talento-tech\\\\proyecto-final\\\\barberApp\\\\client\\\\src\\\\context\\\\AuthContext.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(SessionProvider, \"98tgCgGEF1YmX/SswPX7acFUvY0=\");\n_c = SessionProvider;\nvar _c;\n$RefreshReg$(_c, \"SessionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBRW5FLE1BQU1JLCtCQUFpQkgsb0RBQWFBO0FBRTdCLE1BQU1JLGFBQWE7O0lBQU1ILE9BQUFBLGlEQUFVQSxDQUFDRTtBQUFjLEVBQUU7R0FBOUNDO0FBRU4sTUFBTUMsa0JBQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMxQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7UUFDN0MsTUFBTU8sT0FBT0MsYUFBYUMsT0FBTyxDQUFDO1FBQ2xDLE9BQU9GLE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0osUUFBUSxDQUFDO0lBQ3BDO0lBRUEsTUFBTUssUUFBUSxPQUFPQztRQUNuQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHdDQUF3QztnQkFDOURDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNDLE1BQU1SLEtBQUtTLFNBQVMsQ0FBQ047Z0JBQ3JCTyxhQUFhO1lBQ2Y7WUFFQSxNQUFNYixPQUFPLE1BQU1PLElBQUlPLElBQUk7WUFFM0IscURBQXFEO1lBQ3JEZixlQUFlQztZQUVmLHNEQUFzRDtZQUN0REMsYUFBYWMsT0FBTyxDQUFDLGVBQWVaLEtBQUtTLFNBQVMsQ0FBQ1o7WUFFbkQsT0FBT087UUFDVCxFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDakQsT0FBTztnQkFBRUUsSUFBSTtnQkFBT0MsU0FBU0gsTUFBTUcsT0FBTztZQUFDO1FBQzdDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3pCLGVBQWUwQixRQUFRO1FBQUNDLE9BQU87WUFBRXZCO1lBQWFDO1lBQWdCTTtRQUFNO2tCQUNsRVI7Ozs7OztBQUdQLEVBQUU7SUFuQ1dEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LmpzeD84MTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNlc3Npb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNlc3Npb24gPSAoKSA9PiB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXNzaW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICByZXR1cm4gdXNlciA/IEpTT04ucGFyc2UodXNlcikgOiB7fTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0Ojg4MDAvYXBpL2F1dGgvbG9naW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFjdHVhbGl6YSBlbCBlc3RhZG8gY29uIGxhIGluZm9ybWFjacOzbiBkZWwgdXN1YXJpb1xyXG4gICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcclxuXHJcbiAgICAgIC8vIEFsbWFjZW5hIGxhIGluZm9ybWFjacOzbiBkZWwgdXN1YXJpbyBlbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVuIGxhIHNvbGljaXR1ZCBkZSBsb2dpbjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IG9rOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2Vzc2lvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyLCBsb2dpbiB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TZXNzaW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiU2Vzc2lvbkNvbnRleHQiLCJ1c2VTZXNzaW9uIiwiU2Vzc2lvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsImRhdGEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJqc29uIiwic2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsIm9rIiwibWVzc2FnZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/AuthContext.jsx\n"));

/***/ })

});