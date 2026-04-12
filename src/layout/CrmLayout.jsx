import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar, Typography, Divider, Button, Avatar,
  Menu, MenuItem, ListItemIcon as MenuItemIcon,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LockResetIcon from '@mui/icons-material/LockReset';

const DRAWER_WIDTH = 260;

/**
 * CrmLayout — Layout ראשי עם סרגל צד + AppBar
 *
 * @param {Object} props
 * @param {Array} props.navItems - פריטי ניווט:
 *   { label, path, icon: MuiIcon, adminOnly?, hidden? }
 * @param {string} props.systemLabel - שם המערכת (ברירת מחדל: 'מערכת ניהול')
 * @param {Object} props.user - { username, roles: string[] }
 * @param {Function} props.onLogout - callback להתנתקות
 * @param {string} props.profilePath - נתיב לדף פרופיל (ברירת מחדל: '/profile')
 * @param {string} props.drawerBackground - רקע סרגל צד
 * @param {React.ReactNode} props.drawerHeader - תוכן מותאם לכותרת הסרגל
 * @param {React.ReactNode} props.drawerFooter - תוכן מותאם לתחתית הסרגל
 * @param {React.ReactNode} props.children - אם מסופק, משמש במקום <Outlet />
 */
const CrmLayout = ({
  navItems = [],
  systemLabel = 'מערכת ניהול',
  user = {},
  onLogout,
  profilePath = '/profile',
  drawerBackground = 'linear-gradient(180deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)',
  drawerHeader,
  drawerFooter,
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAnchor, setMenuAnchor] = useState(null);

  const isAdmin = user?.roles?.includes('admin');

  const handleOpenMenu = (e) => setMenuAnchor(e.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);
  const handleProfile = () => { handleCloseMenu(); navigate(profilePath); };
  const handleLogout = () => { handleCloseMenu(); if (onLogout) onLogout(); };

  const visibleItems = navItems.filter((item) => {
    if (item.hidden) return false;
    if (item.adminOnly && !isAdmin) return false;
    return true;
  });

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f0f4f8' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            right: 0,
            left: 'auto',
            background: drawerBackground,
            color: '#fff',
            borderLeft: 'none',
          },
        }}
        anchor="right"
      >
        {/* Logo / Brand */}
        {drawerHeader || (
          <Box sx={{ p: 2.5, textAlign: 'center' }}>
            <Typography
              variant="h6"
              fontWeight={800}
              sx={{ color: '#fff', letterSpacing: 0.5 }}
            >
              {systemLabel}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              ממשק ניהול
            </Typography>
          </Box>
        )}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        {/* Navigation */}
        <List sx={{ px: 1.5, pt: 1.5, flex: 1 }}>
          {visibleItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <ListItemButton
                key={item.path}
                selected={isActive}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  py: 1,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.75)',
                  bgcolor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                  },
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.18)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.22)' },
                  },
                }}
              >
                {Icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                    }}
                  >
                    <Icon fontSize="small" />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        {/* User info at bottom */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)' }} />
        {drawerFooter || (
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              sx={{
                width: 34, height: 34,
                bgcolor: 'rgba(255,255,255,0.2)',
                fontSize: 14, fontWeight: 700,
              }}
            >
              {(user?.username || 'א').charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body2" fontWeight={600} noWrap sx={{ color: '#fff' }}>
                {user?.username || 'אורח'}
              </Typography>
            </Box>
            {onLogout && (
              <Button
                onClick={onLogout}
                size="small"
                sx={{
                  minWidth: 'auto', p: 0.8,
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <LogoutIcon fontSize="small" />
              </Button>
            )}
          </Box>
        )}
      </Drawer>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            background: '#fff',
            color: '#333',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Button
              onClick={handleOpenMenu}
              sx={{ textTransform: 'none', color: '#333', fontWeight: 500 }}
            >
              שלום, <strong style={{ marginRight: 4 }}>{user?.username || 'אורח'}</strong>
            </Button>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleCloseMenu}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleProfile}>
                <MenuItemIcon><LockResetIcon fontSize="small" /></MenuItemIcon>
                שינוי סיסמה
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                <MenuItemIcon><LogoutIcon fontSize="small" color="error" /></MenuItemIcon>
                התנתקות
              </MenuItem>
            </Menu>

            <Box />
          </Toolbar>
        </AppBar>

        <Box sx={{ minHeight: 'calc(100vh - 64px)', p: 3, pt: 2 }}>
          {children || <Outlet />}
        </Box>
      </Box>
    </Box>
  );
};

export default CrmLayout;
