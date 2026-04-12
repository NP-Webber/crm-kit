"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * DashboardSection — מקטע אקורדיון בתוך דשבורד
 *
 * מקטע מתקפל עם כותרת, אייקון, מונה וקו נקי.
 *
 * @param {Object} props
 * @param {string} props.title - כותרת המקטע
 * @param {React.ReactNode} [props.icon] - אייקון MUI
 * @param {string} [props.iconColor='inherit'] - צבע האייקון (MUI palette)
 * @param {number|string} [props.count] - מספר פריטים (מוצג כ-Chip)
 * @param {string} [props.countColor='default'] - צבע ה-Chip: primary/secondary/success/error/info/warning
 * @param {boolean} [props.defaultExpanded=true] - האם המקטע פתוח כברירת מחדל
 * @param {string} [props.headerBgColor='grey.50'] - צבע רקע הכותרת
 * @param {string} [props.borderColor='divider'] - צבע הגבול
 * @param {boolean} [props.noPadding=false] - ללא ריפוד בתוכן (שימושי לטבלאות)
 * @param {Object} [props.sx] - סגנון נוסף
 * @param {React.ReactNode} props.children - תוכן המקטע
 */
var DashboardSection = function DashboardSection(_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    _ref$iconColor = _ref.iconColor,
    iconColor = _ref$iconColor === void 0 ? 'inherit' : _ref$iconColor,
    count = _ref.count,
    _ref$countColor = _ref.countColor,
    countColor = _ref$countColor === void 0 ? 'default' : _ref$countColor,
    _ref$defaultExpanded = _ref.defaultExpanded,
    defaultExpanded = _ref$defaultExpanded === void 0 ? true : _ref$defaultExpanded,
    _ref$headerBgColor = _ref.headerBgColor,
    headerBgColor = _ref$headerBgColor === void 0 ? 'grey.50' : _ref$headerBgColor,
    _ref$borderColor = _ref.borderColor,
    borderColor = _ref$borderColor === void 0 ? 'divider' : _ref$borderColor,
    _ref$noPadding = _ref.noPadding,
    noPadding = _ref$noPadding === void 0 ? false : _ref$noPadding,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Accordion, {
    defaultExpanded: defaultExpanded,
    elevation: 0,
    sx: _objectSpread({
      border: '1px solid',
      borderColor: borderColor,
      '&:before': {
        display: 'none'
      }
    }, sx),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionSummary, {
      expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {}),
      sx: {
        bgcolor: headerBgColor
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1
        },
        children: [icon && /*#__PURE__*/_react["default"].cloneElement(icon, {
          fontSize: 'small',
          color: iconColor !== 'inherit' ? iconColor : undefined,
          sx: iconColor === 'inherit' ? {} : {
            color: iconColor
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          fontWeight: 700,
          sx: iconColor !== 'inherit' ? {
            color: iconColor
          } : {},
          children: title
        }), count != null && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
          label: count,
          size: "small",
          color: countColor,
          sx: {
            fontWeight: 700
          }
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
      sx: noPadding ? {
        p: 0
      } : {},
      children: children
    })]
  });
};
var _default = exports["default"] = DashboardSection;
//# sourceMappingURL=DashboardSection.js.map