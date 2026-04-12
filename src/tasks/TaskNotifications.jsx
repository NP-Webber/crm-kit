import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Badge,
  Box,
  Typography,
  IconButton
} from '@mui/material'
import { Notifications as NotificationsIcon } from '@mui/icons-material'

/**
 * TaskNotifications — פעמון התראות + דיאלוג משימות פתוחות
 *
 * @param {Object}   props
 * @param {Array}    props.tasks              — מערך משימות פתוחות (pending)
 * @param {Function} [props.onNavigateToTasks] — ניווט לעמוד משימות
 * @param {string}   [props.navigateLabel]    — טקסט כפתור ניווט
 */
function TaskNotifications({
  tasks = [],
  onNavigateToTasks,
  navigateLabel = 'עבור למשימות'
}) {
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertShown, setAlertShown] = useState(false)

  useEffect(() => {
    if (!alertShown && tasks.length > 0) {
      setAlertOpen(true)
      setAlertShown(true)
    }
  }, [tasks, alertShown])

  const today = new Date().toISOString().split('T')[0]
  const hasOverdue = tasks.some(t => new Date(t.due_date) < new Date(today))

  return (
    <>
      {/* פעמון התראות */}
      <IconButton
        onClick={() => setAlertOpen(true)}
        sx={{
          position: 'fixed',
          top: 10,
          left: 16,
          zIndex: 1201,
          bgcolor: hasOverdue && tasks.length > 0 ? 'rgba(231,76,60,0.1)' : 'transparent',
          '&:hover': {
            bgcolor: hasOverdue && tasks.length > 0 ? 'rgba(231,76,60,0.2)' : 'rgba(0,0,0,0.04)',
          },
          animation: tasks.length > 0 && !alertShown ? 'bellRing 0.5s ease-in-out' : 'none',
          '@keyframes bellRing': {
            '0%': { transform: 'rotate(0)' },
            '25%': { transform: 'rotate(15deg)' },
            '50%': { transform: 'rotate(-15deg)' },
            '75%': { transform: 'rotate(10deg)' },
            '100%': { transform: 'rotate(0)' },
          }
        }}
      >
        <Badge
          badgeContent={tasks.length}
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              fontWeight: 700,
              fontSize: '0.75rem',
              minWidth: 20,
              height: 20,
            }
          }}
        >
          <NotificationsIcon sx={{ fontSize: 26, color: tasks.length > 0 ? '#e74c3c' : '#666' }} />
        </Badge>
      </IconButton>

      {/* דיאלוג התראת משימות */}
      <Dialog open={alertOpen} onClose={() => setAlertOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            bgcolor: hasOverdue ? '#e74c3c' : tasks.length > 0 ? '#9b59b6' : '#2196f3',
            color: 'white',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <NotificationsIcon />
          {tasks.length > 0
            ? `יש לך ${tasks.length} משימות פתוחות!`
            : 'אין משימות פתוחות'}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          {tasks.length === 0 ? (
            <Typography color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
              אין משימות פתוחות כרגע
            </Typography>
          ) : (
            <List>
              {tasks.map((task) => {
                const isOverdue = new Date(task.due_date) < new Date(today)
                return (
                  <ListItem
                    key={task.id}
                    divider
                    sx={{
                      bgcolor: isOverdue ? 'rgba(231,76,60,0.05)' : 'transparent',
                      borderRadius: 1,
                    }}
                  >
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography fontWeight="bold">
                            {task.client_name} {task.client_family}
                          </Typography>
                          {isOverdue && (
                            <Chip label="באיחור" size="small" color="error" />
                          )}
                        </Box>
                      }
                      secondary={`${task.description || ''} | תאריך יעד: ${task.formatted_due_date || task.due_date}`}
                    />
                  </ListItem>
                )
              })}
            </List>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {onNavigateToTasks && (
            <Button
              onClick={() => {
                setAlertOpen(false)
                onNavigateToTasks()
              }}
              variant="contained"
            >
              {navigateLabel}
            </Button>
          )}
          <Button onClick={() => setAlertOpen(false)} variant="outlined">סגור</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TaskNotifications
