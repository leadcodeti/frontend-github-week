"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hook/useContext.tsx":
/*!*********************************!*\
  !*** ./src/hook/useContext.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Johny_OneDrive_Ambiente_de_Trabalho_frontend_git_github_week_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Johny_OneDrive_Ambiente_de_Trabalho_frontend_git_github_week_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Johny_OneDrive_Ambiente_de_Trabalho_frontend_git_github_week_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar usersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction UserProvider(param) {\n    var children = param.children;\n    var registerEmail = function registerEmail(email) {\n        setRegisterUserEmail(email);\n    };\n    var validationName = function validationName() {\n        if ((user === null || user === void 0 ? void 0 : user.email) === registerUserEmail) {\n            setUserName(user.name);\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), users = ref[0], setUsers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), registerUserEmail = ref1[0], setRegisterUserEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userName = ref2[0], setUserName = ref2[1];\n    var user = users.find(function(user) {\n        return p;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getUser() {\n            return _getUser.apply(this, arguments);\n        }\n        function _getUser() {\n            _getUser = _asyncToGenerator(C_Users_Johny_OneDrive_Ambiente_de_Trabalho_frontend_git_github_week_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_Johny_OneDrive_Ambiente_de_Trabalho_frontend_git_github_week_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/users\").then(function(resp) {\n                                console.log(resp.data);\n                                setUsers(resp.data);\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getUser.apply(this, arguments);\n        }\n        getUser();\n    }, []);\n    console.log(userName);\n    validationName();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(usersContext.Provider, {\n        value: {\n            userName: userName,\n            registerEmail: registerEmail\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\hook\\\\useContext.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(UserProvider, \"1wx7F7Bq39iKtilLB9Sr58ff3bw=\");\n_c = UserProvider;\nfunction UserContext() {\n    _s1();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(usersContext);\n    return context;\n}\n_s1(UserContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n_c1 = UserContext;\nvar _c, _c1;\n$RefreshReg$(_c, \"UserProvider\");\n$RefreshReg$(_c1, \"UserContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9vay91c2VDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRjtBQUM1Qzs7QUFhdEMsSUFBTUssWUFBWSxpQkFBR0wsb0RBQWEsQ0FBb0IsRUFBRSxDQUFxQjtBQUV0RSxTQUFTTSxZQUFZLENBQUUsS0FBNkIsRUFBQztRQUE5QixRQUFTLEdBQVQsS0FBNkIsQ0FBNUJDLFFBQVE7UUFzQjFCQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsQ0FBQ0MsS0FBWSxFQUFDO1FBQ2xDQyxvQkFBb0IsQ0FBQ0QsS0FBSyxDQUFDO0tBQzVCO1FBRVFFLGNBQWMsR0FBdkIsU0FBU0EsY0FBYyxHQUFFO1FBQ3ZCLElBQUdDLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBSSxDQUFFSCxLQUFLLE1BQUtJLGlCQUFpQixFQUFDO1lBQ25DQyxXQUFXLENBQUNGLElBQUksQ0FBQ0csSUFBSSxDQUFDO1NBQ3ZCO0tBQ0Y7O0lBN0JELElBQTBCWixHQUF5QixHQUF6QkEsK0NBQVEsQ0FBYyxFQUFFLENBQUMsRUFqQnZELEtBaUJnQixHQUFjQSxHQUF5QixHQUF2QyxFQWpCaEIsUUFpQjBCLEdBQUlBLEdBQXlCLEdBQTdCO0lBQ3RCLElBQWtEQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBbEJsRSxpQkFrQjRCLEdBQTBCQSxJQUFZLEdBQXRDLEVBbEI1QixvQkFrQmtELEdBQUlBLElBQVksR0FBaEI7SUFDOUMsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFuQmhELFFBbUJtQixHQUFpQkEsSUFBWSxHQUE3QixFQW5CbkIsV0FtQmdDLEdBQUlBLElBQVksR0FBaEI7SUFDNUIsSUFBTVMsSUFBSSxHQUFHSSxLQUFLLENBQUNHLElBQUksQ0FBQyxTQUFDUCxJQUFJLEVBQUs7UUFDaEMsT0FDRVEsQ0FBQyxDQUNGO0tBQ0YsQ0FBRTtJQUVIbEIsZ0RBQVMsQ0FBQyxXQUFJO2lCQUNLbUIsT0FBTzttQkFBUEEsUUFBTzs7aUJBQVBBLFFBQU87WUFBUEEsUUFBTyxHQUF0QixxTkFBd0I7Ozs7O21DQUNoQmpCLGtEQUFPLENBQUMsUUFBUSxDQUFDLENBQUNtQixJQUFJLENBQUNDLFNBQUFBLElBQUksRUFBRztnQ0FDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQztnQ0FDdEJWLFFBQVEsQ0FBQ08sSUFBSSxDQUFDRyxJQUFJLENBQUM7NkJBQ3BCLENBQUM7Ozs7OzthQUNIO21CQUxjTixRQUFPOztRQU10QkEsT0FBTyxFQUFFLENBQUM7S0FDWCxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRU5JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixRQUFRLENBQUMsQ0FBQztJQVl4QlAsY0FBYyxFQUFFO0lBRWhCLHFCQUNJLDhEQUFDTixZQUFZLENBQUN1QixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFWCxRQUFRLEVBQVJBLFFBQVE7WUFBQ1YsYUFBYSxFQUFiQSxhQUFhO1NBQUU7a0JBQ3JERCxRQUFROzs7OztZQUNhLENBQzNCO0NBRUo7R0F4Q2VELFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTBDckIsU0FBU3dCLFdBQVcsR0FBRzs7SUFDMUIsSUFBTUMsT0FBTyxHQUFHOUIsaURBQVUsQ0FBQ0ksWUFBWSxDQUFDO0lBQ3hDLE9BQU8wQixPQUFPLENBQUM7Q0FDbEI7SUFIZUQsV0FBVztBQUFYQSxNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rL3VzZUNvbnRleHQudHN4PzgxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgVXNlclByb3BzIH0gZnJvbSBcIi4uL3R5cGVzL3Byb3BzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0UHJvcHMge1xyXG4gICB1c2VyTmFtZTpzdHJpbmcsXHJcbiAgIHJlZ2lzdGVyRW1haWw6KG5hbWU6c3RyaW5nKSA9PiB2b2lkLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlclByb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgdXNlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFByb3BzPigge30gYXMgVXNlckNvbnRleHRQcm9wcylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIgKHtjaGlsZHJlbn06IFVzZXJQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlclVzZXJFbWFpbCwgc2V0UmVnaXN0ZXJVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIHBcclxuICAgICAgKVxyXG4gICAgfSApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKXtcclxuICAgICAgICAgIGF3YWl0IGFwaS5nZXQoJy91c2VycycpLnRoZW4ocmVzcCA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICBzZXRVc2VycyhyZXNwLmRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRVc2VyKCk7XHJcbiAgICAgIH0sW10pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codXNlck5hbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoZW1haWw6c3RyaW5nKXtcclxuICAgICAgc2V0UmVnaXN0ZXJVc2VyRW1haWwoZW1haWwpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGlvbk5hbWUoKXtcclxuICAgICAgaWYodXNlcj8uZW1haWwgPT09IHJlZ2lzdGVyVXNlckVtYWlsKXtcclxuICAgICAgICBzZXRVc2VyTmFtZSh1c2VyLm5hbWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0aW9uTmFtZSgpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDx1c2Vyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlck5hbWUscmVnaXN0ZXJFbWFpbCB9fT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3VzZXJzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ29udGV4dCAoKXtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KHVzZXJzQ29udGV4dCk7XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwidXNlcnNDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZWdpc3RlckVtYWlsIiwiZW1haWwiLCJzZXRSZWdpc3RlclVzZXJFbWFpbCIsInZhbGlkYXRpb25OYW1lIiwidXNlciIsInJlZ2lzdGVyVXNlckVtYWlsIiwic2V0VXNlck5hbWUiLCJuYW1lIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJOYW1lIiwiZmluZCIsInAiLCJnZXRVc2VyIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiLCJVc2VyQ29udGV4dCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hook/useContext.tsx\n");

/***/ })

});