// CRM KIT — InterfaceScaleSelector: premium segmented scale control
import React from 'react';
import { Box, Typography } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFieldsRounded';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_SHADOWS, PA_TRANSITIONS, SITE_SCALES } from './constants';

export default function InterfaceScaleSelector({ value = 100, onChange }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Segmented control */}
      <Box
        sx={{
          display: 'inline-flex',
          backgroundColor: PA_COLORS.sectionBg,
          borderRadius: `${PA_RADIUS.md}px`,
          padding: '4px',
          border: `1px solid ${PA_COLORS.divider}`,
          gap: '4px',
          alignSelf: 'flex-start',
        }}
      >
        {SITE_SCALES.map((scale) => {
          const isSelected = value === scale.value;
          return (
            <Box
              key={scale.value}
              onClick={() => onChange?.(scale.value)}
              role="button"
              tabIndex={0}
              aria-label={`גודל ${scale.label}`}
              aria-pressed={isSelected}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange?.(scale.value); } }}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: `${PA_RADIUS.sm}px`,
                backgroundColor: isSelected ? PA_COLORS.cardBg : 'transparent',
                boxShadow: isSelected ? PA_SHADOWS.card : 'none',
                color: isSelected ? PA_COLORS.accent : PA_COLORS.textSecondary,
                transition: PA_TRANSITIONS.fast,
                outline: 'none',
                minWidth: 72,
                '&:hover': {
                  backgroundColor: isSelected ? PA_COLORS.cardBg : 'rgba(0,0,0,0.03)',
                  color: isSelected ? PA_COLORS.accent : PA_COLORS.textPrimary,
                },
                '&:focus-visible': {
                  outline: `2px solid ${PA_COLORS.accent}`,
                  outlineOffset: -2,
                },
              }}
            >
              <TextFieldsIcon
                sx={{
                  fontSize: 14 * (scale.value / 100),
                  color: 'inherit',
                  transition: PA_TRANSITIONS.fast,
                }}
              />
              <Typography
                sx={{
                  fontFamily: PA_TYPOGRAPHY.fontFamily,
                  fontSize: '0.8125rem',
                  fontWeight: isSelected ? 600 : 500,
                  color: 'inherit',
                  lineHeight: 1,
                }}
              >
                {scale.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Live preview */}
      <Box
        sx={{
          padding: '12px 16px',
          backgroundColor: PA_COLORS.sectionBg,
          borderRadius: `${PA_RADIUS.md}px`,
          border: `1px solid ${PA_COLORS.divider}`,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: `${PA_RADIUS.sm}px`,
            backgroundColor: PA_COLORS.accentLight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <TextFieldsIcon sx={{ fontSize: 18, color: PA_COLORS.accent }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: `${0.875 * (value / 100)}rem`,
              color: PA_COLORS.textPrimary,
              fontWeight: 500,
              transition: PA_TRANSITIONS.smooth,
            }}
          >
            תצוגה מקדימה — {value}%
          </Typography>
          <Typography
            sx={{
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: `${0.75 * (value / 100)}rem`,
              color: PA_COLORS.textMuted,
              marginTop: '2px',
              transition: PA_TRANSITIONS.smooth,
            }}
          >
            כך ייראה הטקסט בממשק
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
