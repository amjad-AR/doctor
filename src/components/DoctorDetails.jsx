import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((doc) => doc.id === parseInt(id));
        setDoctor(found);
      });
  }, [id]);

  if (!doctor) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-gray-700">
        <p className="text-lg mb-4">Doctor not found.</p>
        <Link to="/" className="text-(--Dark_Mode_BG) underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-500 mt-2">{doctor.location}</p>
          </div>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{doctor.bio}</p>

        <h3 className="mt-8 text-2xl font-semibold text-gray-800">
          Available Slots
        </h3>
        <div className="mt-4 space-y-4">
          {doctor.availableSlots.map((slot, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-700">{slot.date}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {slot.times.map((time, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-(--Dark_Mode_BG) text-white rounded-md text-sm"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-(--Dark_Mode_BG) hover:text-[#6bb781] underline transition-all"
          >
            ← Back to Doctors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
