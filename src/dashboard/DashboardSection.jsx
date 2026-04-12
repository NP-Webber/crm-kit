import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Box, Typography, Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * DashboardSection — מקטע אקורדיון בתוך דשבורד
 *
 * מקטע מתקפל עם כותרת, אייקון, מונה וקו נקי.
 *
 * @param {Object} props
 * @param {string} props.title - כותרת המקטע
 * @param {React.ReactNode} [props.icon] - אייקון MUI
 * @param {string} [props.iconColor='inherit'] - צבע האייקון (MUI palette)
 * @param {number|string} [props.count] - מספר פריטים (מוצג כ-Chip)
 * @param {string} [props.countColor='default'] - צבע ה-Chip: primary/secondary/success/error/info/warning
 * @param {boolean} [props.defaultExpanded=true] - האם המקטע פתוח כברירת מחדל
 * @param {string} [props.headerBgColor='grey.50'] - צבע רקע הכותרת
 * @param {string} [props.borderColor='divider'] - צבע הגבול
 * @param {boolean} [props.noPadding=false] - ללא ריפוד בתוכן (שימושי לטבלאות)
 * @param {Object} [props.sx] - סגנון נוסף
 * @param {React.ReactNode} props.children - תוכן המקטע
 */
const DashboardSection = ({
  title,
  icon,
  iconColor = 'inherit',
  count,
  countColor = 'default',
  defaultExpanded = true,
  headerBgColor = 'grey.50',
  borderColor = 'divider',
  noPadding = false,
  sx = {},
  children,
}) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor,
        '&:before': { display: 'none' },
        ...sx,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ bgcolor: headerBgColor }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon &&
            React.cloneElement(icon, {
              fontSize: 'small',
              color: iconColor !== 'inherit' ? iconColor : undefined,
              sx: iconColor === 'inherit' ? {} : { color: iconColor },
            })
          }
          <Typography fontWeight={700} sx={iconColor !== 'inherit' ? { color: iconColor } : {}}>
            {title}
          </Typography>
          {count != null && (
            <Chip
              label={count}
              size="small"
              color={countColor}
              sx={{ fontWeight: 700 }}
            />
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={noPadding ? { p: 0 } : {}}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default DashboardSection;
