"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InterfaceScaleSelector;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _TextFieldsRounded = _interopRequireDefault(require("@mui/icons-material/TextFieldsRounded"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CRM KIT — InterfaceScaleSelector: premium segmented scale control

function InterfaceScaleSelector(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 100 : _ref$value,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'inline-flex',
        backgroundColor: _constants.PA_COLORS.sectionBg,
        borderRadius: "".concat(_constants.PA_RADIUS.md, "px"),
        padding: '4px',
        border: "1px solid ".concat(_constants.PA_COLORS.divider),
        gap: '4px',
        alignSelf: 'flex-start'
      },
      children: _constants.SITE_SCALES.map(function (scale) {
        var isSelected = value === scale.value;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          onClick: function onClick() {
            return onChange === null || onChange === void 0 ? void 0 : onChange(scale.value);
          },
          role: "button",
          tabIndex: 0,
          "aria-label": "\u05D2\u05D5\u05D3\u05DC ".concat(scale.label),
          "aria-pressed": isSelected,
          onKeyDown: function onKeyDown(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onChange === null || onChange === void 0 || onChange(scale.value);
            }
          },
          sx: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
            backgroundColor: isSelected ? _constants.PA_COLORS.cardBg : 'transparent',
            boxShadow: isSelected ? _constants.PA_SHADOWS.card : 'none',
            color: isSelected ? _constants.PA_COLORS.accent : _constants.PA_COLORS.textSecondary,
            transition: _constants.PA_TRANSITIONS.fast,
            outline: 'none',
            minWidth: 72,
            '&:hover': {
              backgroundColor: isSelected ? _constants.PA_COLORS.cardBg : 'rgba(0,0,0,0.03)',
              color: isSelected ? _constants.PA_COLORS.accent : _constants.PA_COLORS.textPrimary
            },
            '&:focus-visible': {
              outline: "2px solid ".concat(_constants.PA_COLORS.accent),
              outlineOffset: -2
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldsRounded["default"], {
            sx: {
              fontSize: 14 * (scale.value / 100),
              color: 'inherit',
              transition: _constants.PA_TRANSITIONS.fast
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            sx: {
              fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
              fontSize: '0.8125rem',
              fontWeight: isSelected ? 600 : 500,
              color: 'inherit',
              lineHeight: 1
            },
            children: scale.label
          })]
        }, scale.value);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        padding: '12px 16px',
        backgroundColor: _constants.PA_COLORS.sectionBg,
        borderRadius: "".concat(_constants.PA_RADIUS.md, "px"),
        border: "1px solid ".concat(_constants.PA_COLORS.divider),
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: 32,
          height: 32,
          borderRadius: "".concat(_constants.PA_RADIUS.sm, "px"),
          backgroundColor: _constants.PA_COLORS.accentLight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextFieldsRounded["default"], {
          sx: {
            fontSize: 18,
            color: _constants.PA_COLORS.accent
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          sx: {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            fontSize: "".concat(0.875 * (value / 100), "rem"),
            color: _constants.PA_COLORS.textPrimary,
            fontWeight: 500,
            transition: _constants.PA_TRANSITIONS.smooth
          },
          children: ["\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u2014 ", value, "%"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            fontSize: "".concat(0.75 * (value / 100), "rem"),
            color: _constants.PA_COLORS.textMuted,
            marginTop: '2px',
            transition: _constants.PA_TRANSITIONS.smooth
          },
          children: "\u05DB\u05DA \u05D9\u05D9\u05E8\u05D0\u05D4 \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D1\u05DE\u05DE\u05E9\u05E7"
        })]
      })]
    })]
  });
}
//# sourceMappingURL=InterfaceScaleSelector.js.map