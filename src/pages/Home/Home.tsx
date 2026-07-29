import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Logos from "../../components/Logos/Logos";
import Features from "../../components/Features/Features";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import PdfGenerator from "../../components/PdfGenerator/PdfGenerator";
import Calculator from "../../components/Calculator/Calculator";
import BenchmarkOverview from "../../components/BenchmarkOverview/BenchmarkOverview";

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="benchmark">
        <BenchmarkOverview />
      </div>

      <div id="logos">
        <Logos />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="calculator">
        <Calculator />
      </div>

      <div id="report">
        <PdfGenerator />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
