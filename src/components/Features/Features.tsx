const features = [
  {
    title: "Industry Report",
    description:
      "Access deep insights into AI infrastructure trends and data center efficiency.",
    icon: "📊",
  },
  {
    title: "Calculator",
    description:
      "Estimate your KPIs with precision and benchmark against industry standards.",
    icon: "🧮",
  },
  {
    title: "Benchmark",
    description:
      "Measure your maturity level and identify opportunities for optimization.",
    icon: "⚡",
  },
  {
    title: "PDF Generator",
    description:
      "Receive a branded institutional PDF with your personalized results.",
    icon: "📄",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#0B0B0B] py-1 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold !text-white pb-6">
          Platform Features
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-800 bg-[#111] p-8 text-center transition hover:shadow-lg hover:shadow-[#C8A14A]/30"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
