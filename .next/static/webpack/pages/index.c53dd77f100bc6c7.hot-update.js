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

/***/ "./components/ToDoCard.jsx":
/*!*********************************!*\
  !*** ./components/ToDoCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const { title , prio , status: savedStatus , description  } = toDo;\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tooltip),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                                src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Edit,\n                                alt: \"edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tooltipText),\n                                children: \"Editar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Cross,\n                        alt: \"edit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"+mbjozPvzWLkN0nbXs6aT6MvzbU=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUVRO0FBRUk7QUFDSjtBQUVLO0FBRW9CO0FBRXpELE1BQU1RLFdBQVcsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDN0IsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRVAsUUFBUVEsWUFBVyxFQUFFQyxZQUFXLEVBQUUsR0FBR0o7SUFFMURQLHFEQUFjQTtJQUVkLHFCQUNJLDhEQUFDWTtRQUFJQyxXQUFXLEdBQWtCUixPQUFmQSx5RkFBVyxFQUFDLEtBQWdCLE9BQWJBLG9GQUFNLENBQUNJLEtBQUs7OzBCQUMxQyw4REFBQ007Z0JBQUtGLFdBQVdSLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDVTt3QkFBS0YsV0FBV1IsNEZBQWM7OzBDQUMzQiw4REFBQ04sbURBQUtBO2dDQUFDYyxXQUFXUiw0RkFBYztnQ0FBRWMsS0FBS2YsK0NBQUlBO2dDQUFFZ0IsS0FBSTs7Ozs7OzBDQUNqRCw4REFBQ0w7Z0NBQUtGLFdBQVdSLGdHQUFrQjswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ04sbURBQUtBO3dCQUFDYyxXQUFXUiw0RkFBYzt3QkFBRWMsS0FBS2hCLGdEQUFLQTt3QkFBRWlCLEtBQUk7Ozs7Ozs7Ozs7OzswQkFHdEQsOERBQUNMO2dCQUFLRixXQUFXUiwwRkFBWTs7a0NBQ3pCLDhEQUFDa0I7OzRCQUFFOzRCQUFZdEIscURBQVEsQ0FBQ1EsS0FBSzs7Ozs7OztrQ0FDN0IsOERBQUNjOzs0QkFBRTs0QkFBU3JCLGlEQUFNLENBQUNRLFlBQVk7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDYTtnQkFBRVYsV0FBV1IsMEZBQVk7O29CQUFFO2tDQUFRLDhEQUFDVTtrQ0FBTVA7Ozs7Ozs7Ozs7OzswQkFDM0MsOERBQUNlO2dCQUFFVixXQUFXUixnR0FBa0I7O29CQUFFO29CQUFjTTs7Ozs7Ozs7Ozs7OztBQUc1RCxFQUFDO0dBekJZTDs7UUFHVE4saURBQWNBOzs7S0FITE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvQ2FyZC5qc3g/YjJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZU1hbmFnZVRvRG9zIH0gZnJvbSAnaG9va3MnO1xuXG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gJ2NvbnN0cy9wcmlvcml0eSc7XG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tICdjb25zdHMvc3RhdHVzJztcblxuaW1wb3J0IHsgQ3Jvc3MsIEVkaXQgfSBmcm9tICdwdWJsaWMvYXNzZXRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvY29tcG9uZW50U3R5bGVzL1RvRG9DYXJkLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgVG9Eb0NhcmQgPSAoeyB0b0RvIH0pID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBwcmlvLCBzdGF0dXM6IHNhdmVkU3RhdHVzLCBkZXNjcmlwdGlvbiB9ID0gdG9EbztcblxuICAgIHVzZU1hbmFnZVRvRG9zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzW3ByaW9dfWB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcH0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0VkaXR9IGFsdD1cImVkaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwVGV4dH0+RWRpdGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0Nyb3NzfSBhbHQ9XCJlZGl0XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BlY3N9PlxuICAgICAgICAgICAgICAgIDxwPlByaW9yaWRhZDoge3ByaW9yaXR5W3ByaW9dfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Fc3RhZG86IHtzdGF0dXNbc2F2ZWRTdGF0dXNdfTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlTDrXR1bG86IDxzcGFuPnt0aXRsZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkRlc2NyaXBjacOzbjoge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VNYW5hZ2VUb0RvcyIsInByaW9yaXR5Iiwic3RhdHVzIiwiQ3Jvc3MiLCJFZGl0Iiwic3R5bGVzIiwiVG9Eb0NhcmQiLCJ0b0RvIiwidGl0bGUiLCJwcmlvIiwic2F2ZWRTdGF0dXMiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiYWN0aW9uc0NvbnRhaW5lciIsInRvb2x0aXAiLCJhY3Rpb25zIiwic3JjIiwiYWx0IiwidG9vbHRpcFRleHQiLCJzcGVjcyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});