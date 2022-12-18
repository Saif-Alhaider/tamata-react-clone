import woman_clothes from "../svgs/cardSvgs/woman_clothes.svg";

function CardElement({ element_svg, elemtent_title, element_descrtiption }) {
  return (
    <div className="h-full  w-full relative flex justify-between">
      {/* svg */}
      <img
        src={woman_clothes}
        className="w-1/4 h-full inline-block" alt="woman_clothes"
      ></img>
      {/* content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-base text-[#252525]">ازياء نسائية</h2>
        <p className="text-sm">ملابس نسائية لجميع الاعمار</p>
      </div>
    </div>
  );
}
export default CardElement;
