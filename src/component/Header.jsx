import { useEffect } from "react";
import headerImg from "../assets/PICS/shivam.jpg";
import ScrollReveal from "scrollreveal";

export default function Header() {
  useEffect(() => {
    const config = { distance: "50px", origin: "bottom", duration: 1000 };
    ScrollReveal().reveal(".header-title", config);
    ScrollReveal().reveal(".header-text", { ...config, delay: 200 });
    ScrollReveal().reveal(".header-btn", { ...config, delay: 400 });
    ScrollReveal().reveal(".header-img", {
      ...config,
      origin: "right",
      delay: 600,
    });
  }, []);

  return (
    <header
      id="home"
      className="max-w-6xl mx-auto px-5 pt-28 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-center md:text-left"
    >
      {/* ✅ Left Content */}
      <div className="flex-1">
        <h1 className="header-title text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-gray-300 leading-snug">
          Shivam Tripathi <br /> Web Developer, <br />
          Software Developer
        </h1>
        <p className="header-text text-gray-300 mb-6 text-base sm:text-lg">
          I’m a passionate MERN stack developer who blends creativity with clean
          code, turning innovative ideas into seamless digital experiences. My
          focus is on crafting user-friendly, high-performance web applications
          that leave a lasting impact.
        </p>
        <a
          href="#contact"
          className="header-btn btn-gradient px-6 py-3 rounded-full text-white font-semibold"
        >
          Hire Me Now
        </a>
      </div>

      {/* ✅ Right Image */}
      <div className="flex justify-center md:justify-end flex-1">
        <img
          src={headerImg}
          alt="Shivam Tripathi"
          className="header-img rounded-full w-48 sm:w-64 md:w-96 shadow-2xl border-4 border-[#181e41]/60"
        />
      </div>
    </header>
  );
}
