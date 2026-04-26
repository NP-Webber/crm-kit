"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["variant", "size", "sx", "children"]; // CRM KIT — SettingsButton
// Quiet, Windows-Settings-style button. Two flavors:
//   variant="settings"      — subtle filled chip
//   variant="ghostSettings" — text-only with hover background
//
// Sized to sit cleanly inside SettingsDeckItem rows.
//
// We expose this as a thin wrapper rather than depending on theme
// variants, so it works regardless of which MUI theme the host app uses.
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var variantSx = {
  settings: {
    backgroundColor: _constants.PA_COLORS.sectionBg,
    color: _constants.PA_COLORS.textPrimary,
    border: "1px solid ".concat(_constants.PA_COLORS.cardBorder),
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: _constants.PA_COLORS.divider,
      borderColor: _constants.PA_COLORS.cardBorder,
      boxShadow: 'none'
    },
    '&:active': {
      backgroundColor: _constants.PA_COLORS.divider
    },
    '&.Mui-disabled': {
      backgroundColor: _constants.PA_COLORS.sectionBg,
      color: _constants.PA_COLORS.textMuted,
      borderColor: _constants.PA_COLORS.divider
    }
  },
  ghostSettings: {
    backgroundColor: 'transparent',
    color: _constants.PA_COLORS.accent,
    border: '1px solid transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: _constants.PA_COLORS.accentLight,
      borderColor: 'transparent',
      boxShadow: 'none'
    },
    '&:active': {
      backgroundColor: _constants.PA_COLORS.accentSubtle
    },
    '&.Mui-disabled': {
      color: _constants.PA_COLORS.textMuted
    }
  },
  primarySettings: {
    backgroundColor: _constants.PA_COLORS.accent,
    color: '#fff',
    border: "1px solid ".concat(_constants.PA_COLORS.accent),
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: _constants.PA_COLORS.accentHover,
      borderColor: _constants.PA_COLORS.accentHover,
      boxShadow: 'none'
    },
    '&:active': {
      backgroundColor: _constants.PA_COLORS.accentHover
    },
    '&.Mui-disabled': {
      backgroundColor: _constants.PA_COLORS.accentLight,
      color: '#fff',
      opacity: 0.7
    }
  }
};

/**
 * SettingsButton
 *
 * @param {Object} props
 * @param {'settings'|'ghostSettings'|'primarySettings'} [props.variant='settings']
 * @param {'sm'|'md'} [props.size='md']
 * @param {Object} [props.sx]
 */
var SettingsButton = /*#__PURE__*/(0, _react.forwardRef)(function SettingsButton(_ref, ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'settings' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var padY = size === 'sm' ? 4 : 6;
  var padX = size === 'sm' ? _constants.PA_SPACING.md : _constants.PA_SPACING.md + 2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, _objectSpread(_objectSpread({
    ref: ref,
    disableRipple: true
    // We intentionally do NOT forward `variant` to MUI to avoid the
    // outlined/contained styles bleeding through.
    ,
    sx: _objectSpread(_objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.buttonText), {}, {
      fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
      textTransform: 'none',
      borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
      padding: "".concat(padY, "px ").concat(padX, "px"),
      minHeight: size === 'sm' ? 28 : 34,
      minWidth: 0,
      transition: _constants.PA_TRANSITIONS.fast,
      '&:focus-visible': {
        outline: 'none',
        boxShadow: "0 0 0 2px #fff, 0 0 0 4px ".concat(_constants.PA_COLORS.accent)
      }
    }, variantSx[variant] || variantSx.settings), sx)
  }, rest), {}, {
    children: children
  }));
});
var _default = exports["default"] = SettingsButton;
//# sourceMappingURL=SettingsButton.js.map