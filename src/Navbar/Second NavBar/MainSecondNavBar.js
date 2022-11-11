import React from "react";

function MainSecondNavBar() {
  let mainSiteCategories = [
    {
      title: "جميع الفئات",
    },
    {
      title: "الالكترونيات",
    },
    {
      title: "الازياء",
    },
    {
      title: "المنزل و المطبخ",
    },
    {
      title: "الصحة و الجمال",
    },
    {
      title: "منتجات الاطفال",
    },
    {
      title: "ركن القرائة",
    },
    {
      title: "الادوات و العدد",
    },
    {
      title: "القرطاسية",
    },
  ];
  return (
    <div className="w-full h-16 bg-red-600">
      <ul className="flex flex-row-reverse justify-between px-8 h-full items-center">
        {mainSiteCategories.map((category) => (
          <li className="text-white font-semibold text-lg flex items-center cursor-pointer hover:bg-slate-900 h-full p-4 ease-in-out duration-150">
            
            <span>{category.title}</span>
            <i className="arrow arrow-down mx-2 border-white"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainSecondNavBar;
