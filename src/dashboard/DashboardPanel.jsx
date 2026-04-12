import React, { useState } from 'react';
import {
  Box, Typography, Paper, IconButton, Tooltip, Collapse, CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RefreshIcon from '@mui/icons-material/Refresh';

/**
 * DashboardPanel — פאנל דשבורד מתקפל עם כותרת צבעונית
 *
 * תבנית מוכנה: כותרת בצבע ראשי + אייקון + כפתורי פעולה + גוף מתקפל.
 *
 * @param {Object} props
 * @param {string} props.title - כותרת הדשבורד
 * @param {string} [props.subtitle] - כותרת משנית (למשל שם תקופה)
 * @param {React.ReactNode} [props.icon] - אייקון MUI בכותרת
 * @param {string} [props.color='primary.main'] - צבע רקע הכותרת (MUI palette)
 * @param {boolean} [props.defaultOpen=false] - האם פתוח כברירת מחדל
 * @param {boolean} [props.loading=false] - מצב טעינה
 * @param {Function} [props.onRefresh] - callback לרענון (מציג כפתור רענון)
 * @param {Array<{icon, tooltip, onClick, disabled}>} [props.actions] - כפתורי פעולה נוספים בכותרת
 * @param {Object} [props.headerSx] - סגנון נוסף לכותרת
 * @param {Object} [props.bodySx] - סגנון נוסף לגוף
 * @param {React.ReactNode} props.children - תוכן הדשבורד
 */
const DashboardPanel = ({
  title,
  subtitle,
  icon,
  color = 'primary.main',
  defaultOpen = false,
  loading = false,
  onRefresh,
  actions = [],
  headerSx = {},
  bodySx = {},
  children,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 3 }}>
      {/* ── כותרת + טוגל ── */}
      <Box
        onClick={() => setOpen((p) => !p)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: color,
          color: 'white',
          px: 2.5,
          py: 1.2,
          borderRadius: open ? '8px 8px 0 0' : 2,
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'border-radius 0.2s',
          ...headerSx,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon}
          <Typography fontWeight={700} variant="body1">
            {title}
            {subtitle ? ` — ${subtitle}` : ''}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {loading && <CircularProgress size={16} sx={{ color: 'white' }} />}

          {actions.map((action, i) => (
            <Tooltip key={i} title={action.tooltip || ''}>
              <span>
                <IconButton
                  size="small"
                  sx={{ color: 'white' }}
                  disabled={action.disabled || loading}
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick?.();
                  }}
                >
                  {action.icon}
                </IconButton>
              </span>
            </Tooltip>
          ))}

          {onRefresh && (
            <Tooltip title="רענן">
              <IconButton
                size="small"
                sx={{ color: 'white' }}
                onClick={(e) => {
                  e.stopPropagation();
                  onRefresh();
                }}
              >
                <RefreshIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}

          <ExpandMoreIcon
            sx={{
              transform: open ? 'rotate(180deg)' : 'rotate(0)',
              transition: '0.2s',
            }}
          />
        </Box>
      </Box>

      {/* ── גוף ── */}
      <Collapse in={open}>
        <Paper
          elevation={2}
          sx={{
            p: 2.5,
            borderRadius: '0 0 8px 8px',
            borderTop: 'none',
            ...bodySx,
          }}
        >
          {children}
        </Paper>
      </Collapse>
    </Box>
  );
};

export default DashboardPanel;
