import aboutImg from "../assets/about/Hostiko-hosting-img.png";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-5 py-20  flex max-md:flex-col gap-10 items-center"
    >
      <img
        src={aboutImg}
        alt="about"
        data-aos="fade-right"
        className=" w-full max-md:hidden"
      />

      <div
        className="text-center md:text-left text-gray-200"
        data-aos="fade-left"
      >
        <h2 className="text-3xl font-bold mb-4">Bit About Me</h2>
        <p className="text-gray-300 mb-6">
          I am a passionate full-stack developer who thrives at the intersection
          of creativity and technology. What started as curiosity for coding and
          design has grown into a mission to craft digital experiences that are
          both visually compelling and functionally powerful. With a strong
          focus on user experience and a drive to stay ahead of evolving trends,
          I strive to deliver solutions that not only meet but redefine
          expectations
        </p>
        <a
          href="/Shivam_Tripathi_Resume"
          download="Shivam_Tripathi_Resume.pdf"
          className="btn-gradient px-6 py-3 inline-block"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
}
