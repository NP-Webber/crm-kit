"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SettingsCard;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CRM KIT — SettingsCard: premium card wrapper for settings sections
function SettingsCard(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$noPadding = _ref.noPadding,
    noPadding = _ref$noPadding === void 0 ? false : _ref$noPadding,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  var isAdmin = variant === 'admin';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: _objectSpread({
      backgroundColor: isAdmin ? _constants.PA_COLORS.adminBg : _constants.PA_COLORS.cardBg,
      border: "1px solid ".concat(isAdmin ? _constants.PA_COLORS.adminBorder : _constants.PA_COLORS.cardBorder),
      borderRadius: "".concat(_constants.PA_RADIUS.xl, "px"),
      boxShadow: _constants.PA_SHADOWS.card,
      padding: noPadding ? 0 : {
        xs: "20px",
        sm: "28px"
      },
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      transition: _constants.PA_TRANSITIONS.normal,
      overflow: 'hidden'
    }, sx),
    children: [(title || description) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: "".concat(_constants.PA_SPACING.md, "px"),
        padding: noPadding ? '28px 28px 0' : 0
      },
      children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: "".concat(_constants.PA_RADIUS.md, "px"),
          backgroundColor: isAdmin ? 'rgba(234,88,12,0.06)' : _constants.PA_COLORS.accentLight,
          color: isAdmin ? _constants.PA_COLORS.adminAccent : _constants.PA_COLORS.accent,
          flexShrink: 0,
          '& .MuiSvgIcon-root': {
            fontSize: 20
          }
        },
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          flex: 1,
          minWidth: 0
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.sectionTitle), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: isAdmin ? _constants.PA_COLORS.adminAccent : _constants.PA_COLORS.textPrimary,
            margin: 0
          }),
          children: title
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.sectionDesc), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.textMuted,
            marginTop: '2px'
          }),
          children: description
        })]
      })]
    }), children]
  });
}
//# sourceMappingURL=SettingsCard.js.map