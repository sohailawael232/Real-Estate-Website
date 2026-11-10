
import logo from "./Logo Option.png"
import { Link } from "react-router-dom"
import arrow from "./arr.svg"
import face from "./f.svg"
import tw from "./t.svg"
import lin from "./l.svg"

function Footer() {
  return (
    <footer className="bg-[#EBEBEB] relative text-[#0A142F] font-lato font-regular text-lg py-[36px] px-4 sm:px-8 lg:px-12 xl:px-[183px]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        <div className="flex flex-col gap-[20px]">
          <img src={logo} alt="Logo" className="w-[150px] h-[140px]" />

          <div className="flex flex-col gap-[20px]">
            <p>+1 (7635) 547-12-97</p>
            <p>support@lift.agency</p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <div className="font-semibold text-[#0A142F] mb-[3px]">
            Quick Links
          </div>

          <ul className="flex flex-col gap-[7px] text-gray-500">
            <Link to="/">
              <li className="duration-300 hover:text-[#8E1616]">Home</li>
            </Link>
            <Link to="/Units">
              <li className="duration-300 hover:text-[#8E1616]">Inventories</li>
            </Link>
            <Link to="/Zones">
              <li className="duration-300 hover:text-[#8E1616]">Zones</li>
            </Link>
            <Link to="/Developers">
              <li className="duration-300 hover:text-[#8E1616]">Developers</li>
            </Link>
            <Link to="/ContactUs">
              <li className="duration-300 hover:text-[#8E1616]">Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="font-semibold mb-[3px]">About</p>

          <ul className="flex flex-col text-gray-500 w-[120px] gap-[7px]">
            <li>Grand Atlas</li>
            <li>Privacy Policy</li>
            <li>Legal</li>
            <li>Help</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="mb-[34px]">Get In touch</p>

          <div className="flex w-full max-w-[249px] mb-[21px]">
            <input
              type='text'
              placeholder="Get product updates"
              className="w-full min-w-0 h-[46px] border-[#8E1616] rounded-l-[6px] border-1 p-3.5 placeholder:text-[14px]"
            />

            <div className="bg-[#8E1616] w-[49px] h-[46px] shrink-0 rounded-r-[5px] flex items-center justify-center">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="flex gap-[15px]">
            <div className='w-10 h-10 rounded-full border-2 border-[#ddd2d2] flex items-center justify-center'>
              <img src={lin} alt="linkedIn" />
            </div>

            <div className='w-10 h-10 rounded-full border-2 border-[#ddd2d2] flex items-center justify-center'>
              <img src={face} alt="facebook" />
            </div>

            <div className='w-10 h-10 rounded-full border-2 border-[#ddd2d2] flex items-center justify-center'>
              <img src={tw} alt="twitter" />
            </div>
          </div>
        </div>

      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-[55px]"></div>

      <div className="text-center mt-[40px] text-sm sm:text-base">
        &copy; 2020 Lift Media. All rights reserved
      </div>

    </footer>
  )
}

export default Footer
