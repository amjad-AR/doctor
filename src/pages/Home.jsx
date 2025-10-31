import Hero from "../components/Hero.jsx";
import TimeWrok from "../components/TimeWrok.jsx";
import Services from "../components/Services.jsx";
import Department from "../components/Department.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";

const Home = () => {
  return (
    <div className="min-h-auto">
      <Hero />
      <TimeWrok />
      <Services />
      <Department />
      <DoctorsSection />
    </div>
  );
};

export default Home;
