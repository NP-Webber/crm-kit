import { createTheme } from '@mui/material/styles';

/**
 * createCrmTheme — יצירת ערכת נושא MUI מותאמת
 *
 * @param {Object} options
 * @param {string} options.primary - צבע ראשי (ברירת מחדל: #1565c0)
 * @param {string} options.primaryLight
 * @param {string} options.primaryDark
 * @param {string} options.secondary - צבע משני (ברירת מחדל: #1976d2)
 * @param {string} options.background - צבע רקע (ברירת מחדל: #f0f4f8)
 * @param {string} options.paper - צבע paper (ברירת מחדל: #ffffff)
 * @param {string} options.fontFamily
 * @param {string} options.direction - כיוון (ברירת מחדל: rtl)
 * @param {number} options.borderRadius - רדיוס פינות (ברירת מחדל: 8)
 * @param {Object} options.overrides - overrides חופשיים ל-createTheme
 */
export function createCrmTheme(options = {}) {
  const {
    primary = '#1565c0',
    primaryLight = '#42a5f5',
    primaryDark = '#0d47a1',
    secondary = '#1976d2',
    background = '#f0f4f8',
    paper = '#ffffff',
    fontFamily = '"Assistant", "Rubik", "Arial", sans-serif',
    direction = 'rtl',
    borderRadius = 8,
    overrides = {},
  } = options;

  return createTheme({
    direction,
    typography: {
      fontFamily,
    },
    palette: {
      primary: { main: primary, light: primaryLight, dark: primaryDark },
      secondary: { main: secondary },
      background: { default: background, paper },
    },
    shape: { borderRadius },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { borderRadius: borderRadius + 2 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 600 },
        },
      },
      ...overrides,
    },
  });
}

/** ערכת נושא ברירת מחדל — מוכנה לשימוש מידי */
export const defaultCrmTheme = createCrmTheme();
