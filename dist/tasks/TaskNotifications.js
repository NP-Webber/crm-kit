"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * TaskNotifications — פעמון התראות + דיאלוג משימות פתוחות
 *
 * @param {Object}   props
 * @param {Array}    props.tasks              — מערך משימות פתוחות (pending)
 * @param {Function} [props.onNavigateToTasks] — ניווט לעמוד משימות
 * @param {string}   [props.navigateLabel]    — טקסט כפתור ניווט
 */
function TaskNotifications(_ref) {
  var _ref$tasks = _ref.tasks,
    tasks = _ref$tasks === void 0 ? [] : _ref$tasks,
    onNavigateToTasks = _ref.onNavigateToTasks,
    _ref$navigateLabel = _ref.navigateLabel,
    navigateLabel = _ref$navigateLabel === void 0 ? 'עבור למשימות' : _ref$navigateLabel;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    alertShown = _useState4[0],
    setAlertShown = _useState4[1];
  (0, _react.useEffect)(function () {
    if (!alertShown && tasks.length > 0) {
      setAlertOpen(true);
      setAlertShown(true);
    }
  }, [tasks, alertShown]);
  var today = new Date().toISOString().split('T')[0];
  var hasOverdue = tasks.some(function (t) {
    return new Date(t.due_date) < new Date(today);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
      onClick: function onClick() {
        return setAlertOpen(true);
      },
      sx: {
        position: 'fixed',
        top: 10,
        left: 16,
        zIndex: 1201,
        bgcolor: hasOverdue && tasks.length > 0 ? 'rgba(231,76,60,0.1)' : 'transparent',
        '&:hover': {
          bgcolor: hasOverdue && tasks.length > 0 ? 'rgba(231,76,60,0.2)' : 'rgba(0,0,0,0.04)'
        },
        animation: tasks.length > 0 && !alertShown ? 'bellRing 0.5s ease-in-out' : 'none',
        '@keyframes bellRing': {
          '0%': {
            transform: 'rotate(0)'
          },
          '25%': {
            transform: 'rotate(15deg)'
          },
          '50%': {
            transform: 'rotate(-15deg)'
          },
          '75%': {
            transform: 'rotate(10deg)'
          },
          '100%': {
            transform: 'rotate(0)'
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Badge, {
        badgeContent: tasks.length,
        color: "error",
        sx: {
          '& .MuiBadge-badge': {
            fontWeight: 700,
            fontSize: '0.75rem',
            minWidth: 20,
            height: 20
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Notifications, {
          sx: {
            fontSize: 26,
            color: tasks.length > 0 ? '#e74c3c' : '#666'
          }
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Dialog, {
      open: alertOpen,
      onClose: function onClose() {
        return setAlertOpen(false);
      },
      maxWidth: "sm",
      fullWidth: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogTitle, {
        sx: {
          bgcolor: hasOverdue ? '#e74c3c' : tasks.length > 0 ? '#9b59b6' : '#2196f3',
          color: 'white',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Notifications, {}), tasks.length > 0 ? "\u05D9\u05E9 \u05DC\u05DA ".concat(tasks.length, " \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA!") : 'אין משימות פתוחות']
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContent, {
        sx: {
          mt: 2
        },
        children: tasks.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          color: "text.secondary",
          sx: {
            py: 2,
            textAlign: 'center'
          },
          children: "\u05D0\u05D9\u05DF \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA \u05DB\u05E8\u05D2\u05E2"
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          children: tasks.map(function (task) {
            var isOverdue = new Date(task.due_date) < new Date(today);
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItem, {
              divider: true,
              sx: {
                bgcolor: isOverdue ? 'rgba(231,76,60,0.05)' : 'transparent',
                borderRadius: 1
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
                primary: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
                    fontWeight: "bold",
                    children: [task.client_name, " ", task.client_family]
                  }), isOverdue && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
                    label: "\u05D1\u05D0\u05D9\u05D7\u05D5\u05E8",
                    size: "small",
                    color: "error"
                  })]
                }),
                secondary: "".concat(task.description || '', " | \u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3: ").concat(task.formatted_due_date || task.due_date)
              })
            }, task.id);
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogActions, {
        sx: {
          px: 3,
          pb: 2
        },
        children: [onNavigateToTasks && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            setAlertOpen(false);
            onNavigateToTasks();
          },
          variant: "contained",
          children: navigateLabel
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            return setAlertOpen(false);
          },
          variant: "outlined",
          children: "\u05E1\u05D2\u05D5\u05E8"
        })]
      })]
    })]
  });
}
var _default = exports["default"] = TaskNotifications;
//# sourceMappingURL=TaskNotifications.js.map