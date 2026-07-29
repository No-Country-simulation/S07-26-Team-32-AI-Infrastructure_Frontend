// src/components/BenchmarkOverview.tsx
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link as ScrollLink } from "react-scroll";


const BenchmarkOverview = () => {
  const score = 82; // valor dinámico

  return (
    <section className="bg-[#0B1C17] text-white p-8 shadow-lg max-w-6xl mx-100%">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-xl font-semibold !text-white">Your Benchmark Overview</h2>
      </div>

      {/* Top section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#122821] p-6 rounded-lg">
          <p className="text-sm text-gray-400">Industry Position</p>
          <h3 className="text-2xl font-bold text-[#D4AF37]">Top 18%</h3>
          <p className="text-sm text-gray-300 mt-2">
            You’re performing better than 82% of data centers globally.
          </p>
        </div>

        {/* Medidor circular */}
        <div className="bg-[#122821] p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="w-28 h-28">
            <CircularProgressbar
              value={score}
              text={`${score}`}
              styles={buildStyles({
                textColor: "#D4AF37",
                pathColor: "#D4AF37",
                trailColor: "#1A2E25",
              })}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Overall Maturity Score</p>
        </div>

        <div className="bg-[#122821] p-6 rounded-lg">
          <p className="text-sm text-gray-400">Maturity Level</p>
          <h3 className="text-2xl font-bold text-[#D4AF37]">Advanced</h3>
          <p className="text-sm text-gray-300 mt-2">
            Strong operational foundation with optimization opportunities.
          </p>
        </div>
      </div>

      {/* KPI section */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Annual Waste", value: "$2.45M", sub: "32% of total spend" },
          { label: "Idle Capacity", value: "38%", sub: "Available but unutilized" },
          { label: "Power Usage", value: "1.42 PUE", sub: "Above industry avg." },
          { label: "Efficiency Score", value: "72/100", sub: "Good" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-[#122821] p-6 rounded-lg">
            <p className="text-sm text-gray-400">{kpi.label}</p>
            <h3 className="text-xl font-bold text-[#D4AF37]">{kpi.value}</h3>
            <p className="text-sm text-gray-300 mt-2">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-400">
        <p>
          Benchmark Completed <span className="text-[#D4AF37]">May 15, 2024</span>
        </p>
        <ScrollLink
        to="report"
        smooth={true}
        duration={500}
        offset={-80}
        className="btn-primary cursor-pointer bg-[#D4AF37] text-black font-medium px-4 py-2 rounded-md hover:brightness-110 transition"
        >
        Download PDF
        </ScrollLink>
      </div>
    </section>
  );
};

export default BenchmarkOverview;
