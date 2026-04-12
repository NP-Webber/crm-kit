import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { defaultCrmTheme } from './createCrmTheme.js';
import './crmGlobals.css';

/**
 * CrmThemeProvider — עוטף את האפליקציה עם ערכת נושא + CSS globals
 *
 * @param {Object} props.theme - MUI theme (ברירת מחדל: defaultCrmTheme)
 * @param {React.ReactNode} props.children
 */
const CrmThemeProvider = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme || defaultCrmTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CrmThemeProvider;
