import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
const NavBar = () => {
  return (
    <header className="w-full z-10 fixed top-0">
      <nav className="bg-[#192655] p-4 text-white ">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about">About</Link>{" "}
      </nav>
    </header>
  );
};

export default NavBar;
