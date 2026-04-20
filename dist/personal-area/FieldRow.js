"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FieldRow;
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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CRM KIT — FieldRow: refined label/value row for settings forms
function FieldRow(_ref) {
  var label = _ref.label,
    children = _ref.children,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'column' : _ref$direction,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  var isRow = direction === 'row';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: _objectSpread({
      display: 'flex',
      flexDirection: isRow ? 'row' : 'column',
      alignItems: isRow ? 'center' : 'stretch',
      gap: isRow ? '12px' : '5px'
    }, sx),
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      component: "label",
      sx: _objectSpread(_objectSpread({}, _constants.PA_TYPOGRAPHY.fieldLabel), {}, {
        fontFamily: _constants.PA_TYPOGRAPHY.fontFamily,
        color: _constants.PA_COLORS.textSecondary,
        minWidth: isRow ? 120 : 'auto',
        flexShrink: 0
      }),
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: children
    })]
  });
}
//# sourceMappingURL=FieldRow.js.map