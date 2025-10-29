import React from "react";

const ServicesCard = ({ img, title }) => {
  return (
      <div className="w-70 h-70 flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg hover:-translate-1 hover:shadow-xl transition-all duration-300">
        <img src={img} alt={title} className="w-20 h-20 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ServicesCard;
