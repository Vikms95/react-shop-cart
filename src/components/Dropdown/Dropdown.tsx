import React, { useState, useRef, useEffect } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function Dropdown(props) {
  const { setUrl } = props;

  return (
    <div className="dropdown">
      <DropdownItem itemText="Hot games" url="popular" setUrl={setUrl} />
      <DropdownItem itemText="Best games of this year" url="highestrated" setUrl={setUrl} />
      <DropdownItem itemText="Recently released" url="recentlyreleased" setUrl={setUrl} />
      <DropdownItem itemText="Upcoming" url="upcoming" setUrl={setUrl} />
    </div>
  );
}

export default Dropdown;
