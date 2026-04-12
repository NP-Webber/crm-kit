"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCrmTheme = createCrmTheme;
exports.defaultCrmTheme = void 0;
var _styles = require("@mui/material/styles");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * createCrmTheme — יצירת ערכת נושא MUI מותאמת
 *
 * @param {Object} options
 * @param {string} options.primary - צבע ראשי (ברירת מחדל: #1565c0)
 * @param {string} options.primaryLight
 * @param {string} options.primaryDark
 * @param {string} options.secondary - צבע משני (ברירת מחדל: #1976d2)
 * @param {string} options.background - צבע רקע (ברירת מחדל: #f0f4f8)
 * @param {string} options.paper - צבע paper (ברירת מחדל: #ffffff)
 * @param {string} options.fontFamily
 * @param {string} options.direction - כיוון (ברירת מחדל: rtl)
 * @param {number} options.borderRadius - רדיוס פינות (ברירת מחדל: 8)
 * @param {Object} options.overrides - overrides חופשיים ל-createTheme
 */
function createCrmTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$primary = options.primary,
    primary = _options$primary === void 0 ? '#1565c0' : _options$primary,
    _options$primaryLight = options.primaryLight,
    primaryLight = _options$primaryLight === void 0 ? '#42a5f5' : _options$primaryLight,
    _options$primaryDark = options.primaryDark,
    primaryDark = _options$primaryDark === void 0 ? '#0d47a1' : _options$primaryDark,
    _options$secondary = options.secondary,
    secondary = _options$secondary === void 0 ? '#1976d2' : _options$secondary,
    _options$background = options.background,
    background = _options$background === void 0 ? '#f0f4f8' : _options$background,
    _options$paper = options.paper,
    paper = _options$paper === void 0 ? '#ffffff' : _options$paper,
    _options$fontFamily = options.fontFamily,
    fontFamily = _options$fontFamily === void 0 ? '"Assistant", "Rubik", "Arial", sans-serif' : _options$fontFamily,
    _options$direction = options.direction,
    direction = _options$direction === void 0 ? 'rtl' : _options$direction,
    _options$borderRadius = options.borderRadius,
    borderRadius = _options$borderRadius === void 0 ? 8 : _options$borderRadius,
    _options$overrides = options.overrides,
    overrides = _options$overrides === void 0 ? {} : _options$overrides;
  return (0, _styles.createTheme)({
    direction: direction,
    typography: {
      fontFamily: fontFamily
    },
    palette: {
      primary: {
        main: primary,
        light: primaryLight,
        dark: primaryDark
      },
      secondary: {
        main: secondary
      },
      background: {
        "default": background,
        paper: paper
      }
    },
    shape: {
      borderRadius: borderRadius
    },
    components: _objectSpread({
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: borderRadius
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius + 2
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600
          }
        }
      }
    }, overrides)
  });
}

/** ערכת נושא ברירת מחדל — מוכנה לשימוש מידי */
var defaultCrmTheme = exports.defaultCrmTheme = createCrmTheme();
//# sourceMappingURL=createCrmTheme.js.map