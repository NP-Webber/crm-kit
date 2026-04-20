import { useState, useCallback } from 'react';
import {
  Badge,
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import {
  COLORS,
  RADIUS,
  SPACING,
  TRANSITION_DURATION,
  TRANSITION_EASING,
  TYPOGRAPHY,
} from './constants';

const MESSAGE_TYPE_META = {
  system: { icon: <CampaignRoundedIcon fontSize="small" />, color: COLORS.accentPrimary, label: 'מערכת' },
  admin: { icon: <AdminPanelSettingsRoundedIcon fontSize="small" />, color: '#7C3AED', label: 'מנהל' },
  whatsNew: { icon: <NewReleasesRoundedIcon fontSize="small" />, color: COLORS.success, label: 'מה חדש' },
  bug: { icon: <BugReportRoundedIcon fontSize="small" />, color: COLORS.badge, label: 'דיווח באג' },
  request: { icon: <FeedbackRoundedIcon fontSize="small" />, color: COLORS.warning, label: 'בקשה' },
};

/**
 * MessagesCenter — slide-out drawer for centralised communication.
 *
 * Props
 * -----
 * @param {boolean}  open            - Controlled open state
 * @param {func}     onClose         - Close handler
 * @param {Array}    messages        - Array of { id, type, title, body, date, read }
 * @param {func}     onMessageClick  - (message) => void
 * @param {func}     onReportBug     - Opens bug report flow
 * @param {func}     onSendRequest   - Opens feature request flow
 * @param {'right'|'left'} anchor    - Drawer side (default 'right' for RTL)
 */
export default function MessagesCenter({
  open = false,
  onClose,
  messages = [],
  onMessageClick,
  onReportBug,
  onSendRequest,
  anchor = 'right',
}) {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    { label: 'הכל', filter: null },
    { label: 'מערכת', filter: 'system' },
    { label: 'מה חדש', filter: 'whatsNew' },
    { label: 'מנהל', filter: 'admin' },
  ];

  const activeFilter = tabs[tabIndex].filter;
  const filtered = activeFilter
    ? messages.filter((m) => m.type === activeFilter)
    : messages;

  const unreadCount = messages.filter((m) => !m.read).length;

  const handleTabChange = useCallback((_, val) => setTabIndex(val), []);

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 380 },
          direction: 'rtl',
          backgroundColor: COLORS.bg,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: `${SPACING.md}px`,
          py: `${SPACING.sm + 4}px`,
          borderBottom: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.surface,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${SPACING.sm}px` }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: TYPOGRAPHY.fontFamily,
              color: COLORS.textPrimary,
            }}
          >
            מרכז הודעות
          </Typography>
          {unreadCount > 0 && (
            <Chip
              size="small"
              label={unreadCount}
              sx={{
                height: 20,
                ...TYPOGRAPHY.badge,
                backgroundColor: COLORS.badge,
                color: COLORS.badgeText,
              }}
            />
          )}
        </Box>
        <IconButton size="small" onClick={onClose}>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Tabs */}
      <Box sx={{ backgroundColor: COLORS.surface, borderBottom: `1px solid ${COLORS.border}` }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons={false}
          sx={{
            minHeight: 36,
            '& .MuiTab-root': {
              minHeight: 36,
              ...TYPOGRAPHY.profileRole,
              fontFamily: TYPOGRAPHY.fontFamily,
              textTransform: 'none',
            },
          }}
        >
          {tabs.map((t) => (
            <Tab key={t.label} label={t.label} />
          ))}
        </Tabs>
      </Box>

      {/* Message list */}
      <List sx={{ flexGrow: 1, overflowY: 'auto', py: `${SPACING.sm}px`, px: `${SPACING.sm}px` }}>
        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: `${SPACING.xl}px` }}>
            <Typography sx={{ color: COLORS.textMuted, ...TYPOGRAPHY.menuItem, fontFamily: TYPOGRAPHY.fontFamily }}>
              אין הודעות
            </Typography>
          </Box>
        )}
        {filtered.map((msg) => {
          const meta = MESSAGE_TYPE_META[msg.type] || MESSAGE_TYPE_META.system;
          return (
            <ListItem key={msg.id} disablePadding sx={{ mb: '4px' }}>
              <ListItemButton
                onClick={() => onMessageClick?.(msg)}
                sx={{
                  borderRadius: `${RADIUS.md}px`,
                  backgroundColor: msg.read ? 'transparent' : `${meta.color}08`,
                  border: msg.read ? 'none' : `1px solid ${meta.color}22`,
                  transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
                  '&:hover': { backgroundColor: COLORS.bgHover },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32, color: meta.color }}>
                  {meta.icon}
                </ListItemIcon>
                <ListItemText
                  primary={msg.title}
                  secondary={msg.body}
                  primaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      ...TYPOGRAPHY.menuItem,
                      fontFamily: TYPOGRAPHY.fontFamily,
                      fontWeight: msg.read ? 400 : 600,
                    },
                  }}
                  secondaryTypographyProps={{
                    noWrap: true,
                    sx: {
                      ...TYPOGRAPHY.profileRole,
                      fontFamily: TYPOGRAPHY.fontFamily,
                      color: COLORS.textMuted,
                    },
                  }}
                />
                {!msg.read && (
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: RADIUS.full,
                      backgroundColor: meta.color,
                      flexShrink: 0,
                      ml: `${SPACING.sm}px`,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Quick actions: bug report & feature request */}
      <Divider />
      <Box
        sx={{
          display: 'flex',
          gap: `${SPACING.sm}px`,
          p: `${SPACING.md}px`,
          backgroundColor: COLORS.surface,
        }}
      >
        {onReportBug && (
          <Chip
            icon={<BugReportRoundedIcon sx={{ fontSize: '1rem' }} />}
            label="דיווח באג"
            onClick={onReportBug}
            variant="outlined"
            size="small"
            sx={{
              fontFamily: TYPOGRAPHY.fontFamily,
              borderColor: COLORS.border,
              '&:hover': { borderColor: COLORS.badge, color: COLORS.badge },
            }}
          />
        )}
        {onSendRequest && (
          <Chip
            icon={<FeedbackRoundedIcon sx={{ fontSize: '1rem' }} />}
            label="שליחת בקשה"
            onClick={onSendRequest}
            variant="outlined"
            size="small"
            sx={{
              fontFamily: TYPOGRAPHY.fontFamily,
              borderColor: COLORS.border,
              '&:hover': { borderColor: COLORS.accentPrimary, color: COLORS.accentPrimary },
            }}
          />
        )}
      </Box>
    </Drawer>
  );
}
