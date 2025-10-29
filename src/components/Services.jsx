import React from "react";
import ServicesCard from "./ServicesCard";
import { img } from "framer-motion/client";

const Services = () => {
  const cardData = [
    {
      id: 1,
      img: "Customer_Support_img.png",
      title: "Customer Support",
    },
    {
      id: 2,
      img: "Chamber_Services_img.png",
      title: "Chamber Services",
    },
    {
      id: 3,
      img: "Online_Specialist_img.png",
      title: "Online Specialist",
    },
    {
      id: 4,
      img: "Privacy_Security_img.png",
      title: "Privacy and Security",
    },
  ];
    return (
      <section className="py-12 min-h-50">
        <div className="topDiv w-full flex justify-between p-20 items-center">
          <h2 className="text-3xl font-bold text-black w-[30%]">
            Your health requirements are our first focus.
          </h2>
          <p className="text-2xl font-bold text-gray-700 w-[40%]">
            {" "}
            Our team of skilled medical professionals and aids ensure that you
            get the care you need and deserve.
          </p>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-20">
          {cardData.map((card) => (
            <ServicesCard key={card.id} img={card.img} title={card.title} />
          ))}
        </div>
      </section>
    );
};

export default Services;
