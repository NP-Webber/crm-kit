"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidebarHeader;
var _material = require("@mui/material");
var _NotificationsNoneRounded = _interopRequireDefault(require("@mui/icons-material/NotificationsNoneRounded"));
var _LogoutRounded = _interopRequireDefault(require("@mui/icons-material/LogoutRounded"));
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
 * SidebarHeader — profile picture, user name, role label, notification bell.
 *
 * Props
 * -----
 * @param {string}  avatarSrc         - URL for profile picture
 * @param {string}  userName          - Display name
 * @param {string}  roleLabel         - Localised role text
 * @param {number}  notificationCount - Badge number on the bell (0 hides badge)
 * @param {func}    onAvatarClick     - Opens profile modal
 * @param {func}    onNotificationClick - Opens notifications panel
 * @param {func}    onLogout           - Logout button handler
 * @param {object}  accentColors      - { dark, light } from campaign context (optional override)
 */
function SidebarHeader(_ref) {
  var avatarSrc = _ref.avatarSrc,
    _ref$userName = _ref.userName,
    userName = _ref$userName === void 0 ? '' : _ref$userName,
    _ref$roleLabel = _ref.roleLabel,
    roleLabel = _ref$roleLabel === void 0 ? '' : _ref$roleLabel,
    _ref$notificationCoun = _ref.notificationCount,
    notificationCount = _ref$notificationCoun === void 0 ? 0 : _ref$notificationCoun,
    onAvatarClick = _ref.onAvatarClick,
    onNotificationClick = _ref.onNotificationClick,
    onLogout = _ref.onLogout,
    accentColors = _ref.accentColors;
  var _useSidebar = (0, _SidebarContext.useSidebar)(),
    collapsed = _useSidebar.collapsed;
  var accent = (accentColors === null || accentColors === void 0 ? void 0 : accentColors.dark) || _constants.COLORS.accentPrimary;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: "".concat(_constants.SPACING.lg, "px"),
      pb: "".concat(_constants.SPACING.md, "px"),
      px: "".concat(_constants.SPACING.sm, "px"),
      gap: "".concat(_constants.SPACING.xs, "px"),
      transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING)
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
      title: collapsed ? userName : '',
      placement: "left",
      arrow: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
        src: avatarSrc,
        alt: userName,
        onClick: onAvatarClick,
        sx: {
          width: collapsed ? 36 : 52,
          height: collapsed ? 36 : 52,
          cursor: onAvatarClick ? 'pointer' : 'default',
          border: avatarSrc ? 'none' : "2px solid ".concat(accent),
          transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
          '&:hover': onAvatarClick ? {
            boxShadow: "0 0 0 3px ".concat(accent, "33")
          } : undefined
        }
      })
    }), !collapsed && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        textAlign: 'center',
        minWidth: 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        noWrap: true,
        sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.profileName), {}, {
          color: _constants.COLORS.textPrimary,
          fontFamily: _constants.TYPOGRAPHY.fontFamily
        }),
        children: userName
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        noWrap: true,
        sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.profileRole), {}, {
          color: _constants.COLORS.textSecondary,
          fontFamily: _constants.TYPOGRAPHY.fontFamily
        }),
        children: roleLabel
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        gap: "".concat(_constants.SPACING.xs, "px"),
        mt: collapsed ? "".concat(_constants.SPACING.xs, "px") : 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
        title: collapsed ? 'התראות' : 'התראות',
        placement: "left",
        arrow: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          size: "small",
          onClick: onNotificationClick,
          sx: {
            color: _constants.COLORS.textSecondary,
            '&:hover': {
              color: accent,
              backgroundColor: "".concat(accent, "14")
            },
            transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING)
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
            badgeContent: notificationCount,
            max: 99,
            sx: {
              '& .MuiBadge-badge': _objectSpread(_objectSpread({
                backgroundColor: _constants.COLORS.badge,
                color: _constants.COLORS.badgeText
              }, _constants.TYPOGRAPHY.badge), {}, {
                minWidth: 18,
                height: 18,
                borderRadius: _constants.RADIUS.full
              })
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationsNoneRounded["default"], {
              fontSize: "small"
            })
          })
        })
      }), onLogout && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
        title: "\u05D9\u05E6\u05D9\u05D0\u05D4",
        placement: "left",
        arrow: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          size: "small",
          onClick: onLogout,
          sx: {
            color: _constants.COLORS.textSecondary,
            '&:hover': {
              color: '#ef5350',
              backgroundColor: '#ef535014'
            },
            transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING)
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LogoutRounded["default"], {
            fontSize: "small"
          })
        })
      })]
    })]
  });
}
//# sourceMappingURL=SidebarHeader.js.map