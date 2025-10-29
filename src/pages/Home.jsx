import React from "react";
import Hero from "../components/Hero.jsx";
import TimeWrok from "../components/TimeWrok.jsx";
import Services from "../components/Services.jsx";
import Department from "../components/Department.jsx";

const Home = () => {
  return (
    <div className="min-h-auto">
      <Hero />
      <TimeWrok />
      <Services />
      <Department />
    </div>
  );
};

export default Home;
