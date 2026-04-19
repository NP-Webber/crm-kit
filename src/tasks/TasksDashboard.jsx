import { useState, useMemo } from 'react'
import {
  Box,
  Chip,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Undo as UndoIcon,
  Assignment as AssignmentIcon,
  HourglassEmpty as HourglassIcon,
  Warning as WarningIcon,
  PriorityHigh as PriorityHighIcon,
  TaskAlt as TaskAltIcon
} from '@mui/icons-material'
import { TableKit } from '../tablekit/index.js'
import { StatCard, DashboardGrid, DashboardPanel } from '../dashboard/index.js'
import { getPriorityColor, getPriorityText } from './taskUtils.js'

/**
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
function TasksDashboard({
  tasks = [],
  users = [],
  taskTypes = [],
  isLoading = false,
  error = null,
  onUpdateStatus,
  onUpdateTask,
  onDeleteTask,
  onOpenClient,
  title = 'ניהול משימות'
}) {
  const [activeFilter, setActiveFilter] = useState(null)
  const [editDialog, setEditDialog] = useState({ open: false, task: null })
  const [deleteDialog, setDeleteDialog] = useState({ open: false, taskId: null })
  const [editForm, setEditForm] = useState({})

  // סטטיסטיקות
  const stats = useMemo(() => {
    if (!Array.isArray(tasks)) return { total: 0, pending: 0, completed: 0, overdue: 0, highPriority: 0 }
    const today = new Date().toISOString().split('T')[0]
    return {
      total: tasks.length,
      pending: tasks.filter(t => t.status === 'pending').length,
      completed: tasks.filter(t => t.status === 'completed').length,
      overdue: tasks.filter(t => t.status === 'pending' && t.due_date && t.due_date.split('T')[0] < today).length,
      highPriority: tasks.filter(t => t.status === 'pending' && t.priority === 'high').length
    }
  }, [tasks])

  // סינון לפי כרטיס פעיל
  const filteredTasks = useMemo(() => {
    if (!Array.isArray(tasks)) return []
    const today = new Date().toISOString().split('T')[0]
    switch (activeFilter) {
      case 'pending':      return tasks.filter(t => t.status === 'pending')
      case 'completed':    return tasks.filter(t => t.status === 'completed')
      case 'overdue':      return tasks.filter(t => t.status === 'pending' && t.due_date && t.due_date.split('T')[0] < today)
      case 'highPriority': return tasks.filter(t => t.status === 'pending' && t.priority === 'high')
      default:             return tasks
    }
  }, [tasks, activeFilter])

  const handleCardFilter = (key) => setActiveFilter(prev => prev === key ? null : key)

  const handleToggleStatus = (task) => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending'
    onUpdateStatus?.(task.id, newStatus)
  }

  const handleOpenEdit = (task) => {
    setEditForm({
      task_type:   task.task_type   || '',
      description: task.description || '',
      assigned_to: task.assigned_to || '',
      due_date:    task.due_date ? task.due_date.split('T')[0] : '',
      priority:    task.priority    || 'normal',
      status:      task.status      || 'pending'
    })
    setEditDialog({ open: true, task })
  }

  const handleSaveEdit = () => {
    if (!editDialog.task) return
    onUpdateTask?.(editDialog.task.id, editForm)
    setEditDialog({ open: false, task: null })
  }

  const handleConfirmDelete = () => {
    if (!deleteDialog.taskId) return
    onDeleteTask?.(deleteDialog.taskId)
    setDeleteDialog({ open: false, taskId: null })
  }

  const getPriorityLabel    = (p) => getPriorityText(p)  || p || 'רגיל'
  const getPriorityChipColor = (p) => getPriorityColor(p) || 'default'

  const getStatusLabel = (s) => s === 'pending' ? 'ממתין' : s === 'completed' ? 'הושלם' : s

  const getTaskTypeLabel = (type) => {
    const found = taskTypes.find(t => t.name === type)
    return found ? (found.description || found.name) : (type || '-')
  }

  const isOverdue = (task) => {
    if (task.status === 'completed') return false
    const today = new Date().toISOString().split('T')[0]
    return task.due_date && task.due_date.split('T')[0] < today
  }

  const columns = [
    { key: 'id', title: '#', width: '60px', sortable: true },
    {
      key: 'client_name',
      title: 'לקוח',
      width: '140px',
      sortable: true,
      filterable: true,
      render: (val, row) => {
        const fullName = [row.client_name, row.client_family].filter(Boolean).join(' ')
        return (
          <Typography
            variant="body2"
            sx={{ cursor: row.client_id ? 'pointer' : 'default', color: row.client_id ? 'primary.main' : 'text.primary', '&:hover': row.client_id ? { textDecoration: 'underline' } : {} }}
            onClick={(e) => { e.stopPropagation(); onOpenClient?.(row) }}
          >
            {fullName || '-'}
          </Typography>
        )
      }
    },
    {
      key: 'task_type',
      title: 'סוג משימה',
      width: '120px',
      sortable: true,
      filterable: true,
      render: (val) => <Chip label={getTaskTypeLabel(val)} size="small" color="primary" variant="outlined" />
    },
    { key: 'description', title: 'תיאור', width: '200px', filterable: true },
    {
      key: 'assigned_to',
      title: 'שיוך',
      width: '100px',
      sortable: true,
      filterable: true,
      render: (val) => val === 'all' ? 'כולם' : (val || '-')
    },
    {
      key: 'priority',
      title: 'עדיפות',
      width: '90px',
      sortable: true,
      filterable: true,
      render: (val) => <Chip label={getPriorityLabel(val)} size="small" color={getPriorityChipColor(val)} />
    },
    {
      key: 'formatted_due_date',
      title: 'תאריך יעד',
      width: '110px',
      sortable: true,
      render: (val, row) => (
        <Typography variant="body2" sx={{ color: isOverdue(row) ? 'error.main' : 'text.primary', fontWeight: isOverdue(row) ? 'bold' : 'normal' }}>
          {val || '-'}
        </Typography>
      )
    },
    {
      key: 'status',
      title: 'סטטוס',
      width: '100px',
      sortable: true,
      filterable: true,
      render: (val) => (
        <Chip label={getStatusLabel(val)} size="small" color={val === 'completed' ? 'success' : 'warning'} />
      )
    },
    {
      key: 'created_by_name',
      title: 'נוצר ע"י',
      width: '100px',
      sortable: true,
      filterable: true,
      render: (val) => val || '-'
    },
    {
      key: 'actions',
      title: 'פעולות',
      width: '130px',
      render: (_, row) => (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Tooltip title={row.status === 'pending' ? 'סמן כהושלם' : 'החזר לממתין'}>
            <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleToggleStatus(row) }} color={row.status === 'pending' ? 'success' : 'default'}>
              {row.status === 'pending' ? <CheckCircleIcon fontSize="small" /> : <UndoIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="ערוך">
            <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleOpenEdit(row) }} color="primary">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="מחק">
            <IconButton size="small" onClick={(e) => { e.stopPropagation(); setDeleteDialog({ open: true, taskId: row.id }) }} color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ]

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>
  if (error)     return <Alert severity="error">שגיאה בטעינת משימות</Alert>

  return (
    <Box>
      {/* כרטיסי סטטיסטיקה */}
      <DashboardPanel title="סיכום משימות" defaultOpen={true}>
        <DashboardGrid columns={5} gap={2}>
          <StatCard
            icon={<AssignmentIcon />}
            label='סה״כ משימות'
            value={stats.total}
            color="#1976d2"
            onClick={() => handleCardFilter(null)}
            sx={activeFilter === null ? { outline: '2px solid #1976d2', borderColor: '#1976d2' } : {}}
          />
          <StatCard
            icon={<HourglassIcon />}
            label="ממתינות"
            value={stats.pending}
            color="#ed6c02"
            onClick={() => handleCardFilter('pending')}
            sx={activeFilter === 'pending' ? { outline: '2px solid #ed6c02', borderColor: '#ed6c02' } : {}}
          />
          <StatCard
            icon={<TaskAltIcon />}
            label="הושלמו"
            value={stats.completed}
            color="#2e7d32"
            onClick={() => handleCardFilter('completed')}
            sx={activeFilter === 'completed' ? { outline: '2px solid #2e7d32', borderColor: '#2e7d32' } : {}}
          />
          <StatCard
            icon={<WarningIcon />}
            label="באיחור"
            value={stats.overdue}
            color="#d32f2f"
            onClick={() => handleCardFilter('overdue')}
            sx={activeFilter === 'overdue' ? { outline: '2px solid #d32f2f', borderColor: '#d32f2f' } : {}}
          />
          <StatCard
            icon={<PriorityHighIcon />}
            label="עדיפות גבוהה"
            value={stats.highPriority}
            color="#9c27b0"
            onClick={() => handleCardFilter('highPriority')}
            sx={activeFilter === 'highPriority' ? { outline: '2px solid #9c27b0', borderColor: '#9c27b0' } : {}}
          />
        </DashboardGrid>
      </DashboardPanel>

      {/* טבלת משימות */}
      <Box sx={{ mt: 2 }}>
        <TableKit
          data={filteredTasks}
          columns={columns}
          clientSideMode={true}
          urlSync={false}
          title={title}
          showColumnPicker={true}
          showExport={true}
          showFilters={true}
          onRowDoubleClick={(row) => {
            if (row.client_id && onOpenClient) {
              onOpenClient(row)
            } else {
              handleOpenEdit(row)
            }
          }}
        />
      </Box>

      {/* דיאלוג עריכת משימה */}
      <Dialog open={editDialog.open} onClose={() => setEditDialog({ open: false, task: null })} maxWidth="sm" fullWidth>
        <DialogTitle>עריכת משימה</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="תיאור"
              value={editForm.description || ''}
              onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
              fullWidth multiline rows={2}
            />
            <FormControl fullWidth>
              <InputLabel>סוג משימה</InputLabel>
              <Select
                value={editForm.task_type || ''}
                onChange={(e) => setEditForm(prev => ({ ...prev, task_type: e.target.value }))}
                label="סוג משימה"
              >
                {taskTypes.map(t => (
                  <MenuItem key={t.name} value={t.name}>{t.description || t.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>שיוך לנציג</InputLabel>
              <Select
                value={editForm.assigned_to || ''}
                onChange={(e) => setEditForm(prev => ({ ...prev, assigned_to: e.target.value }))}
                label="שיוך לנציג"
              >
                <MenuItem value="all">כולם</MenuItem>
                {users.map(u => (
                  <MenuItem key={u.username} value={u.username}>{u.display_name || u.username}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="תאריך יעד"
              type="date"
              value={editForm.due_date || ''}
              onChange={(e) => setEditForm(prev => ({ ...prev, due_date: e.target.value }))}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth>
              <InputLabel>עדיפות</InputLabel>
              <Select
                value={editForm.priority || 'normal'}
                onChange={(e) => setEditForm(prev => ({ ...prev, priority: e.target.value }))}
                label="עדיפות"
              >
                <MenuItem value="low">נמוכה</MenuItem>
                <MenuItem value="normal">רגילה</MenuItem>
                <MenuItem value="high">גבוהה</MenuItem>
                <MenuItem value="urgent">דחופה</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>סטטוס</InputLabel>
              <Select
                value={editForm.status || 'pending'}
                onChange={(e) => setEditForm(prev => ({ ...prev, status: e.target.value }))}
                label="סטטוס"
              >
                <MenuItem value="pending">ממתין</MenuItem>
                <MenuItem value="completed">הושלם</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialog({ open: false, task: null })}>ביטול</Button>
          <Button onClick={handleSaveEdit} variant="contained" color="primary">שמור</Button>
        </DialogActions>
      </Dialog>

      {/* דיאלוג מחיקה */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, taskId: null })}>
        <DialogTitle>אישור מחיקה</DialogTitle>
        <DialogContent>
          <Typography>האם אתה בטוח שברצונך למחוק את המשימה?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, taskId: null })}>ביטול</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">מחק</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default TasksDashboard
