function Card({ first_second_columns }) {
  return (
    <div
      className="grid grid-cols-3 w-full h-full  "
      style={{ direction: "rtl" }}
    >
      <div
        className="bg-slate-700 overflow-scroll h-auto overflow-x-hidden col-start-1 col-end-2 text-right scrollbar-thin scrollbar-thumb-rose-500  scrollbar-track-slate-700 scroll-smooth"
        style={{ direction: "ltr" }}
      >
        <ul className="list-none relative p-4 overflow-hidden">
          <div className="relative">
            <div className="absolute w-full bg-slate-50 rounded-2xl h-16"></div>
          </div>
          {Object.keys(first_second_columns).map((e,i) => (
            <li className="relative text-center h-16 align-middle flex items-center justify-center">
            {e}
          </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-300 col-start-2 col-end-4">2</div>
    </div>
  );
}

export default Card;
