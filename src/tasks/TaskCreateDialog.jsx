import { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'
import { getQuickDate } from './taskUtils.js'

/**
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
function TaskCreateDialog({
  open,
  onClose,
  onSubmit,
  taskTypes = [],
  users = [],
  defaultAssignedTo = '',
  isSubmitting = false,
  title = 'יצירת משימה חדשה'
}) {
  const defaultTask = {
    task_type: 'callback',
    custom_task_type: '',
    assigned_to: defaultAssignedTo,
    assigned_type: 'user',
    due_date: new Date().toISOString().split('T')[0],
    description: '',
    priority: 'normal'
  }

  const [newTask, setNewTask] = useState(defaultTask)

  const handleClose = () => {
    setNewTask({ ...defaultTask, assigned_to: defaultAssignedTo })
    onClose?.()
  }

  const handleSubmit = () => {
    const taskData = { ...newTask }
    if (taskData.task_type === 'other' && taskData.custom_task_type) {
      taskData.task_type = taskData.custom_task_type
    }
    taskData.assigned_type = 'user'
    onSubmit?.(taskData)
    handleClose()
  }

  // ── סוגי משימות ברירת מחדל אם לא סופקו ──
  const defaultTaskTypes = [
    { id: 1, name: 'callback', description: 'חזרה ללקוח' },
    { id: 2, name: 'meeting', description: 'פגישה' },
    { id: 3, name: 'followup', description: 'מעקב' },
    { id: 4, name: 'email', description: 'שליחת מייל' },
    { id: 5, name: 'document', description: 'הכנת מסמך' },
    { id: 6, name: 'other', description: 'אחר' },
  ]
  const types = taskTypes.length > 0 ? taskTypes : defaultTaskTypes

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>סוג משימה</InputLabel>
            <Select
              value={newTask.task_type}
              label="סוג משימה"
              onChange={(e) => setNewTask({ ...newTask, task_type: e.target.value })}
            >
              {types.map((type) => (
                <MenuItem key={type.id} value={type.name}>
                  {type.description || type.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {newTask.task_type === 'other' && (
            <TextField
              fullWidth
              label="פרט את סוג המשימה"
              value={newTask.custom_task_type}
              onChange={(e) => setNewTask({ ...newTask, custom_task_type: e.target.value })}
              placeholder="לדוגמה: פגישה עם לקוח"
            />
          )}

          <FormControl fullWidth>
            <InputLabel>עדיפות</InputLabel>
            <Select
              value={newTask.priority}
              label="עדיפות"
              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
            >
              <MenuItem value="low">נמוכה</MenuItem>
              <MenuItem value="normal">רגילה</MenuItem>
              <MenuItem value="high">גבוהה</MenuItem>
              <MenuItem value="urgent">דחופה</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>שיוך למשתמש</InputLabel>
            <Select
              value={newTask.assigned_to}
              label="שיוך למשתמש"
              onChange={(e) => setNewTask({ ...newTask, assigned_to: e.target.value })}
            >
              <MenuItem value="">
                <em>— ללא שיוך —</em>
              </MenuItem>
              {users.map(user => (
                <MenuItem key={user.username} value={user.username}>
                  {user.username}{user.role ? ` (${user.role})` : ''}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>תאריך יעד</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Button size="small" variant="outlined" onClick={() => setNewTask({ ...newTask, due_date: getQuickDate('today') })}>
                היום
              </Button>
              <Button size="small" variant="outlined" onClick={() => setNewTask({ ...newTask, due_date: getQuickDate('tomorrow') })}>
                מחר
              </Button>
              <Button size="small" variant="outlined" onClick={() => setNewTask({ ...newTask, due_date: getQuickDate('week') })}>
                עוד שבוע
              </Button>
            </Box>
            <TextField
              fullWidth
              type="date"
              value={newTask.due_date}
              onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          <TextField
            fullWidth
            label="תיאור המשימה"
            multiline
            rows={4}
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>ביטול</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isSubmitting || !newTask.description}
        >
          {isSubmitting ? 'יוצר...' : 'צור משימה'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TaskCreateDialog
