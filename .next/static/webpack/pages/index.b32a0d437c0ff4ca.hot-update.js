/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/screensStyles/ToDoListHome.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/screensStyles/ToDoListHome.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".ToDoListHome_toDosSection__ysJ1i {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 2em;\\n  justify-content: center;\\n}\\n.ToDoListHome_toDosSection__ysJ1i .ToDoListHome_cardContainer__UM_zi {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 1em;\\n  justify-content: center;\\n  width: 100%;\\n}\\n.ToDoListHome_toDosSection__ysJ1i .ToDoListHome_responseMessage__06lPH {\\n  align-items: center;\\n  bottom: 1.5em;\\n  display: flex;\\n  gap: 1em;\\n  justify-content: center;\\n  position: absolute;\\n  width: 100%;\\n}\\n.ToDoListHome_toDosSection__ysJ1i .ToDoListHome_responseMessage__06lPH .ToDoListHome_check__zc7Dg {\\n  animation: ToDoListHome_fadeIn__elcIi 0.7s;\\n  height: auto;\\n  width: 30px;\\n}\\n.ToDoListHome_toDosSection__ysJ1i .ToDoListHome_responseMessage__06lPH .ToDoListHome_message___buaP {\\n  animation: ToDoListHome_translateXRightOpacityIn__NZhJR 0.9s;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/screensStyles/ToDoListHome.module.scss\",\"webpack://styles/sass-utils/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,eAAA;EACA,QAAA;EACA,uBAAA;AADJ;AAGI;EACI,aAAA;EACA,eAAA;EACA,QAAA;EACA,uBAAA;EACA,WAAA;AADR;AAII;EC+HA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,QAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;ADhIJ;ACkII;EACI,0CAAA;EACA,YAAA;EACA,WAAA;ADhIR;ACmII;EACI,4DAAA;ADjIR\",\"sourcesContent\":[\"@import '../sass-utils/index';\\n\\n.toDosSection {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 2em;\\n    justify-content: center;\\n\\n    .cardContainer {\\n        display: flex;\\n        flex-wrap: wrap;\\n        gap: 1em;\\n        justify-content: center;\\n        width: 100%;\\n    }\\n\\n    .responseMessage {\\n        @include responseMessage;\\n    }\\n}\",\"@import \\\"./variables\\\";\\n\\n// animations\\n@mixin translateXRightOpacityIn {\\n    @keyframes translateXRightOpacityIn {\\n        0% {\\n            transform: translateX(10rem);\\n            opacity: 0;\\n        }\\n\\n        100% {\\n            transform: translateX(0rem);\\n            opacity: 1;\\n        }\\n    }\\n}\\n\\n@mixin translateYTopOpacityIn {\\n    @keyframes translateYTopOpacityIn {\\n        0% {\\n            transform: translateY(10rem);\\n            opacity: 0;\\n        }\\n\\n        50% {\\n            opacity: 0.5;\\n        }\\n\\n        100% {\\n            transform: translateY(0rem);\\n            opacity: 1;\\n        }\\n    }\\n}\\n\\n@mixin translateYTopOpacityOut {\\n    @keyframes translateYTopOpacityOut {\\n        0% {\\n            transform: translateY(0rem);\\n            opacity: 1;\\n        }\\n\\n        50% {\\n            opacity: 0.5;\\n        }\\n\\n        100% {\\n            transform: translateY(10rem);\\n            opacity: 0;\\n        }\\n    }\\n}\\n\\n@mixin slideInFromTop {\\n    @keyframes slideInFromTop {\\n        from {\\n            transform: translateY(-2rem);\\n            opacity: 0;\\n        }\\n\\n        to {\\n            transform: translateY(0rem);\\n            opacity: 1;\\n        }\\n    }\\n}\\n\\n@mixin slideOutToTop {\\n    @keyframes slideOutToTop {\\n        from {\\n            transform: translateY(0rem);\\n            opacity: 1;\\n        }\\n\\n        to {\\n            transform: translateY(-2rem);\\n            opacity: 0;\\n        }\\n    }\\n}\\n\\n@mixin fadeIn {\\n    @keyframes fadeIn {\\n        from {\\n            opacity: 0;\\n        }\\n\\n        to {\\n            opacity: 1;\\n        }\\n    }\\n}\\n\\n@mixin fadeOut {\\n    @keyframes fadeOut {\\n        from {\\n            opacity: 1;\\n        }\\n\\n        to {\\n            opacity: 0;\\n        }\\n    }\\n}\\n\\n@mixin filterBlurIn {\\n    @keyframes filterBlurIn {\\n        from {\\n            background-color: rgb(0 0 0 / 16%);\\n            backdrop-filter: blur(0px);\\n            -webkit-backdrop-filter: blur(0px);\\n        }\\n\\n        to {\\n            backdrop-filter: blur(8px);\\n            -webkit-backdrop-filter: blur(8px);\\n        }\\n    }\\n}\\n\\n@mixin filterBlurOut {\\n    @keyframes filterBlurOut {\\n        from {\\n            background-color: rgb(0 0 0 / 16%);\\n            backdrop-filter: blur(8px);\\n            -webkit-backdrop-filter: blur(8px);\\n        }\\n\\n        to {\\n            backdrop-filter: blur(0px);\\n            -webkit-backdrop-filter: blur(0px);\\n        }\\n    }\\n}\\n\\n// styles\\n@mixin boxShadow {\\n    -webkit-box-shadow: 0px -29px 38px 28px rgba(0, 0, 0, 0.48);\\n    -moz-box-shadow: 0px -29px 38px 28px rgba(0, 0, 0, 0.48);\\n    box-shadow: 0px -29px 38px 28px rgba(0, 0, 0, 0.48);\\n}\\n\\n@mixin responseMessage {\\n    align-items: center;\\n    bottom: 1.5em;\\n    display: flex;\\n    gap: 1em;\\n    justify-content: center;\\n    position: absolute;\\n    width: 100%;\\n\\n    .check {\\n        animation: fadeIn 0.7s;\\n        height: auto;\\n        width: 30px;\\n    }\\n\\n    .message {\\n        animation: translateXRightOpacityIn 0.9s;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"toDosSection\": \"ToDoListHome_toDosSection__ysJ1i\",\n\t\"cardContainer\": \"ToDoListHome_cardContainer__UM_zi\",\n\t\"responseMessage\": \"ToDoListHome_responseMessage__06lPH\",\n\t\"check\": \"ToDoListHome_check__zc7Dg\",\n\t\"fadeIn\": \"ToDoListHome_fadeIn__elcIi\",\n\t\"message\": \"ToDoListHome_message___buaP\",\n\t\"translateXRightOpacityIn\": \"ToDoListHome_translateXRightOpacityIn__NZhJR\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9zY3JlZW5zU3R5bGVzL1RvRG9MaXN0SG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNLQUFrRjtBQUM1SDtBQUNBO0FBQ0EsNkVBQTZFLGtCQUFrQixvQkFBb0IsYUFBYSw0QkFBNEIsR0FBRyx3RUFBd0Usa0JBQWtCLG9CQUFvQixhQUFhLDRCQUE0QixnQkFBZ0IsR0FBRywwRUFBMEUsd0JBQXdCLGtCQUFrQixrQkFBa0IsYUFBYSw0QkFBNEIsdUJBQXVCLGdCQUFnQixHQUFHLHFHQUFxRywrQ0FBK0MsaUJBQWlCLGdCQUFnQixHQUFHLHVHQUF1RyxpRUFBaUUsR0FBRyxPQUFPLHlKQUF5SixVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLHdEQUF3RCxtQkFBbUIsb0JBQW9CLHNCQUFzQixlQUFlLDhCQUE4Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixtQkFBbUIsa0NBQWtDLHNCQUFzQixPQUFPLDBCQUEwQixtQ0FBbUMsT0FBTyxHQUFHLDJCQUEyQixvREFBb0QsMkNBQTJDLGNBQWMsMkNBQTJDLHlCQUF5QixXQUFXLGtCQUFrQiwwQ0FBMEMseUJBQXlCLFdBQVcsT0FBTyxHQUFHLG1DQUFtQyx5Q0FBeUMsY0FBYywyQ0FBMkMseUJBQXlCLFdBQVcsaUJBQWlCLDJCQUEyQixXQUFXLGtCQUFrQiwwQ0FBMEMseUJBQXlCLFdBQVcsT0FBTyxHQUFHLG9DQUFvQywwQ0FBMEMsY0FBYywwQ0FBMEMseUJBQXlCLFdBQVcsaUJBQWlCLDJCQUEyQixXQUFXLGtCQUFrQiwyQ0FBMkMseUJBQXlCLFdBQVcsT0FBTyxHQUFHLDJCQUEyQixpQ0FBaUMsZ0JBQWdCLDJDQUEyQyx5QkFBeUIsV0FBVyxnQkFBZ0IsMENBQTBDLHlCQUF5QixXQUFXLE9BQU8sR0FBRywwQkFBMEIsZ0NBQWdDLGdCQUFnQiwwQ0FBMEMseUJBQXlCLFdBQVcsZ0JBQWdCLDJDQUEyQyx5QkFBeUIsV0FBVyxPQUFPLEdBQUcsbUJBQW1CLHlCQUF5QixnQkFBZ0IseUJBQXlCLFdBQVcsZ0JBQWdCLHlCQUF5QixXQUFXLE9BQU8sR0FBRyxvQkFBb0IsMEJBQTBCLGdCQUFnQix5QkFBeUIsV0FBVyxnQkFBZ0IseUJBQXlCLFdBQVcsT0FBTyxHQUFHLHlCQUF5QiwrQkFBK0IsZ0JBQWdCLGlEQUFpRCx5Q0FBeUMsaURBQWlELFdBQVcsZ0JBQWdCLHlDQUF5QyxpREFBaUQsV0FBVyxPQUFPLEdBQUcsMEJBQTBCLGdDQUFnQyxnQkFBZ0IsaURBQWlELHlDQUF5QyxpREFBaUQsV0FBVyxnQkFBZ0IseUNBQXlDLGlEQUFpRCxXQUFXLE9BQU8sR0FBRyxpQ0FBaUMsa0VBQWtFLCtEQUErRCwwREFBMEQsR0FBRyw0QkFBNEIsMEJBQTBCLG9CQUFvQixvQkFBb0IsZUFBZSw4QkFBOEIseUJBQXlCLGtCQUFrQixnQkFBZ0IsaUNBQWlDLHVCQUF1QixzQkFBc0IsT0FBTyxrQkFBa0IsbURBQW1ELE9BQU8sR0FBRyxtQkFBbUI7QUFDdnRKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NjcmVlbnNTdHlsZXMvVG9Eb0xpc3RIb21lLm1vZHVsZS5zY3NzP2IwY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ub0RvTGlzdEhvbWVfdG9Eb3NTZWN0aW9uX195c0oxaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLlRvRG9MaXN0SG9tZV90b0Rvc1NlY3Rpb25fX3lzSjFpIC5Ub0RvTGlzdEhvbWVfY2FyZENvbnRhaW5lcl9fVU1femkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLlRvRG9MaXN0SG9tZV90b0Rvc1NlY3Rpb25fX3lzSjFpIC5Ub0RvTGlzdEhvbWVfcmVzcG9uc2VNZXNzYWdlX18wNmxQSCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm90dG9tOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5Ub0RvTGlzdEhvbWVfdG9Eb3NTZWN0aW9uX195c0oxaSAuVG9Eb0xpc3RIb21lX3Jlc3BvbnNlTWVzc2FnZV9fMDZsUEggLlRvRG9MaXN0SG9tZV9jaGVja19femM3RGcge1xcbiAgYW5pbWF0aW9uOiBUb0RvTGlzdEhvbWVfZmFkZUluX19lbGNJaSAwLjdzO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5Ub0RvTGlzdEhvbWVfdG9Eb3NTZWN0aW9uX195c0oxaSAuVG9Eb0xpc3RIb21lX3Jlc3BvbnNlTWVzc2FnZV9fMDZsUEggLlRvRG9MaXN0SG9tZV9tZXNzYWdlX19fYnVhUCB7XFxuICBhbmltYXRpb246IFRvRG9MaXN0SG9tZV90cmFuc2xhdGVYUmlnaHRPcGFjaXR5SW5fX05aaEpSIDAuOXM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc2NyZWVuc1N0eWxlcy9Ub0RvTGlzdEhvbWUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvc2Fzcy11dGlscy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFEUjtBQUlJO0VDK0hBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURoSUo7QUNrSUk7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEaElSO0FDbUlJO0VBQ0ksNERBQUE7QURqSVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vc2Fzcy11dGlscy9pbmRleCc7XFxuXFxuLnRvRG9zU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAuY2FyZENvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZ2FwOiAxZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5yZXNwb25zZU1lc3NhZ2Uge1xcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2VNZXNzYWdlO1xcbiAgICB9XFxufVwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXNcXFwiO1xcblxcbi8vIGFuaW1hdGlvbnNcXG5AbWl4aW4gdHJhbnNsYXRlWFJpZ2h0T3BhY2l0eUluIHtcXG4gICAgQGtleWZyYW1lcyB0cmFuc2xhdGVYUmlnaHRPcGFjaXR5SW4ge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0cmFuc2xhdGVZVG9wT3BhY2l0eUluIHtcXG4gICAgQGtleWZyYW1lcyB0cmFuc2xhdGVZVG9wT3BhY2l0eUluIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA1MCUge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0cmFuc2xhdGVZVG9wT3BhY2l0eU91dCB7XFxuICAgIEBrZXlmcmFtZXMgdHJhbnNsYXRlWVRvcE9wYWNpdHlPdXQge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHNsaWRlSW5Gcm9tVG9wIHtcXG4gICAgQGtleWZyYW1lcyBzbGlkZUluRnJvbVRvcCB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHNsaWRlT3V0VG9Ub3Age1xcbiAgICBAa2V5ZnJhbWVzIHNsaWRlT3V0VG9Ub3Age1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiBmYWRlSW4ge1xcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1peGluIGZhZGVPdXQge1xcbiAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiBmaWx0ZXJCbHVySW4ge1xcbiAgICBAa2V5ZnJhbWVzIGZpbHRlckJsdXJJbiB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAxNiUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpO1xcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gZmlsdGVyQmx1ck91dCB7XFxuICAgIEBrZXlmcmFtZXMgZmlsdGVyQmx1ck91dCB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAxNiUpO1xcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7XFxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vLyBzdHlsZXNcXG5AbWl4aW4gYm94U2hhZG93IHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTI5cHggMzhweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC40OCk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IC0yOXB4IDM4cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuNDgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggLTI5cHggMzhweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC40OCk7XFxufVxcblxcbkBtaXhpbiByZXNwb25zZU1lc3NhZ2Uge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3R0b206IDEuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC5jaGVjayB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjdzO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1lc3NhZ2Uge1xcbiAgICAgICAgYW5pbWF0aW9uOiB0cmFuc2xhdGVYUmlnaHRPcGFjaXR5SW4gMC45cztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0b0Rvc1NlY3Rpb25cIjogXCJUb0RvTGlzdEhvbWVfdG9Eb3NTZWN0aW9uX195c0oxaVwiLFxuXHRcImNhcmRDb250YWluZXJcIjogXCJUb0RvTGlzdEhvbWVfY2FyZENvbnRhaW5lcl9fVU1femlcIixcblx0XCJyZXNwb25zZU1lc3NhZ2VcIjogXCJUb0RvTGlzdEhvbWVfcmVzcG9uc2VNZXNzYWdlX18wNmxQSFwiLFxuXHRcImNoZWNrXCI6IFwiVG9Eb0xpc3RIb21lX2NoZWNrX196YzdEZ1wiLFxuXHRcImZhZGVJblwiOiBcIlRvRG9MaXN0SG9tZV9mYWRlSW5fX2VsY0lpXCIsXG5cdFwibWVzc2FnZVwiOiBcIlRvRG9MaXN0SG9tZV9tZXNzYWdlX19fYnVhUFwiLFxuXHRcInRyYW5zbGF0ZVhSaWdodE9wYWNpdHlJblwiOiBcIlRvRG9MaXN0SG9tZV90cmFuc2xhdGVYUmlnaHRPcGFjaXR5SW5fX05aaEpSXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./styles/screensStyles/ToDoListHome.module.scss\n"));

/***/ })

});