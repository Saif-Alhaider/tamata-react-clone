import React from 'react'
import NavBarItems from './NavBarItems';
import NavBarLogo from './NavbarLogo';
import NavBarSearchBar from './NavBarSearchBar';

function Navbar(){
    return (
<header
      className="container mx-auto bg-gray-100 px-4 py-1 flex flex-row-reverse items-center"
    >
      <NavBarLogo/>
      {/* search section */}
      <NavBarSearchBar/>
      {/* nav items */}
      <NavBarItems/>
    </header>
    );
}

export default Navbar