import React from 'react'
import cont from "../../assets/images/contact.png"
import Hero from "../../components/Hero"
import loc from "./location.svg"
import mail from "./mail.svg"
import mob from "./mobile.svg"
import phone from "./phone.svg"
import fb from "./face.svg"
import x from "./xx.svg"
import insta from "./ins.svg"
import tik from "./tk.svg"

export default function ContactUs() {
  return (
    <>
      <Hero
        bg={cont}
        title={"Connected Globally. Available Locally."}
        disc={"With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."}
        btnCont={"Explore"}
        btn={false}
        />
        <div className='flex mt-[118px] gap-[20px]'>
          <div className='flex flex-col ml-[37px]'>
            <h2 className='font-semibold text-[32px] font-[Playfair] '>Contact Information</h2>
            <div className='mt-[20px] mb-[38px] text-[#847D7D] text-[20px] w-[673px] h-[72px]'>Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.</div>
            <div className='flex flex-col mb-[36px] gap-[20px] text-[#8E1616] text-[20px]'>
              <div className='flex'>
                <img src={loc} alt="location" />
                <p>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
              </div>
              <div className='flex gap-2'>
                <img src={mail} alt="location" />
                <p>Grand .Atlas.Support@gmail.com</p>
              </div>
              <div className='flex gap-2'>
                <img src={mob} alt="location" />
                <p>01247859622</p>
              </div>
              <div className='flex gap-2'>
                <img src={phone} alt="location" />
                <p>035987124</p>
              </div>
            </div>
            <div className='flex flex-col gap-[13px] mb-9 '>
              <h3 className='font-[Playfair] font-semibold text-[22px] text-[#847D7D]'>Follow us on social media</h3>
              <div className='flex gap-[13px]'>
                <div className='w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center '>
                  <img src={fb} alt="facebook" className='p-2 object-contain' />
                </div>
                <div className='w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                  <img src={x} alt="x" className='p-3 object-contain' />
                </div>
                <div className='w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                  <img src={insta} alt="instgram" className='p-2 object-contain' />
                </div>
                <div className='w-[42px] h-[42px] rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                  <img src={tik} alt="tiktok" className='p-1 object-contain' />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h3 className='font-[Playfair] font-semibold text-[22px] text-[#847D7D]'>Working Hours</h3>
              <div className='flex flex-col gap-[8px]'>
                <div className='flex gap-[35px]'>
                  <div className='text-[20px] text-[#8E1616]'>Saturday :</div>
                  <div className='text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
                </div>
                <div className='flex gap-[48px]'>
                  <div className='text-[20px] text-[#8E1616]'>Sunday :</div>
                  <div className='text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
                </div>
                <div className='flex gap-[40px]'>
                  <div className='text-[20px] text-[#8E1616]'>Monday :</div>
                  <div className='text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
                </div>
                <div className='flex gap-[40px]'>
                  <div className='text-[20px] text-[#8E1616]'>Tuesday :</div>
                  <div className='text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
                </div>
                <div className='flex gap-[9px]'>
                  <div className='text-[20px] text-[#8E1616]'>Wednasday :</div>
                  <div className='text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col h-[733px] w-[673px] font-[Playfair] shadow-md/25 border-[1px] border-[#E2E2E2] rounded-3xl mb-[99px] px-[30px] pt-[34px] pb-[25px]'>
          <h2 className='font-semibold text-[26px] mb-[35px]'>Send us a message</h2>
          <label htmlFor="name" className='text-[20px]'>Name</label>
          <input type="text" id='name' className='border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[58px] mt-[8px] mb-[27px] p-2' />
          <label htmlFor="email" className='text-[20px]'>Email</label>
          <input type="email" id='email' className='border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[58px] mt-[8px] mb-[16px] p-2' />
          <label htmlFor="phone" className='text-[20px]'>Phone</label>
          <input type="phone" id='phone' className='border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[58px] mt-[8px] mb-[16px] p-2' />
          <label htmlFor="ms" className='text-[20px]'>Message</label>
          <textarea id='ms' className='border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[140px] mt-[8px] mb-[42px] p-2' />
          <button className=' text-white bg-linear-to-r  from-[#8E1616] to-[#C34B4B] border-[1px] border-white h-[49px] rounded-[8px] text-[20px]'>Send Message</button>
          </div>
        </div>
    </>
  )
}
