import React from "react";
import { useState } from "react";
function MainSecondNavBar() {
  const [state, setstate] = useState(false);
  const [offX, setoffX] = useState(0)

  function mouseEnter(a) {
    setstate((state) => true);
    setoffX((offX)=>a.target.getBoundingClientRect().x)

    
    console.log();
  }
  function mouseLeave() {
    setstate((state) => false);
  }
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
      <ul className={`flex flex-row-reverse  px-8 h-full items-center`}>
        {mainSiteCategories.map((category, index) => {
          return (
            <li
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              key={category.title}
              className=" group w-full relative text-white font-semibold text-lg flex cursor-pointer hover:bg-slate-900 h-full p-4 ease-in-out duration-150 items-center justify-center "
            >
              <span className="text-end">{category.title}</span>
              {/* <i className="arrow arrow-down mx-2 border-white"></i> */}
            </li>
          );
        })}
        <div
        className={`absolute top-[144px] bg-teal-500 rounded-md shadow-xl
                     ${state ? "visible" : "visually-hidden"}
                     mega-menu visible
                     w-[calc(100%/2)] h-72 
                     p-20
                    ]
                `}
                style={
                  offX <33?
                  {
                  left:offX
                }:
                {
                  left:offX >1220?undefined:offX/1.75,
                  transform:"100px 20px"
                }
              }
      >
        <p>{String(offX)}</p>
      </div>
      </ul>
      
    </div>
  );
}

export default MainSecondNavBar;
