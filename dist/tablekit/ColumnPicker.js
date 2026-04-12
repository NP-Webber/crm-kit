"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ColumnPicker = function ColumnPicker(_ref) {
  var allColumns = _ref.allColumns,
    visibleKeys = _ref.visibleKeys,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      top: 0,
      right: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    dropdownPos = _useState4[0],
    setDropdownPos = _useState4[1];
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, []);
  var handleToggle = function handleToggle() {
    if (!open && ref.current) {
      var rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        right: Math.max(4, window.innerWidth - rect.right)
      });
    }
    setOpen(function (v) {
      return !v;
    });
  };
  var toggle = function toggle(key) {
    if (visibleKeys.includes(key)) {
      if (visibleKeys.length > 1) onChange(visibleKeys.filter(function (k) {
        return k !== key;
      }));
    } else {
      onChange([].concat(_toConsumableArray(visibleKeys), [key]));
    }
  };
  var showAll = function showAll() {
    return onChange(allColumns.map(function (c) {
      return c.key;
    }));
  };
  var hideAll = function hideAll() {
    return onChange([allColumns[0].key]);
  };
  var visibleCount = visibleKeys.length;
  var totalCount = allColumns.length;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tablekit-column-picker",
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      className: "tablekit-column-picker-btn".concat(open ? ' open' : ''),
      onClick: handleToggle,
      type: "button",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "tablekit-column-picker-icon",
        children: "\u229E"
      }), "\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "tablekit-column-picker-badge",
        children: [visibleCount, "/", totalCount]
      })]
    }), open && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-column-picker-dropdown",
      style: {
        position: 'fixed',
        top: dropdownPos.top,
        right: dropdownPos.right,
        left: 'auto'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tablekit-column-picker-header",
        children: "\u05E0\u05D9\u05D4\u05D5\u05DC \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-column-picker-actions",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: showAll,
          children: "\u2713 \u05D4\u05E6\u05D2 \u05D4\u05DB\u05DC"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: hideAll,
          children: "\u2715 \u05D4\u05E1\u05EA\u05E8 \u05D4\u05DB\u05DC"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tablekit-column-picker-list",
        children: allColumns.map(function (col) {
          var checked = visibleKeys.includes(col.key);
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            className: "tablekit-column-picker-item".concat(checked ? ' checked' : ''),
            onClick: function onClick() {
              return toggle(col.key);
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "tablekit-column-picker-checkbox".concat(checked ? ' checked' : ''),
              children: checked && '✓'
            }), col.title]
          }, col.key);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-column-picker-footer",
        children: [visibleCount, " \u05DE\u05EA\u05D5\u05DA ", totalCount, " \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA"]
      })]
    })]
  });
};
var _default = exports["default"] = ColumnPicker;