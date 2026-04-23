"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenuButton = MobileMenuButton;
exports["default"] = Sidebar;
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var _MenuRounded = _interopRequireDefault(require("@mui/icons-material/MenuRounded"));
var _ChevronRightRounded = _interopRequireDefault(require("@mui/icons-material/ChevronRightRounded"));
var _ChevronLeftRounded = _interopRequireDefault(require("@mui/icons-material/ChevronLeftRounded"));
var _SidebarContext = require("./SidebarContext");
var _SidebarHeader = _interopRequireDefault(require("./SidebarHeader"));
var _SidebarMenu = _interopRequireDefault(require("./SidebarMenu"));
var _SidebarFooter = _interopRequireDefault(require("./SidebarFooter"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultCollapsed"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Sidebar — CRM KIT generic sidebar component.
 *
 * Configuration-driven: pass user, menuItems, messages, and callbacks.
 * Handles collapse, mobile drawer, RTL, animations, and role-based rendering.
 *
 * Props
 * -----
 * @param {object}  user              - { avatarSrc, name, roleLabel }
 * @param {Array}   menuItems         - See SidebarMenu for shape
 * @param {string}  activePath        - Current route
 * @param {func}    onNavigate        - (path) => void
 * @param {number}  notificationCount - Bell badge count
 * @param {func}    onNotificationClick
 * @param {func}    onAvatarClick     - Profile click
 * @param {func}    onLogout          - Logout button handler
 * @param {object}  messagesCenter    - { label, unreadCount, onClick, icon, extra }
 * @param {object}  accentColors      - { dark, light }
 * @param {boolean} defaultCollapsed
 * @param {string}  mobileBreakpoint  - MUI breakpoint key (default 'md')
 * @param {node}    headerExtra       - Extra content below header
 * @param {node}    children          - Fully custom body (replaces SidebarMenu + SidebarFooter)
 */
function SidebarInner(_ref) {
  var _ref$user = _ref.user,
    user = _ref$user === void 0 ? {} : _ref$user,
    _ref$menuItems = _ref.menuItems,
    menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
    _ref$activePath = _ref.activePath,
    activePath = _ref$activePath === void 0 ? '' : _ref$activePath,
    onNavigate = _ref.onNavigate,
    _ref$notificationCoun = _ref.notificationCount,
    notificationCount = _ref$notificationCoun === void 0 ? 0 : _ref$notificationCoun,
    onNotificationClick = _ref.onNotificationClick,
    onAvatarClick = _ref.onAvatarClick,
    onLogout = _ref.onLogout,
    _ref$messagesCenter = _ref.messagesCenter,
    messagesCenter = _ref$messagesCenter === void 0 ? {} : _ref$messagesCenter,
    accentColors = _ref.accentColors,
    headerExtra = _ref.headerExtra,
    children = _ref.children,
    _ref$mobileBreakpoint = _ref.mobileBreakpoint,
    mobileBreakpoint = _ref$mobileBreakpoint === void 0 ? 'md' : _ref$mobileBreakpoint,
    _ref$showMobileMenuBu = _ref.showMobileMenuButton,
    showMobileMenuButton = _ref$showMobileMenuBu === void 0 ? true : _ref$showMobileMenuBu,
    mobileMenuButtonSx = _ref.mobileMenuButtonSx;
  var _useSidebar = (0, _SidebarContext.useSidebar)(),
    collapsed = _useSidebar.collapsed,
    toggle = _useSidebar.toggle,
    mobileOpen = _useSidebar.mobileOpen,
    closeMobile = _useSidebar.closeMobile;
  var theme = (0, _styles.useTheme)();
  var isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down(mobileBreakpoint));
  var width = collapsed ? _constants.SIDEBAR_WIDTH_COLLAPSED : _constants.SIDEBAR_WIDTH_EXPANDED;

  // No ThemeProvider — just set direction:rtl on the Box directly.
  // Matches the original working approach where the Drawer had NO RTL context,
  // so anchor="right" slides in correctly from the right.
  var drawerContent = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    dir: "rtl",
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: _constants.COLORS.bg,
      borderLeft: "1px solid ".concat(_constants.COLORS.border),
      overflow: 'hidden',
      fontFamily: _constants.TYPOGRAPHY.fontFamily
    },
    children: [!isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: collapsed ? 'center' : 'flex-start',
        px: "".concat(_constants.SPACING.sm, "px"),
        pt: "".concat(_constants.SPACING.sm, "px")
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
        title: collapsed ? 'הרחב תפריט' : 'כווץ תפריט',
        placement: "left",
        arrow: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          size: "small",
          onClick: toggle,
          sx: {
            color: _constants.COLORS.textSecondary,
            '&:hover': {
              backgroundColor: _constants.COLORS.bgHover
            }
          },
          children: collapsed ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronLeftRounded["default"], {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChevronRightRounded["default"], {})
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarHeader["default"], {
      avatarSrc: user.avatarSrc,
      userName: user.name,
      roleLabel: user.roleLabel,
      notificationCount: notificationCount,
      onAvatarClick: onAvatarClick,
      onNotificationClick: onNotificationClick,
      onLogout: onLogout,
      accentColors: accentColors
    }), headerExtra && !collapsed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        px: "".concat(_constants.SPACING.sm, "px"),
        pb: "".concat(_constants.SPACING.sm, "px")
      },
      children: headerExtra
    }), children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarMenu["default"], {
      items: menuItems,
      activePath: activePath,
      onNavigate: onNavigate,
      accentColors: accentColors
    }), messagesCenter.onClick && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarFooter["default"], {
      label: messagesCenter.label,
      unreadCount: messagesCenter.unreadCount,
      onClick: messagesCenter.onClick,
      icon: messagesCenter.icon,
      accentColors: accentColors,
      extra: messagesCenter.extra
    })]
  });

  // Mobile: temporary drawer
  if (isMobile) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [showMobileMenuButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: _objectSpread({
          position: 'fixed',
          top: 8,
          right: 8,
          zIndex: 1400,
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderRadius: "".concat(_constants.RADIUS.sm, "px"),
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }, mobileMenuButtonSx),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MobileMenuButton, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Drawer, {
        variant: "temporary",
        anchor: "right",
        open: mobileOpen,
        onClose: closeMobile,
        ModalProps: {
          keepMounted: true
        },
        PaperProps: {
          sx: {
            width: _constants.SIDEBAR_WIDTH_EXPANDED,
            right: 0,
            left: 'auto'
          }
        },
        children: drawerContent
      })]
    });
  }

  // Desktop: permanent drawer
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Drawer, {
    variant: "permanent",
    anchor: "right",
    sx: {
      width: width,
      flexShrink: 0,
      transition: "width ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
      '& .MuiDrawer-paper': {
        width: width,
        boxSizing: 'border-box',
        direction: 'rtl',
        transition: "width ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
        border: 'none',
        overflowX: 'hidden'
      }
    },
    children: drawerContent
  });
}

/**
 * Sidebar — public wrapper that provides context + theme.
 * All props forwarded to SidebarInner.
 */
function Sidebar(_ref2) {
  var _ref2$defaultCollapse = _ref2.defaultCollapsed,
    defaultCollapsed = _ref2$defaultCollapse === void 0 ? false : _ref2$defaultCollapse,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SidebarContext.SidebarProvider, {
    defaultCollapsed: defaultCollapsed,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SidebarInner, _objectSpread({}, props))
  });
}

/**
 * MobileMenuButton — convenience button for toggling the sidebar on mobile.
 * Place this in your top app bar.
 */
function MobileMenuButton() {
  var _useSidebar2 = (0, _SidebarContext.useSidebar)(),
    toggleMobile = _useSidebar2.toggleMobile;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
    onClick: toggleMobile,
    sx: {
      color: _constants.COLORS.textPrimary
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuRounded["default"], {})
  });
}
//# sourceMappingURL=Sidebar.js.map