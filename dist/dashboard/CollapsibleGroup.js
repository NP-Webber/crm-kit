"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * CollapsibleGroup — רשימת פריטים מתקפלים
 *
 * כל פריט מציג כותרת לחיצה עם חץ + Chip סיכום, ותוכן מתקפל.
 * מיועד לתצוגת פילוח (עיר→מבחנים, נושא→פריטים וכו').
 *
 * @param {Object} props
 * @param {Array<Object>} props.items - רשימת הפריטים
 * @param {Function} props.getKey - (item) → מזהה ייחודי (ברירת מחדל: item.key || index)
 * @param {Function} props.renderHeader - (item, isOpen) → React node לכותרת
 * @param {Function} props.renderContent - (item) → React node לתוכן
 * @param {Function} [props.getLabel] - (item) → טקסט לכותרת (חלופה ל-renderHeader)
 * @param {Function} [props.getBadge] - (item) → ערך ל-Chip (מספר סיכום)
 * @param {string} [props.badgeColor='secondary'] - צבע Chip
 * @param {React.ReactNode} [props.itemIcon] - אייקון לכל פריט
 * @param {string} [props.iconColor='secondary'] - צבע האייקון
 * @param {Array<string>} [props.defaultOpenKeys=[]] - מפתחות פתוחים כברירת מחדל
 * @param {boolean} [props.loading=false] - מצב טעינה
 * @param {string} [props.emptyMsg='אין נתונים'] - הודעה כשאין פריטים
 */
var CollapsibleGroup = function CollapsibleGroup(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    getKey = _ref.getKey,
    renderHeader = _ref.renderHeader,
    renderContent = _ref.renderContent,
    getLabel = _ref.getLabel,
    getBadge = _ref.getBadge,
    _ref$badgeColor = _ref.badgeColor,
    badgeColor = _ref$badgeColor === void 0 ? 'secondary' : _ref$badgeColor,
    itemIcon = _ref.itemIcon,
    _ref$iconColor = _ref.iconColor,
    iconColor = _ref$iconColor === void 0 ? 'secondary' : _ref$iconColor,
    _ref$defaultOpenKeys = _ref.defaultOpenKeys,
    defaultOpenKeys = _ref$defaultOpenKeys === void 0 ? [] : _ref$defaultOpenKeys,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$emptyMsg = _ref.emptyMsg,
    emptyMsg = _ref$emptyMsg === void 0 ? 'אין נתונים' : _ref$emptyMsg;
  var _useState = (0, _react.useState)(function () {
      var map = {};
      defaultOpenKeys.forEach(function (k) {
        map[k] = true;
      });
      return map;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openKeys = _useState2[0],
    setOpenKeys = _useState2[1];
  var toggle = (0, _react.useCallback)(function (key) {
    setOpenKeys(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  }, []);
  if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
    size: 20,
    sx: {
      m: 2
    }
  });
  if (!items.length) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      variant: "body2",
      color: "text.secondary",
      sx: {
        p: 1.5
      },
      children: emptyMsg
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: items.map(function (item, index) {
      var _item$key;
      var key = getKey ? getKey(item) : (_item$key = item.key) !== null && _item$key !== void 0 ? _item$key : index;
      var isOpen = !!openKeys[key];
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          mb: 1,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          onClick: function onClick() {
            return toggle(key);
          },
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            cursor: 'pointer',
            bgcolor: isOpen ? "".concat(iconColor, ".50") : 'grey.50',
            borderRadius: isOpen ? '4px 4px 0 0' : 1,
            '&:hover': {
              bgcolor: "".concat(iconColor, ".100")
            },
            transition: 'background-color 0.15s'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              gap: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore["default"], {
              fontSize: "small",
              sx: {
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: '0.2s',
                color: "".concat(iconColor, ".main")
              }
            }), itemIcon && /*#__PURE__*/_react["default"].cloneElement(itemIcon, {
              fontSize: 'small',
              color: iconColor
            }), renderHeader ? renderHeader(item, isOpen) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              fontWeight: 700,
              children: getLabel ? getLabel(item) : String(key)
            })]
          }), getBadge && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
            label: getBadge(item),
            color: badgeColor,
            size: "small",
            sx: {
              fontWeight: 700
            }
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Collapse, {
          "in": isOpen,
          children: renderContent(item)
        })]
      }, key);
    })
  });
};
var _default = exports["default"] = CollapsibleGroup;
//# sourceMappingURL=CollapsibleGroup.js.map