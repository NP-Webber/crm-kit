"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ThemeSelector;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _CheckCircleRounded = _interopRequireDefault(require("@mui/icons-material/CheckCircleRounded"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CRM KIT — ThemeSelector: premium visual theme picker with rich previews
function ThemeSelector(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 'default' : _ref$value,
    onChange = _ref.onChange;
  var themes = Object.values(_constants.SITE_THEMES);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'grid',
      gridTemplateColumns: {
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(4, 1fr)'
      },
      gap: '14px'
    },
    children: themes.map(function (theme) {
      var isSelected = value === theme.id;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        onClick: function onClick() {
          return onChange === null || onChange === void 0 ? void 0 : onChange(theme.id);
        },
        role: "button",
        tabIndex: 0,
        "aria-label": theme.label,
        "aria-pressed": isSelected,
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onChange === null || onChange === void 0 || onChange(theme.id);
          }
        },
        sx: {
          cursor: 'pointer',
          borderRadius: "".concat(_constants.PA_RADIUS.lg, "px"),
          border: "1.5px solid ".concat(isSelected ? _constants.PA_COLORS.accent : _constants.PA_COLORS.cardBorder),
          overflow: 'hidden',
          transition: _constants.PA_TRANSITIONS.normal,
          position: 'relative',
          outline: 'none',
          '&:hover': {
            borderColor: isSelected ? _constants.PA_COLORS.accent : _constants.PA_COLORS.textMuted,
            transform: 'translateY(-1px)',
            boxShadow: _constants.PA_SHADOWS.card
          },
          '&:focus-visible': {
            outline: "2px solid ".concat(_constants.PA_COLORS.accent),
            outlineOffset: 2
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            height: 64,
            backgroundColor: theme.preview.bg,
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            position: 'relative'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              gap: '6px',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: theme.preview.primary
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                flex: 1,
                height: 5,
                borderRadius: 3,
                backgroundColor: theme.preview.text,
                opacity: 0.15
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              gap: '4px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: '55%',
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.preview.surface,
                border: "1px solid ".concat(theme.preview.text, "15")
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: '35%',
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.preview.primary,
                opacity: 0.2
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              gap: '4px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: '40%',
                height: 5,
                borderRadius: 3,
                backgroundColor: theme.preview.text,
                opacity: 0.1
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: '25%',
                height: 5,
                borderRadius: 3,
                backgroundColor: theme.preview.secondary,
                opacity: 0.25
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              position: 'absolute',
              bottom: 6,
              left: 8,
              display: 'flex',
              gap: '3px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: theme.preview.primary
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: theme.preview.secondary,
                opacity: 0.6
              }
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            padding: "8px ".concat(_constants.PA_SPACING.md, "px"),
            backgroundColor: isSelected ? _constants.PA_COLORS.accentLight : '#fff',
            transition: _constants.PA_TRANSITIONS.fast
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.fieldLabel), {}, {
              fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
              color: isSelected ? _constants.PA_COLORS.accent : _constants.PA_COLORS.textPrimary,
              textAlign: 'center',
              fontWeight: isSelected ? 600 : 500,
              fontSize: '0.75rem'
            }),
            children: theme.label
          })
        }), isSelected && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckCircleRounded["default"], {
          sx: {
            position: 'absolute',
            top: 8,
            left: 8,
            fontSize: 18,
            color: _constants.PA_COLORS.accent,
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }
        })]
      }, theme.id);
    })
  });
}
//# sourceMappingURL=ThemeSelector.js.map