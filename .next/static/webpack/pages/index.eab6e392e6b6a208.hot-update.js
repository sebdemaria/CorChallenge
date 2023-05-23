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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoListHome\": function() { return /* binding */ ToDoListHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_ToDoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ToDoCard */ \"./components/ToDoCard.jsx\");\n/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Button */ \"./components/UI/Button.jsx\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/screensStyles/ToDoListHome.module.scss */ \"./styles/screensStyles/ToDoListHome.module.scss\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ToDoListHome = ()=>{\n    _s();\n    const { toDos , handleOpenModal , responseMessage  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4___default().toDosSection),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UI_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleOpenModal,\n                children: \"Agregar tarea\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContainer),\n                children: toDos.map((toDo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ToDoCard__WEBPACK_IMPORTED_MODULE_1__.ToDoCard, {\n                        toDo: toDo\n                    }, index, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_4___default().responseMessage),\n                children: responseMessage\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoListHome, \"MwHLc8ZvtbP0VOP+N5/YKOY7fhY=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = ToDoListHome;\nvar _c;\n$RefreshReg$(_c, \"ToDoListHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL1RvRG9MaXN0SG9tZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQztBQUNGO0FBQ1A7QUFFNEI7QUFFM0QsTUFBTUksZUFBZSxJQUFNOztJQUM5QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsZ0JBQWUsRUFBRUMsZ0JBQWUsRUFBRSxHQUFHTCxvREFBYUE7SUFFakUscUJBQ0ksOERBQUNNO1FBQVFDLFdBQVdOLG1HQUFtQjs7MEJBQ25DLDhEQUFDRix3REFBTUE7Z0JBQUNVLFNBQVNMOzBCQUFpQjs7Ozs7OzBCQUVsQyw4REFBQ007Z0JBQUlILFdBQVdOLG9HQUFvQjswQkFDL0JFLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZCw4REFBQ2hCLHlEQUFRQTt3QkFBYWUsTUFBTUE7dUJBQWJDOzs7Ozs7Ozs7OzBCQUl2Qiw4REFBQ0M7Z0JBQUVSLFdBQVdOLHNHQUFzQjswQkFBR0k7Ozs7Ozs7Ozs7OztBQUduRCxFQUFDO0dBaEJZSDs7UUFDMkNGLGdEQUFhQTs7O0tBRHhERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zY3JlZW5zL1RvRG9MaXN0SG9tZS5qc3g/MzY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb0RvQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvVG9Eb0NhcmQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9VSS9CdXR0b24nXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnaG9va3MnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9zY3JlZW5zU3R5bGVzL1RvRG9MaXN0SG9tZS5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IFRvRG9MaXN0SG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvRG9zLCBoYW5kbGVPcGVuTW9kYWwsIHJlc3BvbnNlTWVzc2FnZSB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudG9Eb3NTZWN0aW9ufT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbk1vZGFsfT5BZ3JlZ2FyIHRhcmVhPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3RvRG9zLm1hcCgodG9EbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRvRG9DYXJkIGtleT17aW5kZXh9IHRvRG89e3RvRG99IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmVzcG9uc2VNZXNzYWdlfT57cmVzcG9uc2VNZXNzYWdlfTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJUb0RvQ2FyZCIsIkJ1dHRvbiIsInVzZUFwcENvbnRleHQiLCJzdHlsZXMiLCJUb0RvTGlzdEhvbWUiLCJ0b0RvcyIsImhhbmRsZU9wZW5Nb2RhbCIsInJlc3BvbnNlTWVzc2FnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0b0Rvc1NlY3Rpb24iLCJvbkNsaWNrIiwiZGl2IiwiY2FyZENvbnRhaW5lciIsIm1hcCIsInRvRG8iLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./screens/ToDoListHome.jsx\n"));

/***/ })

});