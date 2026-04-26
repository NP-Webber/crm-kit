// CRM KIT — SettingsDeckItem
// A single collapsible "deck card" used inside a SettingsDeck.
// Visual language: Windows 11 Settings — quiet card, soft border,
// header is the click/keyboard target, body opens with a smooth
// Collapse animation. All styling pulled from PA_* design tokens.

import React, { useId, useState, useCallback, useMemo } from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  PA_COLORS,
  PA_RADIUS,
  PA_SPACING,
  PA_SHADOWS,
  PA_TYPOGRAPHY,
  PA_TRANSITIONS,
} from './constants';

/**
 * SettingsDeckItem
 *
 * Controlled / uncontrolled collapsible settings card.
 *
 * @param {Object}  props
 * @param {React.ReactNode} props.title           - main title (string or node)
 * @param {React.ReactNode} [props.description]   - small helper text under title
 * @param {React.ReactNode} [props.icon]          - leading icon
 * @param {React.ReactNode} [props.adornment]     - extra node rendered on the trailing
 *                                                  side of the header (badge, switch summary, etc.)
 * @param {boolean} [props.defaultOpen=false]
 * @param {boolean} [props.isOpen]                - controlled open state
 * @param {(next:boolean)=>void} [props.onOpenChange]
 * @param {boolean} [props.hasError=false]
 * @param {React.ReactNode} [props.error]         - error message rendered in header strip
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.dense=false]           - tighter padding
 * @param {string}  [props.id]                    - id for the item (used for ARIA wiring)
 * @param {Object}  [props.sx]
 * @param {Object}  [props.headerSx]
 * @param {Object}  [props.bodySx]
 * @param {React.ReactNode} props.children
 */
export default function SettingsDeckItem({
  title,
  description,
  icon,
  adornment,
  defaultOpen = false,
  isOpen,
  onOpenChange,
  hasError = false,
  error,
  disabled = false,
  dense = false,
  id,
  sx = {},
  headerSx = {},
  bodySx = {},
  children,
}) {
  const reactId = useId();
  const safeId = id || `settings-deck-item-${reactId.replace(/:/g, '')}`;
  const headerId = `${safeId}-header`;
  const bodyId = `${safeId}-content`;

  const isControlled = typeof isOpen === 'boolean';
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isControlled ? isOpen : internalOpen;

  const setOpen = useCallback(
    (next) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const toggle = useCallback(() => {
    if (disabled) return;
    setOpen(!open);
  }, [disabled, open, setOpen]);

  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setOpen(!open);
      }
    },
    [disabled, open, setOpen]
  );

  const accent = hasError ? PA_COLORS.error : PA_COLORS.accent;
  const accentSubtle = hasError ? PA_COLORS.errorLight : PA_COLORS.accentLight;

  const padBlock = dense ? PA_SPACING.sm + 2 : PA_SPACING.md;
  const padInline = dense ? PA_SPACING.md : PA_SPACING.lg - 4;

  const wrapperSx = useMemo(
    () => ({
      backgroundColor: PA_COLORS.cardBg,
      border: `1px solid ${hasError ? PA_COLORS.error : PA_COLORS.cardBorder}`,
      borderRadius: `${PA_RADIUS.lg}px`,
      boxShadow: PA_SHADOWS.card,
      overflow: 'hidden',
      transition: PA_TRANSITIONS.normal,
      opacity: disabled ? 0.6 : 1,
      ...sx,
    }),
    [disabled, hasError, sx]
  );

  return (
    <Box role="listitem" sx={wrapperSx}>
      {/* ── Header (button) ── */}
      <Box
        id={headerId}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={open}
        aria-controls={bodyId}
        aria-disabled={disabled || undefined}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: `${PA_SPACING.md}px`,
          padding: `${padBlock}px ${padInline}px`,
          cursor: disabled ? 'not-allowed' : 'pointer',
          userSelect: 'none',
          transition: PA_TRANSITIONS.fast,
          backgroundColor: open ? PA_COLORS.sectionBg : 'transparent',
          '&:hover': disabled
            ? undefined
            : { backgroundColor: PA_COLORS.sectionBg },
          '&:active': disabled
            ? undefined
            : { backgroundColor: PA_COLORS.divider },
          '&:focus-visible': {
            outline: 'none',
            boxShadow: `inset 0 0 0 2px ${accent}`,
          },
          ...headerSx,
        }}
      >
        {icon && (
          <Box
            aria-hidden="true"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: `${PA_RADIUS.md}px`,
              backgroundColor: accentSubtle,
              color: accent,
              flexShrink: 0,
              transition: PA_TRANSITIONS.fast,
              '& .MuiSvgIcon-root': { fontSize: 20 },
            }}
          >
            {icon}
          </Box>
        )}

        <Box sx={{ flex: 1, minWidth: 0 }}>
          {title && (
            <Typography
              component="div"
              sx={{
                ...PA_TYPOGRAPHY.sectionTitle,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                color: hasError ? PA_COLORS.error : PA_COLORS.textPrimary,
                margin: 0,
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              component="div"
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
          {hasError && error && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '4px',
                color: PA_COLORS.error,
                ...PA_TYPOGRAPHY.caption,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
              }}
            >
              <ErrorOutlineIcon sx={{ fontSize: 14 }} />
              <span>{error}</span>
            </Box>
          )}
        </Box>

        {adornment && (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: `${PA_SPACING.sm}px`,
              flexShrink: 0,
            }}
            // Stop propagation so interactive adornments (e.g. a Switch)
            // don't accidentally toggle the panel.
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {adornment}
          </Box>
        )}

        <Box
          aria-hidden="true"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            color: PA_COLORS.textSecondary,
            flexShrink: 0,
            transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ExpandMoreIcon fontSize="small" />
        </Box>
      </Box>

      {/* ── Body ── */}
      <Collapse in={open} timeout={220} unmountOnExit={false}>
        <Box
          id={bodyId}
          role="region"
          aria-labelledby={headerId}
          sx={{
            borderTop: `1px solid ${PA_COLORS.divider}`,
            padding: `${padBlock + 2}px ${padInline}px ${padBlock + 4}px`,
            backgroundColor: PA_COLORS.cardBg,
            ...bodySx,
          }}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}
