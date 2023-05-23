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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoCard\": function() { return /* binding */ ToDoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var consts_priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! consts/priority */ \"./consts/priority.js\");\n/* harmony import */ var consts_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! consts/status */ \"./consts/status.js\");\n/* harmony import */ var consts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! consts/actions */ \"./consts/actions.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/componentStyles/ToDoCard.module.scss */ \"./styles/componentStyles/ToDoCard.module.scss\");\n/* harmony import */ var styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDoCard = (param)=>{\n    let { toDo  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { id , title , prio , status: savedStatus , description  } = toDo;\n    const { handleOpenModal , setToDoSelected , setResponseMessage  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const { removeToDo  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    async function handleRemoveToDo() {\n        try {\n            setIsLoading((isLoading)=>!isLoading);\n            await removeToDo(id);\n            setTimeout(()=>{\n                setResponseMessage({\n                    status: consts_actions__WEBPACK_IMPORTED_MODULE_6__.submitResponse.OK,\n                    message: \"Tarea eliminada con \\xe9xito!\"\n                });\n            }, 2000);\n        } catch (error) {\n            setIsLoading((isLoading)=>!isLoading);\n            setResponseMessage({\n                status: submie.message\n            });\n        } finally{\n            setTimeout(()=>{\n                setIsLoading((isLoading)=>!isLoading);\n            }, 2000);\n            setTimeout(()=>{\n                setResponseMessage();\n            }, 5000);\n        }\n    }\n    function handleEditToDo() {\n        handleOpenModal();\n        setToDoSelected(toDo);\n    }\n    (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card), \" \").concat((styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[prio]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_7__.Edit,\n                        alt: \"edit\",\n                        onClick: handleEditToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: \"loading\",\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loader),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_7__.Loader\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_7__.Cross,\n                        alt: \"edit\",\n                        onClick: handleRemoveToDo\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 95\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().specs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Prioridad: \",\n                            consts_priority__WEBPACK_IMPORTED_MODULE_4__.priority[prio]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Estado: \",\n                            consts_status__WEBPACK_IMPORTED_MODULE_5__.status[savedStatus]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),\n                children: [\n                    \"T\\xedtulo: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 49\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (styles_componentStyles_ToDoCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),\n                children: [\n                    \"Descripci\\xf3n: \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/components/ToDoCard.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoCard, \"rAeN3DMoMdun32aZIHZ4bt3eqss=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useAppContext,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos,\n        hooks__WEBPACK_IMPORTED_MODULE_3__.useManageToDos\n    ];\n});\n_c = ToDoCard;\nvar _c;\n$RefreshReg$(_c, \"ToDoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG9DYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Y7QUFFdUI7QUFFWDtBQUNKO0FBQ1M7QUFFSTtBQUVZO0FBRXpELE1BQU1XLFdBQVcsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTSxFQUFFZSxHQUFFLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFWixRQUFRYSxZQUFXLEVBQUVDLFlBQVcsRUFBRSxHQUFHUDtJQUU5RCxNQUFNLEVBQUVRLGdCQUFlLEVBQUVDLGdCQUFlLEVBQUVDLG1CQUFrQixFQUFFLEdBQUdwQixvREFBYUE7SUFFOUUsTUFBTSxFQUFFcUIsV0FBVSxFQUFFLEdBQUdwQixxREFBY0E7SUFFckMsZUFBZXFCLG1CQUFtQjtRQUM5QixJQUFJO1lBQ0FWLGFBQWEsQ0FBQ0QsWUFBYyxDQUFDQTtZQUU3QixNQUFNVSxXQUFXUjtZQUVqQlUsV0FBVyxJQUFNO2dCQUNiSCxtQkFBbUI7b0JBQUVqQixRQUFRQyw2REFBaUI7b0JBQUVxQixTQUFTO2dCQUE2QjtZQUMxRixHQUFHO1FBRVAsRUFBRSxPQUFPQyxPQUFPO1lBQ1pkLGFBQWFELENBQUFBLFlBQWEsQ0FBQ0E7WUFDM0JTLG1CQUFtQjtnQkFBQ2pCLFFBQVF3QixPQUFPRixPQUFPO1lBQUE7UUFDOUMsU0FBVTtZQUNORixXQUFXLElBQU07Z0JBQ2JYLGFBQWEsQ0FBQ0QsWUFBYyxDQUFDQTtZQUNqQyxHQUFHO1lBRUhZLFdBQVcsSUFBTTtnQkFDYkg7WUFDSixHQUFHO1FBQ1A7SUFDSjtJQUVBLFNBQVNRLGlCQUFpQjtRQUN0QlY7UUFDQUMsZ0JBQWdCVDtJQUNwQjtJQUVBVCxxREFBY0E7SUFFZCxxQkFDSSw4REFBQzRCO1FBQUlDLFdBQVcsR0FBa0J0QixPQUFmQSx5RkFBVyxFQUFDLEtBQWdCLE9BQWJBLG9GQUFNLENBQUNPLEtBQUs7OzBCQUMxQyw4REFBQ2lCO2dCQUFLRixXQUFXdEIscUdBQXVCOztrQ0FDcEMsOERBQUNULG1EQUFLQTt3QkFBQytCLFdBQVd0Qiw0RkFBYzt3QkFBRTJCLEtBQUs3QiwrQ0FBSUE7d0JBQUU4QixLQUFJO3dCQUFPQyxTQUFTVDs7Ozs7O29CQUNoRWpCLDBCQUFZLDhEQUFDWixtREFBS0E7d0JBQUNxQyxLQUFJO3dCQUFVTixXQUFXdEIsMkZBQWE7d0JBQUUyQixLQUFLNUIsaURBQU1BOzs7OztrREFBTyw4REFBQ1IsbURBQUtBO3dCQUFDK0IsV0FBV3RCLDRGQUFjO3dCQUFFMkIsS0FBSzlCLGdEQUFLQTt3QkFBRStCLEtBQUk7d0JBQU9DLFNBQVNmOzs7OztpQ0FBb0I7Ozs7Ozs7MEJBR3hLLDhEQUFDVTtnQkFBS0YsV0FBV3RCLDBGQUFZOztrQ0FDekIsOERBQUNnQzs7NEJBQUU7NEJBQVl0QyxxREFBUSxDQUFDYSxLQUFLOzs7Ozs7O2tDQUM3Qiw4REFBQ3lCOzs0QkFBRTs0QkFBU3JDLGlEQUFNLENBQUNhLFlBQVk7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDd0I7Z0JBQUVWLFdBQVd0QiwwRkFBWTs7b0JBQUU7a0NBQVEsOERBQUN3QjtrQ0FBTWxCOzs7Ozs7Ozs7Ozs7MEJBQzNDLDhEQUFDMEI7Z0JBQUVWLFdBQVd0QixnR0FBa0I7O29CQUFFO29CQUFjUzs7Ozs7Ozs7Ozs7OztBQUc1RCxFQUFDO0dBeERZUjs7UUFLd0RULGdEQUFhQTtRQUV2REMsaURBQWNBO1FBK0JyQ0EsaURBQWNBOzs7S0F0Q0xRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eb0NhcmQuanN4P2IyZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZUFwcENvbnRleHQsIHVzZU1hbmFnZVRvRG9zIH0gZnJvbSAnaG9va3MnO1xuXG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gJ2NvbnN0cy9wcmlvcml0eSc7XG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tICdjb25zdHMvc3RhdHVzJztcbmltcG9ydCB7IHN1Ym1pdFJlc3BvbnNlIH0gZnJvbSAnY29uc3RzL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBDcm9zcywgRWRpdCwgTG9hZGVyIH0gZnJvbSAncHVibGljL2Fzc2V0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2NvbXBvbmVudFN0eWxlcy9Ub0RvQ2FyZC5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGNvbnN0IFRvRG9DYXJkID0gKHsgdG9EbyB9KSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBwcmlvLCBzdGF0dXM6IHNhdmVkU3RhdHVzLCBkZXNjcmlwdGlvbiB9ID0gdG9EbztcblxuICAgIGNvbnN0IHsgaGFuZGxlT3Blbk1vZGFsLCBzZXRUb0RvU2VsZWN0ZWQsIHNldFJlc3BvbnNlTWVzc2FnZSB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyByZW1vdmVUb0RvIH0gPSB1c2VNYW5hZ2VUb0RvcygpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlVG9EbygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZygoaXNMb2FkaW5nKSA9PiAhaXNMb2FkaW5nKTtcblxuICAgICAgICAgICAgYXdhaXQgcmVtb3ZlVG9EbyhpZCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSh7IHN0YXR1czogc3VibWl0UmVzcG9uc2UuT0ssIG1lc3NhZ2U6ICdUYXJlYSBlbGltaW5hZGEgY29uIMOpeGl0byEnIH0pO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhpc0xvYWRpbmcgPT4gIWlzTG9hZGluZyk7XG4gICAgICAgICAgICBzZXRSZXNwb25zZU1lc3NhZ2Uoe3N0YXR1czogc3VibWllLm1lc3NhZ2V9KVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKChpc0xvYWRpbmcpID0+ICFpc0xvYWRpbmcpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlTWVzc2FnZSgpXG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRUb0RvKCkge1xuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcbiAgICAgICAgc2V0VG9Eb1NlbGVjdGVkKHRvRG8pO1xuICAgIH1cblxuICAgIHVzZU1hbmFnZVRvRG9zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmR9ICR7c3R5bGVzW3ByaW9dfWB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9IHNyYz17RWRpdH0gYWx0PVwiZWRpdFwiIG9uQ2xpY2s9e2hhbmRsZUVkaXRUb0RvfSAvPlxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyA8SW1hZ2UgYWx0PVwibG9hZGluZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0gc3JjPXtMb2FkZXJ9IC8+IDogPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9IHNyYz17Q3Jvc3N9IGFsdD1cImVkaXRcIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVUb0RvfSAvPn1cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BlY3N9PlxuICAgICAgICAgICAgICAgIDxwPlByaW9yaWRhZDoge3ByaW9yaXR5W3ByaW9dfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5Fc3RhZG86IHtzdGF0dXNbc2F2ZWRTdGF0dXNdfTwvcD5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlTDrXR1bG86IDxzcGFuPnt0aXRsZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PkRlc2NyaXBjacOzbjoge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VBcHBDb250ZXh0IiwidXNlTWFuYWdlVG9Eb3MiLCJwcmlvcml0eSIsInN0YXR1cyIsInN1Ym1pdFJlc3BvbnNlIiwiQ3Jvc3MiLCJFZGl0IiwiTG9hZGVyIiwic3R5bGVzIiwiVG9Eb0NhcmQiLCJ0b0RvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaWQiLCJ0aXRsZSIsInByaW8iLCJzYXZlZFN0YXR1cyIsImRlc2NyaXB0aW9uIiwiaGFuZGxlT3Blbk1vZGFsIiwic2V0VG9Eb1NlbGVjdGVkIiwic2V0UmVzcG9uc2VNZXNzYWdlIiwicmVtb3ZlVG9EbyIsImhhbmRsZVJlbW92ZVRvRG8iLCJzZXRUaW1lb3V0IiwiT0siLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaWUiLCJoYW5kbGVFZGl0VG9EbyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiYWN0aW9uc0NvbnRhaW5lciIsImFjdGlvbnMiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwibG9hZGVyIiwic3BlY3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDoCard.jsx\n"));

/***/ })

});