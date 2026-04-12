import React from 'react';

const TableRow = ({ children, className = '', onDoubleClick, row, ...rest }) => {
  return (
    <tr
      className={`tablekit-tr ${className} ${onDoubleClick ? 'tablekit-tr-clickable' : ''}`}
      onDoubleClick={onDoubleClick ? () => onDoubleClick(row) : undefined}
      {...rest}
    >
      {children}
    </tr>
  );
};

export default TableRow;
