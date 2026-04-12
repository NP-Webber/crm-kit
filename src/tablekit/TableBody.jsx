import React from 'react';
import TableRow from './TableRow.js';
import TableCell from './TableCell.js';

const TableBody = ({ data, columns, loading, emptyMessage = 'אין נתונים להצגה', onRowDoubleClick }) => {
  if (loading) {
    return (
      <tbody className="tablekit-tbody">
        {Array.from({ length: 5 }).map((_, i) => (
          <tr key={`skel-${i}`} className="tablekit-skeleton-row">
            {columns.map((col) => (
              <td key={col.key} className="tablekit-td">
                <div className="tablekit-skeleton-cell" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  if (!data || data.length === 0) {
    return (
      <tbody className="tablekit-tbody">
        <tr>
          <td colSpan={columns.length} className="tablekit-empty">
            <div className="tablekit-empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#90caf9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="tablekit-tbody">
      {data.map((row, rowIndex) => (
        <TableRow key={row._id || row.id || rowIndex} row={row} onDoubleClick={onRowDoubleClick}>
          {columns.map((col) => {
            const value = row[col.key];
            const rendered = col.render ? col.render(value, row) : value;
            return (
              <TableCell key={col.key} label={col.title} align={col.align}>
                {rendered ?? '—'}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
