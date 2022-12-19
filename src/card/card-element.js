
function CardElement({element_svg, elemtent_title, element_description }) {
  return (
    <div className="h-full  w-full relative flex justify-evenly">
      {/* svg */}
      <img
        src={element_svg || ''}
        className="w-1/4 h-full inline-block" alt="woman_clothes"
      ></img>
      {/* content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-base text-[#252525]">{elemtent_title || ''}</h2>
        {/* description */}
        <p className="text-sm">{element_description || 'null'}</p>
      </div>
    </div>
  );
}
export default CardElement;
