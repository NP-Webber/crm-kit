import React from 'react';

const getTextContent = (children) => {
  if (children === null || children === undefined) return '';
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (typeof children === 'boolean') return '';
  if (React.isValidElement(children)) {
    // For select/dropdown elements, try to get displayed text
    if (children.props) {
      if (children.props.value !== undefined) return String(children.props.value);
      if (children.props.children) return getTextContent(children.props.children);
      if (children.props.label) return String(children.props.label);
    }
    return '';
  }
  if (Array.isArray(children)) return children.map(getTextContent).filter(Boolean).join(' ');
  return '';
};

const TableCell = ({ children, label = '', align = 'right', ...rest }) => {
  const tipText = getTextContent(children);
  return (
    <td
      className="tablekit-td"
      data-label={label}
      data-tooltip={tipText && tipText !== '—' ? tipText : undefined}
      style={{ textAlign: align }}
      {...rest}
    >
      {children}
    </td>
  );
};

export default TableCell;
