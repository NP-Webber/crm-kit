"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _index = require("../tablekit/index.js");
var _index2 = require("../dashboard/index.js");
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
 * TasksDashboard — דשבורד משימות גנרי עם טבלה
 *
 * @param {Object}   props
 * @param {Array}    props.tasks           — מערך משימות
 * @param {Array}    props.users           — מערך משתמשים [{ username, display_name }]
 * @param {Array}    props.taskTypes       — סוגי משימות [{ name, description }]
 * @param {boolean}  props.isLoading       — טוען?
 * @param {*}        props.error           — שגיאה
 * @param {Function} props.onUpdateStatus  — (taskId, newStatus) => void
 * @param {Function} props.onUpdateTask    — (taskId, fields) => void
 * @param {Function} props.onDeleteTask    — (taskId) => void
 * @param {Function} [props.onOpenClient]  — (task) => void — פתיחת כרטיס לקוח
 * @param {string}   [props.title]         — כותרת (ברירת מחדל: ניהול משימות)
 */
function TasksDashboard(_ref) {
  var _ref$tasks = _ref.tasks,
    tasks = _ref$tasks === void 0 ? [] : _ref$tasks,
    _ref$users = _ref.users,
    users = _ref$users === void 0 ? [] : _ref$users,
    _ref$taskTypes = _ref.taskTypes,
    taskTypes = _ref$taskTypes === void 0 ? [] : _ref$taskTypes,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? null : _ref$error,
    onUpdateStatus = _ref.onUpdateStatus,
    onUpdateTask = _ref.onUpdateTask,
    onDeleteTask = _ref.onDeleteTask,
    onOpenClient = _ref.onOpenClient,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'ניהול משימות' : _ref$title;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeFilter = _useState2[0],
    setActiveFilter = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      task: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    editDialog = _useState4[0],
    setEditDialog = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      taskId: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    deleteDialog = _useState6[0],
    setDeleteDialog = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    editForm = _useState8[0],
    setEditForm = _useState8[1];

  // סטטיסטיקות
  var stats = (0, _react.useMemo)(function () {
    if (!Array.isArray(tasks)) return {
      total: 0,
      pending: 0,
      completed: 0,
      overdue: 0,
      highPriority: 0
    };
    var today = new Date().toISOString().split('T')[0];
    return {
      total: tasks.length,
      pending: tasks.filter(function (t) {
        return t.status === 'pending';
      }).length,
      completed: tasks.filter(function (t) {
        return t.status === 'completed';
      }).length,
      overdue: tasks.filter(function (t) {
        return t.status === 'pending' && t.due_date && t.due_date.split('T')[0] < today;
      }).length,
      highPriority: tasks.filter(function (t) {
        return t.status === 'pending' && t.priority === 'high';
      }).length
    };
  }, [tasks]);

  // סינון לפי כרטיס פעיל
  var filteredTasks = (0, _react.useMemo)(function () {
    if (!Array.isArray(tasks)) return [];
    var today = new Date().toISOString().split('T')[0];
    switch (activeFilter) {
      case 'pending':
        return tasks.filter(function (t) {
          return t.status === 'pending';
        });
      case 'completed':
        return tasks.filter(function (t) {
          return t.status === 'completed';
        });
      case 'overdue':
        return tasks.filter(function (t) {
          return t.status === 'pending' && t.due_date && t.due_date.split('T')[0] < today;
        });
      case 'highPriority':
        return tasks.filter(function (t) {
          return t.status === 'pending' && t.priority === 'high';
        });
      default:
        return tasks;
    }
  }, [tasks, activeFilter]);
  var handleCardFilter = function handleCardFilter(key) {
    return setActiveFilter(function (prev) {
      return prev === key ? null : key;
    });
  };
  var handleToggleStatus = function handleToggleStatus(task) {
    var newStatus = task.status === 'pending' ? 'completed' : 'pending';
    onUpdateStatus === null || onUpdateStatus === void 0 || onUpdateStatus(task.id, newStatus);
  };
  var handleOpenEdit = function handleOpenEdit(task) {
    setEditForm({
      task_type: task.task_type || '',
      description: task.description || '',
      assigned_to: task.assigned_to || '',
      due_date: task.due_date ? task.due_date.split('T')[0] : '',
      priority: task.priority || 'normal',
      status: task.status || 'pending'
    });
    setEditDialog({
      open: true,
      task: task
    });
  };
  var handleSaveEdit = function handleSaveEdit() {
    if (!editDialog.task) return;
    onUpdateTask === null || onUpdateTask === void 0 || onUpdateTask(editDialog.task.id, editForm);
    setEditDialog({
      open: false,
      task: null
    });
  };
  var handleConfirmDelete = function handleConfirmDelete() {
    if (!deleteDialog.taskId) return;
    onDeleteTask === null || onDeleteTask === void 0 || onDeleteTask(deleteDialog.taskId);
    setDeleteDialog({
      open: false,
      taskId: null
    });
  };
  var getPriorityLabel = function getPriorityLabel(p) {
    return (0, _taskUtils.getPriorityText)(p) || p || 'רגיל';
  };
  var getPriorityChipColor = function getPriorityChipColor(p) {
    return (0, _taskUtils.getPriorityColor)(p) || 'default';
  };
  var getStatusLabel = function getStatusLabel(s) {
    return s === 'pending' ? 'ממתין' : s === 'completed' ? 'הושלם' : s;
  };
  var getTaskTypeLabel = function getTaskTypeLabel(type) {
    var found = taskTypes.find(function (t) {
      return t.name === type;
    });
    return found ? found.description || found.name : type || '-';
  };
  var isOverdue = function isOverdue(task) {
    if (task.status === 'completed') return false;
    var today = new Date().toISOString().split('T')[0];
    return task.due_date && task.due_date.split('T')[0] < today;
  };
  var columns = [{
    key: 'id',
    title: '#',
    width: '60px',
    sortable: true
  }, {
    key: 'client_name',
    title: 'לקוח',
    width: '140px',
    sortable: true,
    filterable: true,
    render: function render(val, row) {
      var fullName = [row.client_name, row.client_family].filter(Boolean).join(' ');
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        sx: {
          cursor: row.client_id ? 'pointer' : 'default',
          color: row.client_id ? 'primary.main' : 'text.primary',
          '&:hover': row.client_id ? {
            textDecoration: 'underline'
          } : {}
        },
        onClick: function onClick(e) {
          e.stopPropagation();
          onOpenClient === null || onOpenClient === void 0 || onOpenClient(row);
        },
        children: fullName || '-'
      });
    }
  }, {
    key: 'task_type',
    title: 'סוג משימה',
    width: '120px',
    sortable: true,
    filterable: true,
    render: function render(val) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
        label: getTaskTypeLabel(val),
        size: "small",
        color: "primary",
        variant: "outlined"
      });
    }
  }, {
    key: 'description',
    title: 'תיאור',
    width: '200px',
    filterable: true
  }, {
    key: 'assigned_to',
    title: 'שיוך',
    width: '100px',
    sortable: true,
    filterable: true,
    render: function render(val) {
      return val === 'all' ? 'כולם' : val || '-';
    }
  }, {
    key: 'priority',
    title: 'עדיפות',
    width: '90px',
    sortable: true,
    filterable: true,
    render: function render(val) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
        label: getPriorityLabel(val),
        size: "small",
        color: getPriorityChipColor(val)
      });
    }
  }, {
    key: 'formatted_due_date',
    title: 'תאריך יעד',
    width: '110px',
    sortable: true,
    render: function render(val, row) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
        variant: "body2",
        sx: {
          color: isOverdue(row) ? 'error.main' : 'text.primary',
          fontWeight: isOverdue(row) ? 'bold' : 'normal'
        },
        children: val || '-'
      });
    }
  }, {
    key: 'status',
    title: 'סטטוס',
    width: '100px',
    sortable: true,
    filterable: true,
    render: function render(val) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
        label: getStatusLabel(val),
        size: "small",
        color: val === 'completed' ? 'success' : 'warning'
      });
    }
  }, {
    key: 'created_by_name',
    title: 'נוצר ע"י',
    width: '100px',
    sortable: true,
    filterable: true,
    render: function render(val) {
      return val || '-';
    }
  }, {
    key: 'actions',
    title: 'פעולות',
    width: '130px',
    render: function render(_, row) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          gap: 0.5
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
          title: row.status === 'pending' ? 'סמן כהושלם' : 'החזר לממתין',
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            size: "small",
            onClick: function onClick(e) {
              e.stopPropagation();
              handleToggleStatus(row);
            },
            color: row.status === 'pending' ? 'success' : 'default',
            children: row.status === 'pending' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.CheckCircle, {
              fontSize: "small"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Undo, {
              fontSize: "small"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
          title: "\u05E2\u05E8\u05D5\u05DA",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            size: "small",
            onClick: function onClick(e) {
              e.stopPropagation();
              handleOpenEdit(row);
            },
            color: "primary",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Edit, {
              fontSize: "small"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
          title: "\u05DE\u05D7\u05E7",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
            size: "small",
            onClick: function onClick(e) {
              e.stopPropagation();
              setDeleteDialog({
                open: true,
                taskId: row.id
              });
            },
            color: "error",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Delete, {
              fontSize: "small"
            })
          })
        })]
      });
    }
  }];
  if (isLoading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: 4
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {})
  });
  if (error) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Alert, {
    severity: "error",
    children: "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA"
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.DashboardPanel, {
      title: "\u05E1\u05D9\u05DB\u05D5\u05DD \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA",
      defaultOpen: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_index2.DashboardGrid, {
        columns: 5,
        gap: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onClick: function onClick() {
            return handleCardFilter(null);
          },
          sx: {
            cursor: 'pointer',
            outline: activeFilter === null ? '2px solid #1976d2' : 'none',
            borderRadius: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.StatCard, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Assignment, {}),
            label: "\u05E1\u05D4\u05F4\u05DB \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA",
            value: stats.total,
            color: "#1976d2"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onClick: function onClick() {
            return handleCardFilter('pending');
          },
          sx: {
            cursor: 'pointer',
            outline: activeFilter === 'pending' ? '2px solid #ed6c02' : 'none',
            borderRadius: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.StatCard, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.HourglassEmpty, {}),
            label: "\u05DE\u05DE\u05EA\u05D9\u05E0\u05D5\u05EA",
            value: stats.pending,
            color: "#ed6c02"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onClick: function onClick() {
            return handleCardFilter('completed');
          },
          sx: {
            cursor: 'pointer',
            outline: activeFilter === 'completed' ? '2px solid #2e7d32' : 'none',
            borderRadius: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.StatCard, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.TaskAlt, {}),
            label: "\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5",
            value: stats.completed,
            color: "#2e7d32"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onClick: function onClick() {
            return handleCardFilter('overdue');
          },
          sx: {
            cursor: 'pointer',
            outline: activeFilter === 'overdue' ? '2px solid #d32f2f' : 'none',
            borderRadius: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.StatCard, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.Warning, {}),
            label: "\u05D1\u05D0\u05D9\u05D7\u05D5\u05E8",
            value: stats.overdue,
            color: "#d32f2f"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onClick: function onClick() {
            return handleCardFilter('highPriority');
          },
          sx: {
            cursor: 'pointer',
            outline: activeFilter === 'highPriority' ? '2px solid #9c27b0' : 'none',
            borderRadius: 2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.StatCard, {
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.PriorityHigh, {}),
            label: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4",
            value: stats.highPriority,
            color: "#9c27b0"
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        mt: 2
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.TableKit, {
        data: filteredTasks,
        columns: columns,
        clientSideMode: true,
        urlSync: false,
        title: title,
        showColumnPicker: true,
        showExport: true,
        showFilters: true,
        onRowDoubleClick: function onRowDoubleClick(row) {
          return onOpenClient ? onOpenClient(row) : handleOpenEdit(row);
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Dialog, {
      open: editDialog.open,
      onClose: function onClose() {
        return setEditDialog({
          open: false,
          task: null
        });
      },
      maxWidth: "sm",
      fullWidth: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogTitle, {
        children: "\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05E9\u05D9\u05DE\u05D4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContent, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            label: "\u05EA\u05D9\u05D0\u05D5\u05E8",
            value: editForm.description || '',
            onChange: function onChange(e) {
              return setEditForm(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  description: e.target.value
                });
              });
            },
            fullWidth: true,
            multiline: true,
            rows: 2
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05E1\u05D5\u05D2 \u05DE\u05E9\u05D9\u05DE\u05D4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Select, {
              value: editForm.task_type || '',
              onChange: function onChange(e) {
                return setEditForm(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    task_type: e.target.value
                  });
                });
              },
              label: "\u05E1\u05D5\u05D2 \u05DE\u05E9\u05D9\u05DE\u05D4",
              children: taskTypes.map(function (t) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                  value: t.name,
                  children: t.description || t.name
                }, t.name);
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05E9\u05D9\u05D5\u05DA \u05DC\u05E0\u05E6\u05D9\u05D2"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: editForm.assigned_to || '',
              onChange: function onChange(e) {
                return setEditForm(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    assigned_to: e.target.value
                  });
                });
              },
              label: "\u05E9\u05D9\u05D5\u05DA \u05DC\u05E0\u05E6\u05D9\u05D2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "all",
                children: "\u05DB\u05D5\u05DC\u05DD"
              }), users.map(function (u) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                  value: u.username,
                  children: u.display_name || u.username
                }, u.username);
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3",
            type: "date",
            value: editForm.due_date || '',
            onChange: function onChange(e) {
              return setEditForm(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  due_date: e.target.value
                });
              });
            },
            fullWidth: true,
            InputLabelProps: {
              shrink: true
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: editForm.priority || 'normal',
              onChange: function onChange(e) {
                return setEditForm(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    priority: e.target.value
                  });
                });
              },
              label: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "low",
                children: "\u05E0\u05DE\u05D5\u05DB\u05D4"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "normal",
                children: "\u05E8\u05D2\u05D9\u05DC\u05D4"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "high",
                children: "\u05D2\u05D1\u05D5\u05D4\u05D4"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "urgent",
                children: "\u05D3\u05D7\u05D5\u05E4\u05D4"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
            fullWidth: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
              children: "\u05E1\u05D8\u05D8\u05D5\u05E1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
              value: editForm.status || 'pending',
              onChange: function onChange(e) {
                return setEditForm(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    status: e.target.value
                  });
                });
              },
              label: "\u05E1\u05D8\u05D8\u05D5\u05E1",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "pending",
                children: "\u05DE\u05DE\u05EA\u05D9\u05DF"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: "completed",
                children: "\u05D4\u05D5\u05E9\u05DC\u05DD"
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogActions, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: function onClick() {
            return setEditDialog({
              open: false,
              task: null
            });
          },
          children: "\u05D1\u05D9\u05D8\u05D5\u05DC"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
          onClick: handleSaveEdit,
          variant: "contained",
          color: "primary",
          children: "\u05E9\u05DE\u05D5\u05E8"
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
          onClick: handleConfirmDelete,
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