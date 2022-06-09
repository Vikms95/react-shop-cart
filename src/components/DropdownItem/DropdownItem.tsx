import React from 'react';

interface Props{
  handleSearchClick: (url) => void
  itemText: string
  url: string
}

function DropdownItem(props: Props) {
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
