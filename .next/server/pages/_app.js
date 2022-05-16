/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hook/useContext.tsx":
/*!*********************************!*\
  !*** ./src/hook/useContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n\n\n\nconst usersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction UserProvider({ children  }) {\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: registerUserEmail , 1: setRegisterUserEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: userName , 1: setUserName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const user1 = users.find((user)=>{\n        return user;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getUser() {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/users\").then((resp)=>{\n                console.log(resp.data);\n                setUsers(resp.data);\n            });\n        }\n        getUser();\n    }, []);\n    console.log(userName);\n    function registerEmail(email) {\n        setRegisterUserEmail(email);\n    }\n    function validationName() {\n        if ((user1 === null || user1 === void 0 ? void 0 : user1.email) === registerUserEmail) {\n            setUserName(user1.name);\n        }\n    }\n    validationName();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(usersContext.Provider, {\n        value: {\n            userName,\n            registerEmail\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\hook\\\\useContext.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\nfunction UserContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(usersContext);\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9vay91c2VDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBa0Y7QUFDNUM7QUFhdEMsTUFBTUssWUFBWSxpQkFBR0wsb0RBQWEsQ0FBb0IsRUFBRSxDQUFxQjtBQUV0RSxTQUFTTSxZQUFZLENBQUUsRUFBQ0MsUUFBUSxHQUFvQixFQUFDO0lBQ3hELE1BQU0sRUFqQlYsR0FpQldDLEtBQUssR0FqQmhCLEdBaUJrQkMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFjLEVBQUUsQ0FBQztJQUNuRCxNQUFNLEVBbEJWLEdBa0JXTyxpQkFBaUIsR0FsQjVCLEdBa0I4QkMsb0JBQW9CLE1BQUlSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzlELE1BQU0sRUFuQlYsR0FtQldTLFFBQVEsR0FuQm5CLEdBbUJxQkMsV0FBVyxNQUFJViwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM1QyxNQUFNVyxLQUFJLEdBQUdOLEtBQUssQ0FBQ08sSUFBSSxDQUFDLENBQUNELElBQUksR0FBSztRQUFDLE9BQU9BLElBQUk7S0FBQyxDQUFFO0lBRWpEWixnREFBUyxDQUFDLElBQUk7UUFDVixlQUFlYyxPQUFPLEdBQUU7WUFDdEIsTUFBTVosa0RBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQ2MsSUFBSSxDQUFDQyxDQUFBQSxJQUFJLEdBQUc7Z0JBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUM7Z0JBQ3RCYixRQUFRLENBQUNVLElBQUksQ0FBQ0csSUFBSSxDQUFDO2FBQ3BCLENBQUM7U0FDSDtRQUNETixPQUFPLEVBQUUsQ0FBQztLQUNYLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFFTkksT0FBTyxDQUFDQyxHQUFHLENBQUNULFFBQVEsQ0FBQyxDQUFDO0lBRXhCLFNBQVNXLGFBQWEsQ0FBQ0MsS0FBWSxFQUFDO1FBQ2xDYixvQkFBb0IsQ0FBQ2EsS0FBSyxDQUFDO0tBQzVCO0lBRUQsU0FBU0MsY0FBYyxHQUFFO1FBQ3ZCLElBQUdYLENBQUFBLEtBQUksYUFBSkEsS0FBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsS0FBSSxDQUFFVSxLQUFLLE1BQUtkLGlCQUFpQixFQUFDO1lBQ25DRyxXQUFXLENBQUNDLEtBQUksQ0FBQ1ksSUFBSSxDQUFDO1NBQ3ZCO0tBQ0Y7SUFFREQsY0FBYyxFQUFFO0lBRWhCLHFCQUNJLDhEQUFDcEIsWUFBWSxDQUFDc0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWhCLFFBQVE7WUFBQ1csYUFBYTtTQUFFO2tCQUNyRGhCLFFBQVE7Ozs7O1lBQ2EsQ0FDM0I7Q0FFSjtBQUVNLFNBQVNzQixXQUFXLEdBQUc7SUFDMUIsTUFBTUMsT0FBTyxHQUFHN0IsaURBQVUsQ0FBQ0ksWUFBWSxDQUFDO0lBQ3hDLE9BQU95QixPQUFPLENBQUM7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9ob29rL3VzZUNvbnRleHQudHN4PzgxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgVXNlclByb3BzIH0gZnJvbSBcIi4uL3R5cGVzL3Byb3BzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0UHJvcHMge1xyXG4gICB1c2VyTmFtZTpzdHJpbmcsXHJcbiAgIHJlZ2lzdGVyRW1haWw6KG5hbWU6c3RyaW5nKSA9PiB2b2lkLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlclByb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgdXNlcnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFByb3BzPigge30gYXMgVXNlckNvbnRleHRQcm9wcylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvdmlkZXIgKHtjaGlsZHJlbn06IFVzZXJQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlclByb3BzW10+KFtdKTtcclxuICAgIGNvbnN0IFtyZWdpc3RlclVzZXJFbWFpbCwgc2V0UmVnaXN0ZXJVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHtyZXR1cm4gdXNlcn0gKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCl7XHJcbiAgICAgICAgICBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMnKS50aGVuKHJlc3AgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxuICAgICAgICAgICAgc2V0VXNlcnMocmVzcC5kYXRhKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VXNlcigpO1xyXG4gICAgICB9LFtdKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJOYW1lKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckVtYWlsKGVtYWlsOnN0cmluZyl7XHJcbiAgICAgIHNldFJlZ2lzdGVyVXNlckVtYWlsKGVtYWlsKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb25OYW1lKCl7XHJcbiAgICAgIGlmKHVzZXI/LmVtYWlsID09PSByZWdpc3RlclVzZXJFbWFpbCl7XHJcbiAgICAgICAgc2V0VXNlck5hbWUodXNlci5uYW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGlvbk5hbWUoKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8dXNlcnNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXJOYW1lLHJlZ2lzdGVyRW1haWwgfX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC91c2Vyc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlckNvbnRleHQgKCl7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dCh1c2Vyc0NvbnRleHQpO1xyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsInVzZXJzQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlcnMiLCJzZXRVc2VycyIsInJlZ2lzdGVyVXNlckVtYWlsIiwic2V0UmVnaXN0ZXJVc2VyRW1haWwiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlciIsImZpbmQiLCJnZXRVc2VyIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlZ2lzdGVyRW1haWwiLCJlbWFpbCIsInZhbGlkYXRpb25OYW1lIiwibmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJVc2VyQ29udGV4dCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hook/useContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _hook_useContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useContext */ \"./src/hook/useContext.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globalStyles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globalStyles.scss */ \"./src/styles/globalStyles.scss\");\n/* harmony import */ var _styles_globalStyles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globalStyles_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hook_useContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                    theme: \"colored\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 10\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Johny\\\\OneDrive\\\\Ambiente de Trabalho\\\\frontend-_git_github_week\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ2tEO0FBQ1g7QUFDVztBQUNGO0FBQ0Q7QUFDWDtBQUdwQyxTQUFTSSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUVqRCxxQkFDRSw4REFBQ04sNERBQWM7UUFBQ0MsS0FBSyxFQUFFQSxnREFBSztrQkFDMUIsNEVBQUNDLDBEQUFZOzs4QkFDViw4REFBQ0MsMERBQWM7b0JBQUNGLEtBQUssRUFBQyxTQUFTOzs7Ozt3QkFBRzs4QkFDbEMsOERBQUNJLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDaEI7Ozs7O1lBQ0EsQ0FDbEI7Q0FDRjtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xyXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tICcuLi9ob29rL3VzZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLnNjc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPFVzZXJQcm92aWRlcj5cclxuICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHRoZW1lPSdjb2xvcmVkJyAvPlxyXG4gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIlVzZXJQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://backend-git-github-week.herokuapp.com\"\n}) // BaseURL: https://backend-git-github-week.herokuapp.com/\n // POST / users - cadastrar usuário \n // GET /users - listar usuários \n // POST /auth - logar\n // sir.costa@yahoo.com.br\n // 123456\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUdsQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDNUJHLE9BQU8sRUFBRSwrQ0FBK0M7Q0FDM0QsQ0FBQyxDQUVGLDBEQUEwRDtDQUUxRDtDQUNDO0NBQ0QscUJBQXFCO0NBRXJCLHlCQUF5QjtDQUN6QixTQUFTO0FBVFAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwczovL2JhY2tlbmQtZ2l0LWdpdGh1Yi13ZWVrLmhlcm9rdWFwcC5jb20nXHJcbn0pXHJcblxyXG4vLyBCYXNlVVJMOiBodHRwczovL2JhY2tlbmQtZ2l0LWdpdGh1Yi13ZWVrLmhlcm9rdWFwcC5jb20vXHJcblxyXG4vLyBQT1NUIC8gdXNlcnMgLSBjYWRhc3RyYXIgdXN1w6FyaW8gXHJcbi8vIEdFVCAvdXNlcnMgLSBsaXN0YXIgdXN1w6FyaW9zIFxyXG4vLyBQT1NUIC9hdXRoIC0gbG9nYXJcclxuXHJcbi8vIHNpci5jb3N0YUB5YWhvby5jb20uYnJcclxuLy8gMTIzNDU2Il0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    styles: {\n        global: {\n            body: \"#0D0D15\"\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxLQUFLLEdBQUdELDZEQUFXLENBQUM7SUFBRUUsTUFBTSxFQUFFO1FBQ3pDQyxNQUFNLEVBQUU7WUFDTkMsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRjtDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvdGhlbWUudHM/NTE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IHN0eWxlczoge1xyXG4gIGdsb2JhbDoge1xyXG4gICAgYm9keTogJyMwRDBEMTUnXHJcbiAgfVxyXG59fSlcclxuXHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globalStyles.scss":
/*!**************************************!*\
  !*** ./src/styles/globalStyles.scss ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();