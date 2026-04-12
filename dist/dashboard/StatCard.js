"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * StatCard — כרטיס סטטיסטיקה לדשבורד
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - אייקון MUI
 * @param {number|string} props.value - ערך מספרי
 * @param {string} props.label - תווית
 * @param {string} props.color - צבע (ברירת מחדל: #1565c0)
 * @param {string} props.trend - שינוי (למשל '+12%')
 * @param {string} props.trendColor - צבע trend
 * @param {Function} props.onClick - callback ללחיצה
 */
var StatCard = function StatCard(_ref) {
  var icon = _ref.icon,
    value = _ref.value,
    label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#1565c0' : _ref$color,
    trend = _ref.trend,
    trendColor = _ref.trendColor,
    onClick = _ref.onClick,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    elevation: 0,
    onClick: onClick,
    sx: _objectSpread({
      p: 2.5,
      borderRadius: 2.5,
      border: '1px solid #e3e8ef',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all 0.15s',
      '&:hover': onClick ? {
        boxShadow: '0 4px 16px rgba(21, 101, 192, 0.1)',
        borderColor: color
      } : {}
    }, sx),
    children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: 48,
        height: 48,
        borderRadius: 2,
        bgcolor: "".concat(color, "14"),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        flexShrink: 0
      },
      children: icon
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "h5",
        fontWeight: 800,
        sx: {
          color: '#1a2533',
          lineHeight: 1.2
        },
        children: value
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        color: "text.secondary",
        fontWeight: 500,
        children: label
      }), trend && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "caption",
        sx: {
          color: trendColor || (trend.startsWith('+') ? '#2e7d32' : '#c62828'),
          fontWeight: 600
        },
        children: trend
      })]
    })]
  });
};
var _default = exports["default"] = StatCard;
//# sourceMappingURL=StatCard.js.map