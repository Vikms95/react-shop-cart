import React, { useState, useRef, useEffect } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

function Dropdown() {
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const toggle = () => setIsMenuRendered(!isMenuRendered);

  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);

  useEffect(() => {

  }, []);

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
