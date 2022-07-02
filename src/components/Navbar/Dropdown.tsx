import React from 'react';
import DropdownItem from './DropdownItem';

interface Props{
  handleSearchClick: (url: string) => void
  children: React.ReactNode
}

function Dropdown(props: Props) {
  const { children, handleSearchClick } = props;

  return (
    <div className="dropdown">
      {children}
    </div>
  );
}

export default Dropdown;
