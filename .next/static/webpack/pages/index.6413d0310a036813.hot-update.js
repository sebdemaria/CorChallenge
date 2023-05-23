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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const { title , prio , status: savedStatus , description  } = toDo;\n    const { toDos , handleOpenModal  } = useAppContext();\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Edit,\n                        alt: \"edit\",\n                        onClick: handleOpenModal\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Cross,\n                        alt: \"edit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"AbJW19Wy3jSUNaxHkaSucVn7o1I=\", true, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUVRO0FBRUk7QUFDSjtBQUVLO0FBRW9CO0FBRXpELE1BQU1RLFdBQVcsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDN0IsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRVAsUUFBUVEsWUFBVyxFQUFFQyxZQUFXLEVBQUUsR0FBR0o7SUFFMUQsTUFBTSxFQUFFSyxNQUFLLEVBQUVDLGdCQUFlLEVBQUUsR0FBR0M7SUFFbkNkLHFEQUFjQTtJQUVkLHFCQUNJLDhEQUFDZTtRQUFJQyxXQUFXLEdBQWtCWCxPQUFmQSx5RkFBVyxFQUFDLEtBQWdCLE9BQWJBLG9GQUFNLENBQUNJLEtBQUs7OzBCQUMxQyw4REFBQ1M7Z0JBQUtGLFdBQVdYLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDTixtREFBS0E7d0JBQUNpQixXQUFXWCw0RkFBYzt3QkFBRWdCLEtBQUtqQiwrQ0FBSUE7d0JBQUVrQixLQUFJO3dCQUFPQyxTQUFTVjs7Ozs7O2tDQUNqRSw4REFBQ2QsbURBQUtBO3dCQUFDaUIsV0FBV1gsNEZBQWM7d0JBQUVnQixLQUFLbEIsZ0RBQUtBO3dCQUFFbUIsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUd0RCw4REFBQ0o7Z0JBQUtGLFdBQVdYLDBGQUFZOztrQ0FDekIsOERBQUNvQjs7NEJBQUU7NEJBQVl4QixxREFBUSxDQUFDUSxLQUFLOzs7Ozs7O2tDQUM3Qiw4REFBQ2dCOzs0QkFBRTs0QkFBU3ZCLGlEQUFNLENBQUNRLFlBQVk7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDZTtnQkFBRVQsV0FBV1gsMEZBQVk7O29CQUFFO2tDQUFRLDhEQUFDYTtrQ0FBTVY7Ozs7Ozs7Ozs7OzswQkFDM0MsOERBQUNpQjtnQkFBRVQsV0FBV1gsZ0dBQWtCOztvQkFBRTtvQkFBY007Ozs7Ozs7Ozs7Ozs7QUFHNUQsRUFBQztHQXZCWUw7O1FBS1ROLGlEQUFjQTs7O0tBTExNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eb0NhcmQuanN4P2IyZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgeyB1c2VNYW5hZ2VUb0RvcyB9IGZyb20gJ2hvb2tzJztcblxuaW1wb3J0IHsgcHJpb3JpdHkgfSBmcm9tICdjb25zdHMvcHJpb3JpdHknO1xuaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSAnY29uc3RzL3N0YXR1cyc7XG5cbmltcG9ydCB7IENyb3NzLCBFZGl0IH0gZnJvbSAncHVibGljL2Fzc2V0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2NvbXBvbmVudFN0eWxlcy9Ub0RvQ2FyZC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IFRvRG9DYXJkID0gKHsgdG9EbyB9KSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgcHJpbywgc3RhdHVzOiBzYXZlZFN0YXR1cywgZGVzY3JpcHRpb24gfSA9IHRvRG87XG5cbiAgICBjb25zdCB7IHRvRG9zLCBoYW5kbGVPcGVuTW9kYWwgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIHVzZU1hbmFnZVRvRG9zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzW3ByaW9dfWB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9IHNyYz17RWRpdH0gYWx0PVwiZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW5Nb2RhbH0gLz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30gc3JjPXtDcm9zc30gYWx0PVwiZWRpdFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwZWNzfT5cbiAgICAgICAgICAgICAgICA8cD5QcmlvcmlkYWQ6IHtwcmlvcml0eVtwcmlvXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RXN0YWRvOiB7c3RhdHVzW3NhdmVkU3RhdHVzXX08L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Uw610dWxvOiA8c3Bhbj57dGl0bGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5EZXNjcmlwY2nDs246IHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidXNlTWFuYWdlVG9Eb3MiLCJwcmlvcml0eSIsInN0YXR1cyIsIkNyb3NzIiwiRWRpdCIsInN0eWxlcyIsIlRvRG9DYXJkIiwidG9EbyIsInRpdGxlIiwicHJpbyIsInNhdmVkU3RhdHVzIiwiZGVzY3JpcHRpb24iLCJ0b0RvcyIsImhhbmRsZU9wZW5Nb2RhbCIsInVzZUFwcENvbnRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3BhbiIsImFjdGlvbnNDb250YWluZXIiLCJhY3Rpb25zIiwic3JjIiwiYWx0Iiwib25DbGljayIsInNwZWNzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});