"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _index = require("../dashboard/index.js");
var _taskUtils = require("./taskUtils.js");
var _jsxRuntime = require("react/jsx-runtime");
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
 * TasksDashboard — דשבורד משימות גנרי
 *
 * @param {Object} props
 * @param {Array}   props.tasks            — מערך משימות
 * @param {Array}   props.users            — מערך משתמשים [{ username, role }]
 * @param {boolean} props.isLoading        — טוען?
 * @param {*}       props.error            — שגיאה
 * @param {Function} props.onUpdateStatus  — (taskId, newStatus) => void
 * @param {Function} props.onDeleteTask    — (taskId) => void
 * @param {Function} props.onRefresh       — () => void
 * @param {Function} [props.onOpenClient]  — (task) => void — פתיחת כרטיס לקוח
 * @param {string}  [props.title]          — כותרת (ברירת מחדל: דשבורד משימות)
 */
function TasksDashboard(_ref) {
  var _ref$tasks = _ref.tasks,
    tasks = _ref$tasks === void 0 ? [] : _ref$tasks,
    _ref$users = _ref.users,
    users = _ref$users === void 0 ? [] : _ref$users,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error,
    onUpdateStatus = _ref.onUpdateStatus,
    onDeleteTask = _ref.onDeleteTask,
    onRefresh = _ref.onRefresh,
    onOpenClient = _ref.onOpenClient,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'דשבורד משימות' : _ref$title;
  var _useState = (0, _react.useState)({
      status: 'pending',
      assigned_to: '',
      due_date_from: '',
      due_date_to: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      taskId: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    deleteDialog = _useState4[0],
    setDeleteDialog = _useState4[1];

  // ── סינון לוקאלי ──
  var filteredTasks = tasks.filter(function (t) {
    if (filters.status && t.status !== filters.status) return false;
    if (filters.assigned_to && t.assigned_to !== filters.assigned_to) return false;
    if (filters.due_date_from && t.due_date < filters.due_date_from) return false;
    if (filters.due_date_to && t.due_date > filters.due_date_to) return false;
    return true;
  });
  var handleToggleStatus = function handleToggleStatus(taskId, currentStatus) {
    var newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    onUpdateStatus === null || onUpdateStatus === void 0 || onUpdateStatus(taskId, newStatus);
  };
  var handleDeleteTask = function handleDeleteTask(taskId) {
    setDeleteDialog({
      open: true,
      taskId: taskId
    });
  };
  var confirmDelete = function confirmDelete() {
    onDeleteTask === null || onDeleteTask === void 0 || onDeleteTask(deleteDialog.taskId);
    setDeleteDialog({
      open: false,
      taskId: null
    });
  };
  var handleFilterChange = function handleFilterChange(field, value) {
    setFilters(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
    });
  };

  // ── קטגוריות ──
  var _categorizeTasksByDat = (0, _taskUtils.categorizeTasksByDate)(filteredTasks),
    overdueTasks = _categorizeTasksByDat.overdue,
    todayTasks = _categorizeTasksByDat.today,
    upcomingTasks = _categorizeTasksByDat.upcoming,
    completedTasks = _categorizeTasksByDat.completed;
  var stats = (0, _taskUtils.getTaskStats)(tasks); // סטטיסטיקות על *כל* המשימות

  // ── רינדור שורת משימה ──
  var renderTaskItem = function renderTaskItem(task, bgColor) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
      sx: {
        mb: 1,
        bgcolor: bgColor
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItem, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.ListItemText, {
          primary: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'wrap'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
              variant: "body1",
              sx: _objectSpread({
                fontWeight: 'bold'
              }, task.status === 'completed' ? {
                textDecoration: 'line-through',
                color: 'text.secondary'
              } : {}),
              children: [task.client_name, " ", task.client_family]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
              label: (0, _taskUtils.getTaskTypeText)(task.task_type),
              size: "small",
              color: task.status === 'completed' ? 'default' : 'primary',
              variant: task.status === 'completed' ? 'outlined' : 'filled'
            }), task.status !== 'completed' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
              label: (0, _taskUtils.getPriorityText)(task.priority),
              size: "small",
              color: (0, _taskUtils.getPriorityColor)(task.priority)
            }), task.assigned_to && task.status !== 'completed' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
              label: "\u05E9\u05D9\u05D5\u05DA: ".concat(task.assigned_to),
              size: "small",
              variant: "outlined"
            })]
          }),
          secondary: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              mt: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "body2",
              sx: task.status === 'completed' ? {
                color: 'text.secondary'
              } : {},
              children: task.description
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
              variant: "caption",
              color: "text.secondary",
              children: task.status === 'completed' ? "\u05D4\u05D5\u05E9\u05DC\u05DD: ".concat(task.formatted_completed_at || '') : "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3: ".concat(task.formatted_due_date || task.due_date, " | \u05E0\u05D5\u05E6\u05E8 \u05E2\u05DC \u05D9\u05D3\u05D9: ").concat(task.created_by_name || '', " | \u05D8\u05DC\u05E4\u05D5\u05DF: ").concat(task.client_phone || '')
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.ListItemSecondaryAction, {
          children: [onOpenClient && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            edge: "end",
            onClick: function onClick() {
              return onOpenClient(task);
            },
            color: "info",
            title: "\u05E4\u05EA\u05D7 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05DC\u05E7\u05D5\u05D7",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.OpenInNew, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            edge: "end",
            onClick: function onClick() {
              return handleToggleStatus(task.id, task.status);
            },
            color: task.status === 'completed' ? 'default' : 'success',
            children: task.status === 'completed' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.PendingActions, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.CheckCircle, {})
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            edge: "end",
            onClick: function onClick() {
              return handleDeleteTask(task.id);
            },
            color: "error",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Delete, {})
          })]
        })]
      })
    }, task.id);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      p: 3
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
        variant: "h4",
        sx: {
          fontWeight: 'bold',
          color: '#2c3e50'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Task, {
          sx: {
            mr: 1,
            verticalAlign: 'middle',
            fontSize: 35
          }
        }), title]
      }), onRefresh && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
        onClick: onRefresh,
        color: "primary",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Refresh, {})
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.DashboardPanel, {
      title: "\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.BarChart, {}),
      color: "#3498db",
      subtitle: "\u05E1\u05D9\u05DB\u05D5\u05DD \u05DE\u05E6\u05D1 \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA",
      defaultOpen: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_index.DashboardGrid, {
        columns: 5,
        sx: {
          mb: 0
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StatCard, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Assignment, {}),
          label: "\u05E1\u05D4\u05F4\u05DB \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA",
          value: stats.total,
          color: "#3498db"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StatCard, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.PendingActions, {}),
          label: "\u05DE\u05DE\u05EA\u05D9\u05E0\u05D5\u05EA",
          value: stats.pending,
          color: "#f39c12"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StatCard, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Warning, {}),
          label: "\u05D1\u05D0\u05D9\u05D7\u05D5\u05E8",
          value: stats.overdue,
          color: "#e74c3c"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StatCard, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Today, {}),
          label: "\u05DC\u05D4\u05D9\u05D5\u05DD",
          value: stats.today,
          color: "#9b59b6"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.StatCard, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.CheckCircle, {}),
          label: "\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5",
          value: stats.completed,
          color: "#2ecc71"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
      sx: {
        p: 2,
        mb: 3
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.FilterList, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          variant: "h6",
          children: "\u05E1\u05D9\u05E0\u05D5\u05DF"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        container: true,
        spacing: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            size: "small",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05E1\u05D8\u05D8\u05D5\u05E1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: filters.status,
              label: "\u05E1\u05D8\u05D8\u05D5\u05E1",
              onChange: function onChange(e) {
                return handleFilterChange('status', e.target.value);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "",
                children: "\u05D4\u05DB\u05DC"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "pending",
                children: "\u05DE\u05DE\u05EA\u05D9\u05E0\u05D5\u05EA"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "completed",
                children: "\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5"
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            size: "small",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05DC\u05DE\u05D9"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: filters.assigned_to,
              label: "\u05DC\u05DE\u05D9",
              onChange: function onChange(e) {
                return handleFilterChange('assigned_to', e.target.value);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "",
                children: "\u05D4\u05DB\u05DC"
              }), users.map(function (user) {
                return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
                  value: user.username,
                  children: [user.username, user.role ? " (".concat(user.role, ")") : '']
                }, user.username);
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            fullWidth: true,
            size: "small",
            type: "date",
            label: "\u05DE\u05EA\u05D0\u05E8\u05D9\u05DA",
            value: filters.due_date_from,
            onChange: function onChange(e) {
              return handleFilterChange('due_date_from', e.target.value);
            },
            InputLabelProps: {
              shrink: true
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 3,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            fullWidth: true,
            size: "small",
            type: "date",
            label: "\u05E2\u05D3 \u05EA\u05D0\u05E8\u05D9\u05DA",
            value: filters.due_date_to,
            onChange: function onChange(e) {
              return handleFilterChange('due_date_to', e.target.value);
            },
            InputLabelProps: {
              shrink: true
            }
          })
        })]
      })]
    }), isLoading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        p: 5
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
        size: 60
      })
    }) : error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
      severity: "error",
      children: "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA"
    }) : filteredTasks.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Paper, {
      sx: {
        p: 5,
        textAlign: 'center',
        bgcolor: '#f5f5f5'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "h6",
        color: "text.secondary",
        children: "\u05D0\u05D9\u05DF \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DC\u05D4\u05E6\u05D2\u05D4"
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: [overdueTasks.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          mb: 3
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "h6",
          sx: {
            mb: 2,
            color: '#e74c3c',
            fontWeight: 'bold'
          },
          children: ["\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D1\u05D0\u05D9\u05D7\u05D5\u05E8 (", overdueTasks.length, ")"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          children: overdueTasks.map(function (t) {
            return renderTaskItem(t, '#ffe6e6');
          })
        })]
      }), todayTasks.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          mb: 3
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "h6",
          sx: {
            mb: 2,
            color: '#9b59b6',
            fontWeight: 'bold'
          },
          children: ["\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05DD (", todayTasks.length, ")"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          children: todayTasks.map(function (t) {
            return renderTaskItem(t, '#f3e5f5');
          })
        })]
      }), upcomingTasks.length > 0 && filters.status !== 'completed' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          mb: 3
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "h6",
          sx: {
            mb: 2,
            color: '#f39c12',
            fontWeight: 'bold'
          },
          children: ["\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E2\u05EA\u05D9\u05D3\u05D9\u05D5\u05EA (", upcomingTasks.length, ")"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          children: upcomingTasks.map(function (t) {
            return renderTaskItem(t);
          })
        })]
      }), completedTasks.length > 0 && filters.status === 'completed' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          mb: 3
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
          variant: "h6",
          sx: {
            mb: 2,
            color: '#2ecc71',
            fontWeight: 'bold'
          },
          children: ["\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5 (", completedTasks.length, ")"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.List, {
          children: completedTasks.map(function (t) {
            return renderTaskItem(t, '#e8f5e9');
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Dialog, {
      open: deleteDialog.open,
      onClose: function onClose() {
        return setDeleteDialog({
          open: false,
          taskId: null
        });
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogTitle, {
        children: "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContent, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
          children: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4?"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogActions, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            return setDeleteDialog({
              open: false,
              taskId: null
            });
          },
          children: "\u05D1\u05D9\u05D8\u05D5\u05DC"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: confirmDelete,
          color: "error",
          variant: "contained",
          children: "\u05DE\u05D7\u05E7"
        })]
      })]
    })]
  });
}
var _default = exports["default"] = TasksDashboard;
//# sourceMappingURL=TasksDashboard.js.map