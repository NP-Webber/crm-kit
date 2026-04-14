"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Pagination = function Pagination(_ref) {
  var page = _ref.page,
    pageSize = _ref.pageSize,
    total = _ref.total,
    onPageChange = _ref.onPageChange,
    onPageSizeChange = _ref.onPageSizeChange;
  var totalPages = Math.ceil(total / pageSize) || 1;
  var from = (page - 1) * pageSize + 1;
  var to = Math.min(page * pageSize, total);
  var getPageNumbers = function getPageNumbers() {
    var pages = [];
    var maxButtons = 7;
    if (totalPages <= maxButtons) {
      for (var i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');
      var start = Math.max(2, page - 1);
      var end = Math.min(totalPages - 1, page + 1);
      for (var _i = start; _i <= end; _i++) pages.push(_i);
      if (page < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tablekit-pagination",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-pagination-info",
      children: [total > 0 ? "".concat(from, "\u2013").concat(to, " \u05DE\u05EA\u05D5\u05DA ").concat(total) : 'אין תוצאות', onPageSizeChange && /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        value: pageSize,
        onChange: function onChange(e) {
          return onPageSizeChange(Number(e.target.value));
        },
        style: {
          marginRight: 12,
          padding: '4px 8px',
          borderRadius: 3,
          border: '1px solid #d9dcde',
          fontSize: '12px'
        },
        children: [20, 50, 100, 200, 500].map(function (s) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("option", {
            value: s,
            children: [s, " \u05DC\u05E2\u05DE\u05D5\u05D3"]
          }, s);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-pagination-buttons",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "tablekit-page-btn",
        disabled: page <= 1,
        onClick: function onClick() {
          return onPageChange(page - 1);
        },
        children: "\u25C0 \u05D4\u05E7\u05D5\u05D3\u05DD"
      }), getPageNumbers().map(function (p, i) {
        return p === '...' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            padding: '0 6px'
          },
          children: "..."
        }, "dots-".concat(i)) : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-page-btn ".concat(p === page ? 'active' : ''),
          onClick: function onClick() {
            return onPageChange(p);
          },
          children: p
        }, p);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "tablekit-page-btn",
        disabled: page >= totalPages,
        onClick: function onClick() {
          return onPageChange(page + 1);
        },
        children: "\u05D4\u05D1\u05D0 \u25B6"
      })]
    })]
  });
};
var _default = exports["default"] = Pagination;
//# sourceMappingURL=Pagination.js.map