// src/components/BenchmarkOverview.tsx
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link as ScrollLink } from "react-scroll";

const questions = [
  {
    id: "q1",
    question: "How are your AI training and inference workloads currently orchestrated?",
    options: [
      { key: "a", text: "Manual scheduling or static allocation (Basic)" },
      { key: "b", text: "Standard VM orchestration like Kubernetes/Docker (Intermediate)" },
      { key: "c", text: "Dynamic AI-native cluster orchestration with automated GPU sharing (Advanced)" },
    ],
  },
  {
    id: "q2",
    question: "What cooling technology is primarily used in your data centers?",
    options: [
      { key: "a", text: "Traditional air cooling (Basic)" },
      { key: "b", text: "Hot/cold aisle containment (Intermediate)" },
      { key: "c", text: "Direct-to-chip or immersion liquid cooling (Advanced)" },
    ],
  },
  {
    id: "q3",
    question: "How do you manage idle hardware or unused compute cycles?",
    options: [
      { key: "a", text: "We don't track idle capacity (Basic)" },
      { key: "b", text: "Manual power management during off-peak hours (Intermediate)" },
      { key: "c", text: "AI-driven predictive scaling and automated power down (Advanced)" },
    ],
  },
];

const BenchmarkOverview = () => {
  const [completed, setCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Resultados dinámicos del backend
  const [score, setScore] = useState(82);
  const [maturityLevel, setMaturityLevel] = useState("Advanced");
  const [industryPosition, setIndustryPosition] = useState("Top 18%");

  const handleSelectOption = (optionKey: string) => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    setAnswers((prev) => ({ ...prev, [currentQuestionId]: optionKey }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/benchmark/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email || "demo@aiinfra.com",
          respuestas: answers,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setScore(data.score);
        setMaturityLevel(data.nivelMadurez);
        setIndustryPosition(`Top ${data.posicionIndustria}%`);
        setCompleted(true);
      } else {
        alert("Error submiting benchmark.");
      }
    } catch (err) {
      alert("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  if (!completed) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <section className="bg-[#0B1C17] text-white p-8 shadow-lg max-w-6xl mx-auto rounded-xl border border-emerald-900/50 my-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">AI Infrastructure Benchmark</h2>
          <p className="text-gray-300 text-sm">
            Answer 3 quick questions to discover your maturity level and compare with the industry.
          </p>
          <div className="w-full bg-emerald-950 h-1.5 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-[#D4AF37] h-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-[#122821] p-6 rounded-lg mb-6">
          <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <h3 className="text-lg font-semibold text-white mt-2 mb-6">
            {currentQuestion.question}
          </h3>

          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.key}
                onClick={() => handleSelectOption(option.key)}
                className={`w-full text-left p-4 rounded-lg border transition ${
                  answers[currentQuestion.id] === option.key
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "bg-[#0B1C17] text-gray-200 border-emerald-900 hover:border-[#D4AF37]/50"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className="text-gray-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition"
          >
            ← Back
          </button>

          {currentQuestionIndex === questions.length - 1 && answers[currentQuestion.id] && (
            <div className="flex items-center gap-3 w-full max-w-md justify-end">
              <input
                type="email"
                placeholder="Enter your email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-zinc-700 bg-[#0B1C17] px-4 py-2 text-white text-sm focus:border-[#D4AF37] focus:outline-none w-full"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#D4AF37] text-black font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition whitespace-nowrap"
              >
                {loading ? "Submitting..." : "Get Results"}
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0B1C17] text-white p-8 shadow-lg max-w-6xl mx-auto rounded-xl border border-emerald-900/50 my-10">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-xl font-semibold !text-white">Your Benchmark Results</h2>
      </div>

      {/* Top section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#122821] p-6 rounded-lg text-center md:text-left">
          <p className="text-sm text-gray-400">Industry Position</p>
          <h3 className="text-2xl font-bold text-[#D4AF37]">{industryPosition}</h3>
          <p className="text-sm text-gray-300 mt-2">
            You’re performing better than {100 - score}% of data centers globally.
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

        <div className="bg-[#122821] p-6 rounded-lg text-center md:text-left">
          <p className="text-sm text-gray-400">Maturity Level</p>
          <h3 className="text-2xl font-bold text-[#D4AF37]">{maturityLevel}</h3>
          <p className="text-sm text-gray-300 mt-2">
            {maturityLevel === "Advanced" && "Strong operational foundation with optimization opportunities."}
            {maturityLevel === "Intermediate" && "Good progress with significant optimization potential."}
            {maturityLevel === "Beginner" && "Initial stages, high potential for efficiency and cost gains."}
          </p>
        </div>
      </div>

      {/* KPI section */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Annual Waste", value: `$${(2.45 * (score / 82)).toFixed(2)}M`, sub: "Estimated AI compute waste" },
          { label: "Idle Capacity", value: `${Math.round(38 * (100 - score) / 50)}%`, sub: "Available but unutilized" },
          { label: "Power Usage", value: `${(1.2 + (100 - score) * 0.005).toFixed(2)} PUE`, sub: "Power usage efficiency" },
          { label: "Efficiency Score", value: `${score}/100`, sub: "Performance score" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-[#122821] p-6 rounded-lg">
            <p className="text-sm text-gray-400">{kpi.label}</p>
            <h3 className="text-xl font-bold text-[#D4AF37]">{kpi.value}</h3>
            <p className="text-sm text-gray-300 mt-2">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-400 flex-wrap gap-4">
        <p>
          Benchmark Completed <span className="text-[#D4AF37]">{new Date().toLocaleDateString()}</span>
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setCompleted(false);
              setCurrentQuestionIndex(0);
              setAnswers({});
            }}
            className="text-gray-300 hover:text-white text-sm"
          >
            Retake Test
          </button>
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
      </div>
    </section>
  );
};

export default BenchmarkOverview;
