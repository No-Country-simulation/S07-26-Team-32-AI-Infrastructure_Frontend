// Footer.tsx
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#122821] py-10 text-white">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">
    {/* Branding */}
    <div className="text-center">
      <h3 className="text-xl font-bold">AI Infrastructure</h3>
      <p className="mt-2 text-sm text-zinc-400">
        © 2026 AI Infrastructure Benchmark Platform. All rights reserved.
      </p>
    </div>

    {/* Contact info */}
    <div className="flex flex-row gap-6 flex-wrap justify-center [@media(max-width:600px)]:flex-col [@media(max-width:600px)]:items-center">
      <a
        href="mailto:AI Infrastructure@hotmail.com"
        className="flex items-center gap-2 text-zinc-300 transition hover:text-[#C8A14A]"
      >
        <FaEnvelope /> AI Infrastructure@hotmail.com
      </a>
      <a
        href="tel:+1234567890"
        className="flex items-center gap-2 text-zinc-300 transition hover:text-[#C8A14A]"
      >
        <FaPhone /> +1 234 567 890
      </a>
      <a
        href="https://www.linkedin.com/company/ai-infrastructure/"
        target="_blank"
        className="flex items-center gap-2 text-zinc-300 transition hover:text-[#C8A14A]"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </div>
  </div>
</footer>


  );
};

export default Footer;
