
import { useRef, useState } from "react";
import Card from "./card";

function CardsSlider({ cards }) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    const slides = Array.from(carousel.children);

    if (slides[index]) {
      carousel.scrollTo({
        left: slides[index].offsetLeft - slides[0].offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-[39px] ml-[37px] overflow-hidden">
      <div
        ref={carouselRef}
        onScroll={(e) => {
          const carousel = e.currentTarget;
          const slides = Array.from(carousel.children);

          let closestIndex = 0;
          let minDistance = Infinity;

          slides.forEach((slide, index) => {
            const distance = Math.abs(
              slide.offsetLeft -
              slides[0].offsetLeft -
              carousel.scrollLeft
            );

            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
        }}
        className="carousel carousel-start w-full gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2"
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className="carousel-item shrink-0 snap-start"
          >
            <Card {...item} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-[45px] flex items-center justify-center gap-[9px]">
        {cards.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to card ${index + 1}`}
            className={`h-[12px] rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-[60px] bg-[#8E1616]"
                : "w-[16px] bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsSlider;
