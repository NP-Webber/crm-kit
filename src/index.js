// ═══════════════════════════════════════════════
//  @crm-kit/core — ספריית בסיס למערכות CRM
// ═══════════════════════════════════════════════

// ── TableKit — מערכת טבלאות ──
export {
  TableKit,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  ColumnPicker,
  ColumnFilter,
  OPERATORS,
  RowDrawer,
} from './tablekit/index.js';

// ── Layout — סרגל צד + מסגרת ──
export { CrmLayout } from './layout/index.js';

// ── Sidebar — סרגל צד מתקדם ──
export {
  Sidebar,
  MobileMenuButton,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
  MessagesCenter,
  SidebarProvider,
  useSidebar,
  SIDEBAR_WIDTH_EXPANDED,
  SIDEBAR_WIDTH_COLLAPSED,
  COLORS as SIDEBAR_COLORS,
  SPACING as SIDEBAR_SPACING,
  RADIUS as SIDEBAR_RADIUS,
  TYPOGRAPHY as SIDEBAR_TYPOGRAPHY,
  TRANSITION_DURATION,
  TRANSITION_EASING,
} from './sidebar/index.js';

// ── PersonalArea — אזור אישי ──
export {
  PersonalAreaLayout,
  PersonalDetailsForm,
  PreferencesPanel,
  ThemeSelector,
  InterfaceScaleSelector,
  ProfileImageUploader,
  AdminGlobalProfileImageSection,
  SettingsCard,
  FieldRow,
  useApplyPreferences,
  PA_COLORS,
  PA_SPACING,
  PA_TYPOGRAPHY,
  PA_RADIUS,
  PA_SHADOWS,
  PA_TRANSITIONS,
  SITE_THEMES,
  SITE_SCALES,
} from './personal-area/index.js';

// ── Theme — שפה עיצובית ──
export {
  createCrmTheme,
  defaultCrmTheme,
  CrmThemeProvider,
} from './theme/index.js';

// ── Dashboard — רכיבי דשבורד ──
export {
  StatCard,
  DashboardGrid,
  DashboardPanel,
  DashboardSection,
  SimpleTable,
  CollapsibleGroup,
  ReportTable,
} from './dashboard/index.js';

// ── Auth — הזדהות ──
export {
  AuthProvider,
  useAuth,
  ProtectedRoute,
  LoginPage,
  LoginFields,
} from './auth/index.js';

// ── API — שירותי HTTP ──
export { createApiClient } from './api/index.js';

// ── Import — ייבוא קבצים ──
export { ImportSection } from './import/index.js';

// ── Audio — שמע ──
export { AudioPlayer, AudioRecorder } from './audio/index.js';

// ── Tasks — ניהול משימות ──
export {
  TasksDashboard,
  TaskCreateDialog,
  TaskNotifications,
  getPriorityColor,
  getPriorityText,
  getTaskTypeText,
  getQuickDate,
  categorizeTasksByDate,
  getTaskStats,
} from './tasks/index.js';

// ── Utils — כלי עזר ──
export { toHebrewNumeral } from './utils/index.js';
