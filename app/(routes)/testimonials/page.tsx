"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/data";
import TransitionPage from "@/app/components/TransitionPage";
import { useLang } from "@/app/lib/LangContext";

const TestimonialsPage = () => {
  const { lang, tr } = useLang();

  return (
    <>
      <TransitionPage />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
          {tr("testimonials_title")}
        </h1>

        <Swiper
          breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 20 } }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-[300px] sm:w-[480px] md:w-[620px] pb-10"
        >
          {dataTestimonials.map((item) => {
            const content = item[lang] ?? item.es;
            return (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-2xl bg-surface border border-white/8 p-6 sm:p-8 mx-1">
                  {/* Quote mark */}
                  <svg
                    className="absolute top-4 left-5 w-8 h-8 text-secondary/25"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-base sm:text-lg text-white/70 leading-relaxed text-center mb-6 mt-4 px-2">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-px bg-secondary/40" />
                    <p className="text-sm font-semibold text-secondary text-center">
                      {content.name}
                    </p>
                    <div className="w-8 h-px bg-secondary/40" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialsPage;
