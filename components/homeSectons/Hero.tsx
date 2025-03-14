"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Button from "../ui/Button";
import { MoveLeft, MoveRight } from "lucide-react";

// Hero slides data
const heroSlides = [
  {
    image: "/images/home-hero.jpg",
    heroIcon: "/images/hero-icon.png",
    title: "Find Your Dream Home",
    description: "Explore the best properties available for you.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    shape: "/images/shape.png",
  },
  {
    image: "/images/home-hero2.jpg",
    heroIcon: "/images/hero-icon.png",
    title: "Luxury Living Spaces",
    description: "Discover modern homes with stunning architecture.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    shape: "/images/shape.png",
  },
  {
    image: "/images/home-hero3.jpg",
    heroIcon: "/images/hero-icon.png",
    title: "Your Perfect Neighborhood",
    description: "Find a home in the best locations near you.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    shape: "/images/shape.png",
  },
];

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const openVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        onChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
              />
              {/* Optional overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute left-0 top-80 h-full w-[200px] md:w-[300px] overflow-hidden pointer-events-none">
                <Image
                  src={slide.shape}
                  width={890}
                  height={805}
                  alt="design shape"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Hero Content (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="container">
                <div className="text-left max-w-xl flex flex-col items-start gap-5 bg-white/60 p-14">
                  <span className="font-links text-base flex gap-2 items-center">
                    <Image
                      src={slide.heroIcon}
                      width={14}
                      height={13}
                      alt="icon"
                      className="object-cover"
                    />
                    Real Estate Agency
                  </span>
                  <h1 className="text-heading font-bold">{slide.title}</h1>
                  <p className="text-base font-links">{slide.description}</p>

                  <div className="flex gap-5 items-center">
                    <Button text="View Properties" />

                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-(--red-active) cursor-pointer shadow-md hover:scale-105 transition leading-none text-xl"
                      onClick={() => openVideo(slide.videoUrl)}
                    >
                      <span className="relative left-[1.5px]">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Nabigation Arrows */}
        <button
          className={`hero-prev absolute xl:top-1/2 top-3/4 left-7 xl:left-20 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center ${
            activeIndex === 0
              ? "bg-white text-(--red-active) cursor-pointer"
              : "bg-(--red-active) text-white hover:bg-red-600"
          } transition`}
        >
          <MoveLeft size={24} />
        </button>

        <button
          className={`hero-next absolute
     xl:top-1/2 xl:left-auto xl:right-20 top-3/4 left-24
    -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center cursor-pointer
    ${
      activeIndex === heroSlides.length - 1
        ? "bg-(--red-active) text-[--red-active]"
        : "bg-(--red-active) text-white hover:bg-red-600"
    } 
    transition`}
        >
          <MoveRight size={24} />
        </button>
      </Swiper>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-white w-[80%] max-w-2xl pt-12 pb-4 px-4 rounded-md">
            <button
              className="absolute top-2.5 left-4 text-xl font-bold text-black cursor-pointer"
              onClick={() => setIsVideoOpen(false)}
            >
              ✖
            </button>
            <iframe
              width="100%"
              height="400"
              src={currentVideo}
              title="Hero Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
