// CRM KIT — SettingsButton
// Quiet, Windows-Settings-style button. Two flavors:
//   variant="settings"      — subtle filled chip
//   variant="ghostSettings" — text-only with hover background
//
// Sized to sit cleanly inside SettingsDeckItem rows.
//
// We expose this as a thin wrapper rather than depending on theme
// variants, so it works regardless of which MUI theme the host app uses.

import React, { forwardRef } from 'react';
import { Button } from '@mui/material';
import {
  PA_COLORS,
  PA_RADIUS,
  PA_SPACING,
  PA_TRANSITIONS,
  PA_TYPOGRAPHY,
} from './constants';

const variantSx = {
  settings: {
    backgroundColor: PA_COLORS.sectionBg,
    color: PA_COLORS.textPrimary,
    border: `1px solid ${PA_COLORS.cardBorder}`,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: PA_COLORS.divider,
      borderColor: PA_COLORS.cardBorder,
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: PA_COLORS.divider,
    },
    '&.Mui-disabled': {
      backgroundColor: PA_COLORS.sectionBg,
      color: PA_COLORS.textMuted,
      borderColor: PA_COLORS.divider,
    },
  },
  ghostSettings: {
    backgroundColor: 'transparent',
    color: PA_COLORS.accent,
    border: '1px solid transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: PA_COLORS.accentLight,
      borderColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: PA_COLORS.accentSubtle,
    },
    '&.Mui-disabled': {
      color: PA_COLORS.textMuted,
    },
  },
  primarySettings: {
    backgroundColor: PA_COLORS.accent,
    color: '#fff',
    border: `1px solid ${PA_COLORS.accent}`,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: PA_COLORS.accentHover,
      borderColor: PA_COLORS.accentHover,
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: PA_COLORS.accentHover,
    },
    '&.Mui-disabled': {
      backgroundColor: PA_COLORS.accentLight,
      color: '#fff',
      opacity: 0.7,
    },
  },
};

/**
 * SettingsButton
 *
 * @param {Object} props
 * @param {'settings'|'ghostSettings'|'primarySettings'} [props.variant='settings']
 * @param {'sm'|'md'} [props.size='md']
 * @param {Object} [props.sx]
 */
const SettingsButton = forwardRef(function SettingsButton(
  { variant = 'settings', size = 'md', sx = {}, children, ...rest },
  ref
) {
  const padY = size === 'sm' ? 4 : 6;
  const padX = size === 'sm' ? PA_SPACING.md : PA_SPACING.md + 2;

  return (
    <Button
      ref={ref}
      disableRipple
      // We intentionally do NOT forward `variant` to MUI to avoid the
      // outlined/contained styles bleeding through.
      sx={{
        ...PA_TYPOGRAPHY.buttonText,
        fontFamily: PA_TYPOGRAPHY.fontFamily,
        textTransform: 'none',
        borderRadius: `${PA_RADIUS.sm}px`,
        padding: `${padY}px ${padX}px`,
        minHeight: size === 'sm' ? 28 : 34,
        minWidth: 0,
        transition: PA_TRANSITIONS.fast,
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${PA_COLORS.accent}`,
        },
        ...(variantSx[variant] || variantSx.settings),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default SettingsButton;
