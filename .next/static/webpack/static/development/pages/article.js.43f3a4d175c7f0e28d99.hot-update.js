webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/query */ "./components/query.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_queries_article_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo/queries/article/article */ "./apollo/queries/article/article.js");
var _jsxFileName = "E:\\Coding\\next-materialui\\pages\\article.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Article = function Article() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
    query: _apollo_queries_article_article__WEBPACK_IMPORTED_MODULE_5__["default"],
    id: router.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, function (_ref) {
    var article = _ref.data.article;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, article.title), __jsx("img", {
      src: "http://localhost:1337" + article.image.src,
      alt: article.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: article.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_4___default.a, {
      format: "MMM Do YYYY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, article.published_at)))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=article.js.43f3a4d175c7f0e28d99.hot-update.js.map