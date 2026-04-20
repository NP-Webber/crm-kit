"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidebarMenu;
var _material = require("@mui/material");
var _SidebarContext = require("./SidebarContext");
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * SidebarMenu — renders dynamic navigation items.
 *
 * Props
 * -----
 * @param {Array} items - Menu items array. Each item:
 *   { id, text, icon, path, show, badge, group, disabled, onClick }
 * @param {string}  activePath    - Current route path (for highlight)
 * @param {func}    onNavigate    - (path) => void
 * @param {object}  accentColors  - { dark, light } optional override
 */
function SidebarMenu(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$activePath = _ref.activePath,
    activePath = _ref$activePath === void 0 ? '' : _ref$activePath,
    onNavigate = _ref.onNavigate,
    accentColors = _ref.accentColors;
  var _useSidebar = (0, _SidebarContext.useSidebar)(),
    collapsed = _useSidebar.collapsed,
    closeMobile = _useSidebar.closeMobile;
  var accent = (accentColors === null || accentColors === void 0 ? void 0 : accentColors.dark) || _constants.COLORS.accentPrimary;
  var accentLight = (accentColors === null || accentColors === void 0 ? void 0 : accentColors.light) || _constants.COLORS.accentPrimaryLight;

  // Group items by `group` key; undefined group = ungrouped
  var grouped = [];
  var currentGroup = null;
  items.forEach(function (item) {
    if (item.show === false) return;
    if (item.group && item.group !== currentGroup) {
      currentGroup = item.group;
      grouped.push({
        type: 'divider',
        label: item.group
      });
    } else if (!item.group && currentGroup) {
      currentGroup = null;
      grouped.push({
        type: 'divider'
      });
    }
    grouped.push({
      type: 'item',
      data: item
    });
  });
  var isActive = function isActive(path) {
    if (!path || !activePath) return false;
    return activePath === path || activePath.startsWith(path + '/');
  };
  var handleClick = function handleClick(item) {
    if (item.disabled) return;
    if (item.onClick) item.onClick();
    if (item.path && onNavigate) {
      onNavigate(item.path);
      closeMobile();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      flexGrow: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      py: "".concat(_constants.SPACING.sm, "px"),
      px: "".concat(_constants.SPACING.sm, "px"),
      direction: 'ltr',
      '& *': {
        direction: 'rtl'
      },
      '&::-webkit-scrollbar': {
        width: 4
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: _constants.COLORS.border,
        borderRadius: _constants.RADIUS.full
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
      disablePadding: true,
      children: grouped.map(function (entry, idx) {
        if (entry.type === 'divider') {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            children: entry.label && !collapsed ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.profileRole), {}, {
                color: _constants.COLORS.textMuted,
                fontFamily: _constants.TYPOGRAPHY.fontFamily,
                px: "".concat(_constants.SPACING.sm, "px"),
                pt: "".concat(_constants.SPACING.md, "px"),
                pb: "".concat(_constants.SPACING.xs, "px"),
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }),
              children: entry.label
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {
              sx: {
                my: "".concat(_constants.SPACING.sm, "px"),
                borderColor: _constants.COLORS.border
              }
            })
          }, "div-".concat(idx));
        }
        var item = entry.data;
        var active = isActive(item.path);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
          disablePadding: true,
          sx: {
            mb: '2px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
            title: collapsed ? item.text : '',
            placement: "left",
            arrow: true,
            disableInteractive: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemButton, {
              onClick: function onClick() {
                return handleClick(item);
              },
              disabled: item.disabled,
              sx: {
                minHeight: 42,
                borderRadius: "".concat(_constants.RADIUS.md, "px"),
                px: collapsed ? "".concat(_constants.SPACING.md, "px") : "".concat(_constants.SPACING.sm + 4, "px"),
                justifyContent: collapsed ? 'center' : 'flex-start',
                transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
                backgroundColor: active ? accent : 'transparent',
                color: active ? _constants.COLORS.accentPrimaryText : _constants.COLORS.textPrimary,
                '&:hover': {
                  backgroundColor: active ? accent : _constants.COLORS.bgHover
                },
                '&.Mui-disabled': {
                  opacity: 0.45
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
                sx: {
                  minWidth: collapsed ? 0 : 36,
                  justifyContent: 'center',
                  color: active ? _constants.COLORS.accentPrimaryText : _constants.COLORS.textSecondary,
                  transition: "color ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.25rem'
                  }
                },
                children: item.badge ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
                  badgeContent: item.badge,
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
                  children: item.icon
                }) : item.icon
              }), !collapsed && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
                primary: item.text,
                primaryTypographyProps: {
                  noWrap: true,
                  sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.menuItem), {}, {
                    fontFamily: _constants.TYPOGRAPHY.fontFamily
                  })
                }
              })]
            })
          })
        }, item.id || item.text);
      })
    })
  });
}
//# sourceMappingURL=SidebarMenu.js.map