
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./Logo Option.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="bg-white text-gray-400 text-lg font-semibold font-lato sticky top-0 z-50 ">

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-10 py-3">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Logo"
            className="w-16 md:w-20 h-auto"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-18">
          <Link to="/">
            <li className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#8E1616] hover:text-[#8E1616]">
              Home
            </li>
          </Link>

          <Link to="/Units">
            <li className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#8E1616] hover:text-[#8E1616]">
              Units
            </li>
          </Link>

          <Link to="/Zones">
            <li className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#8E1616] hover:text-[#8E1616]">
              Zones
            </li>
          </Link>

          <Link to="/Developers">
            <li className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#8E1616] hover:text-[#8E1616]">
              Developers
            </li>
          </Link>

          <Link to="/ContactUs">
            <li className="border-b-2 border-transparent pb-1 transition-colors hover:border-[#8E1616] hover:text-[#8E1616]">
              Contact Us
            </li>
          </Link>
        </ul>

        {/* Register Button - Desktop */}
        <button className="hidden lg:block bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          Register
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#8E1616] text-3xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-5 py-6 border-t border-gray-100 bg-white">

          <Link to="/" onClick={closeMenu} className="hover:text-[#8E1616]">
            Home
          </Link>

          <Link to="/Units" onClick={closeMenu} className="hover:text-[#8E1616]">
            Units
          </Link>

          <Link to="/Zones" onClick={closeMenu} className="hover:text-[#8E1616]">
            Zones
          </Link>

          <Link to="/Developers" onClick={closeMenu} className="hover:text-[#8E1616]">
            Developers
          </Link>

          <Link to="/ContactUs" onClick={closeMenu} className="hover:text-[#8E1616]">
            Contact Us
          </Link>

          <button className="bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white px-8 py-3 rounded-lg shadow-md">
            Register
          </button>

        </div>
      )}

    </nav>
  )
}

export default Navbar
