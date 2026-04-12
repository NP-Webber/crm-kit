"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskTypeText = exports.getTaskStats = exports.getQuickDate = exports.getPriorityText = exports.getPriorityColor = exports.categorizeTasksByDate = void 0;
// ═══════════════════════════════════════════════
//  Task Utilities — פונקציות עזר למשימות
// ═══════════════════════════════════════════════

/**
 * מחזיר צבע MUI לפי עדיפות
 */
var getPriorityColor = exports.getPriorityColor = function getPriorityColor(priority) {
  switch (priority) {
    case 'urgent':
      return 'error';
    case 'high':
      return 'warning';
    case 'normal':
      return 'info';
    case 'low':
      return 'default';
    default:
      return 'default';
  }
};

/**
 * מחזיר טקסט עברי לעדיפות
 */
var getPriorityText = exports.getPriorityText = function getPriorityText(priority) {
  var texts = {
    urgent: 'דחוף',
    high: 'גבוה',
    normal: 'רגיל',
    low: 'נמוך'
  };
  return texts[priority] || priority;
};

/**
 * מחזיר טקסט עברי לסוג משימה
 */
var getTaskTypeText = exports.getTaskTypeText = function getTaskTypeText(type) {
  var types = {
    callback: 'חזרה ללקוח',
    meeting: 'פגישה',
    followup: 'מעקב',
    email: 'שליחת מייל',
    document: 'הכנת מסמך',
    other: 'אחר'
  };
  return types[type] || type;
};

/**
 * מחזיר תאריך מהיר (היום / מחר / עוד שבוע)
 */
var getQuickDate = exports.getQuickDate = function getQuickDate(type) {
  var today = new Date();
  switch (type) {
    case 'today':
      return today.toISOString().split('T')[0];
    case 'tomorrow':
      {
        var tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
      }
    case 'week':
      {
        var week = new Date(today);
        week.setDate(week.getDate() + 7);
        return week.toISOString().split('T')[0];
      }
    default:
      return today.toISOString().split('T')[0];
  }
};

/**
 * מחלק מערך משימות לקטגוריות לפי תאריך יעד
 */
var categorizeTasksByDate = exports.categorizeTasksByDate = function categorizeTasksByDate(tasks) {
  var today = new Date().toISOString().split('T')[0];
  return {
    overdue: tasks.filter(function (t) {
      return t.due_date < today && t.status === 'pending';
    }),
    today: tasks.filter(function (t) {
      return t.due_date === today && t.status === 'pending';
    }),
    upcoming: tasks.filter(function (t) {
      return t.due_date > today && t.status === 'pending';
    }),
    completed: tasks.filter(function (t) {
      return t.status === 'completed';
    })
  };
};

/**
 * מחשב סטטיסטיקות על מערך משימות
 */
var getTaskStats = exports.getTaskStats = function getTaskStats(tasks) {
  var cats = categorizeTasksByDate(tasks);
  return {
    total: tasks.length,
    pending: tasks.filter(function (t) {
      return t.status === 'pending';
    }).length,
    completed: cats.completed.length,
    overdue: cats.overdue.length,
    today: cats.today.length
  };
};
//# sourceMappingURL=taskUtils.js.map