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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const { id , title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected , setResponseMessage  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    function handleRemoveToDo() {\n        try {\n            removeToDo(id);\n            setResponseMessage(\"\");\n        } catch (error) {\n            setResponseMessage(e.message);\n        }\n    }\n    function handleEditToDo() {\n        handleOpenModal();\n        setToDoSelected(toDo);\n    }\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Edit,\n                        alt: \"edit\",\n                        onClick: handleEditToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_6__.Cross,\n                        alt: \"edit\",\n                        onClick: handleRemoveToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"r2sdh+q6UWvdq3hPsP7ISdbc8N4=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUV1QjtBQUVYO0FBQ0o7QUFFSztBQUVvQjtBQUV6RCxNQUFNUyxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQzdCLE1BQU0sRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRVIsUUFBUVMsWUFBVyxFQUFFQyxZQUFXLEVBQUUsR0FBR0w7SUFFOUQsTUFBTSxFQUFFTSxnQkFBZSxFQUFFQyxnQkFBZSxFQUFFQyxtQkFBa0IsRUFBRSxHQUFHaEIsb0RBQWFBO0lBRTlFLE1BQU0sRUFBRWlCLFdBQVUsRUFBRSxHQUFHaEIscURBQWNBO0lBRXJDLFNBQVNpQixtQkFBbUI7UUFDeEIsSUFBSTtZQUNBRCxXQUFXUjtZQUNYTyxtQkFBbUI7UUFDdkIsRUFBRSxPQUFPRyxPQUFPO1lBQ1pILG1CQUFtQkksRUFBRUMsT0FBTztRQUNoQztJQUNKO0lBRUEsU0FBU0MsaUJBQWlCO1FBQ3RCUjtRQUNBQyxnQkFBZ0JQO0lBQ3BCO0lBRUFQLHFEQUFjQTtJQUVkLHFCQUNJLDhEQUFDc0I7UUFBSUMsV0FBVyxHQUFrQmxCLE9BQWZBLHlGQUFXLEVBQUMsS0FBZ0IsT0FBYkEsb0ZBQU0sQ0FBQ0ssS0FBSzs7MEJBQzFDLDhEQUFDZTtnQkFBS0YsV0FBV2xCLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDUCxtREFBS0E7d0JBQUN5QixXQUFXbEIsNEZBQWM7d0JBQUV1QixLQUFLeEIsK0NBQUlBO3dCQUFFeUIsS0FBSTt3QkFBT0MsU0FBU1Q7Ozs7OztrQ0FDakUsOERBQUN2QixtREFBS0E7d0JBQUN5QixXQUFXbEIsNEZBQWM7d0JBQUV1QixLQUFLekIsZ0RBQUtBO3dCQUFFMEIsS0FBSTt3QkFBT0MsU0FBU2I7Ozs7Ozs7Ozs7OzswQkFHdEUsOERBQUNRO2dCQUFLRixXQUFXbEIsMEZBQVk7O2tDQUN6Qiw4REFBQzJCOzs0QkFBRTs0QkFBWS9CLHFEQUFRLENBQUNTLEtBQUs7Ozs7Ozs7a0NBQzdCLDhEQUFDc0I7OzRCQUFFOzRCQUFTOUIsaURBQU0sQ0FBQ1MsWUFBWTs7Ozs7Ozs7Ozs7OzswQkFHbkMsOERBQUNxQjtnQkFBRVQsV0FBV2xCLDBGQUFZOztvQkFBRTtrQ0FBUSw4REFBQ29CO2tDQUFNaEI7Ozs7Ozs7Ozs7OzswQkFDM0MsOERBQUN1QjtnQkFBRVQsV0FBV2xCLGdHQUFrQjs7b0JBQUU7b0JBQWNPOzs7Ozs7Ozs7Ozs7O0FBRzVELEVBQUM7R0F2Q1lOOztRQUd3RFAsZ0RBQWFBO1FBRXZEQyxpREFBY0E7UUFnQnJDQSxpREFBY0E7OztLQXJCTE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvQ2FyZC5qc3g/YjJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZUFwcENvbnRleHQsIHVzZU1hbmFnZVRvRG9zIH0gZnJvbSAnaG9va3MnO1xuXG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gJ2NvbnN0cy9wcmlvcml0eSc7XG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tICdjb25zdHMvc3RhdHVzJztcblxuaW1wb3J0IHsgQ3Jvc3MsIEVkaXQgfSBmcm9tICdwdWJsaWMvYXNzZXRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvY29tcG9uZW50U3R5bGVzL1RvRG9DYXJkLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgVG9Eb0NhcmQgPSAoeyB0b0RvIH0pID0+IHtcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgcHJpbywgc3RhdHVzOiBzYXZlZFN0YXR1cywgZGVzY3JpcHRpb24gfSA9IHRvRG87XG5cbiAgICBjb25zdCB7IGhhbmRsZU9wZW5Nb2RhbCwgc2V0VG9Eb1NlbGVjdGVkLCBzZXRSZXNwb25zZU1lc3NhZ2UgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgcmVtb3ZlVG9EbyB9ID0gdXNlTWFuYWdlVG9Eb3MoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRvRG8oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZW1vdmVUb0RvKGlkKTtcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSgnJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShlLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0VG9EbygpIHtcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XG4gICAgICAgIHNldFRvRG9TZWxlY3RlZCh0b0RvKTtcbiAgICB9XG5cbiAgICB1c2VNYW5hZ2VUb0RvcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSAke3N0eWxlc1twcmlvXX1gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0VkaXR9IGFsdD1cImVkaXRcIiBvbkNsaWNrPXtoYW5kbGVFZGl0VG9Eb30gLz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30gc3JjPXtDcm9zc30gYWx0PVwiZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVRvRG99IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwZWNzfT5cbiAgICAgICAgICAgICAgICA8cD5QcmlvcmlkYWQ6IHtwcmlvcml0eVtwcmlvXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RXN0YWRvOiB7c3RhdHVzW3NhdmVkU3RhdHVzXX08L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Uw610dWxvOiA8c3Bhbj57dGl0bGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5EZXNjcmlwY2nDs246IHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidXNlQXBwQ29udGV4dCIsInVzZU1hbmFnZVRvRG9zIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJDcm9zcyIsIkVkaXQiLCJzdHlsZXMiLCJUb0RvQ2FyZCIsInRvRG8iLCJpZCIsInRpdGxlIiwicHJpbyIsInNhdmVkU3RhdHVzIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVPcGVuTW9kYWwiLCJzZXRUb0RvU2VsZWN0ZWQiLCJzZXRSZXNwb25zZU1lc3NhZ2UiLCJyZW1vdmVUb0RvIiwiaGFuZGxlUmVtb3ZlVG9EbyIsImVycm9yIiwiZSIsIm1lc3NhZ2UiLCJoYW5kbGVFZGl0VG9EbyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiYWN0aW9uc0NvbnRhaW5lciIsImFjdGlvbnMiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwic3BlY3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});