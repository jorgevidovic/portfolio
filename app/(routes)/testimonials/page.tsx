"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/data";
import TransitionPage from "@/app/components/TransitionPage";
import CircleImage from "@/app/components/CircleImage";
import { useLang } from "@/app/lib/LangContext";

const TestimonialsPage = () => {
  const { lang, tr } = useLang();

  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center font-bold mb-8 md:mb-12">
          {tr("testimonials_title")}
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 15 } }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map((item) => {
                const content = item[lang] ?? item.es;
                return (
                  <SwiperSlide key={item.id}>
                    <h4 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-secondary mb-3">
                      {content.name}
                    </h4>
                    <div className="mt-5 text-base sm:text-lg text-center leading-relaxed px-4">
                      {content.description}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
