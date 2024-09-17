"use client"
import CircleImage from '@/app/components/CircleImage'
import Container from '@/app/components/Container'
import ContactForm from '@/app/components/Forms/ContactForm'
import SliderService from '@/app/components/SliderService'
import TransitionPage from '@/app/components/TransitionPage'
import Modal from '@/app/utils/Modal'
import React, { useState } from 'react'

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
            <button className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 mx-auto md:mx-0 block' onClick={handleOpenModal}>
              Contacta conmigo
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-2xl font-bold mb-4 text-black">Formulario de Contacto</h2>
              <ContactForm />
            </Modal>
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