import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const techCategories = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
  ],
  Backend: ["Node.js", "Express.js", "REST API"],
  "Database & Security": [
    "MongoDB",
    "JSON Web Token",
    "Postman",
    "Bcrypt",
    "DBMS",
  ],
  "Programming & Others": [
    "Java",
    "Git",
    "GitHub",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Problem Solving",
    "Calendly",
  ],
};

export default function TechStack() {
  useEffect(() => {
    ScrollReveal().reveal(".tech-section", {
      distance: "50px",
      origin: "bottom",
      duration: 800,
      interval: 100,
    });
  }, []);

  return (
    <section id="techstack" className="max-w-6xl mx-auto px-5 py-20">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        🚀 Tech Stack
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        "Here are the technologies, frameworks, and skills I leverage to build
        secure, scalable, and engaging web applications."
      </p>

      {/* Categories */}
      <div className="space-y-10">
        {Object.entries(techCategories).map(([category, items], i) => (
          <div key={i} className="tech-section">
            <h3 className="text-xl text-[#ec9956] font-semibold mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {items.map((tech, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 rounded-xl 
             bg-[#1e1e2f]/70 border border-[#e9615e]/30 
             shadow-md text-white font-medium cursor-pointer
             hover:bg-[#2b2b44] hover:border-[#ec9956] 
             hover:text-[#ec9956] hover:shadow-[#ec9956]/40
             transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
