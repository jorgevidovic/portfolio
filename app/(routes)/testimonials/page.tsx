"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/data";
import TransitionPage from "@/app/components/TransitionPage";
import CircleImage from "@/app/components/CircleImage";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center font-bold mb-8 md:mb-12">
          Testimonios
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map(({ id, name, description }) => (
                <SwiperSlide key={id}>
                  <h4 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-secondary mb-3">
                    {name}
                  </h4>
                  <div className="mt-5 text-base sm:text-lg text-center leading-relaxed px-4">{description}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
