"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/validation/validationForm.ts":
/*!******************************************!*\
  !*** ./src/validation/validationForm.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ValidationForm\": function() { return /* binding */ ValidationForm; }\n/* harmony export */ });\nfunction ValidationForm(values) {\n    if (!values.email) {\n        var errors = {\n            email: \"E-mail is required\"\n        };\n        throw errors;\n    }\n    if (!values.email) {\n        var errors1 = {\n            email: \"E-mail is required\"\n        };\n        throw errors1;\n    }\n    if (!values.password) {\n        var errors2 = {\n            password: \"Password is required\"\n        };\n        throw errors2;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uRm9ybS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR08sU0FBU0EsY0FBYyxDQUFFQyxNQUFtQixFQUFDO0lBQ2xELElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxLQUFLLEVBQUU7UUFDakIsSUFBTUMsTUFBTSxHQUFHO1lBQUVELEtBQUssRUFBRSxvQkFBb0I7U0FBRTtRQUM5QyxNQUFNQyxNQUFNLENBQUM7S0FDZDtJQUNELElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxLQUFLLEVBQUU7UUFDakIsSUFBTUMsT0FBTSxHQUFHO1lBQUVELEtBQUssRUFBRSxvQkFBb0I7U0FBRTtRQUM5QyxNQUFNQyxPQUFNLENBQUM7S0FDZDtJQUNELElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxRQUFRLEVBQUU7UUFDcEIsSUFBTUQsT0FBTSxHQUFHO1lBQUVDLFFBQVEsRUFBRSxzQkFBc0I7U0FBRTtRQUNuRCxNQUFNRCxPQUFNLENBQUM7S0FDZDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRpb25Gb3JtLnRzPzU1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsdWVzUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXMvcHJvcHNcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGlvbkZvcm0oIHZhbHVlczogVmFsdWVzUHJvcHMpe1xyXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB7IGVtYWlsOiBcIkUtbWFpbCBpcyByZXF1aXJlZFwiIH07XHJcbiAgICB0aHJvdyBlcnJvcnM7XHJcbiAgfVxyXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB7IGVtYWlsOiBcIkUtbWFpbCBpcyByZXF1aXJlZFwiIH07XHJcbiAgICB0aHJvdyBlcnJvcnM7XHJcbiAgfVxyXG4gIGlmICghdmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB7IHBhc3N3b3JkOiBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfTtcclxuICAgIHRocm93IGVycm9ycztcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiVmFsaWRhdGlvbkZvcm0iLCJ2YWx1ZXMiLCJlbWFpbCIsImVycm9ycyIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/validation/validationForm.ts\n");

/***/ })

});