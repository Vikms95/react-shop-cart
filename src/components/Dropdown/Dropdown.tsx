import React, { useState, useRef, useEffect } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function Dropdown(props) {
  const { setUrl } = props;
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const toggle = () => setIsMenuRendered(!isMenuRendered);

  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);

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
