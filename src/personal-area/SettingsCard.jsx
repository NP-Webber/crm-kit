// CRM KIT — SettingsCard: premium card wrapper for settings sections
import React from 'react';
import { Box, Typography } from '@mui/material';
import { PA_COLORS, PA_RADIUS, PA_SPACING, PA_TYPOGRAPHY, PA_SHADOWS, PA_TRANSITIONS } from './constants';

export default function SettingsCard({
  title,
  description,
  icon,
  children,
  variant = 'default', // 'default' | 'admin'
  noPadding = false,
  sx = {},
}) {
  const isAdmin = variant === 'admin';

  return (
    <Box
      sx={{
        backgroundColor: isAdmin ? PA_COLORS.adminBg : PA_COLORS.cardBg,
        border: `1px solid ${isAdmin ? PA_COLORS.adminBorder : PA_COLORS.cardBorder}`,
        borderRadius: `${PA_RADIUS.xl}px`,
        boxShadow: PA_SHADOWS.card,
        padding: noPadding ? 0 : { xs: `20px`, sm: `28px` },
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: PA_TRANSITIONS.normal,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {(title || description) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: `${PA_SPACING.md}px`,
            padding: noPadding ? '28px 28px 0' : 0,
          }}
        >
          {icon && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: `${PA_RADIUS.md}px`,
                backgroundColor: isAdmin ? 'rgba(234,88,12,0.06)' : PA_COLORS.accentLight,
                color: isAdmin ? PA_COLORS.adminAccent : PA_COLORS.accent,
                flexShrink: 0,
                '& .MuiSvgIcon-root': { fontSize: 20 },
              }}
            >
              {icon}
            </Box>
          )}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {title && (
              <Typography
                sx={{
                  ...PA_TYPOGRAPHY.sectionTitle,
                  fontFamily: PA_TYPOGRAPHY.fontFamily,
                  color: isAdmin ? PA_COLORS.adminAccent : PA_COLORS.textPrimary,
                  margin: 0,
                }}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                sx={{
                  ...PA_TYPOGRAPHY.sectionDesc,
                  fontFamily: PA_TYPOGRAPHY.fontFamily,
                  color: PA_COLORS.textMuted,
                  marginTop: '2px',
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </Box>
      )}
      {children}
    </Box>
  );
}
