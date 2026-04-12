// ═══════════════════════════════════════════════
//  דוגמת שימוש — index.js (נקודת כניסה)
// ═══════════════════════════════════════════════
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  CrmThemeProvider,
  createCrmTheme,
  AuthProvider,
  createApiClient,
} from '@crm-kit/core';
// או בנתיב מקומי:
// import { ... } from '../crm-kit/src/index.js';

import App from './App';

// 1) צור API client
const api = createApiClient({
  baseURL: '/api',             // או כתובת מלאה: 'https://my-server.com/api'
  storagePrefix: 'mycrm',     // prefix ייחודי לפרויקט
});

// 2) צור ערכת נושא מותאמת
const theme = createCrmTheme({
  primary: '#1565c0',          // שנה לצבע הרצוי
  secondary: '#1976d2',
  background: '#f0f4f8',
  // overrides: { MuiTextField: { ... } },
});

// 3) הרכב את האפליקציה
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrmThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider apiClient={api} storagePrefix="mycrm">
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CrmThemeProvider>
  </React.StrictMode>
);
