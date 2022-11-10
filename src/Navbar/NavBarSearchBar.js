import React from "react";
import SearchIcon from "../svgs/NavBarSvgs/search";

function NavBarSearchBar() {
  return (
    <div className="mx-auto shadow-lg flex-grow ml-10 mr-10">
      <div className="relative flex flex-row-reverse items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <SearchIcon />
        </div>
        <input
          className="peer h-full w-full text-right outline-none text-sm text-gray-700 pl-2 "
          type="text"
          id="search"
          placeholder="...ابحث في المتجر بالكامل هنا"
        />
      </div>
    </div>
  );
}
export default NavBarSearchBar;
