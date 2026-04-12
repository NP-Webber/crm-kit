# @crm-kit/core

ספריית בסיס למערכות CRM — רכיבי React מוכנים לשימוש חוזר.

## מה כלול בספריה

### 🗓️ TableKit — מערכת טבלאות מלאה
- טבלה עם מיון, סינון (טקסט / ערכים / תנאים), דפדוף, ייצוא CSV
- בורר עמודות, שינוי רוחב עמודות בגרירה
- מצב server-side ו-client-side
- חלון פרטי שורה (Modal)
- תמיכה מלאה ב-RTL + עברית
- רספונסיבי — תצוגת כרטיסיות במובייל

### 📋 Sidebar — סרגל צד ניווט
- Layout עם סרגל קבוע + AppBar
- תמיכה בתפריט מותאם אישית (NAV_ITEMS)
- סינון פריטים לפי הרשאות (adminOnly)
- שם מערכת דינמי
- אזור פרופיל משתמש + התנתקות

### 🎨 Theme — שפה עיצובית
- MUI Theme מוגדר מראש (צבעים, טיפוגרפיה, כפתורים, Paper, Chip)
- גופנים עבריים (Assistant, Rubik)
- RTL מלא
- CSS globals
- createCrmTheme() — יצירת ערכת נושא מותאמת עם overrides

### 📊 Dashboard Kit — רכיבי דשבורד
- StatCard — כרטיס סטטיסטיקה (אייקון + מספר + תווית)
- DashboardGrid — רשת דשבורד responsive
- ReportTable — טבלאת דוח client-side עם TableKit

### 🔧 Utilities
- API factory עם interceptors (token refresh, error handling)
- AuthContext — ניהול הזדהות
- ImportSection — ייבוא Excel/CSV
- AudioPlayer + AudioRecorder
- Hebrew numerals (גימטריה)

## התקנה

```bash
# בפרויקט חדש — הוסף כתלות מקומית
npm install ../crm-kit
# או צור symlink
npm link ../crm-kit
```

## שימוש בסיסי

```jsx
// index.js — הגדרת אפליקציה
import { CrmThemeProvider, createCrmTheme, AuthProvider } from '@crm-kit/core';
import { BrowserRouter } from 'react-router-dom';

const theme = createCrmTheme({
  primary: '#1565c0',    // שנה לצבע הרצוי
  secondary: '#1976d2',
  systemLabel: 'מערכת ניהול',
});

ReactDOM.createRoot(root).render(
  <CrmThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </CrmThemeProvider>
);
```

```jsx
// App.jsx
import { CrmLayout } from '@crm-kit/core';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

const navItems = [
  { label: 'לקוחות', path: '/customers', icon: PeopleIcon },
  { label: 'הזמנות', path: '/orders', icon: AssignmentIcon },
  { label: 'הגדרות', path: '/settings', icon: SettingsIcon, adminOnly: true },
];

<CrmLayout navItems={navItems} systemLabel="מערכת CRM">
  <Routes>
    <Route path="customers" element={<CustomersList />} />
  </Routes>
</CrmLayout>
```

```jsx
// דף טבלה
import { TableKit } from '@crm-kit/core';

const columns = [
  { key: 'name', title: 'שם', sortable: true, filterable: true },
  { key: 'email', title: 'אימייל', width: '200px' },
  { key: 'status', title: 'סטטוס', render: (val) => <Chip label={val} /> },
];

<TableKit
  columns={columns}
  data={customers}
  total={totalCount}
  loading={loading}
  onFetch={handleFetch}
  exportFileName="customers"
/>
```

```jsx
// דשבורד
import { StatCard, DashboardGrid, ReportTable } from '@crm-kit/core';

<DashboardGrid>
  <StatCard icon={<PeopleIcon />} value={150} label="לקוחות פעילים" color="#1565c0" />
  <StatCard icon={<OrderIcon />} value={42} label="הזמנות החודש" color="#2e7d32" />
</DashboardGrid>

<ReportTable
  title="דוח מכירות"
  columns={reportColumns}
  data={reportData}
/>
```

## מבנה תיקיות

```
crm-kit/
├── package.json
├── README.md
├── src/
│   ├── index.js                    ← כל ה-exports
│   ├── tablekit/                   ← מערכת טבלאות מלאה
│   │   ├── TableKit.jsx
│   │   ├── TableKit.css
│   │   ├── TableHeader.jsx
│   │   ├── TableBody.jsx
│   │   ├── TableRow.jsx
│   │   ├── TableCell.jsx
│   │   ├── Pagination.jsx
│   │   ├── ColumnPicker.jsx
│   │   ├── ColumnFilter.jsx
│   │   ├── RowDrawer.jsx
│   │   └── index.js
│   ├── layout/                     ← סרגל צד + layout
│   │   ├── CrmLayout.jsx
│   │   └── index.js
│   ├── theme/                      ← שפה עיצובית
│   │   ├── createCrmTheme.js
│   │   ├── CrmThemeProvider.jsx
│   │   ├── crmGlobals.css
│   │   └── index.js
│   ├── dashboard/                  ← רכיבי דשבורד
│   │   ├── StatCard.jsx
│   │   ├── DashboardGrid.jsx
│   │   ├── ReportTable.jsx
│   │   └── index.js
│   ├── auth/                       ← הזדהות
│   │   ├── AuthContext.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── index.js
│   ├── api/                        ← שירותי API
│   │   ├── createApiClient.js
│   │   └── index.js
│   ├── import/                     ← ייבוא קבצים
│   │   ├── ImportSection.jsx
│   │   └── index.js
│   ├── audio/                      ← שמע
│   │   ├── AudioPlayer.jsx
│   │   ├── AudioRecorder.jsx
│   │   └── index.js
│   └── utils/                      ← כלי עזר
│       ├── hebrewNumerals.js
│       └── index.js
```

## התאמה לפרויקט חדש

1. **העתק/link** את `crm-kit` לפרויקט
2. **צור theme** עם `createCrmTheme({ primary, secondary, background })`
3. **הגדר navItems** בהתאם לדפים שלך
4. **השתמש ב-TableKit** בכל דף רשימה
5. **הוסף דשבורדים** עם StatCard + ReportTable
6. **הגדר API** עם `createApiClient({ baseURL })`

## הרחבה

כל רכיב בספריה נבנה להיות:
- **עצמאי** — אין תלויות פנימיות בין המודולים
- **גמיש** — props רבים לבקרה מלאה
- **מותאם RTL** — עברית/ערבית מלא
- **Responsive** — מובייל + דסקטופ
