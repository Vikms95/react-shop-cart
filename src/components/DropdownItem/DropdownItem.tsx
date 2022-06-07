import React from 'react';

function DropdownItem(props) {
  const { setUrl, itemText, url } = props;

  const changeUrl = () => {
    setUrl(url);
  };

  return (
    <>
      <div
        role="button"
        className="dropdown-item"
        onClick={changeUrl}
        onKeyDown={changeUrl}
        tabIndex={0}
      >
        {itemText}
      </div>
      <hr />
    </>
  );
}

export default DropdownItem;
