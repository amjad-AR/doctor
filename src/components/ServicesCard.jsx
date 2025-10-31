import React from "react";

const ServicesCard = ({ img, title }) => {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img
        src={img}
        alt={title}
        className="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain"
      />
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
        {title}
      </h3>
    </div>
  );
};

export default ServicesCard;
