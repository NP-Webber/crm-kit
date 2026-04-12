"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RowDrawer = function RowDrawer(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    row = _ref.row,
    columns = _ref.columns,
    renderDetail = _ref.renderDetail,
    onOpenCard = _ref.onOpenCard;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    animate = _useState4[0],
    setAnimate = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    frozenRow = _useState6[0],
    setFrozenRow = _useState6[1];
  var panelRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (open && row) setFrozenRow(row);
  }, [open, row]);
  (0, _react.useEffect)(function () {
    if (open) {
      setVisible(true);
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return setAnimate(true);
        });
      });
    } else {
      setAnimate(false);
      var t = setTimeout(function () {
        setVisible(false);
        setFrozenRow(null);
      }, 220);
      return function () {
        return clearTimeout(t);
      };
    }
  }, [open]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, [open, onClose]);
  if (!visible) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "tablekit-modal-overlay ".concat(animate ? 'open' : ''),
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tablekit-modal-panel ".concat(animate ? 'open' : ''),
      ref: panelRef,
      role: "dialog",
      "aria-modal": "true",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "tablekit-drawer-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "tablekit-drawer-title",
          children: "\u05E4\u05E8\u05D8\u05D9 \u05E8\u05E9\u05D5\u05DE\u05D4"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-drawer-close",
          onClick: onClose,
          type: "button",
          "aria-label": "\u05E1\u05D2\u05D5\u05E8",
          children: "\u2715"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tablekit-drawer-body",
        children: renderDetail ? renderDetail(frozenRow) : /*#__PURE__*/(0, _jsxRuntime.jsx)("dl", {
          className: "tablekit-drawer-dl",
          children: columns.filter(function (col) {
            return col.key !== '_actions';
          }).map(function (col) {
            var raw = frozenRow === null || frozenRow === void 0 ? void 0 : frozenRow[col.key];
            var rendered = col.render ? col.render(raw, frozenRow) : raw;
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "tablekit-drawer-row",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("dt", {
                className: "tablekit-drawer-label",
                children: col.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("dd", {
                className: "tablekit-drawer-value",
                children: rendered !== null && rendered !== undefined && rendered !== '' ? rendered : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "tablekit-drawer-empty",
                  children: "\u2014"
                })
              })]
            }, col.key);
          })
        })
      }), onOpenCard && frozenRow && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tablekit-drawer-footer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "tablekit-drawer-open-card",
          type: "button",
          onClick: function onClick() {
            onClose();
            onOpenCard(frozenRow);
          },
          children: "\u05E4\u05EA\u05D7 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05D4"
        })
      })]
    })
  });
};
var _default = exports["default"] = RowDrawer;
//# sourceMappingURL=RowDrawer.js.map