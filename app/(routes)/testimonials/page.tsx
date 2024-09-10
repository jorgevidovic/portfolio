"use client"

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataTestimonials } from '@/data';
import TransitionPage from '@/app/components/TransitionPage';
import CircleImage from '@/app/components/CircleImage';


const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className='flex flex-col justify-center h-lvh'>
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 font-bold">
          Testimonios
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
            >
              {dataTestimonials.map(({ id, name, description }) => (
                <SwiperSlide key={id}>
                  <h4 className='text-center font-bold text-secondary'>{name}</h4>
                  <div className="mt-5 text-center">
                    {description}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsPage;