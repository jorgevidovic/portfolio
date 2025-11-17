"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";

const SliderService = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      autoHeight={false}
      slidesPerView={1}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[400px] sm:h-[420px] md:h-[360px] w-[270px] md:w-[550px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index} className="h-auto">
          <div className="flex flex-col px-6 py-8 h-full min-h-[340px] sm:min-h-[360px] md:min-h-[300px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <div className="mb-4 text-5xl sm:text-6xl md:text-4xl text-secondary flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="mb-3 text-2xl sm:text-3xl md:text-xl font-bold flex-shrink-0">
                {item.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderService;
