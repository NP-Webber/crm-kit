// ═══════════════════════════════════════════════
//  דוגמת שימוש — App.jsx (ניתוב + Layout)
// ═══════════════════════════════════════════════
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  CrmLayout,
  ProtectedRoute,
  useAuth,
} from '@crm-kit/core';

import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// דפים
import Login from './pages/Login';
import CustomersList from './pages/CustomersList';
import OrdersList from './pages/OrdersList';
import Dashboard from './pages/Dashboard';

// הגדרת פריטי ניווט
const navItems = [
  { label: 'לקוחות', path: '/customers', icon: PeopleOutlinedIcon },
  { label: 'הזמנות', path: '/orders', icon: AssignmentOutlinedIcon },
  { label: 'דשבורד', path: '/dashboard', icon: BarChartOutlinedIcon },
  { label: 'הגדרות', path: '/settings', icon: SettingsOutlinedIcon, adminOnly: true },
];

const App = () => {
  const { user, logout } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CrmLayout
              navItems={navItems}
              systemLabel="מערכת CRM"
              user={user}
              onLogout={logout}
            />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/customers" replace />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="orders" element={<OrdersList />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
