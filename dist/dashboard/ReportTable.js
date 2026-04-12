"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _TableKit = _interopRequireDefault(require("../tablekit/TableKit.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * ReportTable — טבלאת דוח client-side מבוססת TableKit
 *
 * @param {Object} props
 * @param {string} props.title - כותרת הדוח
 * @param {Array} props.columns - הגדרות עמודות (כמו TableKit)
 * @param {Array} props.data - נתונים
 * @param {boolean} props.loading
 * @param {string} props.emptyMessage
 * @param {string} props.exportFileName
 * @param {boolean} props.showExport - ברירת מחדל: true
 * @param {boolean} props.showFilters - ברירת מחדל: false
 * @param {boolean} props.showColumnPicker - ברירת מחדל: false
 * @param {boolean} props.showPagination - ברירת מחדל: false
 */
var ReportTable = function ReportTable(_ref) {
  var title = _ref.title,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$emptyMessage = _ref.emptyMessage,
    emptyMessage = _ref$emptyMessage === void 0 ? 'אין נתונים' : _ref$emptyMessage,
    exportFileName = _ref.exportFileName,
    _ref$showExport = _ref.showExport,
    showExport = _ref$showExport === void 0 ? true : _ref$showExport,
    _ref$showFilters = _ref.showFilters,
    showFilters = _ref$showFilters === void 0 ? false : _ref$showFilters,
    _ref$showColumnPicker = _ref.showColumnPicker,
    showColumnPicker = _ref$showColumnPicker === void 0 ? false : _ref$showColumnPicker,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    elevation: 0,
    sx: _objectSpread({
      p: 2.5,
      borderRadius: 2.5,
      border: '1px solid #e3e8ef'
    }, sx),
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        mb: 1.5
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "subtitle1",
        fontWeight: 700,
        color: "text.primary",
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableKit["default"], {
      columns: columns,
      data: data,
      total: data.length,
      loading: loading,
      emptyMessage: emptyMessage,
      exportFileName: exportFileName || title || 'report',
      clientSideMode: true,
      showColumnPicker: showColumnPicker,
      showExport: showExport,
      showFilters: showFilters,
      urlSync: false
    })]
  });
};
var _default = exports["default"] = ReportTable;