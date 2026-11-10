
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

      <div className='flex flex-col lg:flex-row mt-16 sm:mt-20 lg:mt-[118px] gap-10 lg:gap-[20px] px-4 sm:px-6 lg:px-0 max-w-[1400px] mx-auto'>

        {/* Contact Information */}
        <div className='flex flex-col w-full lg:w-1/2 lg:ml-[37px] min-w-0'>
          <h2 className='font-semibold text-2xl sm:text-[28px] lg:text-[32px] font-[Playfair]'>
            Contact Information
          </h2>

          <div className='mt-5 mb-8 text-[#847D7D] text-base sm:text-lg lg:text-[20px] w-full max-w-[673px]'>
            Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
          </div>

          <div className='flex flex-col mb-9 gap-5 text-[#8E1616] text-base sm:text-lg lg:text-[20px]'>

            <div className='flex items-start gap-2 min-w-0'>
              <img src={loc} alt="location" className='shrink-0 mt-1' />
              <p className='break-words'>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
            </div>

            <div className='flex items-start gap-2 min-w-0'>
              <img src={mail} alt="location" className='shrink-0 mt-1' />
              <p className='break-all'>Grand .Atlas.Support@gmail.com</p>
            </div>

            <div className='flex items-center gap-2'>
              <img src={mob} alt="location" className='shrink-0' />
              <p>01247859622</p>
            </div>

            <div className='flex items-center gap-2'>
              <img src={phone} alt="location" className='shrink-0' />
              <p>035987124</p>
            </div>
          </div>

          {/* Social Media */}
          <div className='flex flex-col gap-[13px] mb-9'>
            <h3 className='font-[Playfair] font-semibold text-lg sm:text-xl lg:text-[22px] text-[#847D7D]'>
              Follow us on social media
            </h3>

            <div className='flex flex-wrap gap-[13px]'>
              <div className='w-[42px] h-[42px] shrink-0 rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                <img src={fb} alt="facebook" className='p-2 object-contain' />
              </div>

              <div className='w-[42px] h-[42px] shrink-0 rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                <img src={x} alt="x" className='p-3 object-contain' />
              </div>

              <div className='w-[42px] h-[42px] shrink-0 rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                <img src={insta} alt="instgram" className='p-2 object-contain' />
              </div>

              <div className='w-[42px] h-[42px] shrink-0 rounded-full border-3 border-[#8E1616] flex items-center justify-center'>
                <img src={tik} alt="tiktok" className='p-1 object-contain' />
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className='flex flex-col gap-[10px]'>
            <h3 className='font-[Playfair] font-semibold text-lg sm:text-xl lg:text-[22px] text-[#847D7D]'>
              Working Hours
            </h3>

            <div className='flex flex-col gap-[8px]'>
              <div className='flex flex-wrap gap-x-5'>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#8E1616]'>Saturday :</div>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
              </div>

              <div className='flex flex-wrap gap-x-5'>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#8E1616]'>Sunday :</div>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
              </div>

              <div className='flex flex-wrap gap-x-5'>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#8E1616]'>Monday :</div>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
              </div>

              <div className='flex flex-wrap gap-x-5'>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#8E1616]'>Tuesday :</div>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
              </div>

              <div className='flex flex-wrap gap-x-5'>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#8E1616]'>Wednasday :</div>
                <div className='text-base sm:text-lg lg:text-[20px] text-[#847D7D]'>9:00AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='flex flex-col w-full lg:w-1/2 min-w-0 h-auto font-[Playfair] shadow-md/25 border-[1px] border-[#E2E2E2] rounded-3xl mb-16 lg:mb-[99px] px-4 sm:px-6 lg:px-[30px] pt-6 sm:pt-8 lg:pt-[34px] pb-6 lg:pb-[25px]'>

          <h2 className='font-semibold text-xl sm:text-2xl lg:text-[26px] mb-7'>
            Send us a message
          </h2>

          <label htmlFor="name" className='text-base sm:text-lg lg:text-[20px]'>Name</label>
          <input type="text" id='name' className='w-full border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[50px] sm:h-[58px] mt-[8px] mb-6 p-2' />

          <label htmlFor="email" className='text-base sm:text-lg lg:text-[20px]'>Email</label>
          <input type="email" id='email' className='w-full border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[50px] sm:h-[58px] mt-[8px] mb-4 p-2' />

          <label htmlFor="phone" className='text-base sm:text-lg lg:text-[20px]'>Phone</label>
          <input type="phone" id='phone' className='w-full border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[50px] sm:h-[58px] mt-[8px] mb-4 p-2' />

          <label htmlFor="ms" className='text-base sm:text-lg lg:text-[20px]'>Message</label>
          <textarea id='ms' className='w-full border-[#CEC7C7] border-[1px] bg-[#F7F7F7] rounded-[8px] h-[120px] sm:h-[140px] mt-[8px] mb-8 lg:mb-[42px] p-2' />

          <button className='w-full text-white bg-linear-to-r from-[#8E1616] to-[#C34B4B] border-[1px] border-white h-[49px] rounded-[8px] text-lg sm:text-[20px]'>
            Send Message
          </button>
        </div>
      </div>
    </>
  )
}
