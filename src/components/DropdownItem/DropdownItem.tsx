import React from 'react';

function DropdownItem(props) {
  const { handleSearchClick, itemText, url } = props;

  return (
    <>
      <div
        role="button"
        className="dropdown-item"
        onClick={() => handleSearchClick(url)}
        onKeyDown={() => handleSearchClick(url)}
        tabIndex={0}
      >
        {itemText}
      </div>
      <hr />
    </>
  );
}

export default DropdownItem;
