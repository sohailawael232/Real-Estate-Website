import React from 'react'
import fb from "../assets/icons/fb.svg"
import x from "../assets/icons/x.svg"
import insta from "../assets/icons/insta.png"
import tik from "../assets/icons/tik.svg"
export default function Hero({bg,title,disc,btnCont,btn,icons}) {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: `url(${bg})`}}>
      <h1 className="text-[48px] font-bold font-[Playfair] text-[#EEEEEE] w-154 mb-8 mt-[180px]">{title}</h1>
      <p className="text-[20px] text-[#CEC7C7] w-[1050px] mb-[50px] font-semibold ">{disc}</p>
      {
          btn? 
            <button className="w-64.5 text-[20px] py-2 px-6 rounded-lg font-semibold bg-linear-to-r  from-[#8E1616] to-[#C34B4B]">{btnCont}</button>
          :""
      }
    </div>
    {
      icons&&
      <div className='absolute -bottom-5 px-9 flex flex-col justify-center items-center gap-6'>
        <div className='w-12 h-12 rounded-full border-3 border-white flex items-center justify-center'>
          <img src={fb} alt="facebook" className='p-2 object-contain' />
        </div>
        <div className='w-12 h-12 rounded-full border-3 border-white flex items-center justify-center'>
          <img src={x} alt="x" className='p-3 object-contain' />
        </div>
        <div className='w-12 h-12 rounded-full border-3 border-white flex items-center justify-center'>
          <img src={insta} alt="instgram" className='p-2 object-contain' />
        </div>
        <div className='w-12 h-12 rounded-full border-3 border-white flex items-center justify-center'>
          <img src={tik} alt="tiktok" className='p-1 object-contain' />
        </div>
      </div>
    }
    </>
  )
}
