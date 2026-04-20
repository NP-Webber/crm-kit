// CRM KIT — useApplyPreferences: hook to apply theme & scale to the DOM
import { useEffect } from 'react';

const STYLE_ID = 'crm-kit-theme-style';

/**
 * Full theme CSS definitions.
 * Each theme overrides CSS custom properties + adds global overrides for
 * MUI components, layout surfaces, text, inputs, cards, tables, etc.
 */
const THEME_CSS = {
  default: `
    :root {
      --ck-bg: #FAFBFC;
      --ck-bg-paper: #FFFFFF;
      --ck-bg-elevated: #FFFFFF;
      --ck-bg-input: #FFFFFF;
      --ck-bg-hover: #F0F2F5;
      --ck-border: #E3E6EB;
      --ck-text-primary: #1A1D23;
      --ck-text-secondary: #6B7280;
      --ck-text-muted: #9CA3AF;
      --ck-accent: #4F46E5;
      --ck-shadow: rgba(0,0,0,0.06);
    }
  `,

  dark: `
    :root {
      --ck-bg: #111827;
      --ck-bg-paper: #1F2937;
      --ck-bg-elevated: #283141;
      --ck-bg-input: #283141;
      --ck-bg-hover: #374151;
      --ck-border: #374151;
      --ck-text-primary: #F3F4F6;
      --ck-text-secondary: #D1D5DB;
      --ck-text-muted: #9CA3AF;
      --ck-accent: #818CF8;
      --ck-shadow: rgba(0,0,0,0.3);
    }

    /* ── Global background & text ── */
    body,
    html {
      background-color: #111827 !important;
      color: #F3F4F6 !important;
    }

    /* ── Main content area ── */
    [class*="MuiBox-root"] {
      color: inherit;
    }

    /* ── MUI Paper / Card ── */
    .MuiPaper-root,
    .MuiCard-root,
    .MuiCardContent-root,
    .MuiDialog-paper,
    .MuiPopover-paper,
    .MuiMenu-paper,
    .MuiAutocomplete-paper {
      background-color: #1F2937 !important;
      color: #F3F4F6 !important;
      border-color: #374151 !important;
    }

    /* ── Drawer / Sidebar ── */
    .MuiDrawer-paper {
      background-color: #1a2233 !important;
      color: #F3F4F6 !important;
      border-color: #374151 !important;
    }

    /* ── Tables ── */
    .MuiTable-root,
    .MuiTableContainer-root {
      background-color: #1F2937 !important;
    }
    .MuiTableCell-root {
      color: #F3F4F6 !important;
      border-color: #374151 !important;
    }
    .MuiTableCell-head {
      background-color: #283141 !important;
      color: #D1D5DB !important;
      font-weight: 600 !important;
    }
    .MuiTableRow-root:hover {
      background-color: #283141 !important;
    }

    /* ── Inputs ── */
    .MuiOutlinedInput-root,
    .MuiInputBase-root {
      background-color: #283141 !important;
      color: #F3F4F6 !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #4B5563 !important;
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: #6B7280 !important;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #818CF8 !important;
    }
    .MuiInputLabel-root {
      color: #9CA3AF !important;
    }
    .MuiInputLabel-root.Mui-focused {
      color: #818CF8 !important;
    }
    .MuiSelect-icon {
      color: #9CA3AF !important;
    }

    /* ── Typography ── */
    .MuiTypography-root {
      color: inherit !important;
    }

    /* ── Buttons — keep primary/secondary colors but darken the outlines ── */
    .MuiButton-outlined {
      border-color: #4B5563 !important;
      color: #D1D5DB !important;
    }
    .MuiButton-outlined:hover {
      background-color: #283141 !important;
    }
    .MuiButton-text {
      color: #D1D5DB !important;
    }

    /* ── Chips / Badges ── */
    .MuiChip-root {
      background-color: #283141 !important;
      color: #D1D5DB !important;
      border-color: #4B5563 !important;
    }

    /* ── Tabs ── */
    .MuiTab-root {
      color: #9CA3AF !important;
    }
    .MuiTab-root.Mui-selected {
      color: #818CF8 !important;
    }
    .MuiTabs-indicator {
      background-color: #818CF8 !important;
    }

    /* ── Dividers ── */
    .MuiDivider-root,
    hr {
      border-color: #374151 !important;
    }

    /* ── Tooltips ── */
    .MuiTooltip-tooltip {
      background-color: #374151 !important;
      color: #F3F4F6 !important;
    }

    /* ── Alerts ── */
    .MuiAlert-root {
      color: #F3F4F6 !important;
    }
    .MuiAlert-standardInfo {
      background-color: rgba(129,140,248,0.15) !important;
    }
    .MuiAlert-standardSuccess {
      background-color: rgba(16,185,129,0.15) !important;
    }
    .MuiAlert-standardError {
      background-color: rgba(239,68,68,0.15) !important;
    }
    .MuiAlert-standardWarning {
      background-color: rgba(245,158,11,0.15) !important;
    }

    /* ── Snackbar ── */
    .MuiSnackbarContent-root {
      background-color: #283141 !important;
      color: #F3F4F6 !important;
    }

    /* ── Lists ── */
    .MuiListItem-root:hover,
    .MuiMenuItem-root:hover {
      background-color: #283141 !important;
    }
    .MuiListItemText-primary {
      color: #F3F4F6 !important;
    }
    .MuiListItemText-secondary {
      color: #9CA3AF !important;
    }

    /* ── Icons (inherit) ── */
    .MuiSvgIcon-root {
      color: inherit;
    }

    /* ── Campaign tabs bar (DashLayout fixed bar) ── */
    [style*="position: fixed"][style*="background-color: rgb(232, 232, 232)"],
    [style*="backgroundColor: #e8e8e8"],
    div[style*="background-color: rgb(232, 232, 232)"] {
      background-color: #1a2233 !important;
      border-color: #374151 !important;
    }

    /* ── Scrollbar ── */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #1F2937; }
    ::-webkit-scrollbar-thumb { background: #4B5563; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #6B7280; }

    /* ── Modal / Backdrop ── */
    .MuiBackdrop-root {
      background-color: rgba(0,0,0,0.7) !important;
    }

    /* ── Accordion ── */
    .MuiAccordion-root {
      background-color: #1F2937 !important;
      color: #F3F4F6 !important;
    }
    .MuiAccordionSummary-root {
      color: #F3F4F6 !important;
    }

    /* ── Switch / Checkbox ── */
    .MuiSwitch-track {
      background-color: #4B5563 !important;
    }
    .MuiCheckbox-root {
      color: #6B7280 !important;
    }
  `,

  warm: `
    :root {
      --ck-bg: #FFFBF5;
      --ck-bg-paper: #FFFFFF;
      --ck-bg-elevated: #FFF8F0;
      --ck-bg-input: #FFFFFF;
      --ck-bg-hover: #FFF3E6;
      --ck-border: #FDE0BC;
      --ck-text-primary: #78350F;
      --ck-text-secondary: #92400E;
      --ck-text-muted: #B45309;
      --ck-accent: #EA580C;
      --ck-shadow: rgba(120,53,15,0.06);
    }

    body, html {
      background-color: #FFFBF5 !important;
    }
    .MuiPaper-root, .MuiCard-root, .MuiDialog-paper {
      background-color: #FFFFFF !important;
      border-color: #FDE0BC !important;
    }
    .MuiDrawer-paper {
      background-color: #FFF8F0 !important;
      border-color: #FDE0BC !important;
    }
    .MuiTableCell-head {
      background-color: #FFF3E6 !important;
      color: #92400E !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #FDE0BC !important;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #EA580C !important;
    }
    .MuiInputLabel-root.Mui-focused {
      color: #EA580C !important;
    }
    .MuiTab-root.Mui-selected { color: #EA580C !important; }
    .MuiTabs-indicator { background-color: #EA580C !important; }
    .MuiDivider-root, hr { border-color: #FDE0BC !important; }
  `,

  cool: `
    :root {
      --ck-bg: #F0FDFA;
      --ck-bg-paper: #FFFFFF;
      --ck-bg-elevated: #ECFDF5;
      --ck-bg-input: #FFFFFF;
      --ck-bg-hover: #E0F7F3;
      --ck-border: #A7F3D0;
      --ck-text-primary: #134E4A;
      --ck-text-secondary: #115E59;
      --ck-text-muted: #0D9488;
      --ck-accent: #0891B2;
      --ck-shadow: rgba(19,78,74,0.06);
    }

    body, html {
      background-color: #F0FDFA !important;
    }
    .MuiPaper-root, .MuiCard-root, .MuiDialog-paper {
      background-color: #FFFFFF !important;
      border-color: #A7F3D0 !important;
    }
    .MuiDrawer-paper {
      background-color: #ECFDF5 !important;
      border-color: #A7F3D0 !important;
    }
    .MuiTableCell-head {
      background-color: #E0F7F3 !important;
      color: #115E59 !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #A7F3D0 !important;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #0891B2 !important;
    }
    .MuiInputLabel-root.Mui-focused {
      color: #0891B2 !important;
    }
    .MuiTab-root.Mui-selected { color: #0891B2 !important; }
    .MuiTabs-indicator { background-color: #0891B2 !important; }
    .MuiDivider-root, hr { border-color: #A7F3D0 !important; }
  `,
};

/**
 * Applies user preferences (theme, scale) to the document.
 * Call this once at the app level after preferences are loaded.
 *
 * @param {{ siteTheme: string, siteScale: number }} preferences
 */
export default function useApplyPreferences(preferences) {
  // Apply scale
  useEffect(() => {
    const scale = preferences?.siteScale;
    if (scale && [90, 100, 110, 120].includes(scale)) {
      document.documentElement.style.fontSize = `${scale}%`;
    }
    return () => {
      document.documentElement.style.fontSize = '';
    };
  }, [preferences?.siteScale]);

  // Apply theme — inject real CSS into the page
  useEffect(() => {
    const theme = preferences?.siteTheme || 'default';
    document.documentElement.setAttribute('data-site-theme', theme);

    // Get or create the style element
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }

    // Inject theme CSS
    styleEl.textContent = THEME_CSS[theme] || THEME_CSS.default;

    return () => {
      document.documentElement.removeAttribute('data-site-theme');
      const el = document.getElementById(STYLE_ID);
      if (el) el.textContent = THEME_CSS.default;
    };
  }, [preferences?.siteTheme]);
}
