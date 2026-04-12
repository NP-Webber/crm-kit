import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import TableKit from '../tablekit/TableKit.js';

/**
 * ReportTable — טבלאת דוח client-side מבוססת TableKit
 *
 * @param {Object} props
 * @param {string} props.title - כותרת הדוח
 * @param {Array} props.columns - הגדרות עמודות (כמו TableKit)
 * @param {Array} props.data - נתונים
 * @param {boolean} props.loading
 * @param {string} props.emptyMessage
 * @param {string} props.exportFileName
 * @param {boolean} props.showExport - ברירת מחדל: true
 * @param {boolean} props.showFilters - ברירת מחדל: false
 * @param {boolean} props.showColumnPicker - ברירת מחדל: false
 * @param {boolean} props.showPagination - ברירת מחדל: false
 */
const ReportTable = ({
  title,
  columns = [],
  data = [],
  loading = false,
  emptyMessage = 'אין נתונים',
  exportFileName,
  showExport = true,
  showFilters = false,
  showColumnPicker = false,
  sx = {},
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2.5,
        border: '1px solid #e3e8ef',
        ...sx,
      }}
    >
      {title && (
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="subtitle1" fontWeight={700} color="text.primary">
            {title}
          </Typography>
        </Box>
      )}
      <TableKit
        columns={columns}
        data={data}
        total={data.length}
        loading={loading}
        emptyMessage={emptyMessage}
        exportFileName={exportFileName || title || 'report'}
        clientSideMode
        showColumnPicker={showColumnPicker}
        showExport={showExport}
        showFilters={showFilters}
        urlSync={false}
      />
    </Paper>
  );
};

export default ReportTable;
