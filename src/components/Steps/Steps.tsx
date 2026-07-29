import { useState, useEffect } from "react";
import calculadoraIcon from "../../assets/icons/calculadora.png";
import graficoIcon from "../../assets/icons/grafico.png";
import pdfIcon from "../../assets/icons/pdf.png";

const stepsData = [
  {
    icon: calculadoraIcon,
    title: "Calculate Your Impact",
    text: "Quantify idle capacity and financial loss to understand your true operational cost.",
    button: "Try Calculator →",
  },
  {
    icon: graficoIcon,
    title: "Benchmark Your Maturity",
    text: "Evaluate your performance across key domains and compare with industry standards.",
    button: "Take Benchmark →",
  },
  {
    icon: pdfIcon,
    title: "Get Your Custom Report",
    text: "Receive a personalized PDF with insights and recommendations to optimize efficiency.",
    button: "View Report →",
  },
];

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade out
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % stepsData.length);
        setFade(true); // fade in del nuevo bloque
      }, 600); // tiempo del fade out
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { icon, title, text, button } = stepsData[currentStep];

  return (
    <section className="bg-[#0B0B0B] text-white py-2">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold !mb-4 !mt-6 !text-white">
            Everything You Need to Optimize Your Infrastructure
        </h2>

        {/* Bloque animado */}
        <div className="flex justify-center">
          <div
            key={title}
            className={`bg-[#122821] p-8 rounded-xl w-[320px] h-[320px] flex flex-col items-center justify-between transform transition-all duration-500 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <img src={icon} alt={title} className="w-14 h-14 mb-3" />
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">{title}</h3>
            <p className="text-gray-300 text-sm text-center">{text}</p>
            <button className="text-[#D4AF37] font-medium hover:underline mt-3">
              {button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
