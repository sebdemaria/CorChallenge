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

/***/ "./hooks/useManageToDos.jsx":
/*!**********************************!*\
  !*** ./hooks/useManageToDos.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useManageToDos\": function() { return /* binding */ useManageToDos; }\n/* harmony export */ });\n/* harmony import */ var hooks_useAppContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hooks/useAppContext */ \"./hooks/useAppContext.jsx\");\n/* harmony import */ var hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useLocalStorage */ \"./hooks/useLocalStorage.jsx\");\nvar _s = $RefreshSig$();\n\n\nconst useManageToDos = ()=>{\n    _s();\n    const { toDos , setToDos  } = (0,hooks_useAppContext__WEBPACK_IMPORTED_MODULE_0__.useAppContext)();\n    const [setStorageItem, getStorageItem] = (0,hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage)();\n    const getToDos = ()=>{\n        const toDos = getStorageItem(\"my_to_do_list\");\n        if (toDos) setToDos(toDos);\n    };\n    const editToDo = async (id, title, prio, status, description)=>{\n        const toDoToEdit = toDos.filter((toDo)=>toDo.id === id);\n        console.log(toDoToEdit);\n        const toDos = toDos.filter((toDo)=>toDo.id !== id);\n    };\n    const addToDo = async (id, title, prio, status, description)=>{\n        toDos === null || toDos === void 0 ? void 0 : toDos.push({\n            id: id,\n            title: title,\n            prio: prio,\n            status: status,\n            description: description\n        });\n        await setTimeout(()=>{\n            setStorageItem(\"my_to_do_list\", toDos);\n            setToDos(getStorageItem(\"my_to_do_list\"));\n        }, 2000);\n    };\n    const removeToDo = async (title)=>{\n        const updatedToDos = toDos.filter((toDo)=>toDo.title !== title);\n        await setTimeout(()=>{\n            setStorageItem(\"my_to_do_list\", updatedToDos);\n        }, 2000);\n    };\n    return {\n        addToDo,\n        editToDo,\n        getToDos,\n        removeToDo\n    };\n};\n_s(useManageToDos, \"EF1Dhpy3RSh8asAlc7+G02dj/C0=\", false, function() {\n    return [\n        hooks_useAppContext__WEBPACK_IMPORTED_MODULE_0__.useAppContext,\n        hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__.useLocalStorage\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VNYW5hZ2VUb0Rvcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvRDtBQUNJO0FBRWpELE1BQU1FLGlCQUFpQixJQUFNOztJQUNoQyxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdKLGtFQUFhQTtJQUV6QyxNQUFNLENBQUNLLGdCQUFnQkMsZUFBZSxHQUFHTCxzRUFBZUE7SUFFeEQsTUFBTU0sV0FBVyxJQUFNO1FBQ25CLE1BQU1KLFFBQVFHLGVBQWU7UUFDN0IsSUFBSUgsT0FBT0MsU0FBU0Q7SUFDeEI7SUFFQSxNQUFNSyxXQUFXLE9BQU9DLElBQUlDLE9BQU9DLE1BQU1DLFFBQVFDLGNBQWdCO1FBQzdELE1BQU1DLGFBQWFYLE1BQU1ZLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS1AsRUFBRSxLQUFLQTtRQUVwRFEsUUFBUUMsR0FBRyxDQUFDSjtRQUVaLE1BQU1YLFFBQVFBLE1BQU1ZLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS1AsRUFBRSxLQUFLQTtJQUduRDtJQUVBLE1BQU1VLFVBQVUsT0FBT1YsSUFBSUMsT0FBT0MsTUFBTUMsUUFBUUMsY0FBZ0I7UUFDNURWLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2lCLElBQUksQ0FBQztZQUNSWCxJQUFJQTtZQUNKQyxPQUFPQTtZQUNQQyxNQUFNQTtZQUNOQyxRQUFRQTtZQUNSQyxhQUFhQTtRQUNqQjtRQUVBLE1BQU1RLFdBQVcsSUFBTTtZQUNuQmhCLGVBQWUsaUJBQWlCRjtZQUNoQ0MsU0FBU0UsZUFBZTtRQUM1QixHQUFHO0lBQ1A7SUFFQSxNQUFNZ0IsYUFBYSxPQUFPWixRQUFVO1FBQ2hDLE1BQU1hLGVBQWVwQixNQUFNWSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS04sS0FBSyxLQUFLQTtRQUUzRCxNQUFNVyxXQUFXLElBQU07WUFDbkJoQixlQUFlLGlCQUFpQmtCO1FBQ3BDLEdBQUc7SUFDUDtJQUVBLE9BQU87UUFBRUo7UUFBU1g7UUFBVUQ7UUFBVWU7SUFBVztBQUNyRCxFQUFFO0dBNUNXcEI7O1FBQ21CRiw4REFBYUE7UUFFQUMsa0VBQWVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZU1hbmFnZVRvRG9zLmpzeD85ZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiaG9va3MvdXNlQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSBcImhvb2tzL3VzZUxvY2FsU3RvcmFnZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlTWFuYWdlVG9Eb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b0Rvcywgc2V0VG9Eb3MgfSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIGNvbnN0IFtzZXRTdG9yYWdlSXRlbSwgZ2V0U3RvcmFnZUl0ZW1dID0gdXNlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBnZXRUb0RvcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb3MgPSBnZXRTdG9yYWdlSXRlbShcIm15X3RvX2RvX2xpc3RcIik7XG4gICAgICAgIGlmICh0b0Rvcykgc2V0VG9Eb3ModG9Eb3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBlZGl0VG9EbyA9IGFzeW5jIChpZCwgdGl0bGUsIHByaW8sIHN0YXR1cywgZGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgdG9Eb1RvRWRpdCA9IHRvRG9zLmZpbHRlcih0b0RvID0+IHRvRG8uaWQgPT09IGlkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvVG9FZGl0KTtcblxuICAgICAgICBjb25zdCB0b0RvcyA9IHRvRG9zLmZpbHRlcih0b0RvID0+IHRvRG8uaWQgIT09IGlkKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb0RvID0gYXN5bmMgKGlkLCB0aXRsZSwgcHJpbywgc3RhdHVzLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICB0b0Rvcz8ucHVzaCh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBwcmlvOiBwcmlvLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN0b3JhZ2VJdGVtKCdteV90b19kb19saXN0JywgdG9Eb3MpO1xuICAgICAgICAgICAgc2V0VG9Eb3MoZ2V0U3RvcmFnZUl0ZW0oJ215X3RvX2RvX2xpc3QnKSk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb0RvID0gYXN5bmMgKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb0RvcyA9IHRvRG9zLmZpbHRlcigodG9EbykgPT4gdG9Eby50aXRsZSAhPT0gdGl0bGUpO1xuXG4gICAgICAgIGF3YWl0IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RvcmFnZUl0ZW0oXCJteV90b19kb19saXN0XCIsIHVwZGF0ZWRUb0Rvcyk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBhZGRUb0RvLCBlZGl0VG9EbywgZ2V0VG9Eb3MsIHJlbW92ZVRvRG8gfTtcbn07XG4iXSwibmFtZXMiOlsidXNlQXBwQ29udGV4dCIsInVzZUxvY2FsU3RvcmFnZSIsInVzZU1hbmFnZVRvRG9zIiwidG9Eb3MiLCJzZXRUb0RvcyIsInNldFN0b3JhZ2VJdGVtIiwiZ2V0U3RvcmFnZUl0ZW0iLCJnZXRUb0RvcyIsImVkaXRUb0RvIiwiaWQiLCJ0aXRsZSIsInByaW8iLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiIsInRvRG9Ub0VkaXQiLCJmaWx0ZXIiLCJ0b0RvIiwiY29uc29sZSIsImxvZyIsImFkZFRvRG8iLCJwdXNoIiwic2V0VGltZW91dCIsInJlbW92ZVRvRG8iLCJ1cGRhdGVkVG9Eb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useManageToDos.jsx\n"));

/***/ })

});