import { Avatar, Badge, Box, IconButton, Tooltip, Typography } from '@mui/material';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
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
 * SidebarHeader — profile picture, user name, role label, notification bell.
 *
 * Props
 * -----
 * @param {string}  avatarSrc         - URL for profile picture
 * @param {string}  userName          - Display name
 * @param {string}  roleLabel         - Localised role text
 * @param {number}  notificationCount - Badge number on the bell (0 hides badge)
 * @param {func}    onAvatarClick     - Opens profile modal
 * @param {func}    onNotificationClick - Opens notifications panel
 * @param {func}    onLogout           - Logout button handler
 * @param {object}  accentColors      - { dark, light } from campaign context (optional override)
 */
export default function SidebarHeader({
  avatarSrc,
  userName = '',
  roleLabel = '',
  notificationCount = 0,
  onAvatarClick,
  onNotificationClick,
  onLogout,
  accentColors,
}) {
  const { collapsed } = useSidebar();

  const accent = accentColors?.dark || COLORS.accentPrimary;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: `${SPACING.lg}px`,
        pb: `${SPACING.md}px`,
        px: `${SPACING.sm}px`,
        gap: `${SPACING.xs}px`,
        transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
      }}
    >
      {/* Avatar */}
      <Tooltip title={collapsed ? userName : ''} placement="left" arrow>
        <Avatar
          src={avatarSrc}
          alt={userName}
          onClick={onAvatarClick}
          sx={{
            width: collapsed ? 36 : 52,
            height: collapsed ? 36 : 52,
            cursor: onAvatarClick ? 'pointer' : 'default',
            border: avatarSrc ? 'none' : `2px solid ${accent}`,
            transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
            '&:hover': onAvatarClick
              ? { boxShadow: `0 0 0 3px ${accent}33` }
              : undefined,
          }}
        />
      </Tooltip>

      {/* Name + role — hidden when collapsed */}
      {!collapsed && (
        <Box sx={{ textAlign: 'center', minWidth: 0 }}>
          <Typography
            noWrap
            sx={{
              ...TYPOGRAPHY.profileName,
              color: COLORS.textPrimary,
              fontFamily: TYPOGRAPHY.fontFamily,
            }}
          >
            {userName}
          </Typography>
          <Typography
            noWrap
            sx={{
              ...TYPOGRAPHY.profileRole,
              color: COLORS.textSecondary,
              fontFamily: TYPOGRAPHY.fontFamily,
            }}
          >
            {roleLabel}
          </Typography>
        </Box>
      )}

      {/* Notification bell + Logout */}
      <Box sx={{ display: 'flex', gap: `${SPACING.xs}px`, mt: collapsed ? `${SPACING.xs}px` : 0 }}>
        <Tooltip title={collapsed ? 'התראות' : 'התראות'} placement="left" arrow>
          <IconButton
            size="small"
            onClick={onNotificationClick}
            sx={{
              color: COLORS.textSecondary,
              '&:hover': { color: accent, backgroundColor: `${accent}14` },
              transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
            }}
          >
            <Badge
              badgeContent={notificationCount}
              max={99}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: COLORS.badge,
                  color: COLORS.badgeText,
                  ...TYPOGRAPHY.badge,
                  minWidth: 18,
                  height: 18,
                  borderRadius: RADIUS.full,
                },
              }}
            >
              <NotificationsNoneRoundedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        {onLogout && (
          <Tooltip title="יציאה" placement="left" arrow>
            <IconButton
              size="small"
              onClick={onLogout}
              sx={{
                color: COLORS.textSecondary,
                '&:hover': { color: '#ef5350', backgroundColor: '#ef535014' },
                transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
              }}
            >
              <LogoutRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}
