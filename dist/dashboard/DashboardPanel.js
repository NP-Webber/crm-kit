"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _Refresh = _interopRequireDefault(require("@mui/icons-material/Refresh"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * DashboardPanel — פאנל דשבורד מתקפל עם כותרת צבעונית
 *
 * תבנית מוכנה: כותרת בצבע ראשי + אייקון + כפתורי פעולה + גוף מתקפל.
 *
 * @param {Object} props
 * @param {string} props.title - כותרת הדשבורד
 * @param {string} [props.subtitle] - כותרת משנית (למשל שם תקופה)
 * @param {React.ReactNode} [props.icon] - אייקון MUI בכותרת
 * @param {string} [props.color='primary.main'] - צבע רקע הכותרת (MUI palette)
 * @param {boolean} [props.defaultOpen=false] - האם פתוח כברירת מחדל
 * @param {boolean} [props.loading=false] - מצב טעינה
 * @param {Function} [props.onRefresh] - callback לרענון (מציג כפתור רענון)
 * @param {Array<{icon, tooltip, onClick, disabled}>} [props.actions] - כפתורי פעולה נוספים בכותרת
 * @param {Object} [props.headerSx] - סגנון נוסף לכותרת
 * @param {Object} [props.bodySx] - סגנון נוסף לגוף
 * @param {React.ReactNode} props.children - תוכן הדשבורד
 */
var DashboardPanel = function DashboardPanel(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    icon = _ref.icon,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary.main' : _ref$color,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    onRefresh = _ref.onRefresh,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    _ref$headerSx = _ref.headerSx,
    headerSx = _ref$headerSx === void 0 ? {} : _ref$headerSx,
    _ref$bodySx = _ref.bodySx,
    bodySx = _ref$bodySx === void 0 ? {} : _ref$bodySx,
    children = _ref.children;
  var _useState = (0, _react.useState)(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      mb: 3
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      onClick: function onClick() {
        return setOpen(function (p) {
          return !p;
        });
      },
      sx: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: color,
        color: 'white',
        px: 2.5,
        py: 1.2,
        borderRadius: open ? '8px 8px 0 0' : 2,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'border-radius 0.2s'
      }, headerSx),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1
        },
        children: [icon, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          fontWeight: 700,
          variant: "body1",
          children: [title, subtitle ? " \u2014 ".concat(subtitle) : '']
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        },
        children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
          size: 16,
          sx: {
            color: 'white'
          }
        }), actions.map(function (action, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
            title: action.tooltip || '',
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                size: "small",
                sx: {
                  color: 'white'
                },
                disabled: action.disabled || loading,
                onClick: function onClick(e) {
                  var _action$onClick;
                  e.stopPropagation();
                  (_action$onClick = action.onClick) === null || _action$onClick === void 0 || _action$onClick.call(action);
                },
                children: action.icon
              })
            })
          }, i);
        }), onRefresh && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
          title: "\u05E8\u05E2\u05E0\u05DF",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            size: "small",
            sx: {
              color: 'white'
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              onRefresh();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Refresh["default"], {
              fontSize: "small"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {
          sx: {
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: '0.2s'
          }
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": open,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
        elevation: 2,
        sx: _objectSpread({
          p: 2.5,
          borderRadius: '0 0 8px 8px',
          borderTop: 'none'
        }, bodySx),
        children: children
      })
    })]
  });
};
var _default = exports["default"] = DashboardPanel;
//# sourceMappingURL=DashboardPanel.js.map