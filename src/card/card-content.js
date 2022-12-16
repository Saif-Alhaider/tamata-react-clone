function Card({ first_second_columns }) {
  const triggerColor = "white";
  return (
    // the parent
    <div
      className="grid grid-cols-3 w-full h-full"
      style={{ direction: "rtl" }}
    >
      {/* first column on the right */}
      <div
        className="bg-[#F0F3F6] h-auto"
        style={{
          direction: "ltr",
        }}
      >
        <ul className="list-none relative p-[2px] h-96">
          <div className="relative">
            {/* when hovering on mouse it moves */}
            <div
              className={`absolute w-full bg-${triggerColor} rounded-md h-16`}
            >
              {/* the triangle */}
              <div className={`border-b-[20px] border-b-${triggerColor} border-r-[20px] border-r-transparent  rotate-45 absolute left-[-8px] top-[50%] translate-y-[-50%]`}
              style={{borderBottomLeftRadius:"4px"}}
              ></div>
            </div>
          </div>

          {Object.keys(first_second_columns).map((e, i) => (
            <div>
              <li className="relative text-center h-16 align-middle flex items-center justify-center">
                {e}
              </li>
            </div>
          ))}
        </ul>
      </div>
      {/* second column */}
      <div className="bg-[#F0F3F6] col-start-2 col-end-4 relative -z-10"></div>
    </div>
  );
}

export default Card;
