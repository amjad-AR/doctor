import React from "react";
import TimeWorkCard from "./TimeWorkCard";
import { img } from "framer-motion/client";

const TimeWrok = () => {
  const cardData = [
    {
      id: 1,
      img: "time_img.png",
      title1: "24 hours services",
      title2: "lorem ipsum dolor sit amet,connector adicipafg",
    },
    {
      id: 2,
      img: "ex_img.png",
      title1: "10 years of experience",
      title2: "lorem ipsum dolor sit amet,connector adicipafg",
    },
    {
      id: 3,
      img: "healthcare_img.png",
      title1: "High quality care",
      title2: "lorem ipsum dolor sit amet,connector adicipafg",
    },
  ];
  return (
    <section className=" w-[90%] h-40 justify-self-center ">
      <div className=" bg-(--Dark_Blue) flex flex-row p-10 justify-between rounded-lg shadow-lg shadow-gray-400">
        {cardData.map((card) => (
          <TimeWorkCard
            key={card.id}
            img={card.img}
            title1={card.title1}
            title2={card.title2}
          />
        ))}
      </div>
    </section>
  );
};

export default TimeWrok;
