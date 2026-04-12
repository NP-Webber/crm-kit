"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _TableRow = _interopRequireDefault(require("./TableRow.js"));
var _TableCell = _interopRequireDefault(require("./TableCell.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TableBody = function TableBody(_ref) {
  var data = _ref.data,
    columns = _ref.columns,
    loading = _ref.loading,
    _ref$emptyMessage = _ref.emptyMessage,
    emptyMessage = _ref$emptyMessage === void 0 ? 'אין נתונים להצגה' : _ref$emptyMessage,
    onRowDoubleClick = _ref.onRowDoubleClick;
  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
      className: "tablekit-tbody",
      children: Array.from({
        length: 5
      }).map(function (_, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
          className: "tablekit-skeleton-row",
          children: columns.map(function (col) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              className: "tablekit-td",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "tablekit-skeleton-cell"
              })
            }, col.key);
          })
        }, "skel-".concat(i));
      })
    });
  }
  if (!data || data.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
      className: "tablekit-tbody",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
          colSpan: columns.length,
          className: "tablekit-empty",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "tablekit-empty-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#90caf9",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
                x1: "3",
                y1: "9",
                x2: "21",
                y2: "9"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
                x1: "9",
                y1: "21",
                x2: "9",
                y2: "9"
              })]
            })
          }), emptyMessage]
        })
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
    className: "tablekit-tbody",
    children: data.map(function (row, rowIndex) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableRow["default"], {
        row: row,
        onDoubleClick: onRowDoubleClick,
        children: columns.map(function (col) {
          var value = row[col.key];
          var rendered = col.render ? col.render(value, row) : value;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableCell["default"], {
            label: col.title,
            align: col.align,
            children: rendered !== null && rendered !== void 0 ? rendered : '—'
          }, col.key);
        })
      }, row._id || row.id || rowIndex);
    })
  });
};
var _default = exports["default"] = TableBody;