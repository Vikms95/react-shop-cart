import React from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function Dropdown() {
  return (
    <div className="dropdown">
      <DropdownItem itemText="Hot games" />
      <DropdownItem itemText="Best games of this year" />
      <DropdownItem itemText="Action games" />
      <DropdownItem itemText="Racing games" />
    </div>
  );
}

export default Dropdown;
