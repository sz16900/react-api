import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="border-b font- p-3 flex justify-between items-center">
      APP Name
      <span className="font-bold">
        <Navigation />
      </span>
    </header>
  );
}

export default Header;
