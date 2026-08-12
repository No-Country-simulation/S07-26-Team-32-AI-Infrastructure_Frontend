import { useState } from "react";

const Calculator = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = async () => {
    try {
      const res = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: inputA, b: inputB }),
      });

      if (res.ok) {
        const data = await res.json();
        setResult(data.result);
      } else {
        alert("Error al calcular.");
      }
    } catch (err) {
      alert("Error de conexión con el servidor.");
    }
  };

  return (
    <section className="w-full bg-[#0B0B0B] py-20 text-white text-center">
      <h2 className="mb-6 text-3xl font-bold !text-white">Benchmark Calculator</h2>
      <p className="mb-8 text-zinc-400">
        Estimate your KPIs and benchmark against industry standards.
      </p>

      <div className="mx-auto flex max-w-md flex-col gap-4">
        <input
          type="number"
          placeholder="Value A"
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-[#111] px-4 py-3 text-white focus:border-[#C8A14A] focus:outline-none"
        />
        <input
          type="number"
          placeholder="Value B"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-[#111] px-4 py-3 text-white focus:border-[#C8A14A] focus:outline-none"
        />

        <button
          onClick={handleCalculate}
          className="rounded-lg bg-[#C8A14A] px-6 py-3 font-semibold text-black transition hover:brightness-110"
        >
          Calculate
        </button>

        {result !== null && (
          <p className="mt-4 text-lg text-green-400">
            Result: {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default Calculator;
