// CRM KIT — FieldRow: refined label/value row for settings forms
import React from 'react';
import { Box, Typography } from '@mui/material';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY } from './constants';

export default function FieldRow({ label, children, direction = 'column', sx = {} }) {
  const isRow = direction === 'row';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isRow ? 'row' : 'column',
        alignItems: isRow ? 'center' : 'stretch',
        gap: isRow ? '12px' : '5px',
        ...sx,
      }}
    >
      {label && (
        <Typography
          component="label"
          sx={{
            ...PA_TYPOGRAPHY.fieldLabel,
            fontFamily: PA_TYPOGRAPHY.fontFamily,
            color: PA_COLORS.textSecondary,
            minWidth: isRow ? 120 : 'auto',
            flexShrink: 0,
          }}
        >
          {label}
        </Typography>
      )}
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  );
}
