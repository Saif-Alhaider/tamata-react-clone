import React from "react";
import CartICon from "../svgs/NavBarSvgs/cart";
import GlobalICon from "../svgs/NavBarSvgs/global";
import HeartICon from "../svgs/NavBarSvgs/heart";
import MapICon from "../svgs/NavBarSvgs/map";
import PersonICon from "../svgs/NavBarSvgs/person";
function NavBarItems() {
  let svgItems = [
    {
      title: "Language",
      svg: <GlobalICon />,
    },
    {
      title: "ترتيب المسار",
      svg: <MapICon />,
    },
    {
      title: "تسجيل الدخول",
      svg: <PersonICon />,
    },
    {
      title: "قائمة الامينانت",
      svg: <HeartICon />,
    },
    {
      title: "سلة التسوق",
      svg: <CartICon />,
    },
  ];
  return (
    <nav className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col p-6 mt-4 md:flex-row md:space-x-8 md:mt-0">
        
        {svgItems.map((item)=>(
          <li key={item.title} className="hover:text-red-500 cursor-pointer">
          <span className="mr-2">{item.title}</span>
          {item.svg}
        </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBarItems;
