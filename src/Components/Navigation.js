import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [ShowMenu, setShowMenu] = useState(false);

  //   Conditional rendering is awesome
  let menuMask;
  let menu;

  if (ShowMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        the menu
      </div>
    );
    menuMask = (
      <div
        className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!ShowMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  );
}

export default Navigation;
