import React from 'react';
import { Box } from '@mui/material';

/**
 * DashboardGrid — רשת responsive לכרטיסי דשבורד
 *
 * @param {Object} props
 * @param {number} props.columns - מספר עמודות (ברירת מחדל: 4)
 * @param {number} props.gap - מרווח בין פריטים (ברירת מחדל: 2.5)
 * @param {React.ReactNode} props.children
 */
const DashboardGrid = ({ columns = 4, gap = 2.5, children, sx = {} }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: `repeat(2, 1fr)`,
          md: `repeat(${Math.min(columns, 3)}, 1fr)`,
          lg: `repeat(${columns}, 1fr)`,
        },
        gap,
        mb: 3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default DashboardGrid;
