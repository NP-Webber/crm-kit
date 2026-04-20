// CRM KIT — ThemeSelector: premium visual theme picker with rich previews
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircleRounded';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_SHADOWS, PA_TRANSITIONS, SITE_THEMES } from './constants';

export default function ThemeSelector({ value = 'default', onChange }) {
  const themes = Object.values(SITE_THEMES);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
        gap: '14px',
      }}
    >
      {themes.map((theme) => {
        const isSelected = value === theme.id;
        return (
          <Box
            key={theme.id}
            onClick={() => onChange?.(theme.id)}
            role="button"
            tabIndex={0}
            aria-label={theme.label}
            aria-pressed={isSelected}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange?.(theme.id); } }}
            sx={{
              cursor: 'pointer',
              borderRadius: `${PA_RADIUS.lg}px`,
              border: `1.5px solid ${isSelected ? PA_COLORS.accent : PA_COLORS.cardBorder}`,
              overflow: 'hidden',
              transition: PA_TRANSITIONS.normal,
              position: 'relative',
              outline: 'none',
              '&:hover': {
                borderColor: isSelected ? PA_COLORS.accent : PA_COLORS.textMuted,
                transform: 'translateY(-1px)',
                boxShadow: PA_SHADOWS.card,
              },
              '&:focus-visible': {
                outline: `2px solid ${PA_COLORS.accent}`,
                outlineOffset: 2,
              },
            }}
          >
            {/* Rich preview area */}
            <Box
              sx={{
                height: 64,
                backgroundColor: theme.preview.bg,
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                position: 'relative',
              }}
            >
              {/* Mock UI elements */}
              <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: theme.preview.primary,
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: theme.preview.text,
                    opacity: 0.15,
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '4px' }}>
                <Box
                  sx={{
                    width: '55%',
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: theme.preview.surface,
                    border: `1px solid ${theme.preview.text}15`,
                  }}
                />
                <Box
                  sx={{
                    width: '35%',
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: theme.preview.primary,
                    opacity: 0.2,
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: '4px' }}>
                <Box
                  sx={{
                    width: '40%',
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: theme.preview.text,
                    opacity: 0.1,
                  }}
                />
                <Box
                  sx={{
                    width: '25%',
                    height: 5,
                    borderRadius: 3,
                    backgroundColor: theme.preview.secondary,
                    opacity: 0.25,
                  }}
                />
              </Box>

              {/* Color dots indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 6,
                  left: 8,
                  display: 'flex',
                  gap: '3px',
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme.preview.primary }} />
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme.preview.secondary, opacity: 0.6 }} />
              </Box>
            </Box>

            {/* Label section */}
            <Box
              sx={{
                padding: `8px ${PA_SPACING.md}px`,
                backgroundColor: isSelected ? PA_COLORS.accentLight : '#fff',
                transition: PA_TRANSITIONS.fast,
              }}
            >
              <Typography
                sx={{
                  ...PA_TYPOGRAPHY.fieldLabel,
                  fontFamily: PA_TYPOGRAPHY.fontFamily,
                  color: isSelected ? PA_COLORS.accent : PA_COLORS.textPrimary,
                  textAlign: 'center',
                  fontWeight: isSelected ? 600 : 500,
                  fontSize: '0.75rem',
                }}
              >
                {theme.label}
              </Typography>
            </Box>

            {/* Selected checkmark */}
            {isSelected && (
              <CheckCircleIcon
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontSize: 18,
                  color: PA_COLORS.accent,
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
