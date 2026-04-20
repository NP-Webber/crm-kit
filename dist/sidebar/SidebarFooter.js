"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidebarFooter;
var _material = require("@mui/material");
var _ForumRounded = _interopRequireDefault(require("@mui/icons-material/ForumRounded"));
var _SidebarContext = require("./SidebarContext");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * SidebarFooter — Messages Center entry point.
 *
 * Props
 * -----
 * @param {string}  label           - Button text (e.g. "מרכז הודעות")
 * @param {number}  unreadCount     - Unread messages badge
 * @param {func}    onClick         - Opens Messages Center
 * @param {node}    icon            - Override icon (default: ForumRoundedIcon)
 * @param {object}  accentColors    - { dark, light } optional
 * @param {node}    extra           - Additional content rendered below the button (e.g. LastUpdate)
 */
function SidebarFooter(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'מרכז הודעות' : _ref$label,
    _ref$unreadCount = _ref.unreadCount,
    unreadCount = _ref$unreadCount === void 0 ? 0 : _ref$unreadCount,
    onClick = _ref.onClick,
    icon = _ref.icon,
    accentColors = _ref.accentColors,
    extra = _ref.extra;
  var _useSidebar = (0, _SidebarContext.useSidebar)(),
    collapsed = _useSidebar.collapsed;
  var accent = (accentColors === null || accentColors === void 0 ? void 0 : accentColors.dark) || _constants.COLORS.accentPrimary;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      borderTop: "1px solid ".concat(_constants.COLORS.border),
      p: "".concat(_constants.SPACING.sm, "px"),
      display: 'flex',
      flexDirection: 'column',
      gap: "".concat(_constants.SPACING.sm, "px")
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: collapsed ? label : '',
      placement: "left",
      arrow: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ButtonBase, {
        onClick: onClick,
        sx: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          gap: "".concat(_constants.SPACING.sm, "px"),
          borderRadius: "".concat(_constants.RADIUS.md, "px"),
          px: "".concat(_constants.SPACING.sm + 4, "px"),
          py: "".concat(_constants.SPACING.sm, "px"),
          transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
          '&:hover': {
            backgroundColor: _constants.COLORS.bgHover
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
          badgeContent: unreadCount,
          max: 99,
          sx: {
            '& .MuiBadge-badge': _objectSpread(_objectSpread({
              backgroundColor: _constants.COLORS.badge,
              color: _constants.COLORS.badgeText
            }, _constants.TYPOGRAPHY.badge), {}, {
              minWidth: 18,
              height: 18
            })
          },
          children: icon || /*#__PURE__*/(0, _jsxRuntime.jsx)(_ForumRounded["default"], {
            sx: {
              fontSize: '1.25rem',
              color: accent
            }
          })
        }), !collapsed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          noWrap: true,
          sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.footerLabel), {}, {
            fontFamily: _constants.TYPOGRAPHY.fontFamily,
            color: _constants.COLORS.textPrimary
          }),
          children: label
        })]
      })
    }), extra && !collapsed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        px: "".concat(_constants.SPACING.sm, "px")
      },
      children: extra
    })]
  });
}
//# sourceMappingURL=SidebarFooter.js.map