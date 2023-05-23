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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const { id , title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    function handleRemoveToDo() {\n        removeToDo(id);\n    }\n    function handleEditToDo() {\n        handleOpenModal();\n        setToDoSelected(toDo);\n    }\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Edit,\n                        alt: \"edit\",\n                        onClick: handleEditToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Cross,\n                        alt: \"edit\",\n                        onClick: handleRemoveToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"M0rlC/oQWLubmvU7cpIKGQI+9po=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUV1QjtBQUVYO0FBQ0o7QUFFSztBQUVvQjtBQUV6RCxNQUFNUyxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQzdCLE1BQU0sRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRVIsUUFBUVMsWUFBVyxFQUFFQyxZQUFXLEVBQUUsR0FBR0w7SUFFOUQsTUFBTSxFQUFFTSxnQkFBZSxFQUFFQyxnQkFBZSxFQUFFLEdBQUdmLG9EQUFhQTtJQUUxRCxNQUFNLEVBQUVnQixXQUFVLEVBQUUsR0FBR2YscURBQWNBO0lBRXJDLFNBQVNnQixtQkFBbUI7UUFDeEJELFdBQVdQO0lBQ2Y7SUFFQSxTQUFTUyxpQkFBaUI7UUFDdEJKO1FBQ0FDLGdCQUFnQlA7SUFDcEI7SUFFQVAscURBQWNBO0lBRWQscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFXLEdBQWtCZCxPQUFmQSx5RkFBVyxFQUFDLEtBQWdCLE9BQWJBLG9GQUFNLENBQUNLLEtBQUs7OzBCQUMxQyw4REFBQ1c7Z0JBQUtGLFdBQVdkLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDUCxtREFBS0E7d0JBQUNxQixXQUFXZCw0RkFBYzt3QkFBRW1CLEtBQUtwQiwrQ0FBSUE7d0JBQUVxQixLQUFJO3dCQUFPQyxTQUFTVDs7Ozs7O2tDQUNqRSw4REFBQ25CLG1EQUFLQTt3QkFBQ3FCLFdBQVdkLDRGQUFjO3dCQUFFbUIsS0FBS3JCLGdEQUFLQTt3QkFBRXNCLEtBQUk7d0JBQU9DLFNBQVNWOzs7Ozs7Ozs7Ozs7MEJBR3RFLDhEQUFDSztnQkFBS0YsV0FBV2QsMEZBQVk7O2tDQUN6Qiw4REFBQ3VCOzs0QkFBRTs0QkFBWTNCLHFEQUFRLENBQUNTLEtBQUs7Ozs7Ozs7a0NBQzdCLDhEQUFDa0I7OzRCQUFFOzRCQUFTMUIsaURBQU0sQ0FBQ1MsWUFBWTs7Ozs7Ozs7Ozs7OzswQkFHbkMsOERBQUNpQjtnQkFBRVQsV0FBV2QsMEZBQVk7O29CQUFFO2tDQUFRLDhEQUFDZ0I7a0NBQU1aOzs7Ozs7Ozs7Ozs7MEJBQzNDLDhEQUFDbUI7Z0JBQUVULFdBQVdkLGdHQUFrQjs7b0JBQUU7b0JBQWNPOzs7Ozs7Ozs7Ozs7O0FBRzVELEVBQUM7R0FsQ1lOOztRQUdvQ1AsZ0RBQWFBO1FBRW5DQyxpREFBY0E7UUFXckNBLGlEQUFjQTs7O0tBaEJMTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeD9iMmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCwgdXNlTWFuYWdlVG9Eb3MgfSBmcm9tICdob29rcyc7XG5cbmltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSAnY29uc3RzL3ByaW9yaXR5JztcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2NvbnN0cy9zdGF0dXMnO1xuXG5pbXBvcnQgeyBDcm9zcywgRWRpdCB9IGZyb20gJ3B1YmxpYy9hc3NldHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9jb21wb25lbnRTdHlsZXMvVG9Eb0NhcmQubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBjb25zdCBUb0RvQ2FyZCA9ICh7IHRvRG8gfSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBwcmlvLCBzdGF0dXM6IHNhdmVkU3RhdHVzLCBkZXNjcmlwdGlvbiB9ID0gdG9EbztcblxuICAgIGNvbnN0IHsgaGFuZGxlT3Blbk1vZGFsLCBzZXRUb0RvU2VsZWN0ZWQgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgcmVtb3ZlVG9EbyB9ID0gdXNlTWFuYWdlVG9Eb3MoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRvRG8oKSB7XG4gICAgICAgIHJlbW92ZVRvRG8oaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRUb0RvKCkge1xuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcbiAgICAgICAgc2V0VG9Eb1NlbGVjdGVkKHRvRG8pO1xuICAgIH1cblxuICAgIHVzZU1hbmFnZVRvRG9zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzW3ByaW9dfWB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9IHNyYz17RWRpdH0gYWx0PVwiZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZUVkaXRUb0RvfSAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0Nyb3NzfSBhbHQ9XCJlZGl0XCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVG9Eb30gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BlY3N9PlxuICAgICAgICAgICAgICAgIDxwPlByaW9yaWRhZDoge3ByaW9yaXR5W3ByaW9dfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Fc3RhZG86IHtzdGF0dXNbc2F2ZWRTdGF0dXNdfTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlTDrXR1bG86IDxzcGFuPnt0aXRsZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkRlc2NyaXBjacOzbjoge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VBcHBDb250ZXh0IiwidXNlTWFuYWdlVG9Eb3MiLCJwcmlvcml0eSIsInN0YXR1cyIsIkNyb3NzIiwiRWRpdCIsInN0eWxlcyIsIlRvRG9DYXJkIiwidG9EbyIsImlkIiwidGl0bGUiLCJwcmlvIiwic2F2ZWRTdGF0dXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRvRG9TZWxlY3RlZCIsInJlbW92ZVRvRG8iLCJoYW5kbGVSZW1vdmVUb0RvIiwiaGFuZGxlRWRpdFRvRG8iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3BhbiIsImFjdGlvbnNDb250YWluZXIiLCJhY3Rpb25zIiwic3JjIiwiYWx0Iiwib25DbGljayIsInNwZWNzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});