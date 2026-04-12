// ═══════════════════════════════════════════════
//  דוגמת שימוש — דף רשימה עם TableKit
// ═══════════════════════════════════════════════
import React, { useState, useCallback } from 'react';
import { Typography, Chip } from '@mui/material';
import { TableKit } from '@crm-kit/core';
import api from '../services/api'; // ה-API client של הפרויקט

const columns = [
  { key: 'name', title: 'שם', sortable: true, filterable: true, width: '180px' },
  { key: 'email', title: 'אימייל', sortable: true, filterable: true, width: '220px' },
  { key: 'phone', title: 'טלפון', filterable: true, width: '140px' },
  { key: 'city', title: 'עיר', sortable: true, filterable: true },
  {
    key: 'status',
    title: 'סטטוס',
    sortable: true,
    filterable: true,
    render: (val) => (
      <Chip
        label={val === 'active' ? 'פעיל' : 'לא פעיל'}
        color={val === 'active' ? 'success' : 'default'}
        size="small"
      />
    ),
  },
  { key: 'createdAt', title: 'תאריך הצטרפות', sortable: true },
];

const CustomersList = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFetch = useCallback(async ({ page, pageSize, sort, order, filters }) => {
    setLoading(true);
    try {
      const params = { page, pageSize, sort, order, ...filters };
      const res = await api.get('/customers', { params });
      setData(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      console.error('שגיאה בטעינת לקוחות:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // שליפת כל הנתונים ליצוא CSV
  const handleExportFetch = useCallback(async (params) => {
    const res = await api.get('/customers', { params: { ...params, all: 1 } });
    return res.data.data;
  }, []);

  return (
    <div>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        לקוחות
      </Typography>

      <TableKit
        columns={columns}
        data={data}
        total={total}
        loading={loading}
        onFetch={handleFetch}
        onExportFetch={handleExportFetch}
        exportFileName="customers"
        emptyMessage="אין לקוחות להצגה"
      />
    </div>
  );
};

export default CustomersList;
