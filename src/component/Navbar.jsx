import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll animation
    ScrollReveal().reveal("nav", {
      distance: "40px",
      origin: "top",
      duration: 800,
    });

    // Change navbar shadow on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-br from-[#62393c] to-[#181e41] ${
        scrolled ? "shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <span className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-1 rounded-full">
            S
          </span>
          Shivam
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static left-0 w-full md:w-auto bg-gradient-to-b md:bg-transparent 
          flex flex-col md:flex-row gap-5 p-5 md:p-0 transition-all duration-500 
          ${open ? "top-14" : "-top-96"}`}
        >
          {["Home", "About", "Projects", "Experience", "TechStack"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#ec9956] transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Contact Button */}
        <li>
          <a href="#contact" className="btn-gradient px-5 py-2 rounded-full">
            Contact
          </a>
        </li>
      </div>
    </nav>
  );
}
