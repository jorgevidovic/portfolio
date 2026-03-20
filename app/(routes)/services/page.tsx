"use client";
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
        <div className="grid items-center justify-center max-w-5xl gap-8 mx-auto md:grid-cols-2">
          <div className="max-w-[480px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-extrabold mb-6">
              {tr("services_title")}
            </h1>
            <p className="mb-8 text-base sm:text-lg text-white/60 text-center md:text-left leading-relaxed">
              {tr("services_description")}
            </p>
            <button
              className="px-6 py-3 text-sm sm:text-base rounded-xl bg-secondary hover:bg-orange-500 mx-auto md:mx-0 block font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(245,116,28,0.3)]"
              onClick={handleOpenModal}
            >
              {tr("services_cta")}
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-2xl font-bold mb-6 text-white">
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
