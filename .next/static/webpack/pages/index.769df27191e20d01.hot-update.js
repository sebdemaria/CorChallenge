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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/actions */ \"./consts/actions.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { id , title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected , setResponseMessage  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    async function handleRemoveToDo() {\n        try {\n            setIsLoading((isLoading)=>!isLoading);\n            await removeToDo(id);\n            setTimeout(()=>{\n                setResponseMessage({\n                    status: consts_actions__WEBPACK_IMPORTED_MODULE_4__.submitResponse.OK,\n                    message: \"Tarea eliminada con \\xe9xito!\"\n                });\n            }, 2000);\n        } catch (error) {\n            setIsLoading((isLoading)=>!isLoading);\n            setResponseMessage({\n                status: consts_actions__WEBPACK_IMPORTED_MODULE_4__.submitResponse.ERROR,\n                message: e.message\n            });\n        } finally{\n            setTimeout(()=>{\n                setIsLoading((isLoading)=>!isLoading);\n            }, 2000);\n            setTimeout(()=>{\n                setResponseMessage(null);\n            }, 5000);\n        }\n    }\n    function handleEditToDo() {\n        setToDoSelected(toDo);\n        handleOpenModal();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Edit,\n                        alt: \"edit\",\n                        onClick: handleEditToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"loading\",\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loader),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Loader\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_5__.Cross,\n                        alt: \"edit\",\n                        onClick: handleRemoveToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 95\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().specName),\n                                children: \"Prioridad:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            prio\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().specName),\n                                children: \"Estado:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 20\n                            }, undefined),\n                            \" \",\n                            savedStatus\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().specName),\n                        children: \"T\\xedtulo:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 41\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleName),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 90\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().specName),\n                        children: \"Descripci\\xf3n:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 47\n                    }, undefined),\n                    \" \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"s7vccqWsv9KjCS0pOYz9c+BT79E=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2FyZC5qc3g/YjJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCwgdXNlTWFuYWdlVG9Eb3MgfSBmcm9tICdob29rcyc7XG5cbmltcG9ydCB7IHN1Ym1pdFJlc3BvbnNlIH0gZnJvbSAnY29uc3RzL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBDcm9zcywgRWRpdCwgTG9hZGVyIH0gZnJvbSAncHVibGljL2Fzc2V0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2NvbXBvbmVudFN0eWxlcy9Ub0RvQ2FyZC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IFRvRG9DYXJkID0gKHsgdG9EbyB9KSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBwcmlvLCBzdGF0dXM6IHNhdmVkU3RhdHVzLCBkZXNjcmlwdGlvbiB9ID0gdG9EbztcblxuICAgIGNvbnN0IHsgaGFuZGxlT3Blbk1vZGFsLCBzZXRUb0RvU2VsZWN0ZWQsIHNldFJlc3BvbnNlTWVzc2FnZSB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyByZW1vdmVUb0RvIH0gPSB1c2VNYW5hZ2VUb0RvcygpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVG9EbygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZygoaXNMb2FkaW5nKSA9PiAhaXNMb2FkaW5nKTtcblxuICAgICAgICAgICAgYXdhaXQgcmVtb3ZlVG9EbyhpZCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSh7IHN0YXR1czogc3VibWl0UmVzcG9uc2UuT0ssIG1lc3NhZ2U6ICdUYXJlYSBlbGltaW5hZGEgY29uIMOpeGl0byEnIH0pO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcgPT4gIWlzTG9hZGluZyk7XG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UoeyBzdGF0dXM6IHN1Ym1pdFJlc3BvbnNlLkVSUk9SLCBtZXNzYWdlOiBlLm1lc3NhZ2UgfSlcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZygoaXNMb2FkaW5nKSA9PiAhaXNMb2FkaW5nKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRUb0RvKCkge1xuICAgICAgICBzZXRUb0RvU2VsZWN0ZWQodG9Ebyk7XG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gJHtzdHlsZXNbcHJpb119YH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30gc3JjPXtFZGl0fSBhbHQ9XCJlZGl0XCIgb25DbGljaz17aGFuZGxlRWRpdFRvRG99IC8+XG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IDxJbWFnZSBhbHQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfSBzcmM9e0xvYWRlcn0gLz4gOiA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30gc3JjPXtDcm9zc30gYWx0PVwiZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZVRvRG99IC8+fVxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGVjc30+XG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BlY05hbWV9PlByaW9yaWRhZDo8L3NwYW4+IHtwcmlvfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGVjTmFtZX0+RXN0YWRvOjwvc3Bhbj4ge3NhdmVkU3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwZWNOYW1lfT5Uw610dWxvOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVOYW1lfT57dGl0bGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGVjTmFtZX0+RGVzY3JpcGNpw7NuOjwvc3Bhbj4ge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VBcHBDb250ZXh0IiwidXNlTWFuYWdlVG9Eb3MiLCJzdWJtaXRSZXNwb25zZSIsIkNyb3NzIiwiRWRpdCIsIkxvYWRlciIsInN0eWxlcyIsIlRvRG9DYXJkIiwidG9EbyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlkIiwidGl0bGUiLCJwcmlvIiwic3RhdHVzIiwic2F2ZWRTdGF0dXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRvRG9TZWxlY3RlZCIsInNldFJlc3BvbnNlTWVzc2FnZSIsInJlbW92ZVRvRG8iLCJoYW5kbGVSZW1vdmVUb0RvIiwic2V0VGltZW91dCIsIk9LIiwibWVzc2FnZSIsImVycm9yIiwiRVJST1IiLCJlIiwiaGFuZGxlRWRpdFRvRG8iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3BhbiIsImFjdGlvbnNDb250YWluZXIiLCJhY3Rpb25zIiwic3JjIiwiYWx0Iiwib25DbGljayIsImxvYWRlciIsInNwZWNzIiwicCIsInNwZWNOYW1lIiwidGl0bGVOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});