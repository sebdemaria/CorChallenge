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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var consts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! consts/actions */ \"./consts/actions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const { id , title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected , setResponseMessage  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useManageToDos)();\n    async function handleRemoveToDo() {\n        try {\n            await removeToDo(id);\n            setResponseMessage(consts_actions__WEBPACK_IMPORTED_MODULE_6__.submitResponse.OK);\n        } catch (error) {\n            setResponseMessage(e.message);\n        } finally{\n            setTimeout(()=>{\n                setResponseMessage(null);\n            }, 2000);\n        }\n    }\n    function handleEditToDo() {\n        handleOpenModal();\n        setToDoSelected(toDo);\n    }\n    (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Edit,\n                        alt: \"edit\",\n                        onClick: handleEditToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        alt: \"loading\",\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loader),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Loader\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Cross,\n                        alt: \"edit\",\n                        onClick: handleRemoveToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 95\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_3__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_4__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"rAeN3DMoMdun32aZIHZ4bt3eqss=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useManageToDos,\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRXVCO0FBRVg7QUFDSjtBQUVhO0FBRVk7QUFDaEI7QUFDZjtBQUUxQixNQUFNVyxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU0sRUFBRUssR0FBRSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRWIsUUFBUWMsWUFBVyxFQUFFQyxZQUFXLEVBQUUsR0FBR1A7SUFFOUQsTUFBTSxFQUFFUSxnQkFBZSxFQUFFQyxnQkFBZSxFQUFFQyxtQkFBa0IsRUFBRSxHQUFHckIsb0RBQWFBO0lBRTlFLE1BQU0sRUFBRXNCLFdBQVUsRUFBRSxHQUFHckIscURBQWNBO0lBRXJDLGVBQWVzQixtQkFBbUI7UUFDOUIsSUFBSTtZQUNBLE1BQU1ELFdBQVdSO1lBQ2pCTyxtQkFBbUJiLDZEQUFpQjtRQUN4QyxFQUFFLE9BQU9pQixPQUFPO1lBQ1pKLG1CQUFtQkssRUFBRUMsT0FBTztRQUNoQyxTQUFVO1lBQ05DLFdBQVcsSUFBTTtnQkFDYlAsbUJBQW1CLElBQUk7WUFDM0IsR0FBRztRQUNQO0lBQ0o7SUFFQSxTQUFTUSxpQkFBaUI7UUFDdEJWO1FBQ0FDLGdCQUFnQlQ7SUFDcEI7SUFFQVYscURBQWNBO0lBRWQscUJBQ0ksOERBQUM2QjtRQUFJQyxXQUFXLEdBQWtCeEIsT0FBZkEseUZBQVcsRUFBQyxLQUFnQixPQUFiQSxvRkFBTSxDQUFDUyxLQUFLOzswQkFDMUMsOERBQUNpQjtnQkFBS0YsV0FBV3hCLHFHQUF1Qjs7a0NBQ3BDLDhEQUFDUixtREFBS0E7d0JBQUNnQyxXQUFXeEIsNEZBQWM7d0JBQUU2QixLQUFLL0IsK0NBQUlBO3dCQUFFZ0MsS0FBSTt3QkFBT0MsU0FBU1Q7Ozs7OztvQkFDaEVqQiwwQkFBWSw4REFBQ2IsbURBQUtBO3dCQUFDc0MsS0FBSTt3QkFBVU4sV0FBV3hCLDJGQUFhO3dCQUFFNkIsS0FBSzlCLGlEQUFNQTs7Ozs7a0RBQU8sOERBQUNQLG1EQUFLQTt3QkFBQ2dDLFdBQVd4Qiw0RkFBYzt3QkFBRTZCLEtBQUtoQyxnREFBS0E7d0JBQUVpQyxLQUFJO3dCQUFPQyxTQUFTZjs7Ozs7aUNBQW9COzs7Ozs7OzBCQUd4Syw4REFBQ1U7Z0JBQUtGLFdBQVd4QiwwRkFBWTs7a0NBQ3pCLDhEQUFDa0M7OzRCQUFFOzRCQUFZdkMscURBQVEsQ0FBQ2MsS0FBSzs7Ozs7OztrQ0FDN0IsOERBQUN5Qjs7NEJBQUU7NEJBQVN0QyxpREFBTSxDQUFDYyxZQUFZOzs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ3dCO2dCQUFFVixXQUFXeEIsMEZBQVk7O29CQUFFO2tDQUFRLDhEQUFDMEI7a0NBQU1sQjs7Ozs7Ozs7Ozs7OzBCQUMzQyw4REFBQzBCO2dCQUFFVixXQUFXeEIsZ0dBQWtCOztvQkFBRTtvQkFBY1c7Ozs7Ozs7Ozs7Ozs7QUFHNUQsRUFBQztHQTdDWVI7O1FBS3dEVixnREFBYUE7UUFFdkRDLGlEQUFjQTtRQW9CckNBLGlEQUFjQTs7O0tBM0JMUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeD9iMmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCwgdXNlTWFuYWdlVG9Eb3MgfSBmcm9tICdob29rcyc7XG5cbmltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSAnY29uc3RzL3ByaW9yaXR5JztcbmltcG9ydCB7IHN0YXR1cyB9IGZyb20gJ2NvbnN0cy9zdGF0dXMnO1xuXG5pbXBvcnQgeyBDcm9zcywgRWRpdCwgTG9hZGVyIH0gZnJvbSAncHVibGljL2Fzc2V0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2NvbXBvbmVudFN0eWxlcy9Ub0RvQ2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHN1Ym1pdFJlc3BvbnNlIH0gZnJvbSAnY29uc3RzL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBUb0RvQ2FyZCA9ICh7IHRvRG8gfSkgPT4ge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgcHJpbywgc3RhdHVzOiBzYXZlZFN0YXR1cywgZGVzY3JpcHRpb24gfSA9IHRvRG87XG5cbiAgICBjb25zdCB7IGhhbmRsZU9wZW5Nb2RhbCwgc2V0VG9Eb1NlbGVjdGVkLCBzZXRSZXNwb25zZU1lc3NhZ2UgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgcmVtb3ZlVG9EbyB9ID0gdXNlTWFuYWdlVG9Eb3MoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVRvRG8oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZW1vdmVUb0RvKGlkKTtcbiAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZShzdWJtaXRSZXNwb25zZS5PSyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoZS5tZXNzYWdlKVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKG51bGwpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0VG9EbygpIHtcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XG4gICAgICAgIHNldFRvRG9TZWxlY3RlZCh0b0RvKTtcbiAgICB9XG5cbiAgICB1c2VNYW5hZ2VUb0RvcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSAke3N0eWxlc1twcmlvXX1gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0VkaXR9IGFsdD1cImVkaXRcIiBvbkNsaWNrPXtoYW5kbGVFZGl0VG9Eb30gLz5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPEltYWdlIGFsdD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9IHNyYz17TG9hZGVyfSAvPiA6IDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfSBzcmM9e0Nyb3NzfSBhbHQ9XCJlZGl0XCIgb25DbGljaz17aGFuZGxlUmVtb3ZlVG9Eb30gLz59XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwZWNzfT5cbiAgICAgICAgICAgICAgICA8cD5QcmlvcmlkYWQ6IHtwcmlvcml0eVtwcmlvXX08L3A+XG4gICAgICAgICAgICAgICAgPHA+RXN0YWRvOiB7c3RhdHVzW3NhdmVkU3RhdHVzXX08L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Uw610dWxvOiA8c3Bhbj57dGl0bGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5EZXNjcmlwY2nDs246IHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUFwcENvbnRleHQiLCJ1c2VNYW5hZ2VUb0RvcyIsInByaW9yaXR5Iiwic3RhdHVzIiwiQ3Jvc3MiLCJFZGl0IiwiTG9hZGVyIiwic3R5bGVzIiwic3VibWl0UmVzcG9uc2UiLCJ1c2VTdGF0ZSIsIlRvRG9DYXJkIiwidG9EbyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlkIiwidGl0bGUiLCJwcmlvIiwic2F2ZWRTdGF0dXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRvRG9TZWxlY3RlZCIsInNldFJlc3BvbnNlTWVzc2FnZSIsInJlbW92ZVRvRG8iLCJoYW5kbGVSZW1vdmVUb0RvIiwiT0siLCJlcnJvciIsImUiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImhhbmRsZUVkaXRUb0RvIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsInNwYW4iLCJhY3Rpb25zQ29udGFpbmVyIiwiYWN0aW9ucyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJsb2FkZXIiLCJzcGVjcyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});