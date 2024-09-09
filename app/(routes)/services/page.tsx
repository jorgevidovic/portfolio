import CircleImage from '@/app/components/CircleImage'
import Container from '@/app/components/Container'
import SliderService from '@/app/components/SliderService'
import TransitionPage from '@/app/components/TransitionPage'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <CircleImage />
        <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">

          <div className='max-w-[450px]'>
            <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold md:px-20 md:mb-5'>
              Servicios
            </h1>
            <p className='mb-3 text-xl text-gray-300 text-center md:text-left'>
              Soy un desarrollador <span className='font-bold'>Full Stack</span> con amplia experiencia en
              el diseño y desarrollo tanto en el <span className='font-bold'>Frontend</span> como en el <span className='font-bold'>Backend</span>.
              En el Frontend, manejo aspectos de diseño y desarrollo de interfaces,
              mientras que en el Backend, me especializo en la arquitectura de sistemas,
              lógica de negocio, y la gestión eficiente de bases de datos, entre otras áreas clave.
            </p>
            <button className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 mx-auto md:mx-0 block'>
              Contacta conmigo
            </button>
          </div>

          <div>
            <SliderService />
          </div>
        </div>
      </Container>
    </>
  )
}

export default ServicesPage