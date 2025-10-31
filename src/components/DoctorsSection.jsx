import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error loading doctors:", err));
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Medical Specialists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;

