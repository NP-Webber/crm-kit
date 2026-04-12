import React from 'react';

const TableCell = ({ children, label = '', align = 'right', ...rest }) => {
  return (
    <td
      className="tablekit-td"
      data-label={label}
      style={{ textAlign: align }}
      {...rest}
    >
      {children}
    </td>
  );
};

export default TableCell;
