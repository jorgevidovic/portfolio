"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Modal from "../utils/Modal";
import ContactForm from "./Forms/ContactForm";

const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="z-20 w-full bg-darkBg/60 min-h-screen md:min-h-0">
      <div className="z-20 flex flex-col md:grid md:items-center h-full md:h-full px-4 pt-48 pb-32 sm:pt-52 sm:pb-36 md:py-20 lg:py-0 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="flex justify-center items-center order-1 md:order-1 flex-shrink-0">
          <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[350px]">
            <Image
              src="/jorgevidovic.jpg"
              alt="Jorge Vidovic - Desarrollador de Software"
              width={350}
              height={350}
              priority
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 350px"
              className="border-2 border-white rounded-xl bg-black bg-opacity-30 w-full h-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center order-2 md:order-2 max-w-full md:max-w-lg lg:max-w-xl mx-auto md:mx-0 flex-shrink-0">
          {/* Title with TypeAnimation */}
          <h1 className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-center md:text-left">
            <TypeAnimation
              sequence={["Desarrollador de software", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-white"
            />
          </h1>

          {/* Description */}
          <p className="mx-auto md:mx-0 mb-4 sm:mb-6 md:mb-10 text-sm sm:text-base md:text-xl lg:text-2xl text-center md:text-left text-gray-200 leading-relaxed px-2 sm:px-0">
            Desarrollo software a medida, abarcando todas las áreas del
            proyecto.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full sm:w-auto px-2 sm:px-0">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-2.5 md:py-3 transition-all border-2 border-white cursor-pointer text-sm sm:text-base md:text-lg font-medium text-center rounded-xl hover:shadow-xl hover:shadow-white/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-darkBg"
            >
              Proyectos
            </Link>

            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto px-5 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-2.5 md:py-3 transition-all bg-secondary border-2 border-secondary cursor-pointer text-sm sm:text-base md:text-lg font-medium rounded-xl hover:shadow-xl hover:shadow-secondary/50 hover:scale-105 active:scale-95 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-darkBg"
            >
              Contáctame
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">
                Formulario de Contacto
              </h2>
              <ContactForm />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
