import React, { useState, useCallback } from 'react';
import { Box, Typography, Collapse, Chip, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * CollapsibleGroup — רשימת פריטים מתקפלים
 *
 * כל פריט מציג כותרת לחיצה עם חץ + Chip סיכום, ותוכן מתקפל.
 * מיועד לתצוגת פילוח (עיר→מבחנים, נושא→פריטים וכו').
 *
 * @param {Object} props
 * @param {Array<Object>} props.items - רשימת הפריטים
 * @param {Function} props.getKey - (item) → מזהה ייחודי (ברירת מחדל: item.key || index)
 * @param {Function} props.renderHeader - (item, isOpen) → React node לכותרת
 * @param {Function} props.renderContent - (item) → React node לתוכן
 * @param {Function} [props.getLabel] - (item) → טקסט לכותרת (חלופה ל-renderHeader)
 * @param {Function} [props.getBadge] - (item) → ערך ל-Chip (מספר סיכום)
 * @param {string} [props.badgeColor='secondary'] - צבע Chip
 * @param {React.ReactNode} [props.itemIcon] - אייקון לכל פריט
 * @param {string} [props.iconColor='secondary'] - צבע האייקון
 * @param {Array<string>} [props.defaultOpenKeys=[]] - מפתחות פתוחים כברירת מחדל
 * @param {boolean} [props.loading=false] - מצב טעינה
 * @param {string} [props.emptyMsg='אין נתונים'] - הודעה כשאין פריטים
 */
const CollapsibleGroup = ({
  items = [],
  getKey,
  renderHeader,
  renderContent,
  getLabel,
  getBadge,
  badgeColor = 'secondary',
  itemIcon,
  iconColor = 'secondary',
  defaultOpenKeys = [],
  loading = false,
  emptyMsg = 'אין נתונים',
}) => {
  const [openKeys, setOpenKeys] = useState(() => {
    const map = {};
    defaultOpenKeys.forEach((k) => { map[k] = true; });
    return map;
  });

  const toggle = useCallback((key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  if (loading) return <CircularProgress size={20} sx={{ m: 2 }} />;

  if (!items.length) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ p: 1.5 }}>
        {emptyMsg}
      </Typography>
    );
  }

  return (
    <Box>
      {items.map((item, index) => {
        const key = getKey ? getKey(item) : (item.key ?? index);
        const isOpen = !!openKeys[key];

        return (
          <Box
            key={key}
            sx={{
              mb: 1,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            {/* ── כותרת לחיצה ── */}
            <Box
              onClick={() => toggle(key)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                py: 1,
                cursor: 'pointer',
                bgcolor: isOpen ? `${iconColor}.50` : 'grey.50',
                borderRadius: isOpen ? '4px 4px 0 0' : 1,
                '&:hover': { bgcolor: `${iconColor}.100` },
                transition: 'background-color 0.15s',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ExpandMoreIcon
                  fontSize="small"
                  sx={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    color: `${iconColor}.main`,
                  }}
                />
                {itemIcon &&
                  React.cloneElement(itemIcon, { fontSize: 'small', color: iconColor })
                }
                {renderHeader
                  ? renderHeader(item, isOpen)
                  : (
                    <Typography fontWeight={700}>
                      {getLabel ? getLabel(item) : String(key)}
                    </Typography>
                  )
                }
              </Box>

              {getBadge && (
                <Chip
                  label={getBadge(item)}
                  color={badgeColor}
                  size="small"
                  sx={{ fontWeight: 700 }}
                />
              )}
            </Box>

            {/* ── תוכן מתקפל ── */}
            <Collapse in={isOpen}>
              {renderContent(item)}
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default CollapsibleGroup;
