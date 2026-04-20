// CRM KIT — Sidebar design tokens & constants

export const SIDEBAR_WIDTH_EXPANDED = 272;
export const SIDEBAR_WIDTH_COLLAPSED = 72;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
};

export const TRANSITION_DURATION = '0.25s';
export const TRANSITION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const COLORS = {
  // Neutral palette
  bg: '#FAFBFC',
  bgHover: '#F0F2F5',
  bgActive: '#E8EBF0',
  surface: '#FFFFFF',
  border: '#E3E6EB',
  textPrimary: '#1A1D23',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  // Accent
  accentPrimary: '#4F46E5',
  accentPrimaryHover: '#4338CA',
  accentPrimaryLight: '#EEF2FF',
  accentPrimaryText: '#FFFFFF',
  // Semantic
  badge: '#EF4444',
  badgeText: '#FFFFFF',
  success: '#10B981',
  warning: '#F59E0B',
};

export const TYPOGRAPHY = {
  fontFamily: '"Heebo", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  profileName: { fontSize: '0.938rem', fontWeight: 600, lineHeight: 1.3 },
  profileRole: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.4 },
  menuItem: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.5 },
  badge: { fontSize: '0.688rem', fontWeight: 700, lineHeight: 1 },
  footerLabel: { fontSize: '0.813rem', fontWeight: 500, lineHeight: 1.5 },
  tooltip: { fontSize: '0.75rem', fontWeight: 500 },
};
