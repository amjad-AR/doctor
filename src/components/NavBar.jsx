import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Globe } from "lucide-react"; // icons لهيك شكل حلو وسلس

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("en"); // 'en' or 'ar'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔄 تغيير الثيم
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // 🔄 تغيير الاتجاه واللغة
  useEffect(() => {
    if (language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [language]);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 flex justify-between items-center px-4
        ${
          isScrolled
            ? "w-[90%] bg-(--Nav_Color)/90 top-5 rounded-full shadow-lg"
            : "w-full bg-(--Nav_Color) top-0 rounded-none shadow-none"
        }`}
    >
      {/* 🟩 Logo */}
      <div className="w-[10%] p-6">
        <img src="logo.png" alt="logo" className="w-full" />
      </div>

      {/* 🟦 Links (Center) */}
      <nav className="w-[60%] mx-auto p-4 text-white text-2xl flex justify-center gap-8 font-semibold">
        {["/", "/about", "/contact", "/services"].map((path, i) => {
          const labels = ["Home", "About", "Contact", "Services"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 hover:text-[#019c7b]
                after:content-[''] after:block after:h-0.5 after:bg-[#019c7b] after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-[#019c7b] after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </nav>

      {/* 🟥 Buttons (Right Side) */}
      <div className="flex items-center gap-4 pr-6">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-white hover:-translate-y-1 hover:text-[#019c7b]  transition-all duration-300"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun size={26} /> : <Moon size={26} />}
        </button>

        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="text-white hover:-translate-y-1 hover:text-[#019c7b] transition-all duration-300 flex items-center gap-1"
          title="Change Language"
        >
          <Globe size={26} />
          <span className="text-lg font-semibold">
            {language === "en" ? "AR" : "EN"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
