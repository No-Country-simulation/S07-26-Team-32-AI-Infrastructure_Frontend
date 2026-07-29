import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 border-b border-zinc-800 bg-[#122821] z-50">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="AI Infrastructure Logo"
            className="h-14 w-auto transition hover:opacity-80"
          />
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
          <li>
            <ScrollLink to="hero" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="calculator" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white">
              Calculator
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="benchmark" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white">
              Benchmark
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="report" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white">
              Industry Report
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white">
              About Us
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
