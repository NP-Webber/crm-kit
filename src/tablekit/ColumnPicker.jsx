import React, { useState, useRef, useEffect } from 'react';

const ColumnPicker = ({ allColumns, visibleKeys, onChange }) => {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleToggle = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        right: Math.max(4, window.innerWidth - rect.right),
      });
    }
    setOpen((v) => !v);
  };

  const toggle = (key) => {
    if (visibleKeys.includes(key)) {
      if (visibleKeys.length > 1) onChange(visibleKeys.filter((k) => k !== key));
    } else {
      onChange([...visibleKeys, key]);
    }
  };

  const showAll = () => onChange(allColumns.map((c) => c.key));
  const hideAll = () => onChange([allColumns[0].key]);

  const visibleCount = visibleKeys.length;
  const totalCount = allColumns.length;

  return (
    <div className="tablekit-column-picker" ref={ref}>
      <button
        className={`tablekit-column-picker-btn${open ? ' open' : ''}`}
        onClick={handleToggle}
        type="button"
      >
        <span className="tablekit-column-picker-icon">⊞</span>
        עמודות
        <span className="tablekit-column-picker-badge">{visibleCount}/{totalCount}</span>
      </button>

      {open && (
        <div
          className="tablekit-column-picker-dropdown"
          style={{ position: 'fixed', top: dropdownPos.top, right: dropdownPos.right, left: 'auto' }}
        >
          <div className="tablekit-column-picker-header">
            ניהול עמודות
          </div>
          <div className="tablekit-column-picker-actions">
            <button type="button" onClick={showAll}>✓ הצג הכל</button>
            <button type="button" onClick={hideAll}>✕ הסתר הכל</button>
          </div>
          <div className="tablekit-column-picker-list">
            {allColumns.map((col) => {
              const checked = visibleKeys.includes(col.key);
              return (
                <label key={col.key} className={`tablekit-column-picker-item${checked ? ' checked' : ''}`} onClick={() => toggle(col.key)}>
                  <span className={`tablekit-column-picker-checkbox${checked ? ' checked' : ''}`}>
                    {checked && '✓'}
                  </span>
                  {col.title}
                </label>
              );
            })}
          </div>
          <div className="tablekit-column-picker-footer">
            {visibleCount} מתוך {totalCount} עמודות פעילות
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnPicker;
