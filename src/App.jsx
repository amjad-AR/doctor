import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // أضفنا Router هون
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import DoctorDetails from "./components/DoctorDetails.jsx"; // ضروري كمان نستدعيها

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
