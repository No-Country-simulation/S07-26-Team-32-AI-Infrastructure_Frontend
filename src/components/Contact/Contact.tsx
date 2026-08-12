import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#0B0B0B] py-2 text-white pt-14 pb-6">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold !text-white">Get in Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-[#111] px-4 py-3 text-white focus:border-[#C8A14A] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-[#111] px-4 py-3 text-white focus:border-[#C8A14A] focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-[#111] px-4 py-3 text-white focus:border-[#C8A14A] focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#C8A14A] px-6 py-3 font-semibold text-black transition hover:brightness-110 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-center text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
