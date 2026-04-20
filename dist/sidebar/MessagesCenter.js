"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MessagesCenter;
var _react = require("react");
var _material = require("@mui/material");
var _CloseRounded = _interopRequireDefault(require("@mui/icons-material/CloseRounded"));
var _CampaignRounded = _interopRequireDefault(require("@mui/icons-material/CampaignRounded"));
var _BugReportRounded = _interopRequireDefault(require("@mui/icons-material/BugReportRounded"));
var _FeedbackRounded = _interopRequireDefault(require("@mui/icons-material/FeedbackRounded"));
var _NewReleasesRounded = _interopRequireDefault(require("@mui/icons-material/NewReleasesRounded"));
var _AdminPanelSettingsRounded = _interopRequireDefault(require("@mui/icons-material/AdminPanelSettingsRounded"));
var _constants = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MESSAGE_TYPE_META = {
  system: {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CampaignRounded["default"], {
      fontSize: "small"
    }),
    color: _constants.COLORS.accentPrimary,
    label: 'מערכת'
  },
  admin: {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AdminPanelSettingsRounded["default"], {
      fontSize: "small"
    }),
    color: '#7C3AED',
    label: 'מנהל'
  },
  whatsNew: {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewReleasesRounded["default"], {
      fontSize: "small"
    }),
    color: _constants.COLORS.success,
    label: 'מה חדש'
  },
  bug: {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BugReportRounded["default"], {
      fontSize: "small"
    }),
    color: _constants.COLORS.badge,
    label: 'דיווח באג'
  },
  request: {
    icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeedbackRounded["default"], {
      fontSize: "small"
    }),
    color: _constants.COLORS.warning,
    label: 'בקשה'
  }
};

/**
 * MessagesCenter — slide-out drawer for centralised communication.
 *
 * Props
 * -----
 * @param {boolean}  open            - Controlled open state
 * @param {func}     onClose         - Close handler
 * @param {Array}    messages        - Array of { id, type, title, body, date, read }
 * @param {func}     onMessageClick  - (message) => void
 * @param {func}     onReportBug     - Opens bug report flow
 * @param {func}     onSendRequest   - Opens feature request flow
 * @param {'right'|'left'} anchor    - Drawer side (default 'right' for RTL)
 */
function MessagesCenter(_ref) {
  var _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    onClose = _ref.onClose,
    _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? [] : _ref$messages,
    onMessageClick = _ref.onMessageClick,
    onReportBug = _ref.onReportBug,
    onSendRequest = _ref.onSendRequest,
    _ref$anchor = _ref.anchor,
    anchor = _ref$anchor === void 0 ? 'right' : _ref$anchor;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabIndex = _useState2[0],
    setTabIndex = _useState2[1];
  var tabs = [{
    label: 'הכל',
    filter: null
  }, {
    label: 'מערכת',
    filter: 'system'
  }, {
    label: 'מה חדש',
    filter: 'whatsNew'
  }, {
    label: 'מנהל',
    filter: 'admin'
  }];
  var activeFilter = tabs[tabIndex].filter;
  var filtered = activeFilter ? messages.filter(function (m) {
    return m.type === activeFilter;
  }) : messages;
  var unreadCount = messages.filter(function (m) {
    return !m.read;
  }).length;
  var handleTabChange = (0, _react.useCallback)(function (_, val) {
    return setTabIndex(val);
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Drawer, {
    anchor: anchor,
    open: open,
    onClose: onClose,
    PaperProps: {
      sx: {
        width: {
          xs: '100%',
          sm: 380
        },
        direction: 'rtl',
        backgroundColor: _constants.COLORS.bg
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: "".concat(_constants.SPACING.md, "px"),
        py: "".concat(_constants.SPACING.sm + 4, "px"),
        borderBottom: "1px solid ".concat(_constants.COLORS.border),
        backgroundColor: _constants.COLORS.surface
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: "".concat(_constants.SPACING.sm, "px")
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: {
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: _constants.TYPOGRAPHY.fontFamily,
            color: _constants.COLORS.textPrimary
          },
          children: "\u05DE\u05E8\u05DB\u05D6 \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA"
        }), unreadCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
          size: "small",
          label: unreadCount,
          sx: _objectSpread(_objectSpread({
            height: 20
          }, _constants.TYPOGRAPHY.badge), {}, {
            backgroundColor: _constants.COLORS.badge,
            color: _constants.COLORS.badgeText
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        size: "small",
        onClick: onClose,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseRounded["default"], {
          fontSize: "small"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        backgroundColor: _constants.COLORS.surface,
        borderBottom: "1px solid ".concat(_constants.COLORS.border)
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tabs, {
        value: tabIndex,
        onChange: handleTabChange,
        variant: "scrollable",
        scrollButtons: false,
        sx: {
          minHeight: 36,
          '& .MuiTab-root': _objectSpread(_objectSpread({
            minHeight: 36
          }, _constants.TYPOGRAPHY.profileRole), {}, {
            fontFamily: _constants.TYPOGRAPHY.fontFamily,
            textTransform: 'none'
          })
        },
        children: tabs.map(function (t) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tab, {
            label: t.label
          }, t.label);
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.List, {
      sx: {
        flexGrow: 1,
        overflowY: 'auto',
        py: "".concat(_constants.SPACING.sm, "px"),
        px: "".concat(_constants.SPACING.sm, "px")
      },
      children: [filtered.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          textAlign: 'center',
          py: "".concat(_constants.SPACING.xl, "px")
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          sx: _objectSpread(_objectSpread({
            color: _constants.COLORS.textMuted
          }, _constants.TYPOGRAPHY.menuItem), {}, {
            fontFamily: _constants.TYPOGRAPHY.fontFamily
          }),
          children: "\u05D0\u05D9\u05DF \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA"
        })
      }), filtered.map(function (msg) {
        var meta = MESSAGE_TYPE_META[msg.type] || MESSAGE_TYPE_META.system;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
          disablePadding: true,
          sx: {
            mb: '4px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemButton, {
            onClick: function onClick() {
              return onMessageClick === null || onMessageClick === void 0 ? void 0 : onMessageClick(msg);
            },
            sx: {
              borderRadius: "".concat(_constants.RADIUS.md, "px"),
              backgroundColor: msg.read ? 'transparent' : "".concat(meta.color, "08"),
              border: msg.read ? 'none' : "1px solid ".concat(meta.color, "22"),
              transition: "all ".concat(_constants.TRANSITION_DURATION, " ").concat(_constants.TRANSITION_EASING),
              '&:hover': {
                backgroundColor: _constants.COLORS.bgHover
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
              sx: {
                minWidth: 32,
                color: meta.color
              },
              children: meta.icon
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
              primary: msg.title,
              secondary: msg.body,
              primaryTypographyProps: {
                noWrap: true,
                sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.menuItem), {}, {
                  fontFamily: _constants.TYPOGRAPHY.fontFamily,
                  fontWeight: msg.read ? 400 : 600
                })
              },
              secondaryTypographyProps: {
                noWrap: true,
                sx: _objectSpread(_objectSpread({}, _constants.TYPOGRAPHY.profileRole), {}, {
                  fontFamily: _constants.TYPOGRAPHY.fontFamily,
                  color: _constants.COLORS.textMuted
                })
              }
            }), !msg.read && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: 8,
                height: 8,
                borderRadius: _constants.RADIUS.full,
                backgroundColor: meta.color,
                flexShrink: 0,
                ml: "".concat(_constants.SPACING.sm, "px")
              }
            })]
          })
        }, msg.id);
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        gap: "".concat(_constants.SPACING.sm, "px"),
        p: "".concat(_constants.SPACING.md, "px"),
        backgroundColor: _constants.COLORS.surface
      },
      children: [onReportBug && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BugReportRounded["default"], {
          sx: {
            fontSize: '1rem'
          }
        }),
        label: "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05D1\u05D0\u05D2",
        onClick: onReportBug,
        variant: "outlined",
        size: "small",
        sx: {
          fontFamily: _constants.TYPOGRAPHY.fontFamily,
          borderColor: _constants.COLORS.border,
          '&:hover': {
            borderColor: _constants.COLORS.badge,
            color: _constants.COLORS.badge
          }
        }
      }), onSendRequest && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeedbackRounded["default"], {
          sx: {
            fontSize: '1rem'
          }
        }),
        label: "\u05E9\u05DC\u05D9\u05D7\u05EA \u05D1\u05E7\u05E9\u05D4",
        onClick: onSendRequest,
        variant: "outlined",
        size: "small",
        sx: {
          fontFamily: _constants.TYPOGRAPHY.fontFamily,
          borderColor: _constants.COLORS.border,
          '&:hover': {
            borderColor: _constants.COLORS.accentPrimary,
            color: _constants.COLORS.accentPrimary
          }
        }
      })]
    })]
  });
}
//# sourceMappingURL=MessagesCenter.js.map