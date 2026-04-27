import React, { useState, useRef, useEffect, useMemo } from 'react';

const OPERATORS = [
  { key: 'contains', label: 'מכיל', needsValue: true },
  { key: 'not_contains', label: 'לא מכיל', needsValue: true },
  { key: 'equals', label: 'שווה ל', needsValue: true },
  { key: 'not_equals', label: 'שונה מ', needsValue: true },
  { key: 'starts_with', label: 'מתחיל ב', needsValue: true },
  { key: 'ends_with', label: 'מסתיים ב', needsValue: true },
  { key: 'gt', label: 'גדול מ', needsValue: true, numeric: true },
  { key: 'gte', label: 'גדול או שווה ל', needsValue: true, numeric: true },
  { key: 'lt', label: 'קטן מ', needsValue: true, numeric: true },
  { key: 'lte', label: 'קטן או שווה ל', needsValue: true, numeric: true },
  { key: 'between', label: 'בין', needsValue: true, needsValue2: true, numeric: true },
  { key: 'empty', label: 'ריק', needsValue: false },
  { key: 'not_empty', label: 'לא ריק', needsValue: false },
];

const ColumnFilter = ({
  col,
  data = [],
  textValue = '',
  selectedValues = [],
  onTextChange,
  onValuesChange,
  fetchValues,
  pinnedTexts = [],
  onPinnedTextsChange,
  conditionFilter,
  onConditionFilterChange,
  defaultOpen = false,
  onClose,
  popupStyle,
  autoFocusInput = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const [search, setSearch] = useState('');
  const [serverValues, setServerValues] = useState(null);
  const [loadingValues, setLoadingValues] = useState(false);
  const [isAllDeselected, setIsAllDeselected] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const [tab, setTab] = useState('values');
  const [condOp, setCondOp] = useState('');
  const [condVal, setCondVal] = useState('');
  const [condVal2, setCondVal2] = useState('');
  const ref = useRef(null);
  // Snapshot of data captured when the dropdown opens — frozen during selection
  const dataSnapshotRef = useRef(data);

  useEffect(() => {
    setCondOp(conditionFilter?.operator || '');
    setCondVal(conditionFilter?.value || '');
    setCondVal2(conditionFilter?.value2 || '');
  }, [conditionFilter]);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        if (onClose) onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  useEffect(() => {
    if (!open) setIsAllDeselected(false);
  }, [open]);

  const loadValues = async () => {
    if (fetchValues && serverValues === null && !loadingValues) {
      setLoadingValues(true);
      try {
        const vals = await fetchValues();
        setServerValues(Array.isArray(vals) ? vals : []);
      } catch {
        setServerValues([]);
      } finally {
        setLoadingValues(false);
      }
    }
  };

  // Load values on initial open if defaultOpen; also snapshot data
  useEffect(() => {
    if (defaultOpen) {
      dataSnapshotRef.current = data;
      if (tab === 'values') loadValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = async () => {
    const next = !open;
    setOpen(next);
    if (!next && onClose) onClose();
    if (next && ref.current) {
      // Snapshot current data so the list stays stable during selection
      dataSnapshotRef.current = data;
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 2,
        right: Math.max(4, window.innerWidth - rect.right),
      });
    }
    if (next && tab === 'values') await loadValues();
  };

  const handleTabChange = async (newTab) => {
    setTab(newTab);
    if (newTab === 'values') await loadValues();
  };

  const allValues = useMemo(() => {
    if (serverValues !== null) return serverValues;
    const seen = new Set();
    // Use snapshot (frozen at open-time) so selections don't shrink the list
    const source = open ? dataSnapshotRef.current : data;
    source.forEach((row) => {
      const v = row[col.key];
      if (v !== null && v !== undefined && v !== '') seen.add(String(v));
    });
    return [...seen].sort();
  }, [serverValues, data, open, col.key]);

  const filtered = search
    ? allValues.filter((v) => v.toLowerCase().includes(search.toLowerCase()))
    : allValues;

  const hasCondition = !!conditionFilter?.operator;
  const isActive = textValue || selectedValues.length > 0 || pinnedTexts.length > 0 || hasCondition;

  const toggleValue = (v) => {
    const next = selectedValues.includes(v)
      ? selectedValues.filter((x) => x !== v)
      : [...selectedValues, v];
    onValuesChange(col.key, next);
  };

  const selectAll = () => {
    setIsAllDeselected(false);
    onValuesChange(col.key, []);
  };

  const clearAll = () => {
    onTextChange(col.key, '');
    onValuesChange(col.key, []);
    if (onPinnedTextsChange) onPinnedTextsChange(col.key, []);
    if (onConditionFilterChange) onConditionFilterChange(col.key, null);
    setCondOp('');
    setCondVal('');
    setCondVal2('');
    setSearch('');
    setOpen(false);
    if (onClose) onClose();
  };

  const pinText = () => {
    const val = textValue.trim();
    if (!val || !onPinnedTextsChange) return;
    if (!pinnedTexts.includes(val)) {
      onPinnedTextsChange(col.key, [...pinnedTexts, val]);
    }
    onTextChange(col.key, '');
  };

  const removePin = (val) => {
    onPinnedTextsChange(col.key, pinnedTexts.filter((p) => p !== val));
  };

  const applyCondition = () => {
    if (!condOp) {
      if (onConditionFilterChange) onConditionFilterChange(col.key, null);
    } else {
      if (onConditionFilterChange) onConditionFilterChange(col.key, { operator: condOp, value: condVal, value2: condVal2 });
    }
    setOpen(false);
  };

  const clearCondition = () => {
    setCondOp('');
    setCondVal('');
    setCondVal2('');
    if (onConditionFilterChange) onConditionFilterChange(col.key, null);
  };

  const currentOp = OPERATORS.find((o) => o.key === condOp);

  return (
    <div className="tablekit-col-filter" ref={ref}>
      <div className="tablekit-col-filter-row">
        <input
          className={`tablekit-filter-input ${isActive ? 'active' : ''}`}
          type="text"
          placeholder={`${col.title}...`}
          value={textValue}
          onChange={(e) => onTextChange(col.key, e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') pinText(); }}
          autoFocus={autoFocusInput}
        />
        {onPinnedTextsChange && (
          <button
            className={`tablekit-col-pin-btn${textValue.trim() ? ' ready' : ''}`}
            type="button"
            title="נעץ חיפוש זה (Enter)"
            onClick={pinText}
          >
            📌
          </button>
        )}
        <button
          className={`tablekit-col-filter-btn${(selectedValues.length > 0 || hasCondition) ? ' active' : ''}`}
          type="button"
          title="סנן לפי ערכים או תנאי"
          onClick={handleOpen}
        >
          {selectedValues.length > 0 ? `▼${selectedValues.length}` : hasCondition ? '▼✦' : '⌄'}
        </button>
      </div>

      {pinnedTexts.length > 0 && (
        <div className="tablekit-pin-chips">
          {pinnedTexts.map((p) => (
            <span key={p} className="tablekit-pin-chip" title={p}>
              <span className="tablekit-pin-chip-text">{p}</span>
              <button
                type="button"
                className="tablekit-pin-chip-remove"
                onClick={() => removePin(p)}
                title={`הסר "${p}"`}
              >×</button>
            </span>
          ))}
        </div>
      )}

      {hasCondition && (
        <div className="tablekit-pin-chips">
          <span className="tablekit-pin-chip tablekit-condition-chip">
            <span className="tablekit-pin-chip-text">
              {OPERATORS.find(o => o.key === conditionFilter.operator)?.label || ''}
              {conditionFilter.value ? `: ${conditionFilter.value}` : ''}
              {conditionFilter.value2 ? ` – ${conditionFilter.value2}` : ''}
            </span>
            <button
              type="button"
              className="tablekit-pin-chip-remove"
              onClick={clearCondition}
              title="הסר תנאי"
            >×</button>
          </span>
        </div>
      )}

      {open && (
        <div
          className="tablekit-col-filter-dropdown"
          style={popupStyle || { position: 'fixed', top: dropdownPos.top, right: dropdownPos.right, left: 'auto' }}
        >
          <div className="tablekit-filter-tabs">
            <button
              type="button"
              className={`tablekit-filter-tab${tab === 'values' ? ' active' : ''}`}
              onClick={() => handleTabChange('values')}
            >
              ערכים
            </button>
            <button
              type="button"
              className={`tablekit-filter-tab${tab === 'condition' ? ' active' : ''}`}
              onClick={() => handleTabChange('condition')}
            >
              תנאי
            </button>
          </div>

          {tab === 'values' && (
            <>
              <div className="tablekit-col-filter-search">
                <input
                  type="text"
                  placeholder="חפש ערך..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="tablekit-col-filter-actions">
                <button type="button" onClick={selectAll}>בחר הכל</button>
                <button type="button" onClick={() => setIsAllDeselected(true)}>נקה בחירה</button>
              </div>

              <div className="tablekit-col-filter-list">
                {loadingValues && (
                  <div className="tablekit-col-filter-empty">טוען...</div>
                )}
                {!loadingValues && filtered.length === 0 && (
                  <div className="tablekit-col-filter-empty">אין ערכים</div>
                )}
                {!loadingValues && filtered.map((v) => {
                  const isChecked = !isAllDeselected && (selectedValues.length === 0 || selectedValues.includes(v));
                  return (
                    <label key={v} className="tablekit-col-filter-item">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {
                          if (isAllDeselected) {
                            setIsAllDeselected(false);
                            onValuesChange(col.key, [v]);
                          } else if (selectedValues.length === 0) {
                            const rest = allValues.filter((x) => x !== v);
                            onValuesChange(col.key, rest);
                          } else {
                            toggleValue(v);
                          }
                        }}
                      />
                      <span title={v}>{v}</span>
                    </label>
                  );
                })}
              </div>
            </>
          )}

          {tab === 'condition' && (
            <div className="tablekit-condition-panel">
              <div className="tablekit-condition-field">
                <label className="tablekit-condition-label">תנאי סינון</label>
                <select
                  className="tablekit-condition-select"
                  value={condOp}
                  onChange={(e) => {
                    setCondOp(e.target.value);
                    const op = OPERATORS.find(o => o.key === e.target.value);
                    if (op && !op.needsValue) {
                      setCondVal('');
                      setCondVal2('');
                    }
                  }}
                >
                  <option value="">— בחר תנאי —</option>
                  {OPERATORS.map((op) => (
                    <option key={op.key} value={op.key}>{op.label}</option>
                  ))}
                </select>
              </div>

              {currentOp?.needsValue && (
                <div className="tablekit-condition-field">
                  <label className="tablekit-condition-label">
                    {currentOp.needsValue2 ? 'מ-' : 'ערך'}
                  </label>
                  <input
                    className="tablekit-condition-input"
                    type={currentOp.numeric ? 'number' : 'text'}
                    value={condVal}
                    onChange={(e) => setCondVal(e.target.value)}
                    placeholder="הזן ערך..."
                    autoFocus
                  />
                </div>
              )}

              {currentOp?.needsValue2 && (
                <div className="tablekit-condition-field">
                  <label className="tablekit-condition-label">עד</label>
                  <input
                    className="tablekit-condition-input"
                    type="number"
                    value={condVal2}
                    onChange={(e) => setCondVal2(e.target.value)}
                    placeholder="הזן ערך..."
                  />
                </div>
              )}

              <div className="tablekit-condition-actions">
                <button
                  type="button"
                  className="tablekit-condition-apply"
                  onClick={applyCondition}
                  disabled={condOp && currentOp?.needsValue && !condVal}
                >
                  החל
                </button>
                {hasCondition && (
                  <button
                    type="button"
                    className="tablekit-condition-clear"
                    onClick={clearCondition}
                  >
                    נקה תנאי
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="tablekit-col-filter-footer">
            <button type="button" onClick={clearAll}>נקה הכל</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { OPERATORS };
export default ColumnFilter;
