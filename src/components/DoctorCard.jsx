import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-28 h-28 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{doctor.specialty}</p>
      <button
        onClick={handleClick}
        className="bg-(--Dark_Mode_BG) hover:bg-[#6bb781] text-white px-4 py-2 rounded-md transition-all duration-300"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
