import React from 'react'
export default function card({img,logo,mllogo,title,disc,mtbut}) {
  return (
    <>
    <div className='flex flex-col shrink-0 w-[442px] h-[426px] border-[1px] border-[#EAEAEA] rounded-2xl shadow-md/25'>        
    <div className='relative ml-[12px] mt-[13px] mr-[15px] mb-[7px] w-[415px] h-[271px]'>
            <img src={img} alt="bb1" className='rounded-2xl' />
            <span className='absolute top-[25px] right-[7px] bg-[#8E1616] px-[15px] py-0.5 rounded-[4px] text-white'>New Cairo</span>
        </div>
        <div className={`flex ${mllogo}`}>
            <img src={logo} alt="logo" />
            <div className='flex flex-col '>
                <h2 className='text-[#1D1616] font-semibold text-[20px] ml-0.5 mt-[2px]'>{title}</h2>
                <p className='text-[#847D7D] text-[12px] font-semibold ml-0.5 '>{disc}</p>
            </div>
        </div>
        <button className={` border-[#8E1616] border-[1px] mx-[13px] rounded-[8px] text-[#8E1616] px-[163px] py-[4px] h-[35px] bottom-[9px] ${mtbut}`}>View Details</button>
    </div>
    </>
  )
}
