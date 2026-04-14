import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import TableHeader from './TableHeader.js';
import TableBody from './TableBody.js';
import Pagination from './Pagination.js';
import ColumnPicker from './ColumnPicker.js';
import ColumnFilter from './ColumnFilter.js';
import RowDrawer from './RowDrawer.js';
import './TableKit.css';

/** הערכת תנאי סינון על ערך תא */
const evaluateCondition = (cellValue, condition) => {
  if (!condition || !condition.operator) return true;
  const { operator, value, value2 } = condition;
  const cellStr = String(cellValue ?? '').toLowerCase();
  const valStr = String(value ?? '').toLowerCase();

  switch (operator) {
    case 'contains': return cellStr.includes(valStr);
    case 'not_contains': return !cellStr.includes(valStr);
    case 'equals': return cellStr === valStr;
    case 'not_equals': return cellStr !== valStr;
    case 'starts_with': return cellStr.startsWith(valStr);
    case 'ends_with': return cellStr.endsWith(valStr);
    case 'gt': return Number(cellValue) > Number(value);
    case 'gte': return Number(cellValue) >= Number(value);
    case 'lt': return Number(cellValue) < Number(value);
    case 'lte': return Number(cellValue) <= Number(value);
    case 'between': return Number(cellValue) >= Number(value) && Number(cellValue) <= Number(value2);
    case 'empty': return cellValue === null || cellValue === undefined || cellValue === '';
    case 'not_empty': return cellValue !== null && cellValue !== undefined && cellValue !== '';
    default: return true;
  }
};

const parseWidth = (w) => {
  if (!w) return null;
  if (typeof w === 'number') return w;
  const n = parseInt(w, 10);
  return isNaN(n) ? null : n;
};

/**
 * TableKit — רכיב טבלה עצמאי מלא
 *
 * @param {Object} props
 * @param {Array} props.columns - הגדרות עמודות:
 *   { key, title, width?, minWidth?, align?, render?(value,row), sortable?, filterable? }
 * @param {Array} props.data - מערך נתונים
 * @param {number} props.total - סה"כ רשומות (server-side)
 * @param {boolean} props.loading
 * @param {Function} props.onFetch - callback({ page, pageSize, sort, order, filters })
 * @param {string} props.emptyMessage
 * @param {boolean} props.showColumnPicker - הצגת בורר עמודות (ברירת מחדל: true)
 * @param {boolean} props.showExport - הצגת כפתור CSV (ברירת מחדל: true)
 * @param {boolean} props.showFilters - הצגת שורת סינון (ברירת מחדל: true)
 * @param {string} props.exportFileName - שם קובץ CSV
 * @param {Function} props.onRowDoubleClick - callback(row) — אם לא מסופק, נפתחת חלונית ברירת מחדל
 * @param {Function} props.renderDrawerDetail - רינדור מותאם לחלונית (row) => JSX
 * @param {Function} props.onOpenCard - callback(row) — כפתור "פתח כרטיסיה" בתחתית ה-RowDrawer
 * @param {Function} props.fetchValuesFor - async (colKey) => string[]  — שליפת ערכים ייחודיים מהשרת
 * @param {boolean} props.clientSideMode - עיבוד מקומי (סינון, מיון, דפדוף)
 * @param {Function} props.onExportFetch - שליפת כל הנתונים ליצוא (server-side)
 * @param {boolean} props.urlSync - סנכרון state עם URL params (ברירת מחדל: true)
 * @param {Function} props.onStateChange - callback({ page, pageSize, sort, order, filters }) — חלופה ל-URL sync
 * @param {boolean} props.showSearch - הצגת תיבת חיפוש גלובלית (ברירת מחדל: true)
 * @param {string} props.searchPlaceholder - placeholder לתיבת חיפוש
 */
const TableKit = ({
  columns = [],
  data = [],
  total = 0,
  loading = false,
  onFetch,
  emptyMessage = 'אין נתונים להצגה',
  showColumnPicker = true,
  showExport = true,
  showFilters = true,
  showSearch = true,
  searchPlaceholder = 'חיפוש...',
  exportFileName = 'export',
  onRowDoubleClick,
  renderDrawerDetail,
  onOpenCard,
  fetchValuesFor,
  resetPageTrigger,
  allColumnsForPicker,
  visibleColumnKeys,
  onVisibleColumnsChange,
  clientSideMode = false,
  onExportFetch,
  urlSync = true,
  onStateChange,
}) => {
  // URL sync — אופציונלי (נשתמש ב-hook רק אם urlSync=true)
  // אם אין react-router — שומרים state רגיל
  let searchParams, setSearchParams;
  try {
    if (urlSync) {
      const mod = require('react-router-dom');
      [searchParams, setSearchParams] = mod.useSearchParams();
    }
  } catch {
    // react-router not available
  }

  const getParam = (key, defaultVal) => {
    if (searchParams) return searchParams.get(key) || defaultVal;
    return defaultVal;
  };

  const [page, setPage] = useState(() => parseInt(getParam('page', '1'), 10));
  const [pageSize, setPageSize] = useState(() => parseInt(getParam('pageSize', '100'), 10));
  const [sortKey, setSortKey] = useState(() => getParam('sort', ''));
  const [sortOrder, setSortOrder] = useState(() => getParam('order', 'asc'));

  const [filters, setFilters] = useState(() => {
    const f = {};
    columns.forEach((col) => {
      if (col.filterable !== false) {
        f[col.key] = getParam(`f_${col.key}`, '');
      }
    });
    return f;
  });

  const [globalSearch, setGlobalSearch] = useState(() => getParam('q', ''));
  const [valueFilters, setValueFilters] = useState({});
  const [pinnedFilters, setPinnedFilters] = useState({});
  const [conditionFilters, setConditionFilters] = useState({});

  const colWidthsKey = `${exportFileName || 'tablekit'}:colwidths`;
  const [columnWidths, setColumnWidths] = useState(() => {
    try {
      const saved = localStorage.getItem(colWidthsKey);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const handleColumnResize = useCallback((key, width) => {
    setColumnWidths((prev) => {
      const next = { ...prev, [key]: Math.max(40, Math.round(width)) };
      try { localStorage.setItem(colWidthsKey, JSON.stringify(next)); } catch {}
      return next;
    });
  }, [colWidthsKey]);

  const resetColumnWidths = useCallback(() => {
    setColumnWidths({});
    try { localStorage.removeItem(colWidthsKey); } catch {}
  }, [colWidthsKey]);

  const isFirstResetRef = useRef(true);
  useEffect(() => {
    if (isFirstResetRef.current) { isFirstResetRef.current = false; return; }
    setPage(1);
  }, [resetPageTrigger]);

  const prevDataLenRef = useRef(data.length);
  useEffect(() => {
    if (clientSideMode && data.length !== prevDataLenRef.current) {
      prevDataLenRef.current = data.length;
      setPage(1);
    }
  }, [clientSideMode, data.length]);

  const hasCustomWidths = Object.keys(columnWidths).length > 0;

  const [drawerRow, setDrawerRow] = useState(null);

  // Drag-to-scroll for horizontal scrolling
  const containerRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;
    // Don't hijack drags on interactive elements
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'BUTTON' || tag === 'TEXTAREA' || e.target.closest('.tablekit-resize-handle') || e.target.closest('button') || e.target.closest('select') || e.target.closest('input')) return;
    // Only activate if table is wider than container
    if (container.scrollWidth <= container.clientWidth) return;
    dragState.current = { isDragging: true, startX: e.pageX - container.offsetLeft, scrollLeft: container.scrollLeft };
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  }, []);

  const handleMouseUp = useCallback(() => {
    const container = containerRef.current;
    if (!container || !dragState.current.isDragging) return;
    dragState.current.isDragging = false;
    container.style.cursor = container.scrollWidth > container.clientWidth ? 'grab' : '';
    container.style.userSelect = '';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragState.current.isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    container.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  const [visibleKeys, setVisibleKeys] = useState(() =>
    columns.map((c) => c.key)
  );

  const columnKeysStr = columns.map((c) => c.key).join(',');
  useEffect(() => {
    setVisibleKeys(columnKeysStr.split(',').filter(Boolean));
  }, [columnKeysStr]);

  const visibleColumns = useMemo(
    () => columns.filter((c) => visibleKeys.includes(c.key)),
    [columns, visibleKeys]
  );

  // Client-side processing
  const processedData = useMemo(() => {
    if (!clientSideMode) return null;
    let result = [...data];

    // Global search — כל מילה יכולה להתאים בעמודה אחרת
    if (globalSearch.trim()) {
      const words = globalSearch.trim().toLowerCase().split(/\s+/);
      result = result.filter((row) =>
        words.every((word) =>
          columns.some((col) => {
            const val = String(row[col.key] ?? '').toLowerCase();
            return val.includes(word);
          })
        )
      );
    }

    const allFilterKeys = new Set([
      ...Object.keys(filters),
      ...Object.keys(pinnedFilters),
    ]);
    allFilterKeys.forEach((k) => {
      const text = filters[k] || '';
      const pins = pinnedFilters[k] || [];
      const terms = [...pins, text].filter(Boolean);
      if (terms.length === 0) return;
      result = result.filter((row) => {
        const val = String(row[k] || '').toLowerCase();
        return terms.some((t) => val.includes(t.toLowerCase()));
      });
    });

    Object.entries(valueFilters).forEach(([key, vals]) => {
      if (!vals || vals.length === 0) return;
      result = result.filter((row) => vals.includes(String(row[key])));
    });

    Object.entries(conditionFilters).forEach(([key, cond]) => {
      if (!cond || !cond.operator) return;
      result = result.filter((row) => evaluateCondition(row[key], cond));
    });

    if (sortKey) {
      result.sort((a, b) => {
        const va = String(a[sortKey] || '').toLowerCase();
        const vb = String(b[sortKey] || '').toLowerCase();
        const na = Number(va), nb = Number(vb);
        if (!isNaN(na) && !isNaN(nb)) return sortOrder === 'asc' ? na - nb : nb - na;
        return sortOrder === 'asc' ? va.localeCompare(vb, 'he') : vb.localeCompare(va, 'he');
      });
    }

    return result;
  }, [clientSideMode, data, globalSearch, columns, filters, pinnedFilters, valueFilters, conditionFilters, sortKey, sortOrder]);

  const filteredData = useMemo(() => {
    if (clientSideMode) return processedData || [];
    if (Object.keys(valueFilters).length === 0) return data;
    return data.filter((row) =>
      Object.entries(valueFilters).every(([key, vals]) => {
        if (!vals || vals.length === 0) return true;
        return vals.includes(String(row[key]));
      })
    );
  }, [clientSideMode, processedData, data, valueFilters]);

  const pagedData = useMemo(() => {
    if (!clientSideMode) return filteredData;
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [clientSideMode, filteredData, page, pageSize]);

  const clientTotal = clientSideMode ? filteredData.length : total;

  const updateUrl = useCallback(
    (newState) => {
      if (!setSearchParams) return;
      const params = new URLSearchParams(searchParams);
      Object.entries(newState).forEach(([k, v]) => {
        if (v && v !== '' && v !== '1' && k !== 'page') {
          params.set(k, String(v));
        } else if (k === 'page') {
          params.set(k, String(v));
        } else {
          params.delete(k);
        }
      });
      setSearchParams(params, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const doFetch = useCallback(() => {
    if (clientSideMode || !onFetch) return;
    const activeFilters = {};
    const allKeys = new Set([
      ...Object.keys(filters),
      ...Object.keys(pinnedFilters),
    ]);
    allKeys.forEach((k) => {
      const text = filters[k] || '';
      const pins = pinnedFilters[k] || [];
      if (pins.length > 0 && text) {
        activeFilters[k] = [...pins, text].join('|');
      } else if (pins.length > 0) {
        activeFilters[k] = pins.join('|');
      } else if (text) {
        activeFilters[k] = text;
      }
    });
    onFetch({ page, pageSize, sort: sortKey, order: sortOrder, filters: activeFilters, valueFilters, conditionFilters, search: globalSearch || undefined });
  }, [clientSideMode, onFetch, page, pageSize, sortKey, sortOrder, filters, valueFilters, pinnedFilters, conditionFilters, globalSearch]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  // Sort handler — 3-click cycle: asc → desc → clear
  const handleSort = (key) => {
    if (sortKey === key) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
        setPage(1);
        updateUrl({ sort: key, order: 'desc', page: 1 });
      } else {
        setSortKey('');
        setSortOrder('asc');
        setPage(1);
        updateUrl({ sort: '', order: '', page: 1 });
      }
    } else {
      setSortKey(key);
      setSortOrder('asc');
      setPage(1);
      updateUrl({ sort: key, order: 'asc', page: 1 });
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    updateUrl({ page: newPage });
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPage(1);
    updateUrl({ pageSize: newSize, page: 1 });
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setPage(1);
    const urlState = { page: 1 };
    Object.entries(newFilters).forEach(([k, v]) => {
      urlState[`f_${k}`] = v;
    });
    updateUrl(urlState);
  };

  const handleValueFilterChange = (key, values) => {
    setValueFilters((prev) => {
      const next = { ...prev };
      if (!values || values.length === 0) {
        delete next[key];
      } else {
        next[key] = values;
      }
      return next;
    });
    setPage(1);
  };

  const handlePinnedTextsChange = (key, values) => {
    setPinnedFilters((prev) => {
      const next = { ...prev };
      if (!values || values.length === 0) {
        delete next[key];
      } else {
        next[key] = values;
      }
      return next;
    });
    setPage(1);
  };

  const handleConditionFilterChange = (key, condition) => {
    setConditionFilters((prev) => {
      const next = { ...prev };
      if (!condition) {
        delete next[key];
      } else {
        next[key] = condition;
      }
      return next;
    });
    setPage(1);
  };

  const handleGlobalSearchChange = (e) => {
    const val = e.target.value;
    setGlobalSearch(val);
    setPage(1);
    updateUrl({ q: val, page: 1 });
  };

  const hasActiveFilters =
    Object.values(filters).some(Boolean) ||
    Object.keys(valueFilters).length > 0 ||
    Object.keys(pinnedFilters).length > 0 ||
    Object.keys(conditionFilters).length > 0 ||
    globalSearch.trim() !== '';

  const clearAllFilters = useCallback(() => {
    const emptyFilters = {};
    columns.forEach((col) => { if (col.filterable !== false) emptyFilters[col.key] = ''; });
    setFilters(emptyFilters);
    setValueFilters({});
    setPinnedFilters({});
    setConditionFilters({});
    setGlobalSearch('');
    setPage(1);
    const urlState = { page: 1 };
    columns.forEach((col) => { if (col.filterable !== false) urlState[`f_${col.key}`] = ''; });
    updateUrl(urlState);
  }, [columns, updateUrl]);

  const handleRowDoubleClick = (row) => {
    if (onRowDoubleClick) {
      onRowDoubleClick(row);
    } else {
      setDrawerRow(row);
    }
  };

  // CSV Export
  const [exporting, setExporting] = useState(false);
  const handleExport = async () => {
    let exportData;
    if (clientSideMode) {
      exportData = filteredData;
    } else if (onExportFetch) {
      try {
        setExporting(true);
        const activeFilters = {};
        const allKeys = new Set([
          ...Object.keys(filters),
          ...Object.keys(pinnedFilters),
        ]);
        allKeys.forEach((k) => {
          const text = filters[k] || '';
          const pins = pinnedFilters[k] || [];
          if (pins.length > 0 && text) {
            activeFilters[k] = [...pins, text].join('|');
          } else if (pins.length > 0) {
            activeFilters[k] = pins.join('|');
          } else if (text) {
            activeFilters[k] = text;
          }
        });
        exportData = await onExportFetch({ sort: sortKey, order: sortOrder, filters: activeFilters, valueFilters, conditionFilters });
      } catch (err) {
        console.error('שגיאה בייצוא:', err);
        return;
      } finally {
        setExporting(false);
      }
    } else {
      exportData = data;
    }
    const header = visibleColumns.map((c) => c.title).join(',');
    const rows = exportData.map((row) =>
      visibleColumns
        .map((col) => {
          let val = row[col.key];
          if (val === null || val === undefined) val = '';
          if (typeof val === 'object') val = JSON.stringify(val);
          val = String(val).replace(/"/g, '""');
          return `"${val}"`;
        })
        .join(',')
    );

    const BOM = '\uFEFF';
    const csvContent = BOM + [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${exportFileName}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="tablekit-wrapper">
      {/* Toolbar */}
      <div className="tablekit-toolbar">
        {showSearch && (
          <div className="tablekit-search-box">
            <span className="tablekit-search-icon">&#128269;</span>
            <input
              type="text"
              className="tablekit-search-input"
              placeholder={searchPlaceholder}
              value={globalSearch}
              onChange={handleGlobalSearchChange}
            />
            {globalSearch && (
              <button
                type="button"
                className="tablekit-search-clear"
                onClick={() => { setGlobalSearch(''); setPage(1); updateUrl({ q: '', page: 1 }); }}
                title="נקה חיפוש"
              >
                ✕
              </button>
            )}
          </div>
        )}
        <div className="tablekit-toolbar-right">
          {showColumnPicker && (
            <ColumnPicker
              allColumns={allColumnsForPicker || columns}
              visibleKeys={allColumnsForPicker ? (visibleColumnKeys || visibleKeys) : visibleKeys}
              onChange={allColumnsForPicker ? (onVisibleColumnsChange || setVisibleKeys) : setVisibleKeys}
            />
          )}
          {showExport && (
            <button
              className="tablekit-export-btn"
              onClick={handleExport}
              disabled={exporting || (!filteredData || filteredData.length === 0) && !onExportFetch}
              type="button"
            >
              {exporting ? 'מייצא...' : 'ייצוא CSV'}
            </button>
          )}
          {showFilters && hasActiveFilters && (
            <button
              className="tablekit-clear-filters-btn"
              onClick={clearAllFilters}
              type="button"
              title="נקה את כל הסינונים"
            >
              ✕ נקה סינון
            </button>
          )}
          {hasCustomWidths && (
            <button
              className="tablekit-reset-widths-btn"
              onClick={resetColumnWidths}
              type="button"
              title="אפס רוחבי עמודות לברירת מחדל"
            >
              ⇔ אפס רוחבים
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div
        className="tablekit-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        <table className="tablekit-table">
          <colgroup>
            {visibleColumns.map((col) => {
              const customW = columnWidths[col.key];
              const defW = parseWidth(col.width) || parseWidth(col.minWidth);
              const w = customW || defW;
              return <col key={col.key} style={w ? { width: `${w}px` } : {}} />;
            })}
          </colgroup>
          <TableHeader
            columns={visibleColumns}
            sortKey={sortKey}
            sortOrder={sortOrder}
            onSort={handleSort}
            columnWidths={columnWidths}
            onColumnResize={handleColumnResize}
          />

          {showFilters && (
            <thead>
              <tr className="tablekit-filter-row">
                {visibleColumns.map((col) => (
                  <th key={col.key} className="tablekit-filter-cell">
                    {col.filterable !== false ? (
                      <ColumnFilter
                        col={col}
                        data={data}
                        textValue={filters[col.key] || ''}
                        selectedValues={valueFilters[col.key] || []}
                        onTextChange={handleFilterChange}
                        onValuesChange={handleValueFilterChange}
                        fetchValues={fetchValuesFor ? fetchValuesFor(col.key) : undefined}
                        pinnedTexts={pinnedFilters[col.key] || []}
                        onPinnedTextsChange={handlePinnedTextsChange}
                        conditionFilter={conditionFilters[col.key] || null}
                        onConditionFilterChange={handleConditionFilterChange}
                      />
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <TableBody
            data={clientSideMode ? pagedData : filteredData}
            columns={visibleColumns}
            loading={loading}
            emptyMessage={emptyMessage}
            onRowDoubleClick={handleRowDoubleClick}
          />
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        pageSize={pageSize}
        total={clientTotal}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />

      {/* Row Drawer */}
      <RowDrawer
        open={!!drawerRow}
        onClose={() => setDrawerRow(null)}
        row={drawerRow}
        columns={visibleColumns}
        renderDetail={renderDrawerDetail}
        onOpenCard={onOpenCard}
      />
    </div>
  );
};

export default TableKit;
