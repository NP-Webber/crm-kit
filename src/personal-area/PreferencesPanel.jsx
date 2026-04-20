// CRM KIT — PreferencesPanel: premium preferences with themed sub-sections
import React from 'react';
import { Box, Typography, CircularProgress, Collapse, Alert } from '@mui/material';
import TuneIcon from '@mui/icons-material/TuneRounded';
import PaletteIcon from '@mui/icons-material/PaletteRounded';
import TextFieldsIcon from '@mui/icons-material/TextFieldsRounded';
import SettingsCard from './SettingsCard';
import ThemeSelector from './ThemeSelector';
import InterfaceScaleSelector from './InterfaceScaleSelector';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_TRANSITIONS } from './constants';

export default function PreferencesPanel({
  siteTheme = 'default',
  siteScale = 100,
  onThemeChange,
  onScaleChange,
  saving = false,
  feedback = null, // { type, message }
  onDismissFeedback,
  children, // slot for extra preferences
}) {
  return (
    <SettingsCard
      title="העדפות"
      description="ערכת נושא, גודל תצוגה והגדרות נוספות"
      icon={<TuneIcon />}
    >
      {/* Feedback */}
      <Collapse in={!!feedback}>
        {feedback && (
          <Alert
            severity={feedback.type}
            onClose={onDismissFeedback}
            sx={{
              borderRadius: `${PA_RADIUS.sm}px`,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: '0.8125rem',
            }}
          >
            {feedback.message}
          </Alert>
        )}
      </Collapse>

      {/* Autosave indicator */}
      <Collapse in={saving}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: `${PA_SPACING.sm}px`,
          padding: '6px 12px',
            backgroundColor: PA_COLORS.accentLight,
            borderRadius: `${PA_RADIUS.sm}px`,
            transition: PA_TRANSITIONS.fast,
          }}
        >
          <CircularProgress size={14} sx={{ color: PA_COLORS.accent }} />
          <Typography
            sx={{
              ...PA_TYPOGRAPHY.caption,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: PA_COLORS.accent,
              fontWeight: 500,
            }}
          >
            שומר שינויים...
          </Typography>
        </Box>
      </Collapse>

      {/* Theme sub-section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PaletteIcon sx={{ fontSize: 16, color: PA_COLORS.textMuted }} />
          <Typography
            sx={{
              ...PA_TYPOGRAPHY.fieldLabel,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: PA_COLORS.textPrimary,
              fontWeight: 600,
            }}
          >
            ערכת נושא
          </Typography>
        </Box>
        <ThemeSelector value={siteTheme} onChange={onThemeChange} />
      </Box>

      {/* Divider */}
      <Box sx={{ height: 1, backgroundColor: PA_COLORS.divider }} />

      {/* Scale sub-section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextFieldsIcon sx={{ fontSize: 16, color: PA_COLORS.textMuted }} />
          <Typography
            sx={{
              ...PA_TYPOGRAPHY.fieldLabel,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: PA_COLORS.textPrimary,
              fontWeight: 600,
            }}
          >
            גודל ממשק
          </Typography>
        </Box>
        <InterfaceScaleSelector value={siteScale} onChange={onScaleChange} />
      </Box>

      {/* Extra preferences slot */}
      {children}
    </SettingsCard>
  );
}
