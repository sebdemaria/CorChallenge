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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hooks_useAppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useAppContext */ \"./hooks/useAppContext.jsx\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var actions_useModalActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/useModalActions */ \"./actions/useModalActions.js\");\n/* harmony import */ var templates_base_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! templates/base/Layout */ \"./templates/base/Layout.jsx\");\n/* harmony import */ var screens_ToDoListHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! screens/ToDoListHome */ \"./screens/ToDoListHome.jsx\");\n/* harmony import */ var components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomModal/CustomModal */ \"./components/CustomModal/CustomModal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [toDos, setToDos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [toDoSelected, setToDoSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [modalState, handleOpenModal, handleCloseModal] = (0,actions_useModalActions__WEBPACK_IMPORTED_MODULE_5__.useModalActions)();\n    const contextDefaultValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            setToDos,\n            toDos,\n            modalState,\n            handleOpenModal,\n            handleCloseModal,\n            responseMessage,\n            setResponseMessage,\n            toDoSelected,\n            setToDoSelected\n        }), [\n        setToDos,\n        toDos,\n        modalState,\n        handleOpenModal,\n        handleCloseModal,\n        responseMessage,\n        setResponseMessage,\n        toDoSelected,\n        setToDoSelected\n    ]);\n    const { getStorageItem  } = (0,hooks__WEBPACK_IMPORTED_MODULE_4__.useLocalStorage)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // set app context value\n        const to_dos = getStorageItem(\"my_to_do_list\");\n        if (to_dos) {\n            setToDos(to_dos);\n        } else {\n            setToDos([]);\n        }\n    }, [\n        getStorageItem\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{}, 5000);\n    }, [\n        third\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"LiteFlix - Challenge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"LiteFlix Challenge for LiteBox\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/images/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hooks_useAppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: contextDefaultValue,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(templates_base_Layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(screens_ToDoListHome__WEBPACK_IMPORTED_MODULE_7__.ToDoListHome, {}, void 0, false, {\n                            fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_CustomModal_CustomModal__WEBPACK_IMPORTED_MODULE_8__.CustomModal, {}, void 0, false, {\n                            fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"FG9jDySXu67VsGwU6eqEaNx2xVY=\", false, function() {\n    return [\n        actions_useModalActions__WEBPACK_IMPORTED_MODULE_5__.useModalActions,\n        hooks__WEBPACK_IMPORTED_MODULE_4__.useLocalStorage\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDeEI7QUFFaUI7QUFDTjtBQUVrQjtBQUVYO0FBRUs7QUFFYTtBQUVsRCxTQUFTVSxPQUFPOztJQUMzQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFDM0QsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsSUFBSTtJQUVyRCxNQUFNLENBQUNlLFlBQVlDLGlCQUFpQkMsaUJBQWlCLEdBQUdiLHdFQUFlQTtJQUV2RSxNQUFNYyxzQkFBc0JuQiw4Q0FBT0EsQ0FDL0IsSUFBTztZQUNIVztZQUNBRDtZQUNBTTtZQUNBQztZQUNBQztZQUNBTjtZQUNBQztZQUNBQztZQUNBQztRQUNKLElBQ0E7UUFDSUo7UUFDQUQ7UUFDQU07UUFDQUM7UUFDQUM7UUFDQU47UUFDQUM7UUFDQUM7UUFDQUM7S0FDSDtJQUdMLE1BQU0sRUFBRUssZUFBYyxFQUFFLEdBQUdoQixzREFBZUE7SUFFMUNMLGdEQUFTQSxDQUFDLElBQU07UUFDWix3QkFBd0I7UUFDeEIsTUFBTXNCLFNBQVNELGVBQWU7UUFFOUIsSUFBSUMsUUFBUTtZQUNSVixTQUFTVTtRQUNiLE9BQU87WUFDSFYsU0FBUyxFQUFFO1FBQ2YsQ0FBQztJQUNMLEdBQUc7UUFBQ1M7S0FBZTtJQUVuQnJCLGdEQUFTQSxDQUFDLElBQU07UUFDZHVCLFdBQVcsSUFBTSxDQUVqQixHQUFHO0lBQ0wsR0FBRztRQUFDQztLQUFNO0lBR1YscUJBQ0k7OzBCQUNJLDhEQUFDckIsa0RBQUlBOztrQ0FDRCw4REFBQ3NCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVosOERBQUNGO3dCQUNHQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVosOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQzNCLDJEQUFXQTtnQkFBQzRCLE9BQU9aOzBCQUNoQiw0RUFBQ2IseURBQU1BOztzQ0FDSCw4REFBQ0MsOERBQVlBOzs7OztzQ0FDYiw4REFBQ0MsMkVBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQztHQTNFdUJDOztRQUtvQ0osb0VBQWVBO1FBMkI1Q0Qsa0RBQWVBOzs7S0FoQ3RCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IEFwcFByb3ZpZGVyIGZyb20gXCJob29rcy91c2VBcHBDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiaG9va3NcIjtcblxuaW1wb3J0IHsgdXNlTW9kYWxBY3Rpb25zIH0gZnJvbSBcImFjdGlvbnMvdXNlTW9kYWxBY3Rpb25zXCI7XG5cbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJ0ZW1wbGF0ZXMvYmFzZS9MYXlvdXRcIjtcblxuaW1wb3J0IHsgVG9Eb0xpc3RIb21lIH0gZnJvbSBcInNjcmVlbnMvVG9Eb0xpc3RIb21lXCI7XG5cbmltcG9ydCB7IEN1c3RvbU1vZGFsIH0gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tTW9kYWwvQ3VzdG9tTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbdG9Eb3MsIHNldFRvRG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RvRG9TZWxlY3RlZCwgc2V0VG9Eb1NlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgW21vZGFsU3RhdGUsIGhhbmRsZU9wZW5Nb2RhbCwgaGFuZGxlQ2xvc2VNb2RhbF0gPSB1c2VNb2RhbEFjdGlvbnMoKTtcblxuICAgIGNvbnN0IGNvbnRleHREZWZhdWx0VmFsdWUgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgc2V0VG9Eb3MsXG4gICAgICAgICAgICB0b0RvcyxcbiAgICAgICAgICAgIG1vZGFsU3RhdGUsXG4gICAgICAgICAgICBoYW5kbGVPcGVuTW9kYWwsXG4gICAgICAgICAgICBoYW5kbGVDbG9zZU1vZGFsLFxuICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlLFxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlLFxuICAgICAgICAgICAgdG9Eb1NlbGVjdGVkLFxuICAgICAgICAgICAgc2V0VG9Eb1NlbGVjdGVkLFxuICAgICAgICB9KSxcbiAgICAgICAgW1xuICAgICAgICAgICAgc2V0VG9Eb3MsXG4gICAgICAgICAgICB0b0RvcyxcbiAgICAgICAgICAgIG1vZGFsU3RhdGUsXG4gICAgICAgICAgICBoYW5kbGVPcGVuTW9kYWwsXG4gICAgICAgICAgICBoYW5kbGVDbG9zZU1vZGFsLFxuICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlLFxuICAgICAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlLFxuICAgICAgICAgICAgdG9Eb1NlbGVjdGVkLFxuICAgICAgICAgICAgc2V0VG9Eb1NlbGVjdGVkLFxuICAgICAgICBdXG4gICAgKTtcblxuICAgIGNvbnN0IHsgZ2V0U3RvcmFnZUl0ZW0gfSA9IHVzZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGFwcCBjb250ZXh0IHZhbHVlXG4gICAgICAgIGNvbnN0IHRvX2RvcyA9IGdldFN0b3JhZ2VJdGVtKFwibXlfdG9fZG9fbGlzdFwiKTtcblxuICAgICAgICBpZiAodG9fZG9zKSB7XG4gICAgICAgICAgICBzZXRUb0Rvcyh0b19kb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VG9Eb3MoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2dldFN0b3JhZ2VJdGVtXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgfSwgNTAwMCk7XG4gICAgfSwgW3RoaXJkXSlcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGl0ZUZsaXggLSBDaGFsbGVuZ2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJMaXRlRmxpeCBDaGFsbGVuZ2UgZm9yIExpdGVCb3hcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxBcHBQcm92aWRlciB2YWx1ZT17Y29udGV4dERlZmF1bHRWYWx1ZX0+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFRvRG9MaXN0SG9tZSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tTW9kYWwgLz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiSGVhZCIsIkFwcFByb3ZpZGVyIiwidXNlTG9jYWxTdG9yYWdlIiwidXNlTW9kYWxBY3Rpb25zIiwiTGF5b3V0IiwiVG9Eb0xpc3RIb21lIiwiQ3VzdG9tTW9kYWwiLCJIb21lIiwidG9Eb3MiLCJzZXRUb0RvcyIsInJlc3BvbnNlTWVzc2FnZSIsInNldFJlc3BvbnNlTWVzc2FnZSIsInRvRG9TZWxlY3RlZCIsInNldFRvRG9TZWxlY3RlZCIsIm1vZGFsU3RhdGUiLCJoYW5kbGVPcGVuTW9kYWwiLCJoYW5kbGVDbG9zZU1vZGFsIiwiY29udGV4dERlZmF1bHRWYWx1ZSIsImdldFN0b3JhZ2VJdGVtIiwidG9fZG9zIiwic2V0VGltZW91dCIsInRoaXJkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});