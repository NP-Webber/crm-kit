import React from 'react';
import {
  Box, Typography,
  Table, TableHead, TableBody, TableRow, TableCell, TableContainer,
} from '@mui/material';

/**
 * SimpleTable — טבלה קלת-משקל לדשבורד
 *
 * טבלה פשוטה עם כותרת דביקה, גלילה, וגובה מקסימלי.
 * מיועדת לשימוש בתוך DashboardSection.
 *
 * @param {Object} props
 * @param {Array<{key, title, align?, render?}>} props.columns - הגדרות עמודות
 *   - key: שם השדה ב-row
 *   - title: כותרת העמודה
 *   - align: יישור ('right'|'center'|'left'), ברירת מחדל: 'right'
 *   - render(value, row): פונקציית עיבוד מותאמת אישית
 * @param {Array<Object>} props.rows - שורות הנתונים
 * @param {string} [props.emptyMsg='אין נתונים'] - הודעה כשאין נתונים
 * @param {number|string} [props.maxHeight=340] - גובה מקסימלי לגלילה
 * @param {boolean} [props.stickyHeader=true] - כותרת דביקה
 * @param {Object} [props.sx] - סגנון נוסף
 */
const SimpleTable = ({
  columns = [],
  rows = [],
  emptyMsg = 'אין נתונים',
  maxHeight = 340,
  stickyHeader = true,
  sx = {},
}) => {
  if (!rows.length) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ p: 1.5 }}>
        {emptyMsg}
      </Typography>
    );
  }

  return (
    <TableContainer
      component={Box}
      sx={{ maxHeight, overflowY: 'auto', ...sx }}
    >
      <Table size="small" stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                align={col.align || 'right'}
                sx={{ fontWeight: 700, bgcolor: 'grey.50' }}
              >
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row._id || row.id || i} hover>
              {columns.map((col) => (
                <TableCell key={col.key} align={col.align || 'right'}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] ?? '—')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
