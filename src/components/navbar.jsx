import { Link } from "react-router-dom"
import logo from "./Logo Option.png"
function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] text-gray-400 text-lg font-semibold font-lato flex items-center justify-between sticky top-0 z-10" >
      <img src={logo} alt="Logo" className="w-20 h-auto mr-[260px] ml-[25px]" />
      <ul className="flex items-center gap-[69px]">
        <Link to="/">
          <li className="block border-b-[2px] border-transparent pb-1 transition-colors hover:border-[#8E1616] duration-500 hover:text-[#8E1616]">Home</li>
        </Link>
        <Link to="/Units">
          <li className="block border-b-[2px] border-transparent pb-1 transition-colors hover:border-[#8E1616] duration-500 hover:text-[#8E1616]">Units</li>
        </Link>
        <Link to="/Zones">
          <li className="block border-b-[2px] border-transparent pb-1 transition-colors hover:border-[#8E1616] duration-500 hover:text-[#8E1616]">Zones</li>
        </Link>
        <Link to="/Developers">
          <li className="block border-b-[2px] border-transparent pb-1 transition-colors hover:border-[#8E1616] duration-500 hover:text-[#8E1616]">Developers</li>
        </Link>
        <Link to="/ContactUs">
          <li className="block border-b-[2px] border-transparent pb-1 transition-colors hover:border-[#8E1616] duration-500 hover:text-[#8E1616]">Contact Us</li>
        </Link>
      </ul>
      <button className="bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-red-950 hover:shadow-lg mr-[36px] ml-[254px]">Register</button>
    </nav>
  )
}

export default Navbar