"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PreferencesPanel;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _TuneRounded = _interopRequireDefault(require("@mui/icons-material/TuneRounded"));
var _PaletteRounded = _interopRequireDefault(require("@mui/icons-material/PaletteRounded"));
var _TextFieldsRounded = _interopRequireDefault(require("@mui/icons-material/TextFieldsRounded"));
var _SettingsCard = _interopRequireDefault(require("./SettingsCard"));
var _ThemeSelector = _interopRequireDefault(require("./ThemeSelector"));
var _InterfaceScaleSelector = _interopRequireDefault(require("./InterfaceScaleSelector"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CRM KIT — PreferencesPanel: premium preferences with themed sub-sections
function PreferencesPanel(_ref) {
  var _ref$siteTheme = _ref.siteTheme,
    siteTheme = _ref$siteTheme === void 0 ? 'default' : _ref$siteTheme,
    _ref$siteScale = _ref.siteScale,
    siteScale = _ref$siteScale === void 0 ? 100 : _ref$siteScale,
    onThemeChange = _ref.onThemeChange,
    onScaleChange = _ref.onScaleChange,
    _ref$saving = _ref.saving,
    saving = _ref$saving === void 0 ? false : _ref$saving,
    _ref$feedback = _ref.feedback,
    feedback = _ref$feedback === void 0 ? null : _ref$feedback,
    onDismissFeedback = _ref.onDismissFeedback,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SettingsCard["default"], {
    title: "\u05D4\u05E2\u05D3\u05E4\u05D5\u05EA",
    description: "\u05E2\u05E8\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0, \u05D2\u05D5\u05D3\u05DC \u05EA\u05E6\u05D5\u05D2\u05D4 \u05D5\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA",
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TuneRounded["default"], {}),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": !!feedback,
      children: feedback && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
        severity: feedback.type,
        onClose: onDismissFeedback,
        sx: {
          borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
          fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
          fontSize: '0.8125rem'
        },
        children: feedback.message
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
      "in": saving,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: "".concat(_constants.PA_SPACING.sm, "px"),
          padding: '6px 12px',
          backgroundColor: _constants.PA_COLORS.accentLight,
          borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
          transition: _constants.PA_TRANSITIONS.fast
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
          size: 14,
          sx: {
            color: _constants.PA_COLORS.accent
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.caption), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.accent,
            fontWeight: 500
          }),
          children: "\u05E9\u05D5\u05DE\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD..."
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PaletteRounded["default"], {
          sx: {
            fontSize: 16,
            color: _constants.PA_COLORS.textMuted
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.fieldLabel), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.textPrimary,
            fontWeight: 600
          }),
          children: "\u05E2\u05E8\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeSelector["default"], {
        value: siteTheme,
        onChange: onThemeChange
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        height: 1,
        backgroundColor: _constants.PA_COLORS.divider
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldsRounded["default"], {
          sx: {
            fontSize: 16,
            color: _constants.PA_COLORS.textMuted
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.fieldLabel), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: _constants.PA_COLORS.textPrimary,
            fontWeight: 600
          }),
          children: "\u05D2\u05D5\u05D3\u05DC \u05DE\u05DE\u05E9\u05E7"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InterfaceScaleSelector["default"], {
        value: siteScale,
        onChange: onScaleChange
      })]
    }), children]
  });
}
//# sourceMappingURL=PreferencesPanel.js.map