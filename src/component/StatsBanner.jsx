import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

// Stats Data
const statsData = [
  { icon: "ri-macbook-line", value: 20, label: "Projects Delivered" },
  {
    icon: "ri-lightbulb-flash-line",
    value: 2,
    label: "Years of Problem Solving",
  },
  { icon: "ri-building-4-line", value: 2, label: "Internship" },
];

// ✅ CountUp Hook for Animated Numbers
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
  }, [end, duration]);
  return count;
};

const StatsBanner = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 bg-gradient-to-r from-[#e9615e] to-[#ec9956] p-10 pb-28 rounded-xl text-center shadow-lg">
      {statsData.map((s, i) => {
        const count = useCountUp(s.value);
        return (
          <div
            key={i}
            className="portfolio-stats text-white p-4 rounded-lg bg-white/10 hover:scale-105 transition transform shadow-md"
          >
            <i className={`${s.icon} text-4xl mb-3 animate-pulse`}></i>
            <h4 className="text-3xl font-extrabold">{count}+</h4>
            <p className="opacity-90 text-lg">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBanner;
