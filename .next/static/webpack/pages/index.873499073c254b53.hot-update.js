"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./screens/ToDoListHome.jsx":
/*!**********************************!*\
  !*** ./screens/ToDoListHome.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoListHome\": function() { return /* binding */ ToDoListHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_ToDoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ToDoCard */ \"./components/ToDoCard.jsx\");\n/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Button */ \"./components/UI/Button.jsx\");\n/* harmony import */ var consts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! consts/actions */ \"./consts/actions.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/screensStyles/ToDoListHome.module.scss */ \"./styles/screensStyles/ToDoListHome.module.scss\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDoListHome = ()=>{\n    _s();\n    const { toDos , handleOpenModal , responseMessage , setToDos  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const orderedToDos = toDos.sort(function(a, b) {\n            return a - b;\n        });\n        console.log(orderedToDos);\n    }, [\n        toDos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().toDosSection),\n        children: [\n            responseMessage && (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.status) === consts_actions__WEBPACK_IMPORTED_MODULE_6__.submitResponse.OK ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().responseMessage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_7__.Check,\n                        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().check),\n                        alt: \"check mark\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().message),\n                        children: responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().responseMessage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().errorMessage),\n                    children: responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message\n                }, void 0, false, {\n                    fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UI_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                onClick: handleOpenModal,\n                children: \"Agregar tarea\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n                children: toDos.length ? toDos.map((toDo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ToDoCard__WEBPACK_IMPORTED_MODULE_4__.ToDoCard, {\n                        toDo: toDo\n                    }, index, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No tienes tareas creadas..\"\n                }, void 0, false, {\n                    fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoListHome, \"mHgNY3UsKMsLuhRH7sWtHpAtBlI=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext\n    ];\n});\n_c = ToDoListHome;\nvar _c;\n$RefreshReg$(_c, \"ToDoListHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL1RvRG9MaXN0SG9tZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBQ1A7QUFFZ0I7QUFDRjtBQUVHO0FBRVY7QUFFNEI7QUFFM0QsTUFBTVEsZUFBZSxJQUFNOztJQUM5QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsZ0JBQWUsRUFBRUMsZ0JBQWUsRUFBRUMsU0FBUSxFQUFFLEdBQUdYLG9EQUFhQTtJQUkzRUQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1hLGVBQWVKLE1BQU1LLElBQUksQ0FBQyxTQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtZQUM1QyxPQUFPRCxJQUFJQztRQUNmO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDaEIsR0FBRztRQUFDSjtLQUFNO0lBR1YscUJBQ0ksOERBQUNVO1FBQVFDLFdBQVdiLG1HQUFtQjs7WUFDakNJLG1CQUFtQkEsQ0FBQUEsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJXLE1BQU0sTUFBS2pCLDZEQUFpQixpQkFFOUQsOERBQUNtQjtnQkFBS0osV0FBV2Isc0dBQXNCOztrQ0FDbkMsOERBQUNMLG1EQUFLQTt3QkFBQ3VCLEtBQUtuQixnREFBS0E7d0JBQUVjLFdBQVdiLDRGQUFZO3dCQUFFb0IsS0FBSTs7Ozs7O2tDQUNoRCw4REFBQ0M7d0JBQUVSLFdBQVdiLDhGQUFjO2tDQUFHSSw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQmtCLE9BQU87Ozs7Ozs7Ozs7OzBDQUczRCw4REFBQ0w7Z0JBQUtKLFdBQVdiLHNHQUFzQjswQkFDbkMsNEVBQUNxQjtvQkFBRVIsV0FBV2IsbUdBQW1COzhCQUFHSSw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQmtCLE9BQU87Ozs7Ozs7Ozs7eUJBQ3pEOzBCQUdYLDhEQUFDekIsd0RBQU1BO2dCQUFDMkIsU0FBU3JCOzBCQUFpQjs7Ozs7OzBCQUVsQyw4REFBQ3NCO2dCQUFJWixXQUFXYixvR0FBb0I7MEJBQy9CRSxNQUFNeUIsTUFBTSxHQUNUekIsTUFBTTBCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDYiw4REFBQ2xDLHlEQUFRQTt3QkFBYWlDLE1BQU1BO3VCQUFiQzs7OzttREFHbkIsOERBQUNUOzhCQUFFOzs7Ozs2QkFBOEI7Ozs7Ozs7Ozs7OztBQUtyRCxFQUFDO0dBeENZcEI7O1FBQ3FEUCxnREFBYUE7OztLQURsRU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2NyZWVucy9Ub0RvTGlzdEhvbWUuanN4PzM2OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJ2hvb2tzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgVG9Eb0NhcmQgfSBmcm9tICdjb21wb25lbnRzL1RvRG9DYXJkJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5pbXBvcnQgeyBzdWJtaXRSZXNwb25zZSB9IGZyb20gJ2NvbnN0cy9hY3Rpb25zJztcblxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICdwdWJsaWMvYXNzZXRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvc2NyZWVuc1N0eWxlcy9Ub0RvTGlzdEhvbWUubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBjb25zdCBUb0RvTGlzdEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b0RvcywgaGFuZGxlT3Blbk1vZGFsLCByZXNwb25zZU1lc3NhZ2UsIHNldFRvRG9zIH0gPSB1c2VBcHBDb250ZXh0KCk7XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZFRvRG9zID0gdG9Eb3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cob3JkZXJlZFRvRG9zKTtcbiAgICB9LCBbdG9Eb3NdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50b0Rvc1NlY3Rpb259PlxuICAgICAgICAgICAgeyhyZXNwb25zZU1lc3NhZ2UgJiYgcmVzcG9uc2VNZXNzYWdlPy5zdGF0dXMgPT09IHN1Ym1pdFJlc3BvbnNlLk9LKVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXNwb25zZU1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtDaGVja30gY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2t9IGFsdD1cImNoZWNrIG1hcmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT57cmVzcG9uc2VNZXNzYWdlPy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNlTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e3Jlc3BvbnNlTWVzc2FnZT8ubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbH0+QWdyZWdhciB0YXJlYTwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHt0b0Rvcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB0b0Rvcy5tYXAoKHRvRG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9Eb0NhcmQga2V5PXtpbmRleH0gdG9Ebz17dG9Eb30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8cD5ObyB0aWVuZXMgdGFyZWFzIGNyZWFkYXMuLjwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VBcHBDb250ZXh0IiwiSW1hZ2UiLCJUb0RvQ2FyZCIsIkJ1dHRvbiIsInN1Ym1pdFJlc3BvbnNlIiwiQ2hlY2siLCJzdHlsZXMiLCJUb0RvTGlzdEhvbWUiLCJ0b0RvcyIsImhhbmRsZU9wZW5Nb2RhbCIsInJlc3BvbnNlTWVzc2FnZSIsInNldFRvRG9zIiwib3JkZXJlZFRvRG9zIiwic29ydCIsImEiLCJiIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0b0Rvc1NlY3Rpb24iLCJzdGF0dXMiLCJPSyIsInNwYW4iLCJzcmMiLCJjaGVjayIsImFsdCIsInAiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwib25DbGljayIsImRpdiIsImNhcmRDb250YWluZXIiLCJsZW5ndGgiLCJtYXAiLCJ0b0RvIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./screens/ToDoListHome.jsx\n"));

/***/ })

});