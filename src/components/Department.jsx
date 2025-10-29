import React from "react";
import DepartmentCard from "./DepartmentCard";
import { title } from "framer-motion/m";

const Department = () => {
  const departments = [
    {
      id: 1,
      img: "neurology.png",
      title: "Neurology",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 2,
      img: "Cardiology.png",
      title: "Cardiology",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 3,
      img: "Surgery.png",
      title: "Surgery",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 4,
      img: "Gastroenterlogy.png",
      title: "Gastroenterlogy",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 5,
      img: "Dentist.png",
      title: "Dentist",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 6,
      img: "Opthalmology.png",
      title: "Opthalmology",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 7,
      img: "Pediatry.png",
      title: "Pediatry",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 8,
      img: "Orthopaedics.png",
      title: "Orthopaedics",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
  ];
  return (
    <section className="w-[90%] justify-self-center p-10 text-(--Dark_Blue) flex flex-col items-start mx-auto my-20">
      <h1 className="text-3xl mb-6">Our Department</h1>
      <div className="grid grid-cols-4 gap-4">
        {departments.map((e) => (
          <DepartmentCard
            key={e.id}
            img={e.img}
            title1={e.title}
            title2={e.title2}
          />
        ))}
      </div>
    </section>
  );
};

export default Department;
