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
} from './auth/index.js';

// ── API — שירותי HTTP ──
export { createApiClient } from './api/index.js';

// ── Import — ייבוא קבצים ──
export { ImportSection } from './import/index.js';

// ── Audio — שמע ──
export { AudioPlayer, AudioRecorder } from './audio/index.js';

// ── Utils — כלי עזר ──
export { toHebrewNumeral } from './utils/index.js';
