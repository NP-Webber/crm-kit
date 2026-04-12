"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _material = require("@mui/material");
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
 * TaskCreateDialog — דיאלוג יצירת משימה חדשה (גנרי)
 *
 * @param {Object}   props
 * @param {boolean}  props.open              — האם הדיאלוג פתוח
 * @param {Function} props.onClose           — סגירת הדיאלוג
 * @param {Function} props.onSubmit          — (taskData) => void — שליחת הנתונים
 * @param {Array}    props.taskTypes         — [{ id, name, description }]
 * @param {Array}    props.users             — [{ username, role }]
 * @param {string}   [props.defaultAssignedTo] — שיוך ברירת מחדל
 * @param {boolean}  [props.isSubmitting]    — האם בתהליך שליחה
 * @param {string}   [props.title]           — כותרת הדיאלוג
 */
function TaskCreateDialog(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    _ref$taskTypes = _ref.taskTypes,
    taskTypes = _ref$taskTypes === void 0 ? [] : _ref$taskTypes,
    _ref$users = _ref.users,
    users = _ref$users === void 0 ? [] : _ref$users,
    _ref$defaultAssignedT = _ref.defaultAssignedTo,
    defaultAssignedTo = _ref$defaultAssignedT === void 0 ? '' : _ref$defaultAssignedT,
    _ref$isSubmitting = _ref.isSubmitting,
    isSubmitting = _ref$isSubmitting === void 0 ? false : _ref$isSubmitting,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'יצירת משימה חדשה' : _ref$title;
  var defaultTask = {
    task_type: 'callback',
    custom_task_type: '',
    assigned_to: defaultAssignedTo,
    assigned_type: 'user',
    due_date: new Date().toISOString().split('T')[0],
    description: '',
    priority: 'normal'
  };
  var _useState = (0, _react.useState)(defaultTask),
    _useState2 = _slicedToArray(_useState, 2),
    newTask = _useState2[0],
    setNewTask = _useState2[1];
  var handleClose = function handleClose() {
    setNewTask(_objectSpread(_objectSpread({}, defaultTask), {}, {
      assigned_to: defaultAssignedTo
    }));
    onClose === null || onClose === void 0 || onClose();
  };
  var handleSubmit = function handleSubmit() {
    var taskData = _objectSpread({}, newTask);
    if (taskData.task_type === 'other' && taskData.custom_task_type) {
      taskData.task_type = taskData.custom_task_type;
    }
    taskData.assigned_type = 'user';
    onSubmit === null || onSubmit === void 0 || onSubmit(taskData);
    handleClose();
  };

  // ── סוגי משימות ברירת מחדל אם לא סופקו ──
  var defaultTaskTypes = [{
    id: 1,
    name: 'callback',
    description: 'חזרה ללקוח'
  }, {
    id: 2,
    name: 'meeting',
    description: 'פגישה'
  }, {
    id: 3,
    name: 'followup',
    description: 'מעקב'
  }, {
    id: 4,
    name: 'email',
    description: 'שליחת מייל'
  }, {
    id: 5,
    name: 'document',
    description: 'הכנת מסמך'
  }, {
    id: 6,
    name: 'other',
    description: 'אחר'
  }];
  var types = taskTypes.length > 0 ? taskTypes : defaultTaskTypes;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Dialog, {
    open: open,
    onClose: handleClose,
    maxWidth: "sm",
    fullWidth: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogTitle, {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.DialogContent, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 2
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
          fullWidth: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
            children: "\u05E1\u05D5\u05D2 \u05DE\u05E9\u05D9\u05DE\u05D4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Select, {
            value: newTask.task_type,
            label: "\u05E1\u05D5\u05D2 \u05DE\u05E9\u05D9\u05DE\u05D4",
            onChange: function onChange(e) {
              return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                task_type: e.target.value
              }));
            },
            children: types.map(function (type) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
                value: type.name,
                children: type.description || type.name
              }, type.id);
            })
          })]
        }), newTask.task_type === 'other' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
          fullWidth: true,
          label: "\u05E4\u05E8\u05D8 \u05D0\u05EA \u05E1\u05D5\u05D2 \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4",
          value: newTask.custom_task_type,
          onChange: function onChange(e) {
            return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
              custom_task_type: e.target.value
            }));
          },
          placeholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: \u05E4\u05D2\u05D9\u05E9\u05D4 \u05E2\u05DD \u05DC\u05E7\u05D5\u05D7"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.FormControl, {
          fullWidth: true,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputLabel, {
            children: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
            value: newTask.priority,
            label: "\u05E2\u05D3\u05D9\u05E4\u05D5\u05EA",
            onChange: function onChange(e) {
              return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                priority: e.target.value
              }));
            },
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
            children: "\u05E9\u05D9\u05D5\u05DA \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Select, {
            value: newTask.assigned_to,
            label: "\u05E9\u05D9\u05D5\u05DA \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9",
            onChange: function onChange(e) {
              return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                assigned_to: e.target.value
              }));
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
              value: "",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
                children: "\u2014 \u05DC\u05DC\u05D0 \u05E9\u05D9\u05D5\u05DA \u2014"
              })
            }), users.map(function (user) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.MenuItem, {
                value: user.username,
                children: [user.username, user.role ? " (".concat(user.role, ")") : '']
              }, user.username);
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            sx: {
              mb: 1
            },
            children: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E2\u05D3"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              gap: 1,
              mb: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              size: "small",
              variant: "outlined",
              onClick: function onClick() {
                return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                  due_date: (0, _taskUtils.getQuickDate)('today')
                }));
              },
              children: "\u05D4\u05D9\u05D5\u05DD"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              size: "small",
              variant: "outlined",
              onClick: function onClick() {
                return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                  due_date: (0, _taskUtils.getQuickDate)('tomorrow')
                }));
              },
              children: "\u05DE\u05D7\u05E8"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              size: "small",
              variant: "outlined",
              onClick: function onClick() {
                return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                  due_date: (0, _taskUtils.getQuickDate)('week')
                }));
              },
              children: "\u05E2\u05D5\u05D3 \u05E9\u05D1\u05D5\u05E2"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
            fullWidth: true,
            type: "date",
            value: newTask.due_date,
            onChange: function onChange(e) {
              return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
                due_date: e.target.value
              }));
            },
            InputLabelProps: {
              shrink: true
            }
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
          fullWidth: true,
          label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4",
          multiline: true,
          rows: 4,
          value: newTask.description,
          onChange: function onChange(e) {
            return setNewTask(_objectSpread(_objectSpread({}, newTask), {}, {
              description: e.target.value
            }));
          }
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.DialogActions, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        onClick: handleClose,
        children: "\u05D1\u05D9\u05D8\u05D5\u05DC"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        onClick: handleSubmit,
        variant: "contained",
        disabled: isSubmitting || !newTask.description,
        children: isSubmitting ? 'יוצר...' : 'צור משימה'
      })]
    })]
  });
}
var _default = exports["default"] = TaskCreateDialog;
//# sourceMappingURL=TaskCreateDialog.js.map