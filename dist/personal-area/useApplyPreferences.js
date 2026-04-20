"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useApplyPreferences;
var _react = require("react");
// CRM KIT — useApplyPreferences: hook to apply theme & scale to the DOM

var STYLE_ID = 'crm-kit-theme-style';

/**
 * Full theme CSS definitions.
 * Each theme overrides CSS custom properties + adds global overrides for
 * MUI components, layout surfaces, text, inputs, cards, tables, etc.
 */
var THEME_CSS = {
  "default": "\n    :root {\n      --ck-bg: #FAFBFC;\n      --ck-bg-paper: #FFFFFF;\n      --ck-bg-elevated: #FFFFFF;\n      --ck-bg-input: #FFFFFF;\n      --ck-bg-hover: #F0F2F5;\n      --ck-border: #E3E6EB;\n      --ck-text-primary: #1A1D23;\n      --ck-text-secondary: #6B7280;\n      --ck-text-muted: #9CA3AF;\n      --ck-accent: #4F46E5;\n      --ck-shadow: rgba(0,0,0,0.06);\n    }\n  ",
  dark: "\n    :root {\n      --ck-bg: #111827;\n      --ck-bg-paper: #1F2937;\n      --ck-bg-elevated: #283141;\n      --ck-bg-input: #283141;\n      --ck-bg-hover: #374151;\n      --ck-border: #374151;\n      --ck-text-primary: #F3F4F6;\n      --ck-text-secondary: #D1D5DB;\n      --ck-text-muted: #9CA3AF;\n      --ck-accent: #818CF8;\n      --ck-shadow: rgba(0,0,0,0.3);\n    }\n\n    /* \u2500\u2500 Global background & text \u2500\u2500 */\n    body,\n    html {\n      background-color: #111827 !important;\n      color: #F3F4F6 !important;\n    }\n\n    /* \u2500\u2500 Main content area \u2500\u2500 */\n    [class*=\"MuiBox-root\"] {\n      color: inherit;\n    }\n\n    /* \u2500\u2500 MUI Paper / Card \u2500\u2500 */\n    .MuiPaper-root,\n    .MuiCard-root,\n    .MuiCardContent-root,\n    .MuiDialog-paper,\n    .MuiPopover-paper,\n    .MuiMenu-paper,\n    .MuiAutocomplete-paper {\n      background-color: #1F2937 !important;\n      color: #F3F4F6 !important;\n      border-color: #374151 !important;\n    }\n\n    /* \u2500\u2500 Drawer / Sidebar \u2500\u2500 */\n    .MuiDrawer-paper {\n      background-color: #1a2233 !important;\n      color: #F3F4F6 !important;\n      border-color: #374151 !important;\n    }\n\n    /* \u2500\u2500 Tables \u2500\u2500 */\n    .MuiTable-root,\n    .MuiTableContainer-root {\n      background-color: #1F2937 !important;\n    }\n    .MuiTableCell-root {\n      color: #F3F4F6 !important;\n      border-color: #374151 !important;\n    }\n    .MuiTableCell-head {\n      background-color: #283141 !important;\n      color: #D1D5DB !important;\n      font-weight: 600 !important;\n    }\n    .MuiTableRow-root:hover {\n      background-color: #283141 !important;\n    }\n\n    /* \u2500\u2500 Inputs \u2500\u2500 */\n    .MuiOutlinedInput-root,\n    .MuiInputBase-root {\n      background-color: #283141 !important;\n      color: #F3F4F6 !important;\n    }\n    .MuiOutlinedInput-notchedOutline {\n      border-color: #4B5563 !important;\n    }\n    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n      border-color: #6B7280 !important;\n    }\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n      border-color: #818CF8 !important;\n    }\n    .MuiInputLabel-root {\n      color: #9CA3AF !important;\n    }\n    .MuiInputLabel-root.Mui-focused {\n      color: #818CF8 !important;\n    }\n    .MuiSelect-icon {\n      color: #9CA3AF !important;\n    }\n\n    /* \u2500\u2500 Typography \u2500\u2500 */\n    .MuiTypography-root {\n      color: inherit !important;\n    }\n\n    /* \u2500\u2500 Buttons \u2014 keep primary/secondary colors but darken the outlines \u2500\u2500 */\n    .MuiButton-outlined {\n      border-color: #4B5563 !important;\n      color: #D1D5DB !important;\n    }\n    .MuiButton-outlined:hover {\n      background-color: #283141 !important;\n    }\n    .MuiButton-text {\n      color: #D1D5DB !important;\n    }\n\n    /* \u2500\u2500 Chips / Badges \u2500\u2500 */\n    .MuiChip-root {\n      background-color: #283141 !important;\n      color: #D1D5DB !important;\n      border-color: #4B5563 !important;\n    }\n\n    /* \u2500\u2500 Tabs \u2500\u2500 */\n    .MuiTab-root {\n      color: #9CA3AF !important;\n    }\n    .MuiTab-root.Mui-selected {\n      color: #818CF8 !important;\n    }\n    .MuiTabs-indicator {\n      background-color: #818CF8 !important;\n    }\n\n    /* \u2500\u2500 Dividers \u2500\u2500 */\n    .MuiDivider-root,\n    hr {\n      border-color: #374151 !important;\n    }\n\n    /* \u2500\u2500 Tooltips \u2500\u2500 */\n    .MuiTooltip-tooltip {\n      background-color: #374151 !important;\n      color: #F3F4F6 !important;\n    }\n\n    /* \u2500\u2500 Alerts \u2500\u2500 */\n    .MuiAlert-root {\n      color: #F3F4F6 !important;\n    }\n    .MuiAlert-standardInfo {\n      background-color: rgba(129,140,248,0.15) !important;\n    }\n    .MuiAlert-standardSuccess {\n      background-color: rgba(16,185,129,0.15) !important;\n    }\n    .MuiAlert-standardError {\n      background-color: rgba(239,68,68,0.15) !important;\n    }\n    .MuiAlert-standardWarning {\n      background-color: rgba(245,158,11,0.15) !important;\n    }\n\n    /* \u2500\u2500 Snackbar \u2500\u2500 */\n    .MuiSnackbarContent-root {\n      background-color: #283141 !important;\n      color: #F3F4F6 !important;\n    }\n\n    /* \u2500\u2500 Lists \u2500\u2500 */\n    .MuiListItem-root:hover,\n    .MuiMenuItem-root:hover {\n      background-color: #283141 !important;\n    }\n    .MuiListItemText-primary {\n      color: #F3F4F6 !important;\n    }\n    .MuiListItemText-secondary {\n      color: #9CA3AF !important;\n    }\n\n    /* \u2500\u2500 Icons (inherit) \u2500\u2500 */\n    .MuiSvgIcon-root {\n      color: inherit;\n    }\n\n    /* \u2500\u2500 Campaign tabs bar (DashLayout fixed bar) \u2500\u2500 */\n    [style*=\"position: fixed\"][style*=\"background-color: rgb(232, 232, 232)\"],\n    [style*=\"backgroundColor: #e8e8e8\"],\n    div[style*=\"background-color: rgb(232, 232, 232)\"] {\n      background-color: #1a2233 !important;\n      border-color: #374151 !important;\n    }\n\n    /* \u2500\u2500 Scrollbar \u2500\u2500 */\n    ::-webkit-scrollbar { width: 8px; height: 8px; }\n    ::-webkit-scrollbar-track { background: #1F2937; }\n    ::-webkit-scrollbar-thumb { background: #4B5563; border-radius: 4px; }\n    ::-webkit-scrollbar-thumb:hover { background: #6B7280; }\n\n    /* \u2500\u2500 Modal / Backdrop \u2500\u2500 */\n    .MuiBackdrop-root {\n      background-color: rgba(0,0,0,0.7) !important;\n    }\n\n    /* \u2500\u2500 Accordion \u2500\u2500 */\n    .MuiAccordion-root {\n      background-color: #1F2937 !important;\n      color: #F3F4F6 !important;\n    }\n    .MuiAccordionSummary-root {\n      color: #F3F4F6 !important;\n    }\n\n    /* \u2500\u2500 Switch / Checkbox \u2500\u2500 */\n    .MuiSwitch-track {\n      background-color: #4B5563 !important;\n    }\n    .MuiCheckbox-root {\n      color: #6B7280 !important;\n    }\n  ",
  warm: "\n    :root {\n      --ck-bg: #FFFBF5;\n      --ck-bg-paper: #FFFFFF;\n      --ck-bg-elevated: #FFF8F0;\n      --ck-bg-input: #FFFFFF;\n      --ck-bg-hover: #FFF3E6;\n      --ck-border: #FDE0BC;\n      --ck-text-primary: #78350F;\n      --ck-text-secondary: #92400E;\n      --ck-text-muted: #B45309;\n      --ck-accent: #EA580C;\n      --ck-shadow: rgba(120,53,15,0.06);\n    }\n\n    body, html {\n      background-color: #FFFBF5 !important;\n    }\n    .MuiPaper-root, .MuiCard-root, .MuiDialog-paper {\n      background-color: #FFFFFF !important;\n      border-color: #FDE0BC !important;\n    }\n    .MuiDrawer-paper {\n      background-color: #FFF8F0 !important;\n      border-color: #FDE0BC !important;\n    }\n    .MuiTableCell-head {\n      background-color: #FFF3E6 !important;\n      color: #92400E !important;\n    }\n    .MuiOutlinedInput-notchedOutline {\n      border-color: #FDE0BC !important;\n    }\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n      border-color: #EA580C !important;\n    }\n    .MuiInputLabel-root.Mui-focused {\n      color: #EA580C !important;\n    }\n    .MuiTab-root.Mui-selected { color: #EA580C !important; }\n    .MuiTabs-indicator { background-color: #EA580C !important; }\n    .MuiDivider-root, hr { border-color: #FDE0BC !important; }\n  ",
  cool: "\n    :root {\n      --ck-bg: #F0FDFA;\n      --ck-bg-paper: #FFFFFF;\n      --ck-bg-elevated: #ECFDF5;\n      --ck-bg-input: #FFFFFF;\n      --ck-bg-hover: #E0F7F3;\n      --ck-border: #A7F3D0;\n      --ck-text-primary: #134E4A;\n      --ck-text-secondary: #115E59;\n      --ck-text-muted: #0D9488;\n      --ck-accent: #0891B2;\n      --ck-shadow: rgba(19,78,74,0.06);\n    }\n\n    body, html {\n      background-color: #F0FDFA !important;\n    }\n    .MuiPaper-root, .MuiCard-root, .MuiDialog-paper {\n      background-color: #FFFFFF !important;\n      border-color: #A7F3D0 !important;\n    }\n    .MuiDrawer-paper {\n      background-color: #ECFDF5 !important;\n      border-color: #A7F3D0 !important;\n    }\n    .MuiTableCell-head {\n      background-color: #E0F7F3 !important;\n      color: #115E59 !important;\n    }\n    .MuiOutlinedInput-notchedOutline {\n      border-color: #A7F3D0 !important;\n    }\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n      border-color: #0891B2 !important;\n    }\n    .MuiInputLabel-root.Mui-focused {\n      color: #0891B2 !important;\n    }\n    .MuiTab-root.Mui-selected { color: #0891B2 !important; }\n    .MuiTabs-indicator { background-color: #0891B2 !important; }\n    .MuiDivider-root, hr { border-color: #A7F3D0 !important; }\n  "
};

/**
 * Applies user preferences (theme, scale) to the document.
 * Call this once at the app level after preferences are loaded.
 *
 * @param {{ siteTheme: string, siteScale: number }} preferences
 */
function useApplyPreferences(preferences) {
  // Apply scale
  (0, _react.useEffect)(function () {
    var scale = preferences === null || preferences === void 0 ? void 0 : preferences.siteScale;
    if (scale && [90, 100, 110, 120].includes(scale)) {
      document.documentElement.style.fontSize = "".concat(scale, "%");
    }
    return function () {
      document.documentElement.style.fontSize = '';
    };
  }, [preferences === null || preferences === void 0 ? void 0 : preferences.siteScale]);

  // Apply theme — inject real CSS into the page
  (0, _react.useEffect)(function () {
    var theme = (preferences === null || preferences === void 0 ? void 0 : preferences.siteTheme) || 'default';
    document.documentElement.setAttribute('data-site-theme', theme);

    // Get or create the style element
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }

    // Inject theme CSS
    styleEl.textContent = THEME_CSS[theme] || THEME_CSS["default"];
    return function () {
      document.documentElement.removeAttribute('data-site-theme');
      var el = document.getElementById(STYLE_ID);
      if (el) el.textContent = THEME_CSS["default"];
    };
  }, [preferences === null || preferences === void 0 ? void 0 : preferences.siteTheme]);
}
//# sourceMappingURL=useApplyPreferences.js.map