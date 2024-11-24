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
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <div className=" flex justify-center items-center m-7 p-7 rounded-xl">
          <Image
            src="/jorgevidovic.png"
            alt="Jorge Vidovic"
            height="500"
            width="500"
            priority
            className="border-2 border-white rounded-xl bg-black bg-opacity-30"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h3 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            <TypeAnimation
              sequence={["Desarrollador de software", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
          </h3>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Desarrollo software a medida, abarcando todos las áreas del
            proyecto.
          </p>

          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Proyectos
            </Link>

            <button
              onClick={handleOpenModal}
              className="px-3 py-2 transition-all bg-secondary border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Contáctame
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-2xl font-bold mb-4 text-black">
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
