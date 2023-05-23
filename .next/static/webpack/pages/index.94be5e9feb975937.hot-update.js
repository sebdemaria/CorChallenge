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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoListHome\": function() { return /* binding */ ToDoListHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_ToDoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ToDoCard */ \"./components/ToDoCard.jsx\");\n/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Button */ \"./components/UI/Button.jsx\");\n/* harmony import */ var consts_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! consts/actions */ \"./consts/actions.js\");\n/* harmony import */ var public_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/assets */ \"./public/assets/index.js\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/screensStyles/ToDoListHome.module.scss */ \"./styles/screensStyles/ToDoListHome.module.scss\");\n/* harmony import */ var styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ToDoListHome = ()=>{\n    _s();\n    const { toDos , handleOpenModal , responseMessage , setToDos  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const orderedToDos = toDos.sort((a, b)=>new Date(a.date) - new Date(a.date));\n        setToDos(orderedToDos);\n    }, [\n        toDos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().toDosSection),\n        children: [\n            responseMessage && (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.status) === consts_actions__WEBPACK_IMPORTED_MODULE_6__.submitResponse.OK ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().responseMessage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: public_assets__WEBPACK_IMPORTED_MODULE_7__.Check,\n                        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().check),\n                        alt: \"check mark\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().message),\n                        children: responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message\n                    }, void 0, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().responseMessage),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().errorMessage),\n                    children: responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message\n                }, void 0, false, {\n                    fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UI_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                onClick: handleOpenModal,\n                children: \"Agregar tarea\"\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (styles_screensStyles_ToDoListHome_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),\n                children: toDos.length ? toDos.map((toDo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ToDoCard__WEBPACK_IMPORTED_MODULE_4__.ToDoCard, {\n                        toDo: toDo\n                    }, index, false, {\n                        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No tienes tareas creadas..\"\n                }, void 0, false, {\n                    fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sebastiandemaria/Desktop/React/CorChallenge/screens/ToDoListHome.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ToDoListHome, \"mHgNY3UsKMsLuhRH7sWtHpAtBlI=\", false, function() {\n    return [\n        hooks__WEBPACK_IMPORTED_MODULE_2__.useAppContext\n    ];\n});\n_c = ToDoListHome;\nvar _c;\n$RefreshReg$(_c, \"ToDoListHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL1RvRG9MaXN0SG9tZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBQ1A7QUFFZ0I7QUFDRjtBQUVHO0FBRVY7QUFFNEI7QUFFM0QsTUFBTVEsZUFBZSxJQUFNOztJQUM5QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsZ0JBQWUsRUFBRUMsZ0JBQWUsRUFBRUMsU0FBUSxFQUFFLEdBQUdYLG9EQUFhQTtJQUkzRUQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1hLGVBQWVKLE1BQU1LLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNLElBQUlDLEtBQUtGLEVBQUVHLElBQUksSUFBSSxJQUFJRCxLQUFLRixFQUFFRyxJQUFJO1FBRTVFTixTQUFTQztJQUNiLEdBQUc7UUFBQ0o7S0FBTTtJQUdWLHFCQUNJLDhEQUFDVTtRQUFRQyxXQUFXYixtR0FBbUI7O1lBQ2pDSSxtQkFBbUJBLENBQUFBLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCVyxNQUFNLE1BQUtqQiw2REFBaUIsaUJBRTlELDhEQUFDbUI7Z0JBQUtKLFdBQVdiLHNHQUFzQjs7a0NBQ25DLDhEQUFDTCxtREFBS0E7d0JBQUN1QixLQUFLbkIsZ0RBQUtBO3dCQUFFYyxXQUFXYiw0RkFBWTt3QkFBRW9CLEtBQUk7Ozs7OztrQ0FDaEQsOERBQUNDO3dCQUFFUixXQUFXYiw4RkFBYztrQ0FBR0ksNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJrQixPQUFPOzs7Ozs7Ozs7OzswQ0FHM0QsOERBQUNMO2dCQUFLSixXQUFXYixzR0FBc0I7MEJBQ25DLDRFQUFDcUI7b0JBQUVSLFdBQVdiLG1HQUFtQjs4QkFBR0ksNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJrQixPQUFPOzs7Ozs7Ozs7O3lCQUN6RDswQkFHWCw4REFBQ3pCLHdEQUFNQTtnQkFBQzJCLFNBQVNyQjswQkFBaUI7Ozs7OzswQkFFbEMsOERBQUNzQjtnQkFBSVosV0FBV2Isb0dBQW9COzBCQUMvQkUsTUFBTXlCLE1BQU0sR0FDVHpCLE1BQU0wQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNsQyx5REFBUUE7d0JBQWFpQyxNQUFNQTt1QkFBYkM7Ozs7bURBR25CLDhEQUFDVDs4QkFBRTs7Ozs7NkJBQThCOzs7Ozs7Ozs7Ozs7QUFLckQsRUFBQztHQXZDWXBCOztRQUNxRFAsZ0RBQWFBOzs7S0FEbEVPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NjcmVlbnMvVG9Eb0xpc3RIb21lLmpzeD8zNjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICdob29rcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IFRvRG9DYXJkIH0gZnJvbSAnY29tcG9uZW50cy9Ub0RvQ2FyZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdjb21wb25lbnRzL1VJL0J1dHRvbidcblxuaW1wb3J0IHsgc3VibWl0UmVzcG9uc2UgfSBmcm9tICdjb25zdHMvYWN0aW9ucyc7XG5cbmltcG9ydCB7IENoZWNrIH0gZnJvbSAncHVibGljL2Fzc2V0cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL3NjcmVlbnNTdHlsZXMvVG9Eb0xpc3RIb21lLm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgY29uc3QgVG9Eb0xpc3RIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9Eb3MsIGhhbmRsZU9wZW5Nb2RhbCwgcmVzcG9uc2VNZXNzYWdlLCBzZXRUb0RvcyB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZGVyZWRUb0RvcyA9IHRvRG9zLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKTtcblxuICAgICAgICBzZXRUb0RvcyhvcmRlcmVkVG9Eb3MpO1xuICAgIH0sIFt0b0Rvc10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRvRG9zU2VjdGlvbn0+XG4gICAgICAgICAgICB7KHJlc3BvbnNlTWVzc2FnZSAmJiByZXNwb25zZU1lc3NhZ2U/LnN0YXR1cyA9PT0gc3VibWl0UmVzcG9uc2UuT0spXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNlTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0NoZWNrfSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja30gYWx0PVwiY2hlY2sgbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PntyZXNwb25zZU1lc3NhZ2U/Lm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVzcG9uc2VNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57cmVzcG9uc2VNZXNzYWdlPy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlT3Blbk1vZGFsfT5BZ3JlZ2FyIHRhcmVhPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3RvRG9zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIHRvRG9zLm1hcCgodG9EbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb0RvQ2FyZCBrZXk9e2luZGV4fSB0b0RvPXt0b0RvfSAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIHRpZW5lcyB0YXJlYXMgY3JlYWRhcy4uPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUFwcENvbnRleHQiLCJJbWFnZSIsIlRvRG9DYXJkIiwiQnV0dG9uIiwic3VibWl0UmVzcG9uc2UiLCJDaGVjayIsInN0eWxlcyIsIlRvRG9MaXN0SG9tZSIsInRvRG9zIiwiaGFuZGxlT3Blbk1vZGFsIiwicmVzcG9uc2VNZXNzYWdlIiwic2V0VG9Eb3MiLCJvcmRlcmVkVG9Eb3MiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiZGF0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ0b0Rvc1NlY3Rpb24iLCJzdGF0dXMiLCJPSyIsInNwYW4iLCJzcmMiLCJjaGVjayIsImFsdCIsInAiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwib25DbGljayIsImRpdiIsImNhcmRDb250YWluZXIiLCJsZW5ndGgiLCJtYXAiLCJ0b0RvIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./screens/ToDoListHome.jsx\n"));

/***/ })

});