import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
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
 * SidebarMenu — renders dynamic navigation items.
 *
 * Props
 * -----
 * @param {Array} items - Menu items array. Each item:
 *   { id, text, icon, path, show, badge, group, disabled, onClick }
 * @param {string}  activePath    - Current route path (for highlight)
 * @param {func}    onNavigate    - (path) => void
 * @param {object}  accentColors  - { dark, light } optional override
 */
export default function SidebarMenu({ items = [], activePath = '', onNavigate, accentColors }) {
  const { collapsed, closeMobile } = useSidebar();
  const accent = accentColors?.dark || COLORS.accentPrimary;
  const accentLight = accentColors?.light || COLORS.accentPrimaryLight;

  // Group items by `group` key; undefined group = ungrouped
  const grouped = [];
  let currentGroup = null;

  items.forEach((item) => {
    if (item.show === false) return;
    if (item.group && item.group !== currentGroup) {
      currentGroup = item.group;
      grouped.push({ type: 'divider', label: item.group });
    } else if (!item.group && currentGroup) {
      currentGroup = null;
      grouped.push({ type: 'divider' });
    }
    grouped.push({ type: 'item', data: item });
  });

  const isActive = (path) => {
    if (!path || !activePath) return false;
    return activePath === path || activePath.startsWith(path + '/');
  };

  const handleClick = (item) => {
    if (item.disabled) return;
    if (item.onClick) item.onClick();
    if (item.path && onNavigate) {
      onNavigate(item.path);
      closeMobile();
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        py: `${SPACING.sm}px`,
        px: `${SPACING.sm}px`,
        direction: 'ltr',
        '& *': { direction: 'rtl' },
        '&::-webkit-scrollbar': { width: 4 },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: COLORS.border,
          borderRadius: RADIUS.full,
        },
      }}
    >
      <List disablePadding>
        {grouped.map((entry, idx) => {
          if (entry.type === 'divider') {
            return (
              <Box key={`div-${idx}`}>
                {entry.label && !collapsed ? (
                  <Typography
                    sx={{
                      ...TYPOGRAPHY.profileRole,
                      color: COLORS.textMuted,
                      fontFamily: TYPOGRAPHY.fontFamily,
                      px: `${SPACING.sm}px`,
                      pt: `${SPACING.md}px`,
                      pb: `${SPACING.xs}px`,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {entry.label}
                  </Typography>
                ) : (
                  <Divider sx={{ my: `${SPACING.sm}px`, borderColor: COLORS.border }} />
                )}
              </Box>
            );
          }

          const item = entry.data;
          const active = isActive(item.path);

          return (
            <ListItem key={item.id || item.text} disablePadding sx={{ mb: '2px' }}>
              <Tooltip
                title={collapsed ? item.text : ''}
                placement="left"
                arrow
                disableInteractive
              >
                <ListItemButton
                  onClick={() => handleClick(item)}
                  disabled={item.disabled}
                  sx={{
                    minHeight: 42,
                    borderRadius: `${RADIUS.md}px`,
                    px: collapsed ? `${SPACING.md}px` : `${SPACING.sm + 4}px`,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    transition: `all ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
                    backgroundColor: active ? accent : 'transparent',
                    color: active ? COLORS.accentPrimaryText : COLORS.textPrimary,
                    '&:hover': {
                      backgroundColor: active ? accent : COLORS.bgHover,
                    },
                    '&.Mui-disabled': {
                      opacity: 0.45,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: collapsed ? 0 : 36,
                      justifyContent: 'center',
                      color: active ? COLORS.accentPrimaryText : COLORS.textSecondary,
                      transition: `color ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
                      '& .MuiSvgIcon-root': { fontSize: '1.25rem' },
                    }}
                  >
                    {item.badge ? (
                      <Badge
                        badgeContent={item.badge}
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
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>

                  {!collapsed && (
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        noWrap: true,
                        sx: {
                          ...TYPOGRAPHY.menuItem,
                          fontFamily: TYPOGRAPHY.fontFamily,
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
