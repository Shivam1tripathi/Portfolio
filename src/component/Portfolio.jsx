import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "remixicon/fonts/remixicon.css";

import p1 from "../assets/portfolio/ecommerce.png";
import p2 from "../assets/portfolio/Book_My_Clone_App.png";
import p3 from "../assets/portfolio/Intrective_commentsection.png";
import p4 from "../assets/portfolio/HR_Management.png";
import p5 from "../assets/portfolio/resturentlisting.png";

import FlipCard from "./FlipCard";

const fullstackImages = [
  {
    image: p1,
    github: "https://github.com/Shivam1tripathi/Shopit",
    demo: "https://www.linkedin.com/posts/shivam-tripathi12_project-mernstack-reactjs-activity-7204323629931663360--D3a?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiU96IB53hb0XpbrORnbYwplVA2u8O2tp4",
    title: "Ecommerce",
  },
  {
    image: p2,
    github: "https://github.com/Shivam1tripathi/book-my-show-clone-app",
    demo: "https://www.linkedin.com/posts/shivam-tripathi12_hi-everyone-i-am-excited-to-share-my-new-activity-7165559443680641025-hBik?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiU96IB53hb0XpbrORnbYwplVA2u8O2tp4",
    title: "Book My Show Clone APP",
  },
  {
    image: p5,
    github: "https://github.com/Shivam1tripathi/Resturent_listing",
    demo: "https://www.loom.com/share/4540d9e3db7f480dabd191979fa2aed6?sid=2798f650-deb8-4f53-badf-50ecc7e4a5e8",
    title: "Resturent Listing",
  },
];
const frontendImages = [
  {
    image: p3,
    github: "https://github.com/Shivam1tripathi/Commentsection",
    demo: "https://www.loom.com/share/316f3f5679e94886bbfd26f592f34672",
    title: "Comment Section",
  },
  {
    image: p4,
    github: "https://github.com/Shivam1tripathi/HR_MANAGEMENT",
    demo: "https://www.loom.com/share/4b56f13ee9124895ba24b02633020b9a?sid=e2e91962-1268-458d-80fd-7603bf5f39d0",
    title: "HR Management ",
  },
];

export default function Portfolio() {
  useEffect(() => {
    ScrollReveal().reveal(".portfolio-title", {
      distance: "50px",
      origin: "top",
      duration: 800,
    });
    ScrollReveal().reveal(".portfolio-description", {
      distance: "50px",
      origin: "bottom",
      duration: 800,
      delay: 200,
    });
    ScrollReveal().reveal(".portfolio-card", {
      distance: "50px",
      origin: "bottom",
      duration: 800,
      interval: 100,
    });
    ScrollReveal().reveal(".portfolio-stats", {
      distance: "50px",
      origin: "bottom",
      duration: 800,
      interval: 150,
    });
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-4">
      {/* Title */}
      <h2 className="portfolio-title text-white text-3xl font-bold text-center mb-4">
        My Portfolio
      </h2>
      <p className="portfolio-description text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        "A showcase of my journey as a developer — blending creativity, logic,
        and modern technologies. These projects reflect my dedication to
        building solutions that are functional, scalable, and user-friendly."
      </p>

      {/* ✅ Fullstack Projects */}
      <h3 className="text-2xl font-semibold text-[#ec9956] text-center mb-6">
        🚀 Fullstack Projects
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
        {fullstackImages.map((img, i) => (
          <FlipCard
            key={i}
            image={img.image}
            github={img.github}
            demo={img.demo}
            title={img.title}
          />
        ))}
      </div>

      {/* ✅ Frontend Projects */}
      <h3 className="text-2xl font-semibold text-[#ec9956] text-center mb-6">
        🎨 Frontend Projects
      </h3>
      <div className="flex flex-wrap items-center justify-center w-full gap-6 mb-12">
        {frontendImages.map((img, i) => (
          <FlipCard
            key={i}
            image={img.image}
            github={img.github}
            demo={img.demo}
            title={img.title}
          />
        ))}
      </div>

      {/* ✅ More Projects Button */}
      <div className="text-center mb-16">
        <a
          href="https://github.com/Shivam1tripathi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-[#e9615e] to-[#ec9956] shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
        >
          🔗 VIEW MORE PROJECTS
        </a>
      </div>
    </section>
  );
}
