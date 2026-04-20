// CRM KIT — PersonalAreaLayout: premium settings page layout
import React from 'react';
import { Box, Typography, CircularProgress, Fade } from '@mui/material';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_TRANSITIONS } from './constants';

export default function PersonalAreaLayout({
  title = 'אזור אישי',
  subtitle = 'ניהול הפרופיל, העדפות תצוגה והגדרות החשבון שלך',
  loading = false,
  children,
  sx = {},
}) {
  return (
    <Box
      dir="rtl"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: PA_COLORS.pageBg,
        fontFamily: PA_TYPOGRAPHY.fontFamily,
        ...sx,
      }}
    >
      {/* Page header */}
      <Box
        sx={{
          width: '100%',
          background: `linear-gradient(160deg, ${PA_COLORS.accent} 0%, #6366F1 50%, #818CF8 100%)`,
          padding: {
            xs: `${PA_SPACING.xl}px ${PA_SPACING.md}px ${PA_SPACING.xxl}px`,
            sm: `${PA_SPACING.xxl}px ${PA_SPACING.lg}px 56px`,
          },
        }}
      >
        <Box sx={{ maxWidth: 840, margin: '0 auto' }}>
          <Typography
            variant="h1"
            sx={{
              ...PA_TYPOGRAPHY.pageTitle,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                ...PA_TYPOGRAPHY.pageSubtitle,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                color: 'rgba(255,255,255,0.7)',
                marginTop: '6px',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Content area — overlaps header */}
      <Box
        sx={{
          maxWidth: 840,
          margin: '0 auto',
          padding: { xs: `0 ${PA_SPACING.md}px ${PA_SPACING.xl}px`, sm: `0 ${PA_SPACING.lg}px ${PA_SPACING.xl}px` },
          marginTop: { xs: '-28px', sm: '-32px' },
          position: 'relative',
        }}
      >
        {loading ? (
          <Fade in timeout={300}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 360,
                backgroundColor: PA_COLORS.cardBg,
                borderRadius: '16px',
                border: `1px solid ${PA_COLORS.cardBorder}`,
              }}
            >
              <CircularProgress size={32} thickness={3} sx={{ color: PA_COLORS.accent }} />
            </Box>
          </Fade>
        ) : (
          <Fade in timeout={400}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {children}
            </Box>
          </Fade>
        )}
      </Box>
    </Box>
  );
}
