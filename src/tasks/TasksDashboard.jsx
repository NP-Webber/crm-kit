import { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import {
  Task as TaskIcon,
  CheckCircle as CheckCircleIcon,
  PendingActions as PendingIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  FilterList as FilterIcon,
  OpenInNew as OpenInNewIcon,
  BarChart as BarChartIcon,
  Assignment as AssignmentIcon,
  Warning as WarningIcon,
  Today as TodayIcon
} from '@mui/icons-material'
import { StatCard, DashboardGrid, DashboardPanel } from '../dashboard/index.js'
import {
  getPriorityColor,
  getPriorityText,
  getTaskTypeText,
  categorizeTasksByDate,
  getTaskStats
} from './taskUtils.js'

/**
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
function TasksDashboard({
  tasks = [],
  users = [],
  isLoading = false,
  error = null,
  onUpdateStatus,
  onDeleteTask,
  onRefresh,
  onOpenClient,
  title = 'דשבורד משימות'
}) {
  const [filters, setFilters] = useState({
    status: 'pending',
    assigned_to: '',
    due_date_from: '',
    due_date_to: ''
  })

  const [deleteDialog, setDeleteDialog] = useState({ open: false, taskId: null })

  // ── סינון לוקאלי ──
  const filteredTasks = tasks.filter(t => {
    if (filters.status && t.status !== filters.status) return false
    if (filters.assigned_to && t.assigned_to !== filters.assigned_to) return false
    if (filters.due_date_from && t.due_date < filters.due_date_from) return false
    if (filters.due_date_to && t.due_date > filters.due_date_to) return false
    return true
  })

  const handleToggleStatus = (taskId, currentStatus) => {
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending'
    onUpdateStatus?.(taskId, newStatus)
  }

  const handleDeleteTask = (taskId) => {
    setDeleteDialog({ open: true, taskId })
  }

  const confirmDelete = () => {
    onDeleteTask?.(deleteDialog.taskId)
    setDeleteDialog({ open: false, taskId: null })
  }

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  // ── קטגוריות ──
  const { overdue: overdueTasks, today: todayTasks, upcoming: upcomingTasks, completed: completedTasks } =
    categorizeTasksByDate(filteredTasks)
  const stats = getTaskStats(tasks) // סטטיסטיקות על *כל* המשימות

  // ── רינדור שורת משימה ──
  const renderTaskItem = (task, bgColor) => (
    <Paper key={task.id} sx={{ mb: 1, bgcolor: bgColor }}>
      <ListItem>
        <ListItemText
          primary={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body1" sx={{
                fontWeight: 'bold',
                ...(task.status === 'completed' ? { textDecoration: 'line-through', color: 'text.secondary' } : {})
              }}>
                {task.client_name} {task.client_family}
              </Typography>
              <Chip label={getTaskTypeText(task.task_type)} size="small" color={task.status === 'completed' ? 'default' : 'primary'} variant={task.status === 'completed' ? 'outlined' : 'filled'} />
              {task.status !== 'completed' && (
                <Chip label={getPriorityText(task.priority)} size="small" color={getPriorityColor(task.priority)} />
              )}
              {task.assigned_to && task.status !== 'completed' && (
                <Chip label={`שיוך: ${task.assigned_to}`} size="small" variant="outlined" />
              )}
            </Box>
          }
          secondary={
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" sx={task.status === 'completed' ? { color: 'text.secondary' } : {}}>
                {task.description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {task.status === 'completed'
                  ? `הושלם: ${task.formatted_completed_at || ''}`
                  : `תאריך יעד: ${task.formatted_due_date || task.due_date} | נוצר על ידי: ${task.created_by_name || ''} | טלפון: ${task.client_phone || ''}`
                }
              </Typography>
            </Box>
          }
        />
        <ListItemSecondaryAction>
          {onOpenClient && (
            <IconButton edge="end" onClick={() => onOpenClient(task)} color="info" title="פתח כרטיס לקוח">
              <OpenInNewIcon />
            </IconButton>
          )}
          <IconButton edge="end" onClick={() => handleToggleStatus(task.id, task.status)} color={task.status === 'completed' ? 'default' : 'success'}>
            {task.status === 'completed' ? <PendingIcon /> : <CheckCircleIcon />}
          </IconButton>
          <IconButton edge="end" onClick={() => handleDeleteTask(task.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  )

  return (
    <Box sx={{ p: 3 }}>
      {/* כותרת */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
          <TaskIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 35 }} />
          {title}
        </Typography>
        {onRefresh && (
          <IconButton onClick={onRefresh} color="primary">
            <RefreshIcon />
          </IconButton>
        )}
      </Box>

      {/* סטטיסטיקות */}
      <DashboardPanel title="סטטיסטיקות משימות" icon={<BarChartIcon />} color="#3498db" subtitle="סיכום מצב משימות" defaultOpen>
        <DashboardGrid columns={5} sx={{ mb: 0 }}>
          <StatCard icon={<AssignmentIcon />} label="סה״כ משימות" value={stats.total} color="#3498db" />
          <StatCard icon={<PendingIcon />} label="ממתינות" value={stats.pending} color="#f39c12" />
          <StatCard icon={<WarningIcon />} label="באיחור" value={stats.overdue} color="#e74c3c" />
          <StatCard icon={<TodayIcon />} label="להיום" value={stats.today} color="#9b59b6" />
          <StatCard icon={<CheckCircleIcon />} label="הושלמו" value={stats.completed} color="#2ecc71" />
        </DashboardGrid>
      </DashboardPanel>

      {/* פילטרים */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <FilterIcon />
          <Typography variant="h6">סינון</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>סטטוס</InputLabel>
              <Select value={filters.status} label="סטטוס" onChange={(e) => handleFilterChange('status', e.target.value)}>
                <MenuItem value="">הכל</MenuItem>
                <MenuItem value="pending">ממתינות</MenuItem>
                <MenuItem value="completed">הושלמו</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>למי</InputLabel>
              <Select value={filters.assigned_to} label="למי" onChange={(e) => handleFilterChange('assigned_to', e.target.value)}>
                <MenuItem value="">הכל</MenuItem>
                {users.map(user => (
                  <MenuItem key={user.username} value={user.username}>
                    {user.username}{user.role ? ` (${user.role})` : ''}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth size="small" type="date" label="מתאריך" value={filters.due_date_from} onChange={(e) => handleFilterChange('due_date_from', e.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth size="small" type="date" label="עד תאריך" value={filters.due_date_to} onChange={(e) => handleFilterChange('due_date_to', e.target.value)} InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
      </Paper>

      {/* תוכן */}
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress size={60} />
        </Box>
      ) : error ? (
        <Alert severity="error">שגיאה בטעינת משימות</Alert>
      ) : filteredTasks.length === 0 ? (
        <Paper sx={{ p: 5, textAlign: 'center', bgcolor: '#f5f5f5' }}>
          <Typography variant="h6" color="text.secondary">אין משימות להצגה</Typography>
        </Paper>
      ) : (
        <Box>
          {/* משימות באיחור */}
          {overdueTasks.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#e74c3c', fontWeight: 'bold' }}>
                משימות באיחור ({overdueTasks.length})
              </Typography>
              <List>{overdueTasks.map(t => renderTaskItem(t, '#ffe6e6'))}</List>
            </Box>
          )}

          {/* משימות להיום */}
          {todayTasks.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#9b59b6', fontWeight: 'bold' }}>
                משימות להיום ({todayTasks.length})
              </Typography>
              <List>{todayTasks.map(t => renderTaskItem(t, '#f3e5f5'))}</List>
            </Box>
          )}

          {/* משימות עתידיות */}
          {upcomingTasks.length > 0 && filters.status !== 'completed' && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#f39c12', fontWeight: 'bold' }}>
                משימות עתידיות ({upcomingTasks.length})
              </Typography>
              <List>{upcomingTasks.map(t => renderTaskItem(t))}</List>
            </Box>
          )}

          {/* משימות שהושלמו */}
          {completedTasks.length > 0 && filters.status === 'completed' && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#2ecc71', fontWeight: 'bold' }}>
                משימות שהושלמו ({completedTasks.length})
              </Typography>
              <List>{completedTasks.map(t => renderTaskItem(t, '#e8f5e9'))}</List>
            </Box>
          )}
        </Box>
      )}

      {/* דיאלוג מחיקה */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, taskId: null })}>
        <DialogTitle>אישור מחיקה</DialogTitle>
        <DialogContent>
          <Typography>האם אתה בטוח שברצונך למחוק את המשימה?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, taskId: null })}>ביטול</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">מחק</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default TasksDashboard
