"use client";
import CircleImage from "@/app/components/CircleImage";
import Container from "@/app/components/Container";
import ContactForm from "@/app/components/Forms/ContactForm";
import SliderService from "@/app/components/SliderService";
import TransitionPage from "@/app/components/TransitionPage";
import Modal from "@/app/utils/Modal";
import { useLang } from "@/app/lib/LangContext";
import React, { useState } from "react";

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { tr } = useLang();

  return (
    <>
      <TransitionPage />
      <Container>
        <CircleImage />
        <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2">
          <div className="max-w-[450px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-bold md:px-20 md:mb-8">
              {tr("services_title")}
            </h1>
            <p className="mb-6 text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 text-center md:text-left leading-relaxed">
              {tr("services_description")}
            </p>
            <button
              className="px-5 py-3 text-base sm:text-lg rounded-lg bg-secondary hover:bg-secondary/65 mx-auto md:mx-0 block font-medium transition-all hover:scale-105"
              onClick={handleOpenModal}
            >
              {tr("services_cta")}
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-2xl font-bold mb-4 text-black">
                {tr("services_form_title")}
              </h2>
              <ContactForm />
            </Modal>
          </div>

          <div>
            <SliderService />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;
