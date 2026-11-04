import { useRef, useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Hero from "../../components/Hero"
import bgg from "../../assets/images/bg.jpg"
import Title from "./title"
import build from "./build.png"
import money from "./money.png"
import smile from "./smile.png"
import star from "./star.png"
import grd from "./g.png"
import mp from "./m.svg"
import s from "./S.svg"
import b1 from "./b1.png"
import b2 from "./b2.png"
import b3 from "./b3.png"
import Card from "./card"
import bb1 from "./bb1.png"
import lb1 from "./lb1.png"
import bb2 from "./bb2.png"
import lb2 from "./lb2.png"
import CardsSlider from "./CardsSlider";


function Home() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollToSlide = (index) => {
  const carousel = carouselRef.current
  if (!carousel) return
  const slide = carousel.children[index]
  if (!slide) return
  carousel.scrollTo({
    left: slide.offsetLeft - carousel.offsetLeft,
    behavior: "smooth",
  })
  setActiveIndex(index)
}
  return (
    <>
      <Hero
        bg={bgg}
        title={"Redefining the Horizon of Modern Luxury Living"}
        disc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
        btnCont={"Explore"}
        btn={true}
        icons={true}
      />
      <Title
        tn={"Benchmarks of Success"}
        tmt={"mt-[123px]"}
        wdev={"w-[164px]"}
        mt={"mt-[4px]"}
        mb={"mb-[56px]"}
      />
      <div className="flex gap-[22px] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[325px] h-[143px] border-[1px] rounded-[12px] border-[#CEC7C7] shadow-md/25">
          <img src={build} alt="bulid" />
          <div className="font-semibold text-[24px] py-1.5">48</div>
          <div className="text-[#554E4E]">Properties Managed</div>
        </div>
        <div className="flex flex-col justify-center items-center w-[325px] h-[143px] border-[1px] rounded-[12px] border-[#CEC7C7] shadow-md/25">
          <img src={money} alt="money" />
          <div className="font-semibold text-[24px] py-2 ">90M</div>
          <div className="text-[#554E4E]">Total Managed Investments</div>
        </div>
        <div className="flex flex-col justify-center items-center w-[325px] h-[143px] border-[1px] rounded-[12px] border-[#CEC7C7] shadow-md/25">
          <img src={smile} alt="happy" />
          <div className="font-semibold text-[24px] py-2">500</div>
          <div className="text-[#554E4E]">Happy Clients</div>
        </div>
        <div className="flex flex-col justify-center items-center w-[325px] h-[143px] border-[1px] rounded-[12px] border-[#CEC7C7] shadow-md/25">
          <img src={star} alt="star" />
          <div className="font-semibold text-[24px] py-2">99%</div>
          <div className="text-[#554E4E]">Client Satisfaction</div>
        </div>
      </div>
      <Title
        tn={"About Grand Atlas"}
        tmt={"mt-[180px]"}
        wdev={"w-[164px]"}
        mt={"mt-[10px]"}
        mb={"mb-[65px]"}
      />
      <div className="flex h-[667px] gap-[70px] justify-center items-center">
        <img src={grd} alt="grandAtlas" className="w-[673px]" />
        <div className="flex flex-col gap-[115px]">
        <div className="w-[642px] text-[#554E4E] text-2xl">We began with a singular, 
          uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture.
          We recognized that for the discerning client, a home is rarely just a physical structure; 
          it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. 
          Our journey started not in the pursuit of transactions, but in the pursuit of excellence. 
          We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke,
          'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,
          We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
        </div>
        <div className="flex ">
          <button className="flex items-center justify-center w-[258px] h-[47px] rounded-[8px] text-[20px] mt-4 text-white bg-linear-to-r from-[#8E1616] to-[#C34B4B] ">Know More <img src={s} alt="arrow" className=" flex items-center justify-center w-[17px] h-[19px] ml-2 mt-1" /></button>
        </div>
        </div>
      </div>
      <Title
        tn={"Hand-Selected Masterpieces"}
        tmt={"mt-[180px]"}
        wdev={"w-[237px]"}
        mt={"mt-[12px]"}
        mb={"mb-[39px]"}
      />
      <div className=" ml-[37px] overflow-hidden">
          <div
            ref={carouselRef}
            onScroll={(e) => {
              const carousel = e.currentTarget;
              const slides = Array.from(carousel.children);
              let closestIndex = 0;
              let minDistance = Infinity;
              slides.forEach((slide, index) => {
                const distance = Math.abs(
                  slide.offsetLeft - carousel.offsetLeft - carousel.scrollLeft,
                );
                if (distance < minDistance) {
                  minDistance = distance;
                  closestIndex = index;
                }
              });
              setActiveIndex(closestIndex);
            }}
            className="carousel carousel-start w-full gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2">
            <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={b1}
                  alt="Palm Hills Office No.3"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
                01. Palm Hills Office No.3
              </h3>
            </div>
            <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={b2}
                  alt="Hacienda Duplex No.4"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
                02. Hacienda Duplex No.4
              </h3>
            </div>
            <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={b3}
                  alt="Sawary Family Villa"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
                03. Sawary Family Villa
              </h3>
            </div>
            <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={b3}
                  alt="Sawary Family Villa"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
                04. Sawary Family Villa
              </h3>
            </div>
          </div>
          <div className="mt-[45px] flex items-center justify-center gap-[9px]">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to property ${index + 1}`}
                className={`h-[12px] rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-[60px] bg-[#8E1616]"
                    : "w-[16px] bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      <Title
        tn={"Strategic Locations"}
        tmt={"mt-[180px]"}
        wdev={"w-[164px]"}
        mt={"mt-[4px]"}
        mb={"mb-[29px]"}
      />
      <img src={mp} alt="map" className="w-full"/>
      <Title
        tn={"Future Landmarks"}
        tmt={"mt-[180px]"}
        wdev={"w-[237px]"}
        mt={"mt-[12px]"}
        mb={"mb-[38px]"}
      />
      <CardsSlider
        cards={[
          {
            img: bb1,
            logo: lb1,
            mllogo: "ml-[7px]",
            mtbut: "mt-[19px]"
          },
          {
            img: bb2,
            logo: lb2,
            mllogo: "ml-[13px]",
            title: "Hayah City",
            disc: "Hayah Development",
            mtbut: "mt-[34px]"
          },
          {
            img: bb1,
            logo: lb1,
            mllogo: "ml-[7px]",
            mtbut: "mt-[19px]"
          },
          {
            img: bb2,
            logo: lb2,
            mllogo: "ml-[13px]",
            title: "Hayah City",
            disc: "Hayah Development",
            mtbut: "mt-[34px]"
          }
        ]}
      />
      <div className="mt-[145px]"></div>
    </>
  )
}

export default Home