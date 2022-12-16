import { useState } from "react";
import { motion } from "framer-motion";
function Card({ first_second_columns }) {
  const triggerColor = "white";
  const [currentIndex, setcurrentIndex] = useState(0);
  return (
    // the parent
    <div
      className="grid gap-[2px] grid-cols-3 w-full h-auto bg-[#F0F3F6] p-2 overflow-hidden"
      style={{ direction: "rtl" }}
    >
      {/* first column on the right */}
      <div
        className="bg-[#F0F3F6] h-auto"
        style={{
          direction: "ltr",
        }}
      >
        <ul className="list-none relative h-96">
          <div className="relative">
            {/* when hovering on mouse it moves */}
            <motion.div
              className={`absolute w-full bg-${triggerColor} rounded-md h-16 `}
              animate={{ top: `${64 * currentIndex}px` }}
              
            >
              {/* the triangle */}
              <div
                className={`border-b-[15px] border-b-${triggerColor} border-r-[15px] border-r-transparent  rotate-45 absolute left-[-6.5px] top-[50%] translate-y-[-50%] z-50 outline-black`}
                style={{
                  borderBottomLeftRadius: "4px",
                  boxShadow: "0 0 0 3px  #F0F3F6",
                  clipPath: "inset(0px 0px -10px -10px)",
                }}
              ></div>
            </motion.div>
          </div>

          {Object.keys(first_second_columns).map((e, i) => {
            console.log(currentIndex);
            return (
              <div>
                <li
                  className="relative text-center h-16 align-middle flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setcurrentIndex((currentIndex) => i)}
                >
                  {e}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      {/* second column */}
      <div
        className={`bg-white col-start-2 col-end-4 relative z-0 rounded-md`}
      ></div>
    </div>
  );
}

export default Card;
