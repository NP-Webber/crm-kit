"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PersonalAreaLayout;
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CRM KIT — PersonalAreaLayout: premium settings page layout
function PersonalAreaLayout(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'אזור אישי' : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle = _ref$subtitle === void 0 ? 'ניהול הפרופיל, העדפות תצוגה והגדרות החשבון שלך' : _ref$subtitle,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    children = _ref.children,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    dir: "rtl",
    sx: _objectSpread({
      width: '100%',
      minHeight: '100vh',
      backgroundColor: _constants.PA_COLORS.pageBg,
      fontFamily: _constants.PA_TYPOGRAPHY.fontFamily
    }, sx),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: '100%',
        background: "linear-gradient(160deg, ".concat(_constants.PA_COLORS.accent, " 0%, #6366F1 50%, #818CF8 100%)"),
        padding: {
          xs: "".concat(_constants.PA_SPACING.xl, "px ").concat(_constants.PA_SPACING.md, "px ").concat(_constants.PA_SPACING.xxl, "px"),
          sm: "".concat(_constants.PA_SPACING.xxl, "px ").concat(_constants.PA_SPACING.lg, "px 56px")
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          maxWidth: 840,
          margin: '0 auto'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h1",
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.pageTitle), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: '#FFFFFF',
            margin: 0
          }),
          children: title
        }), subtitle && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.pageSubtitle), {}, {
            fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
            color: 'rgba(255,255,255,0.7)',
            marginTop: '6px'
          }),
          children: subtitle
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        maxWidth: 840,
        margin: '0 auto',
        padding: {
          xs: "0 ".concat(_constants.PA_SPACING.md, "px ").concat(_constants.PA_SPACING.xl, "px"),
          sm: "0 ".concat(_constants.PA_SPACING.lg, "px ").concat(_constants.PA_SPACING.xl, "px")
        },
        marginTop: {
          xs: '-28px',
          sm: '-32px'
        },
        position: 'relative'
      },
      children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Fade, {
        "in": true,
        timeout: 300,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 360,
            backgroundColor: _constants.PA_COLORS.cardBg,
            borderRadius: '16px',
            border: "1px solid ".concat(_constants.PA_COLORS.cardBorder)
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
            size: 32,
            thickness: 3,
            sx: {
              color: _constants.PA_COLORS.accent
            }
          })
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Fade, {
        "in": true,
        timeout: 400,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          },
          children: children
        })
      })
    })]
  });
}
//# sourceMappingURL=PersonalAreaLayout.js.map