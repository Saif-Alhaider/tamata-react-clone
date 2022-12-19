import { useState } from "react";
import { motion } from "framer-motion";
import CardElement from "./card-element";
function Card({ first_second_columns }) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentItems, setcurrentItems] = useState(Object);
  return (
    // the parent
    <div
      className="inline-grid gap-[2px] grid-cols-3 w-full h-auto bg-[#F0F3F6] p-2 overflow-hidden"
      style={{ direction: "rtl" }}
    >
      {/* first column on the right */}
      <div
        className="bg-[#F0F3F6] h-96 pr-[2.5px] overflow-x-hidden"
        style={{
          direction: "ltr",
        }}
      >
        <ul className="list-none relative pl-[2px]">
          {/* when hovering on mouse it moves */}
          <motion.div
            className={`absolute w-full bg-white rounded-md h-16 `}
            animate={{ top: `${64 * currentIndex}px` }}
          >
            {/* the triangle */}
            {/* <div
                className={`border-b-[15px] border-b-white border-r-[15px] border-r-transparent  relative left-[-6.5px] top-[50%] translate-y-[-50%] z-50 inline-block rotate-45`}
                style={{
                  borderBottomLeftRadius: "4px",
                  boxShadow: "0 0 0 3px  #F0F3F6",
                  clipPath: "inset(0px 0px -10px -10px)",
                  
                }}
              ></div> */}
          </motion.div>

          {Object.keys(first_second_columns).map((e, i) => {
            return (
              <div>
                <li
                  className="relative text-center h-16 align-middle flex items-center justify-center cursor-pointer font-bold "
                  onMouseEnter={() => {
                    setcurrentItems((currentItems) => first_second_columns[e]);
                    setcurrentIndex((currentIndex) => i);
                  }}
                >
                  {e}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="col-start-2 col-end-4 bg-white">
        {/* second column */}
        <div className={`relative z-0 rounded-md grid grid-cols-2 gap-8 p-2`}>
          {Object.values(currentItems).map((element) => {
            
            return <CardElement elemtent_title={element.title} element_svg={element.svg} element_description={element.description}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
