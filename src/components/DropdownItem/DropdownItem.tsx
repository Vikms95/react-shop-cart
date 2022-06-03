import React from 'react';

function DropdownItem(props) {
  const { setUrl, itemText, url } = props;

  const changeUrl = () => {
    setUrl(url);
  };

  return (
    <>
      <button type="button" className="dropdown-item" onClick={changeUrl}>
        {itemText}
      </button>
      <hr />
    </>
  );
}

export default DropdownItem;
