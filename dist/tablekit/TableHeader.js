"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var TableHeader = function TableHeader(_ref) {
  var columns = _ref.columns,
    sortKey = _ref.sortKey,
    sortOrder = _ref.sortOrder,
    onSort = _ref.onSort,
    _ref$columnWidths = _ref.columnWidths,
    columnWidths = _ref$columnWidths === void 0 ? {} : _ref$columnWidths,
    onColumnResize = _ref.onColumnResize;
  var resizingRef = (0, _react.useRef)(null);
  var renderSortIcon = function renderSortIcon(col) {
    if (col.sortable === false) return null;
    var isActive = sortKey === col.key;
    var icon = '⇅';
    if (isActive) {
      icon = sortOrder === 'asc' ? '▲' : '▼';
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "tablekit-sort-icon ".concat(isActive ? 'active' : ''),
      children: icon
    });
  };
  var startResize = (0, _react.useCallback)(function (e, colKey) {
    e.preventDefault();
    e.stopPropagation();
    if (!onColumnResize) return;
    var th = e.currentTarget.closest('th');
    var startWidth = th.getBoundingClientRect().width;
    var startX = e.clientX;
    resizingRef.current = {
      colKey: colKey,
      startX: startX,
      startWidth: startWidth
    };
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    var onMove = function onMove(moveEvent) {
      if (!resizingRef.current) return;
      var dx = resizingRef.current.startX - moveEvent.clientX;
      var newWidth = Math.max(40, resizingRef.current.startWidth + dx);
      onColumnResize(resizingRef.current.colKey, newWidth);
    };
    var _onUp = function onUp() {
      resizingRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', _onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', _onUp);
  }, [onColumnResize]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
    className: "tablekit-thead",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      children: columns.map(function (col) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
          className: "tablekit-th ".concat(col.sortable !== false ? 'sortable' : ''),
          style: {
            textAlign: col.align || 'right',
            position: 'relative',
            overflow: 'hidden'
          },
          onClick: function onClick() {
            return col.sortable !== false && onSort(col.key);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "tablekit-th-content",
            children: [col.title, renderSortIcon(col)]
          }), onColumnResize && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "tablekit-resize-handle",
            onMouseDown: function onMouseDown(e) {
              return startResize(e, col.key);
            },
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            title: "\u05D2\u05E8\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E8\u05D5\u05D7\u05D1"
          })]
        }, col.key);
      })
    })
  });
};
var _default = exports["default"] = TableHeader;
//# sourceMappingURL=TableHeader.js.map