import React, { useState, useRef, useEffect } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function Dropdown(props) {
  const { handleSearchClick } = props;

  return (
    <div className="dropdown">
      <DropdownItem itemText="Popular" url="popular" handleSearchClick={handleSearchClick} />
      <DropdownItem itemText="Best rated" url="highestrated" handleSearchClick={handleSearchClick} />
      <DropdownItem itemText="Recently released" url="recentlyreleased" handleSearchClick={handleSearchClick} />
      <DropdownItem itemText="Upcoming" url="upcoming" handleSearchClick={handleSearchClick} />
    </div>
  );
}

export default Dropdown;
