import React from 'react';
import { Paper, Box, Typography, CircularProgress } from '@mui/material';

/**
 * StatCard — כרטיס סטטיסטיקה לדשבורד
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - אייקון MUI
 * @param {number|string} props.value - ערך מספרי
 * @param {string} props.label - תווית
 * @param {string} props.color - צבע (ברירת מחדל: #1565c0)
 * @param {boolean} props.loading - מצב טעינה (מציג ספינר במקום ערך)
 * @param {string} props.trend - שינוי (למשל '+12%')
 * @param {string} props.trendColor - צבע trend
 * @param {Function} props.onClick - callback ללחיצה
 */
const StatCard = ({
  icon,
  value,
  label,
  color = '#1565c0',
  loading = false,
  trend,
  trendColor,
  onClick,
  sx = {},
}) => {
  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        p: 2.5,
        borderRadius: 2.5,
        border: '1px solid #e3e8ef',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s',
        '&:hover': onClick ? {
          boxShadow: '0 4px 16px rgba(21, 101, 192, 0.1)',
          borderColor: color,
        } : {},
        ...sx,
      }}
    >
      {icon && (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            bgcolor: `${color}14`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
      )}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ color: '#1a2533', lineHeight: 1.2 }}
        >
          {loading ? <CircularProgress size={24} /> : (value ?? 0)}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          {label}
        </Typography>
        {trend && (
          <Typography
            variant="caption"
            sx={{ color: trendColor || (trend.startsWith('+') ? '#2e7d32' : '#c62828'), fontWeight: 600 }}
          >
            {trend}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default StatCard;
