import React, { useEffect, useRef, useState } from 'react';

const RowDrawer = ({ open, onClose, row, columns, renderDetail, onOpenCard }) => {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [frozenRow, setFrozenRow] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open && row) setFrozenRow(row);
  }, [open, row]);

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    } else {
      setAnimate(false);
      const t = setTimeout(() => { setVisible(false); setFrozenRow(null); }, 220);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`tablekit-modal-overlay ${animate ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`tablekit-modal-panel ${animate ? 'open' : ''}`}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
      >
        <div className="tablekit-drawer-header">
          <span className="tablekit-drawer-title">פרטי רשומה</span>
          <button className="tablekit-drawer-close" onClick={onClose} type="button" aria-label="סגור">
            ✕
          </button>
        </div>

        <div className="tablekit-drawer-body">
          {renderDetail ? (
            renderDetail(frozenRow)
          ) : (
            <dl className="tablekit-drawer-dl">
              {columns
                .filter((col) => col.key !== '_actions')
                .map((col) => {
                  const raw = frozenRow?.[col.key];
                  const rendered = col.render ? col.render(raw, frozenRow) : raw;
                  return (
                    <div key={col.key} className="tablekit-drawer-row">
                      <dt className="tablekit-drawer-label">{col.title}</dt>
                      <dd className="tablekit-drawer-value">
                        {rendered !== null && rendered !== undefined && rendered !== ''
                          ? rendered
                          : <span className="tablekit-drawer-empty">—</span>}
                      </dd>
                    </div>
                  );
                })}
            </dl>
          )}
        </div>

        {onOpenCard && frozenRow && (
          <div className="tablekit-drawer-footer">
            <button
              className="tablekit-drawer-open-card"
              type="button"
              onClick={() => { onClose(); onOpenCard(frozenRow); }}
            >
              פתח כרטיסיה
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RowDrawer;
