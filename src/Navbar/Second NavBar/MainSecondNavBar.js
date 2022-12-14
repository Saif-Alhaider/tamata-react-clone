import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../card/card-content";

function MainSecondNavBar() {
  const [state, setstate] = useState(false);
  const [, setoffX] = useState(0);
  const [currentIndex, setcurrentIndex] = useState(0);

  function mouseEnter(a) {
    setstate((state) => true);
    setoffX((offX) => a.target.getBoundingClientRect().x);
    setcurrentIndex((currentIndex) => {
      for (let index = 0; index < mainSiteCategories.length; index++) {
        if (mainSiteCategories[index].title === a.target.textContent) {
          return index;
        }
      }
    });
  }
  function mouseLeave() {
    setstate((state) => false);
  }
  let mainSiteCategories = [
    {
      title: "جميع الفئات",
      content: {
        first_second_column: {
          الازياء: [
            {
              title:"ملابس نسائية",
              description:"ملابس نسائية لجميع الاعمار",
              // svg:"../../svgs/cardSvgs/woman_clothes.svg"
              svg:"cardSvgs/woman_clothes.svg"
            },
            {
              title:"حجابات",
              description:"حجابات وعبي",
              svg:"cardSvgs/hijab.svg"
            },
            {
              title:"احذية وحقائب نسائية",
              description:null,
              svg:null
            },
            {
              title:"اكسسوارات نسائية",
              description:null,
              svg:null,
            },
          ],
          "المنزل و المطبخ": ["المطبخ", "اجهزة المنزل"],
          "الصحة و الجمال":["العطور","العناية بالبشرة","مستحضرات تجميل","شعر"],
          "منتجات الاطفال":["مستلزمات الطعام","اغذية الاطفال"],
          "الادوات و العدد":["الامن و السلامة","اجهزة ولوازم البناء"],
          "القرطاسية":["الاقلام","الدفاتر"],
          "زهور ونباتات":["زهور","نباتات"]
          
        },
      },
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
    <div className="container mx-auto h-16 bg-red-600">
      <ul
        className={`relative flex flex-row-reverse  px-8 h-full items-center`}
      >
        {mainSiteCategories.map((category, index) => {
          return (
            <li
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              key={category.title}
              className=" group w-full relative text-white font-semibold text-lg flex cursor-pointer hover:bg-gray-900 hover:bg-opacity-75 h-full p-4 ease-in-out duration-150 items-center justify-center"
            >
              <span>{category.title}</span>
            </li>
          );
        })}
        <motion.div
          onMouseEnter={() => setstate((state) => true)}
          onMouseLeave={mouseLeave}
          className={`absolute top-[65px] 
                     ${state ? "visible" : "visually-hidden"}
                     mega-menu visible
                     w-[calc(100%/2)] 
                     "overflow-hidden"
                     "border-blue-600 border-4"
                     rounded-xl 
                    
                `}
          animate={
            currentIndex < 5
              ? {
                  right: `calc(32px + 163.56px * ${currentIndex})`,
                }
              : {
                  right: `calc(32px + 163.56px * ${currentIndex - 4}.32)`,
                }
          }
          transition={{ type: "spring" }}
          
        >
          <Card {...{first_second_columns:mainSiteCategories[0].content.first_second_column}} />
        </motion.div>
      </ul>
    </div>
  );
}

export default MainSecondNavBar;
