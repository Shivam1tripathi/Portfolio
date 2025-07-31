export default function FlipCard({ image, github, demo, title }) {
  return (
    <div className="flip-card w-96 h-60">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-[#181e41] border border-[#2a2a40] backface-hidden">
          {/* Project Image */}
          <img
            src={image}
            alt="Project"
            className="w-full h-full object-cover"
          />

          {/* Title Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-3">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full rounded-xl bg-gradient-to-b from-[#e9615e] to-[#ec9956] text-center flex flex-col items-center justify-center gap-4 rotate-y-180 backface-hidden">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-[#181e41] font-semibold rounded-lg shadow-md hover:bg-gray-200"
          >
            🔗 GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-[#181e41] font-semibold rounded-lg shadow-md hover:bg-gray-200"
          >
            🚀 Demo
          </a>
        </div>
      </div>
    </div>
  );
}
