import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 flex justify-between items-center px-4
        ${
          isScrolled
            ? "w-[90%] bg-(--Dark_Blue)/90 top-5 rounded-full shadow-indigo-500/50 shadow-lg"
            : "w-full bg-(--Dark_Blue) top-0 rounded-none shadow-none"
        }`}
    >
      <div className="w-[10%] p-6">
        <img src="logo.png" alt="logo" className="w-full" />
      </div>
      <nav className="w-[80%] mx-auto p-4 text-white text-2xl flex justify-center gap-8 font-semibold">
        {["/", "/about", "/contact", "/services"].map((path, i) => {
          const labels = ["Home", "About", "Contact", "Services"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 hover:text-[#58dc5c]
                after:content-[''] after:block after:h-0.5 after:bg-[#58dc5c] after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-[#58dc5c] after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default NavBar;
