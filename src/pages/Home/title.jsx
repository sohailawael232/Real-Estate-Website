import React from 'react'

export default function title({tn,tmt,mt,mb,wdev}) {
  return (
    <>
    <div className='flex flex-col items-center justify-center'  >
        <h2 className={`font-[Playfair] text-[32px] font-semibold text-center ${tmt}`}>{tn}</h2>
        <div className={`bg-[#C34B4B] h-[6px] ${wdev} ${mt} ${mb} rounded-[2px] `}></div>
    </div>
    </>
  )
}
