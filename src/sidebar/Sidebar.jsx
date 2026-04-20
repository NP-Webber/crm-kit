import { Box, Drawer, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import { SidebarProvider, useSidebar } from './SidebarContext';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';
import {
  COLORS,
  RADIUS,
  SIDEBAR_WIDTH_COLLAPSED,
  SIDEBAR_WIDTH_EXPANDED,
  SPACING,
  TRANSITION_DURATION,
  TRANSITION_EASING,
  TYPOGRAPHY,
} from './constants';

// Build a base RTL theme that consumers can extend
const rtlTheme = createTheme({
  direction: 'rtl',
  typography: { fontFamily: TYPOGRAPHY.fontFamily },
});

/**
 * Sidebar — CRM KIT generic sidebar component.
 *
 * Configuration-driven: pass user, menuItems, messages, and callbacks.
 * Handles collapse, mobile drawer, RTL, animations, and role-based rendering.
 *
 * Props
 * -----
 * @param {object}  user              - { avatarSrc, name, roleLabel }
 * @param {Array}   menuItems         - See SidebarMenu for shape
 * @param {string}  activePath        - Current route
 * @param {func}    onNavigate        - (path) => void
 * @param {number}  notificationCount - Bell badge count
 * @param {func}    onNotificationClick
 * @param {func}    onAvatarClick     - Profile click
 * @param {func}    onLogout          - Logout button handler
 * @param {object}  messagesCenter    - { label, unreadCount, onClick, icon, extra }
 * @param {object}  accentColors      - { dark, light }
 * @param {boolean} defaultCollapsed
 * @param {string}  mobileBreakpoint  - MUI breakpoint key (default 'md')
 * @param {node}    headerExtra       - Extra content below header
 * @param {node}    children          - Fully custom body (replaces SidebarMenu + SidebarFooter)
 */
function SidebarInner({
  user = {},
  menuItems = [],
  activePath = '',
  onNavigate,
  notificationCount = 0,
  onNotificationClick,
  onAvatarClick,
  onLogout,
  messagesCenter = {},
  accentColors,
  headerExtra,
  children,
  mobileBreakpoint = 'md',
}) {
  const { collapsed, toggle, mobileOpen, closeMobile } = useSidebar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(mobileBreakpoint));

  const width = collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED;

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: COLORS.bg,
        borderLeft: `1px solid ${COLORS.border}`,
        overflow: 'hidden',
      }}
    >
      {/* Collapse toggle */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: collapsed ? 'center' : 'flex-start',
          px: `${SPACING.sm}px`,
          pt: `${SPACING.sm}px`,
        }}
      >
        <Tooltip title={collapsed ? 'הרחב תפריט' : 'כווץ תפריט'} placement="left" arrow>
          <IconButton
            size="small"
            onClick={toggle}
            sx={{
              color: COLORS.textSecondary,
              '&:hover': { backgroundColor: COLORS.bgHover },
            }}
          >
            {collapsed ? <ChevronLeftRoundedIcon /> : <ChevronRightRoundedIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Header */}
      <SidebarHeader
        avatarSrc={user.avatarSrc}
        userName={user.name}
        roleLabel={user.roleLabel}
        notificationCount={notificationCount}
        onAvatarClick={onAvatarClick}
        onNotificationClick={onNotificationClick}
        onLogout={onLogout}
        accentColors={accentColors}
      />

      {/* Optional header extra area */}
      {headerExtra && !collapsed && (
        <Box sx={{ px: `${SPACING.sm}px`, pb: `${SPACING.sm}px` }}>
          {headerExtra}
        </Box>
      )}

      {/* Body — either custom children or config-driven menu */}
      {children || (
        <SidebarMenu
          items={menuItems}
          activePath={activePath}
          onNavigate={onNavigate}
          accentColors={accentColors}
        />
      )}

      {/* Footer — Messages Center */}
      {messagesCenter.onClick && (
        <SidebarFooter
          label={messagesCenter.label}
          unreadCount={messagesCenter.unreadCount}
          onClick={messagesCenter.onClick}
          icon={messagesCenter.icon}
          accentColors={accentColors}
          extra={messagesCenter.extra}
        />
      )}
    </Box>
  );

  // Mobile: temporary drawer
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={closeMobile}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: SIDEBAR_WIDTH_EXPANDED,
            direction: 'rtl',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // Desktop: permanent drawer
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width,
        flexShrink: 0,
        transition: `width ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
          direction: 'rtl',
          transition: `width ${TRANSITION_DURATION} ${TRANSITION_EASING}`,
          border: 'none',
          overflowX: 'hidden',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

/**
 * Sidebar — public wrapper that provides context + theme.
 * All props forwarded to SidebarInner.
 */
export default function Sidebar({ defaultCollapsed = false, ...props }) {
  return (
    <ThemeProvider theme={rtlTheme}>
      <SidebarProvider defaultCollapsed={defaultCollapsed}>
        <SidebarInner {...props} />
      </SidebarProvider>
    </ThemeProvider>
  );
}

/**
 * MobileMenuButton — convenience button for toggling the sidebar on mobile.
 * Place this in your top app bar.
 */
export function MobileMenuButton() {
  const { openMobile } = useSidebar();
  return (
    <IconButton onClick={openMobile} sx={{ color: COLORS.textPrimary }}>
      <MenuRoundedIcon />
    </IconButton>
  );
}
