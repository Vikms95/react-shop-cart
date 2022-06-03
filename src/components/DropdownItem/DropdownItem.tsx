import React from 'react';

function DropdownItem(props) {
  const { itemText } = props;
  return (
    <>
      <div className="dropdown-item">
        {itemText}
      </div>
      <hr />
    </>
  );
}

export default DropdownItem;
