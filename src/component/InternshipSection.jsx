import React from "react";
import "remixicon/fonts/remixicon.css";

const internships = [
  {
    company: "BadaTalaab Investments Pvt. Ltd.",
    role: "Full Stack Web Developer Intern",
    duration: "Aug 2024 – Feb 2025",
    highlights: [
      "Enhanced UI loading performance by 25% using React.js & Tailwind CSS.",
      "Developed REST APIs handling 5,000+ requests/day with <200ms response time.",
      "Implemented JWT authentication & integrated Calendly for seamless scheduling.",
      "Deployed secure applications on Hostinger with HTTPS/SSL.",
    ],
    project: "Badatalaab Website",
    icon: "ri-building-4-line",
  },
  {
    company: "Yahweh Innovation",
    role: "MERN Stack Intern",
    duration: "July 2024 – Sept 2024",
    highlights: [
      "Improved backend APIs using Node.js & Express.js with MongoDB schemas.",
      "Developed dynamic React.js components with Material-UI.",
      "Built Liquefy Venture, an e-commerce platform with JWT authentication.",
    ],
    project: "Liquefy Venture",
    icon: "ri-store-3-line",
  },
];

const InternshipSection = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 py-20">
      <h2 className="text-3xl font-bold text-center text-[#ec9956] mb-10">
        💼 Internship Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {internships.map((intern, i) => (
          <div
            key={i}
            className="bg-[#1e2347] border border-[#2a2a40] rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-[#ec9956]/40 transition duration-300"
          >
            <div className="flex items-center mb-3">
              <i className={`${intern.icon} text-3xl text-[#ec9956] mr-3`}></i>
              <h3 className="text-xl font-bold text-white">{intern.company}</h3>
            </div>
            <p className="text-gray-300 mb-1">{intern.role}</p>
            <p className="text-sm text-gray-400 mb-3">{intern.duration}</p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
              {intern.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <p className="text-[#ec9956] font-semibold">
              🚀 Project: {intern.project}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
