import React from 'react';

const Pagination = ({ page, pageSize, total, onPageChange, onPageSizeChange }) => {
  const totalPages = Math.ceil(total / pageSize) || 1;
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  const getPageNumbers = () => {
    const pages = [];
    const maxButtons = 7;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push('...');

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (page < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="tablekit-pagination">
      <div className="tablekit-pagination-info">
        {total > 0 ? `${from}–${to} מתוך ${total}` : 'אין תוצאות'}
        {onPageSizeChange && (
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            style={{ marginRight: 12, padding: '4px 8px', borderRadius: 3, border: '1px solid #d9dcde', fontSize: '12px' }}
          >
            {[20, 50, 100, 200, 500].map((s) => (
              <option key={s} value={s}>
                {s} לעמוד
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="tablekit-pagination-buttons">
        <button
          className="tablekit-page-btn"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          ◀ הקודם
        </button>

        {getPageNumbers().map((p, i) =>
          p === '...' ? (
            <span key={`dots-${i}`} style={{ padding: '0 6px' }}>
              ...
            </span>
          ) : (
            <button
              key={p}
              className={`tablekit-page-btn ${p === page ? 'active' : ''}`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          )
        )}

        <button
          className="tablekit-page-btn"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          הבא ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
