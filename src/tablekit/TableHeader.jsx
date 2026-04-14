import React, { useRef, useCallback } from 'react';

const TableHeader = ({
  columns, sortKey, sortOrder, onSort, columnWidths = {}, onColumnResize,
  filterState, onFilterIconClick, activeFilterCol,
  pinnedFilters = {}, conditionFilters = {}, valueFilters = {}, onRemovePin,
}) => {
  const resizingRef = useRef(null);

  const renderSortIcon = (col) => {
    if (col.sortable === false) return null;
    const isActive = sortKey === col.key;
    let icon = '⇅';
    if (isActive) {
      icon = sortOrder === 'asc' ? '▲' : '▼';
    }
    return (
      <span className={`tablekit-sort-icon ${isActive ? 'active' : ''}`}>
        {icon}
      </span>
    );
  };

  const startResize = useCallback((e, colKey) => {
    e.preventDefault();
    e.stopPropagation();
    if (!onColumnResize) return;

    const th = e.currentTarget.closest('th');
    const startWidth = th.getBoundingClientRect().width;
    const startX = e.clientX;

    resizingRef.current = { colKey, startX, startWidth };
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMove = (moveEvent) => {
      if (!resizingRef.current) return;
      const dx = resizingRef.current.startX - moveEvent.clientX;
      const newWidth = Math.max(40, resizingRef.current.startWidth + dx);
      onColumnResize(resizingRef.current.colKey, newWidth);
    };

    const onUp = () => {
      resizingRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [onColumnResize]);

  return (
    <thead className="tablekit-thead">
      <tr>
        {columns.map((col) => {
          const hasFilter = filterState ? filterState(col.key) : false;
          const pins = pinnedFilters[col.key] || [];
          const vals = valueFilters[col.key] || [];
          const cond = conditionFilters[col.key];
          const hasChips = pins.length > 0 || vals.length > 0 || (cond && cond.operator);
          return (
            <th
              key={col.key}
              className={`tablekit-th ${col.sortable !== false ? 'sortable' : ''}${hasChips ? ' has-filter-chips' : ''}`}
              style={{
                textAlign: col.align || 'right',
                position: 'relative',
                overflow: 'visible',
              }}
              onClick={() => col.sortable !== false && onSort(col.key)}
            >
              <span className="tablekit-th-content">
                {col.title}
                {renderSortIcon(col)}
              </span>
              {col.filterable !== false && onFilterIconClick && (
                <span
                  className={`tablekit-th-filter-icon${hasFilter ? ' active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); onFilterIconClick(col.key, e); }}
                  title="סינון"
                >
                  &#9660;
                </span>
              )}
              {hasChips && (
                <div className="tablekit-th-chips" onClick={e => e.stopPropagation()}>
                  {pins.map(pin => (
                    <span key={pin} className="tablekit-th-chip">
                      <span className="tablekit-th-chip-text" title={pin}>{pin}</span>
                      {onRemovePin && (
                        <button
                          type="button"
                          className="tablekit-th-chip-remove"
                          onClick={e => { e.stopPropagation(); onRemovePin(col.key, pin); }}
                          title={`הסר "${pin}"`}
                        >×</button>
                      )}
                    </span>
                  ))}
                  {vals.length > 0 && (
                    <span className="tablekit-th-chip tablekit-th-chip-count" title={vals.join(', ')}>
                      {vals.length} ערכים
                    </span>
                  )}
                  {cond && cond.operator && (
                    <span className="tablekit-th-chip tablekit-th-chip-cond" title={`${cond.operator} ${cond.value || ''}`}>
                      תנאי
                    </span>
                  )}
                </div>
              )}
              {onColumnResize && (
                <span
                  className="tablekit-resize-handle"
                  onMouseDown={(e) => startResize(e, col.key)}
                  onClick={(e) => e.stopPropagation()}
                  title="גרור לשינוי רוחב"
                />
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
