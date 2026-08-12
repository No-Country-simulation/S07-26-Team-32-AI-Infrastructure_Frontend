import { useState } from "react";

const PdfGenerator = () => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Podés enviar datos del benchmark o calculadora acá
        body: JSON.stringify({ userId: "12345" }),
      });

      if (res.ok) {
        // El backend devuelve un blob PDF
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "benchmark-report.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        alert("Error al generar el PDF.");
      }
    } catch (err) {
      alert("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#0B0B0B] py-20 text-white text-center pt-1">
      <h2 className="mb-6 text-3xl font-bold !text-white">Download Your Report</h2>
      <p className="mb-8 text-zinc-400">
        Get your personalized benchmark PDF with KPIs and insights.
      </p>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-[#C8A14A] px-8 py-4 text-lg font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate PDF"}
      </button>
    </section>
  );
};

export default PdfGenerator;
