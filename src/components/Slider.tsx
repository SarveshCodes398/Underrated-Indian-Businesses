"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Mousewheel,
  EffectFade,
  Autoplay,
  Navigation,
} from "swiper/modules";
import Link from "next/link";
import styles from "./Slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    title: "Okra (Bhindi) Business",
    desc: "Learn sourcing, local selling, national expansion, and export opportunities.",
    image: "/okra.png",
    slug: "okra",
    route: "/guides/okra",
  },
  {
    title: "Refined Oil Business",
    desc: "Understand oilseed sourcing, processing, bottling, and profitable distribution.",
    image: "/refi.png",
    slug: "refined-oil",
    route: "/guides/refined-oil",
  },
  {
    title: "Foxnut (Makhana) Business",
    desc: "Explore branding, packaging, and Amazon selling strategies.",
    image: "/fox.png",
    slug: "makhana",
    route: "/guides/makhana",
  },
  {
    title: "Gond Katira Business",
    desc: "Build a wellness brand around this underrated herbal product.",
    image: "/gum.png",
    slug: "gond-katira",
    route: "/guides/gond-katira",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <Swiper
        modules={[Pagination, Mousewheel, EffectFade, Autoplay, Navigation]}
        effect="fade"
        speed={1200}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: styles.swiperPaginationBulletActive,
          renderBullet: (index, className) => {
            return `<span class="${styles.customBullet} ${className}"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.slug}>
            <div className="relative h-screen w-full">
              <div
                className={styles.slideImage}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
              {/* Gradient Overlay - light and elegant */}
              <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20"></div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12">
                <div className={`max-w-2xl text-center space-y-6 ${styles.animateFadeIn}`}>
                  {/* Title */}
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-sm md:text-base font-semibold text-orange-400 tracking-widest uppercase">
                        Business Guide
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-md max-w-xl mx-auto">
                    {slide.desc}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link href={slide.route}>
                      <button className="inline-block px-8 md:px-10 py-3 md:py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95">
                        Explore Full Guide
                        <span className="ml-2">→</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className={`swiper-button-prev ${styles.customNavButton}`}></div>
        <div className={`swiper-button-next ${styles.customNavButton}`}></div>
      </Swiper>
    </div>
  );
}