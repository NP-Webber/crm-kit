import { Badge, Box, ButtonBase, Tooltip, Typography } from '@mui/material';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { useSidebar } from './SidebarContext';
import {
  COLORS,
  RADIUS,
  SPACING,
  TRANSITION_DURATION,
  TRANSITION_EASING,
  TYPOGRAPHY,
} from './constants';

/**
 * SidebarFooter — Messages Center entry point.
 *
 * Props
 * -----
 * @param {string}  label           - Button text (e.g. "מרכז הודעות")
 * @param {number}  unreadCount     - Unread messages badge
 * @param {func}    onClick         - Opens Messages Center
 * @param {node}    icon            - Override icon (default: ForumRoundedIcon)
 * @param {object}  accentColors    - { dark, light } optional
 * @param {node}    extra           - Additional content rendered below the button (e.g. LastUpdate)
 */
export default function SidebarFooter({
  label = 'מרכז הודעות',
  unreadCount = 0,
  onClick,
  icon,
  accentColors,
  extra,
}) {
  const { collapsed } = useSidebar();
  const accent = accentColors?.dark || COLORS.accentPrimary;

  return (
    <Box
      sx={{
        borderTop: `1px solid ${COLORS.border}`,
        p: `${SPACING.sm}px`,
        display: 'flex',
        flexDirection: 'column',
        gap: `${SPACING.sm}px`,
      }}
    >
      <Tooltip title={collapsed ? label : ''} placement="left" arrow>
        <ButtonBase
          onClick={onClick}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            gap: `${SPACING.sm}px`,
            borderRadius: `${RADIUS.md}px`,
            px: `${SPACING.sm + 4}px`,
            py: `${SPACING.sm}px`,
            transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
            '&:hover': {
              backgroundColor: COLORS.bgHover,
            },
          }}
        >
          <Badge
            badgeContent={unreadCount}
            max={99}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: COLORS.badge,
                color: COLORS.badgeText,
                ...TYPOGRAPHY.badge,
                minWidth: 18,
                height: 18,
              },
            }}
          >
            {icon || <ForumRoundedIcon sx={{ fontSize: '1.25rem', color: accent }} />}
          </Badge>
          {!collapsed && (
            <Typography
              noWrap
              sx={{
                ...TYPOGRAPHY.footerLabel,
                fontFamily: TYPOGRAPHY.fontFamily,
                color: COLORS.textPrimary,
              }}
            >
              {label}
            </Typography>
          )}
        </ButtonBase>
      </Tooltip>

      {/* Extra slot (e.g. LastUpdate, version, etc.) */}
      {extra && !collapsed && (
        <Box sx={{ px: `${SPACING.sm}px` }}>{extra}</Box>
      )}
    </Box>
  );
}
