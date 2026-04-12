// ═══════════════════════════════════════════════
//  Task Utilities — פונקציות עזר למשימות
// ═══════════════════════════════════════════════

/**
 * מחזיר צבע MUI לפי עדיפות
 */
export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'urgent':
      return 'error'
    case 'high':
      return 'warning'
    case 'normal':
      return 'info'
    case 'low':
      return 'default'
    default:
      return 'default'
  }
}

/**
 * מחזיר טקסט עברי לעדיפות
 */
export const getPriorityText = (priority) => {
  const texts = {
    urgent: 'דחוף',
    high: 'גבוה',
    normal: 'רגיל',
    low: 'נמוך'
  }
  return texts[priority] || priority
}

/**
 * מחזיר טקסט עברי לסוג משימה
 */
export const getTaskTypeText = (type) => {
  const types = {
    callback: 'חזרה ללקוח',
    meeting: 'פגישה',
    followup: 'מעקב',
    email: 'שליחת מייל',
    document: 'הכנת מסמך',
    other: 'אחר'
  }
  return types[type] || type
}

/**
 * מחזיר תאריך מהיר (היום / מחר / עוד שבוע)
 */
export const getQuickDate = (type) => {
  const today = new Date()
  switch (type) {
    case 'today':
      return today.toISOString().split('T')[0]
    case 'tomorrow': {
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      return tomorrow.toISOString().split('T')[0]
    }
    case 'week': {
      const week = new Date(today)
      week.setDate(week.getDate() + 7)
      return week.toISOString().split('T')[0]
    }
    default:
      return today.toISOString().split('T')[0]
  }
}

/**
 * מחלק מערך משימות לקטגוריות לפי תאריך יעד
 */
export const categorizeTasksByDate = (tasks) => {
  const today = new Date().toISOString().split('T')[0]
  return {
    overdue: tasks.filter(t => t.due_date < today && t.status === 'pending'),
    today: tasks.filter(t => t.due_date === today && t.status === 'pending'),
    upcoming: tasks.filter(t => t.due_date > today && t.status === 'pending'),
    completed: tasks.filter(t => t.status === 'completed'),
  }
}

/**
 * מחשב סטטיסטיקות על מערך משימות
 */
export const getTaskStats = (tasks) => {
  const cats = categorizeTasksByDate(tasks)
  return {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    completed: cats.completed.length,
    overdue: cats.overdue.length,
    today: cats.today.length,
  }
}
