"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _material = require("@mui/material");
var _Logout = _interopRequireDefault(require("@mui/icons-material/Logout"));
var _LockReset = _interopRequireDefault(require("@mui/icons-material/LockReset"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DRAWER_WIDTH = 260;

/**
 * CrmLayout — Layout ראשי עם סרגל צד + AppBar
 *
 * @param {Object} props
 * @param {Array} props.navItems - פריטי ניווט:
 *   { label, path, icon: MuiIcon, adminOnly?, hidden? }
 * @param {string} props.systemLabel - שם המערכת (ברירת מחדל: 'מערכת ניהול')
 * @param {Object} props.user - { username, roles: string[] }
 * @param {Function} props.onLogout - callback להתנתקות
 * @param {string} props.profilePath - נתיב לדף פרופיל (ברירת מחדל: '/profile')
 * @param {string} props.drawerBackground - רקע סרגל צד
 * @param {React.ReactNode} props.drawerHeader - תוכן מותאם לכותרת הסרגל
 * @param {React.ReactNode} props.drawerFooter - תוכן מותאם לתחתית הסרגל
 * @param {React.ReactNode} props.children - אם מסופק, משמש במקום <Outlet />
 */
var CrmLayout = function CrmLayout(_ref) {
  var _user$roles;
  var _ref$navItems = _ref.navItems,
    navItems = _ref$navItems === void 0 ? [] : _ref$navItems,
    _ref$systemLabel = _ref.systemLabel,
    systemLabel = _ref$systemLabel === void 0 ? 'מערכת ניהול' : _ref$systemLabel,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? {} : _ref$user,
    onLogout = _ref.onLogout,
    _ref$profilePath = _ref.profilePath,
    profilePath = _ref$profilePath === void 0 ? '/profile' : _ref$profilePath,
    _ref$drawerBackground = _ref.drawerBackground,
    drawerBackground = _ref$drawerBackground === void 0 ? 'linear-gradient(180deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)' : _ref$drawerBackground,
    drawerHeader = _ref.drawerHeader,
    drawerFooter = _ref.drawerFooter,
    children = _ref.children;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    menuAnchor = _useState2[0],
    setMenuAnchor = _useState2[1];
  var isAdmin = user === null || user === void 0 || (_user$roles = user.roles) === null || _user$roles === void 0 ? void 0 : _user$roles.includes('admin');
  var handleOpenMenu = function handleOpenMenu(e) {
    return setMenuAnchor(e.currentTarget);
  };
  var handleCloseMenu = function handleCloseMenu() {
    return setMenuAnchor(null);
  };
  var handleProfile = function handleProfile() {
    handleCloseMenu();
    navigate(profilePath);
  };
  var handleLogout = function handleLogout() {
    handleCloseMenu();
    if (onLogout) onLogout();
  };
  var visibleItems = navItems.filter(function (item) {
    if (item.hidden) return false;
    if (item.adminOnly && !isAdmin) return false;
    return true;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      minHeight: '100vh',
      bgcolor: '#f0f4f8'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Drawer, {
      variant: "permanent",
      sx: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          right: 0,
          left: 'auto',
          background: drawerBackground,
          color: '#fff',
          borderLeft: 'none'
        }
      },
      anchor: "right",
      children: [drawerHeader || /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          p: 2.5,
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h6",
          fontWeight: 800,
          sx: {
            color: '#fff',
            letterSpacing: 0.5
          },
          children: systemLabel
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "caption",
          sx: {
            color: 'rgba(255,255,255,0.6)'
          },
          children: "\u05DE\u05DE\u05E9\u05E7 \u05E0\u05D9\u05D4\u05D5\u05DC"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {
        sx: {
          borderColor: 'rgba(255,255,255,0.15)'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
        sx: {
          px: 1.5,
          pt: 1.5,
          flex: 1
        },
        children: visibleItems.map(function (item) {
          var Icon = item.icon;
          var isActive = location.pathname.startsWith(item.path);
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemButton, {
            selected: isActive,
            onClick: function onClick() {
              return navigate(item.path);
            },
            sx: {
              borderRadius: 2,
              mb: 0.5,
              py: 1,
              color: isActive ? '#fff' : 'rgba(255,255,255,0.75)',
              bgcolor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#fff'
              },
              '&.Mui-selected': {
                bgcolor: 'rgba(255,255,255,0.18)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.22)'
                }
              }
            },
            children: [Icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
              sx: {
                minWidth: 40,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.7)'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
                fontSize: "small"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
              primary: item.label,
              primaryTypographyProps: {
                fontSize: 14,
                fontWeight: isActive ? 700 : 500
              }
            })]
          }, item.path);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {
        sx: {
          borderColor: 'rgba(255,255,255,0.15)'
        }
      }), drawerFooter || /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
          sx: {
            width: 34,
            height: 34,
            bgcolor: 'rgba(255,255,255,0.2)',
            fontSize: 14,
            fontWeight: 700
          },
          children: ((user === null || user === void 0 ? void 0 : user.username) || 'א').charAt(0).toUpperCase()
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            flex: 1,
            minWidth: 0
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            fontWeight: 600,
            noWrap: true,
            sx: {
              color: '#fff'
            },
            children: (user === null || user === void 0 ? void 0 : user.username) || 'אורח'
          })
        }), onLogout && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: onLogout,
          size: "small",
          sx: {
            minWidth: 'auto',
            p: 0.8,
            color: 'rgba(255,255,255,0.7)',
            '&:hover': {
              color: '#fff',
              bgcolor: 'rgba(255,255,255,0.1)'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logout["default"], {
            fontSize: "small"
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        flexGrow: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AppBar, {
        position: "sticky",
        elevation: 0,
        sx: {
          background: '#fff',
          color: '#333',
          borderBottom: '1px solid #e0e0e0'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Toolbar, {
          sx: {
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
            onClick: handleOpenMenu,
            sx: {
              textTransform: 'none',
              color: '#333',
              fontWeight: 500
            },
            children: ["\u05E9\u05DC\u05D5\u05DD, ", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              style: {
                marginRight: 4
              },
              children: (user === null || user === void 0 ? void 0 : user.username) || 'אורח'
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Menu, {
            anchorEl: menuAnchor,
            open: Boolean(menuAnchor),
            onClose: handleCloseMenu,
            transformOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
              onClick: handleProfile,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LockReset["default"], {
                  fontSize: "small"
                })
              }), "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D4"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
              onClick: handleLogout,
              sx: {
                color: 'error.main'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemIcon, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logout["default"], {
                  fontSize: "small",
                  color: "error"
                })
              }), "\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA"]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {})]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          minHeight: 'calc(100vh - 64px)',
          p: 3,
          pt: 2
        },
        children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Outlet, {})
      })]
    })]
  });
};
var _default = exports["default"] = CrmLayout;
//# sourceMappingURL=CrmLayout.js.map