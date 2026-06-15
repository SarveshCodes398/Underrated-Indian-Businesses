"use client";

import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const slides = [
  {
    title: "Okra",
    image: "/okra.png",
    route: "/Okra",
  },
  {
    title: "Refined Oil",
    image: "/refi.png",
    route: "/Refi",
  },
  {
    title: "Fox Nuts (Makhana)",
    image: "/fox.png",
    route: "/FoxNuts",
  },
  {
    title: "Tragacanth Gum (Gond Katira)",
    image: "/gum.png",
    route: "/Gum",
  },
];

export default function Slider() {
  const router = useRouter();

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectCoverflow,
          ]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          slidesPerView={1.2}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
            scale: 0.9,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          className="pb-14"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.route}>
              <div
                onClick={() => router.push(slide.route)}
                className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto object-contain rounded-3xl select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}