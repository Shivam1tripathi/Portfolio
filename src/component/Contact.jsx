import React from "react";
import "remixicon/fonts/remixicon.css";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20 text-center">
      <div className="inline-block text-white px-4 py-2 bg-gradient-to-b from-[#e9615e] to-[#ec9956] rounded-full mb-4 text-xl font-bold">
        S
      </div>
      <h2 className="text-3xl font-bold mb-4">Let's Talk With Me!</h2>
      <p className="text-gray-300 mb-6">
        Open invitation to connect and explore collaborative opportunities.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        {[
          {
            connect: "ri-github-line",
            Link: "https://github.com/Shivam1tripathi",
          },
          {
            connect: "ri-linkedin-fill",
            Link: "https://www.linkedin.com/in/shivam-tripathi12",
          },
        ].map((icon, i) => (
          <a
            key={i}
            href={icon.Link}
            className="p-3 bg-white/20 rounded-full text-2xl hover:bg-gradient-to-b from-[#e9615e] to-[#ec9956] transition"
            data-aos="zoom-in"
          >
            <i className={icon.connect}></i>
          </a>
        ))}
      </div>
    </section>
  );
}
