// CRM KIT — PersonalArea design tokens

export const PA_SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const PA_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const PA_SHADOWS = {
  card: '0 1px 2px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.02)',
  cardHover: '0 4px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.02)',
  elevated: '0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)',
  avatar: '0 0 0 4px rgba(79,70,229,0.08), 0 2px 12px rgba(79,70,229,0.12)',
  avatarHover: '0 0 0 4px rgba(79,70,229,0.14), 0 4px 20px rgba(79,70,229,0.18)',
  ring: '0 0 0 2px #fff, 0 0 0 4px',
  inset: 'inset 0 1px 2px rgba(0,0,0,0.04)',
};

export const PA_COLORS = {
  pageBg: '#F5F6F8',
  cardBg: '#FFFFFF',
  cardBorder: '#ECEEF2',
  sectionBg: '#F8F9FB',
  divider: '#F0F1F4',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  accent: '#4F46E5',
  accentLight: '#EEF2FF',
  accentHover: '#4338CA',
  accentSubtle: '#F5F3FF',
  success: '#059669',
  successLight: '#ECFDF5',
  error: '#DC2626',
  errorLight: '#FEF2F2',
  warning: '#D97706',
  warningLight: '#FFFBEB',
  adminBg: '#FFFAF5',
  adminBorder: '#FED7AA',
  adminAccent: '#EA580C',
};

export const PA_TYPOGRAPHY = {
  fontFamily: '"Heebo", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  pageTitle: { fontSize: '1.625rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em' },
  pageSubtitle: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
  sectionTitle: { fontSize: '0.9375rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.01em' },
  sectionDesc: { fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.5 },
  fieldLabel: { fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.5 },
  fieldValue: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5 },
  buttonText: { fontSize: '0.8125rem', fontWeight: 600, lineHeight: 1 },
  caption: { fontSize: '0.6875rem', fontWeight: 400, lineHeight: 1.4, letterSpacing: '0.01em' },
  overline: { fontSize: '0.6875rem', fontWeight: 600, lineHeight: 1, letterSpacing: '0.04em', textTransform: 'uppercase' },
};

export const PA_TRANSITIONS = {
  micro: 'all 0.1s ease',
  fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  normal: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
  smooth: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
};

// Theme definitions for the ThemeSelector
export const SITE_THEMES = {
  default: {
    id: 'default',
    label: 'ברירת מחדל',
    description: 'ערכת נושא כחולה קלאסית',
    preview: {
      primary: '#4F46E5',
      secondary: '#818CF8',
      bg: '#FAFBFC',
      surface: '#FFFFFF',
      text: '#1A1D23',
    },
  },
  dark: {
    id: 'dark',
    label: 'מצב כהה',
    description: 'ערכת נושא כהה לעיניים',
    preview: {
      primary: '#818CF8',
      secondary: '#6366F1',
      bg: '#1F2937',
      surface: '#283141',
      text: '#F9FAFB',
    },
  },
  warm: {
    id: 'warm',
    label: 'חמים',
    description: 'ערכת צבעים חמים ונעימים',
    preview: {
      primary: '#EA580C',
      secondary: '#F97316',
      bg: '#FFFBEB',
      surface: '#FFF8F0',
      text: '#78350F',
    },
  },
  cool: {
    id: 'cool',
    label: 'קריר',
    description: 'ערכת צבעים קרירים ומרעננים',
    preview: {
      primary: '#0891B2',
      secondary: '#06B6D4',
      bg: '#F0FDFA',
      surface: '#ECFDF5',
      text: '#134E4A',
    },
  },
};

export const SITE_SCALES = [
  { value: 90, label: '90%', description: 'קטן' },
  { value: 100, label: '100%', description: 'רגיל' },
  { value: 110, label: '110%', description: 'גדול' },
  { value: 120, label: '120%', description: 'גדול מאוד' },
];
