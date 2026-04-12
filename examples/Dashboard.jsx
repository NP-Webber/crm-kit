// ═══════════════════════════════════════════════
//  דוגמת שימוש — דשבורד עם StatCard + ReportTable
// ═══════════════════════════════════════════════
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  StatCard,
  DashboardGrid,
  ReportTable,
} from '@crm-kit/core';
import api from '../services/api';

const salesColumns = [
  { key: 'month', title: 'חודש', sortable: true },
  { key: 'orders', title: 'הזמנות', sortable: true },
  { key: 'revenue', title: 'הכנסות (₪)', sortable: true },
  { key: 'avgOrder', title: 'ממוצע להזמנה', sortable: true },
];

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/reports/stats'),
      api.get('/reports/monthly-sales'),
    ]).then(([statsRes, salesRes]) => {
      setStats(statsRes.data);
      setSalesData(salesRes.data);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        דשבורד
      </Typography>

      {/* כרטיסי סטטיסטיקה */}
      <DashboardGrid columns={4}>
        <StatCard
          icon={<PeopleOutlinedIcon />}
          value={stats.totalCustomers || 0}
          label="סה״כ לקוחות"
          color="#1565c0"
          trend="+12%"
        />
        <StatCard
          icon={<ShoppingCartOutlinedIcon />}
          value={stats.monthlyOrders || 0}
          label="הזמנות החודש"
          color="#2e7d32"
        />
        <StatCard
          icon={<AttachMoneyOutlinedIcon />}
          value={`₪${(stats.revenue || 0).toLocaleString()}`}
          label="הכנסות החודש"
          color="#e65100"
        />
        <StatCard
          icon={<TrendingUpIcon />}
          value={`${stats.growthRate || 0}%`}
          label="קצב צמיחה"
          color="#7b1fa2"
          trend={stats.growthRate > 0 ? `+${stats.growthRate}%` : `${stats.growthRate}%`}
        />
      </DashboardGrid>

      {/* טבלאת דוח */}
      <ReportTable
        title="דוח מכירות חודשי"
        columns={salesColumns}
        data={salesData}
        loading={loading}
        exportFileName="monthly-sales"
        showFilters
      />
    </div>
  );
};

export default Dashboard;
