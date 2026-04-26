// CRM KIT — SettingsDeck
// Container that lays out a vertical stack of SettingsDeckItem cards
// in the spirit of the Windows 11 Settings app.
//
// Tokens come from `personal-area/constants` so the look stays in
// sync with the rest of the personal-area surface.

import React from 'react';
import { Box } from '@mui/material';
import { PA_SPACING } from './constants';

/**
 * SettingsDeck
 *
 * @param {Object}  props
 * @param {React.ReactNode} props.children   - SettingsDeckItem nodes
 * @param {number}  [props.gap=PA_SPACING.md] - vertical gap between items (px)
 * @param {number}  [props.maxWidth=880]      - max width of the deck (px). Pass `null` for full width.
 * @param {string}  [props.role='list']       - ARIA role for the container
 * @param {string}  [props.ariaLabel]
 * @param {Object}  [props.sx]
 */
export default function SettingsDeck({
  children,
  gap = PA_SPACING.md,
  maxWidth = 880,
  role = 'list',
  ariaLabel,
  sx = {},
}) {
  return (
    <Box
      role={role}
      aria-label={ariaLabel}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: `${gap}px`,
        width: '100%',
        maxWidth: maxWidth ? `${maxWidth}px` : '100%',
        marginInline: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
