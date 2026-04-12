"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * SimpleTable — טבלה קלת-משקל לדשבורד
 *
 * טבלה פשוטה עם כותרת דביקה, גלילה, וגובה מקסימלי.
 * מיועדת לשימוש בתוך DashboardSection.
 *
 * @param {Object} props
 * @param {Array<{key, title, align?, render?}>} props.columns - הגדרות עמודות
 *   - key: שם השדה ב-row
 *   - title: כותרת העמודה
 *   - align: יישור ('right'|'center'|'left'), ברירת מחדל: 'right'
 *   - render(value, row): פונקציית עיבוד מותאמת אישית
 * @param {Array<Object>} props.rows - שורות הנתונים
 * @param {string} [props.emptyMsg='אין נתונים'] - הודעה כשאין נתונים
 * @param {number|string} [props.maxHeight=340] - גובה מקסימלי לגלילה
 * @param {boolean} [props.stickyHeader=true] - כותרת דביקה
 * @param {Object} [props.sx] - סגנון נוסף
 */
var SimpleTable = function SimpleTable(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? [] : _ref$rows,
    _ref$emptyMsg = _ref.emptyMsg,
    emptyMsg = _ref$emptyMsg === void 0 ? 'אין נתונים' : _ref$emptyMsg,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? 340 : _ref$maxHeight,
    _ref$stickyHeader = _ref.stickyHeader,
    stickyHeader = _ref$stickyHeader === void 0 ? true : _ref$stickyHeader,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx;
  if (!rows.length) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      variant: "body2",
      color: "text.secondary",
      sx: {
        p: 1.5
      },
      children: emptyMsg
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableContainer, {
    component: _material.Box,
    sx: _objectSpread({
      maxHeight: maxHeight,
      overflowY: 'auto'
    }, sx),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Table, {
      size: "small",
      stickyHeader: stickyHeader,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableHead, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableRow, {
          children: columns.map(function (col) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
              align: col.align || 'right',
              sx: {
                fontWeight: 700,
                bgcolor: 'grey.50'
              },
              children: col.title
            }, col.key);
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableBody, {
        children: rows.map(function (row, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableRow, {
            hover: true,
            children: columns.map(function (col) {
              var _row$col$key;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TableCell, {
                align: col.align || 'right',
                children: col.render ? col.render(row[col.key], row) : (_row$col$key = row[col.key]) !== null && _row$col$key !== void 0 ? _row$col$key : '—'
              }, col.key);
            })
          }, row._id || row.id || i);
        })
      })]
    })
  });
};
var _default = exports["default"] = SimpleTable;
//# sourceMappingURL=SimpleTable.js.map