import React from "react";

const TimeWorkCard = ({ img, title1, title2 }) => {
  return (
    <div className="w-[30%] flex flex-row items-center gap-4">
      <div className="w-20 h-30 flex justify-center items-center rounded-xl bg-(--White) hover:-translate-1 transition-all duration-300 p-4">
        <img src={img} alt="Image"  />
      </div>
      <div className="flex flex-col">
        <h3 className="cursor-pointer text-lg font-bold text-white hover:text-blue-600 transition-colors duration-300">
          <u>{title1}</u>
        </h3>
        <p className="">{title2}</p>
      </div>
    </div>
  );
};

export default TimeWorkCard;
