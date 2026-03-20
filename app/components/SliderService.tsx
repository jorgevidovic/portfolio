"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";
import { useLang } from "@/app/lib/LangContext";

const SliderService = () => {
  const { lang } = useLang();

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 16 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[380px] sm:h-[360px] md:h-[340px] w-[280px] md:w-[560px] pb-10"
    >
      {serviceData.map((item) => {
        const content = item[lang] ?? item.es;
        return (
          <SwiperSlide key={item.id} className="h-auto">
            <div className="flex flex-col h-full rounded-xl bg-surface border border-white/8 hover:border-secondary/40 transition-all duration-300 group overflow-hidden">
              {/* Top accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-secondary/60 to-transparent" />
              <div className="flex flex-col flex-1 px-5 py-6">
                {/* Icon */}
                <div className="mb-4 w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">
                  {content.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {content.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderService;
