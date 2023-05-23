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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const { title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    function editToDo() {\n        handleOpenModal();\n        setToDoSelected(toDo);\n    }\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Edit,\n                        alt: \"edit\",\n                        onClick: editToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Cross,\n                        alt: \"edit\",\n                        onClick: (id)=>removeToDo(id)\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"M0rlC/oQWLubmvU7cpIKGQI+9po=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUV1QjtBQUVYO0FBQ0o7QUFFSztBQUVvQjtBQUV6RCxNQUFNUyxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQzdCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVQLFFBQVFRLFlBQVcsRUFBRUMsWUFBVyxFQUFFLEdBQUdKO0lBRTFELE1BQU0sRUFBRUssZ0JBQWUsRUFBRUMsZ0JBQWUsRUFBRSxHQUFHZCxvREFBYUE7SUFFMUQsTUFBTSxFQUFFZSxXQUFVLEVBQUUsR0FBR2QscURBQWNBO0lBRXJDLFNBQVNlLFdBQVc7UUFDaEJIO1FBQ0FDLGdCQUFnQk47SUFDcEI7SUFFQVAscURBQWNBO0lBRWQscUJBQ0ksOERBQUNnQjtRQUFJQyxXQUFXLEdBQWtCWixPQUFmQSx5RkFBVyxFQUFDLEtBQWdCLE9BQWJBLG9GQUFNLENBQUNJLEtBQUs7OzBCQUMxQyw4REFBQ1U7Z0JBQUtGLFdBQVdaLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDUCxtREFBS0E7d0JBQUNtQixXQUFXWiw0RkFBYzt3QkFBRWlCLEtBQUtsQiwrQ0FBSUE7d0JBQUVtQixLQUFJO3dCQUFPQyxTQUFTVDs7Ozs7O2tDQUNqRSw4REFBQ2pCLG1EQUFLQTt3QkFBQ21CLFdBQVdaLDRGQUFjO3dCQUFFaUIsS0FBS25CLGdEQUFLQTt3QkFBRW9CLEtBQUk7d0JBQU9DLFNBQVMsQ0FBQ0MsS0FBT1gsV0FBV1c7Ozs7Ozs7Ozs7OzswQkFHekYsOERBQUNOO2dCQUFLRixXQUFXWiwwRkFBWTs7a0NBQ3pCLDhEQUFDc0I7OzRCQUFFOzRCQUFZMUIscURBQVEsQ0FBQ1EsS0FBSzs7Ozs7OztrQ0FDN0IsOERBQUNrQjs7NEJBQUU7NEJBQVN6QixpREFBTSxDQUFDUSxZQUFZOzs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ2lCO2dCQUFFVixXQUFXWiwwRkFBWTs7b0JBQUU7a0NBQVEsOERBQUNjO2tDQUFNWDs7Ozs7Ozs7Ozs7OzBCQUMzQyw4REFBQ21CO2dCQUFFVixXQUFXWixnR0FBa0I7O29CQUFFO29CQUFjTTs7Ozs7Ozs7Ozs7OztBQUc1RCxFQUFDO0dBOUJZTDs7UUFHb0NQLGdEQUFhQTtRQUVuQ0MsaURBQWNBO1FBT3JDQSxpREFBY0E7OztLQVpMTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeD9iMmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCwgdXNlTWFuYWdlVG9Eb3MgfSBmcm9tICdob29rcyc7XG5cbmltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSAnY29uc3RzL3ByaW9yaXR5JztcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2NvbnN0cy9zdGF0dXMnO1xuXG5pbXBvcnQgeyBDcm9zcywgRWRpdCB9IGZyb20gJ3B1YmxpYy9hc3NldHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9jb21wb25lbnRTdHlsZXMvVG9Eb0NhcmQubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBjb25zdCBUb0RvQ2FyZCA9ICh7IHRvRG8gfSkgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIHByaW8sIHN0YXR1czogc2F2ZWRTdGF0dXMsIGRlc2NyaXB0aW9uIH0gPSB0b0RvO1xuXG4gICAgY29uc3QgeyBoYW5kbGVPcGVuTW9kYWwsIHNldFRvRG9TZWxlY3RlZCB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyByZW1vdmVUb0RvIH0gPSB1c2VNYW5hZ2VUb0RvcygpO1xuXG4gICAgZnVuY3Rpb24gZWRpdFRvRG8oKSB7XG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xuICAgICAgICBzZXRUb0RvU2VsZWN0ZWQodG9Ebyk7XG4gICAgfVxuXG4gICAgdXNlTWFuYWdlVG9Eb3MoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gJHtzdHlsZXNbcHJpb119YH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30gc3JjPXtFZGl0fSBhbHQ9XCJlZGl0XCIgb25DbGljaz17ZWRpdFRvRG99IC8+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9IHNyYz17Q3Jvc3N9IGFsdD1cImVkaXRcIiBvbkNsaWNrPXsoaWQpID0+IHJlbW92ZVRvRG8oaWQpfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGVjc30+XG4gICAgICAgICAgICAgICAgPHA+UHJpb3JpZGFkOiB7cHJpb3JpdHlbcHJpb119PC9wPlxuICAgICAgICAgICAgICAgIDxwPkVzdGFkbzoge3N0YXR1c1tzYXZlZFN0YXR1c119PC9wPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VMOtdHVsbzogPHNwYW4+e3RpdGxlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+RGVzY3JpcGNpw7NuOiB7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInVzZUFwcENvbnRleHQiLCJ1c2VNYW5hZ2VUb0RvcyIsInByaW9yaXR5Iiwic3RhdHVzIiwiQ3Jvc3MiLCJFZGl0Iiwic3R5bGVzIiwiVG9Eb0NhcmQiLCJ0b0RvIiwidGl0bGUiLCJwcmlvIiwic2F2ZWRTdGF0dXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRvRG9TZWxlY3RlZCIsInJlbW92ZVRvRG8iLCJlZGl0VG9EbyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiYWN0aW9uc0NvbnRhaW5lciIsImFjdGlvbnMiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiaWQiLCJzcGVjcyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});