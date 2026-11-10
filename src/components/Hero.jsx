
import React from 'react'
import fb from "../assets/icons/fb.svg"
import x from "../assets/icons/x.svg"
import insta from "../assets/icons/insta.png"
import tik from "../assets/icons/tik.svg"

export default function Hero({bg,title,disc,btnCont,btn,icons}) {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4 sm:px-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold font-[Playfair] text-[#EEEEEE] w-full max-w-[616px] lg:w-154 mb-6 lg:mb-8 mt-20 sm:mt-28 lg:mt-[180px]">
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-[20px] text-[#CEC7C7] w-full max-w-[1050px] mb-8 lg:mb-[50px] font-semibold">
          {disc}
        </p>

        {
          btn ?
            <button className="w-52 sm:w-64.5 text-base sm:text-[20px] py-2 px-6 rounded-lg font-semibold bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
              {btnCont}
            </button>
          : ""
        }
      </div>

      {
        icons &&
        <div className="absolute left-3 sm:left-6 lg:left-9 bottom-5 lg:-bottom-50 lg:-translate-y-1/2 flex flex-row lg:flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-6">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
            <img src={fb} alt="facebook" className="p-2 object-contain" />
          </div>

          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
            <img src={x} alt="x" className="p-2 sm:p-3 object-contain" />
          </div>

          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
            <img src={insta} alt="instagram" className="p-2 object-contain" />
          </div>

          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 sm:border-3 border-white flex items-center justify-center">
            <img src={tik} alt="tiktok" className="p-1 object-contain" />
          </div>
        </div>
      }
    </>
  )
}
