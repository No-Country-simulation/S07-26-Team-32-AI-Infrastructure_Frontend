import Steps from "../Steps/Steps";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#0B0B0B] text-white mt-20 pt-10 pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-4 py-8">
        
        {/* Columna izquierda: texto */}
        <div className="flex flex-col justify-start space-y-10 text-center md:text-left">
          <h1 className="!text-white text-5xl font-bold leading-tight md:text-6xl">
            Powering the Future of AI Infrastructure
          </h1>

          <p className="max-w-xl text-lg text-zinc-400">
            Benchmark your data center maturity and unlock insights that drive
            efficiency, sustainability, and innovation.
          </p>

          <div className="pt-16">
            <ScrollLink
              to="calculator"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-primary cursor-pointer rounded-lg bg-[#C8A14A] px-8 py-4 text-lg font-semibold text-black transition hover:brightness-110"
            >
              Calculator
            </ScrollLink>
          </div>
        </div>

        {/* Columna derecha: Steps */}
        <div className="w-full">
          <Steps />
        </div>
      </div>
    </section>
  );
};

export default Hero;
