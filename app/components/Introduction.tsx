"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Modal from "../utils/Modal";
import ContactForm from "./Forms/ContactForm";
import { useLang } from "@/app/lib/LangContext";

const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { tr, lang } = useLang();

  return (
    <div className="z-20 w-full min-h-screen md:min-h-0">
      <div className="z-20 flex flex-col md:grid md:items-center h-full px-4 pt-48 pb-32 sm:pt-52 sm:pb-36 md:py-20 lg:py-0 md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">

        {/* Photo */}
        <div className="flex justify-center items-center order-1 md:order-1">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-secondary/20 blur-2xl scale-105 pointer-events-none" />
            {/* Border gradient wrapper */}
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-secondary/60 via-secondary/20 to-transparent shadow-[0_0_40px_rgba(245,116,28,0.2)]">
              <Image
                src="/jorgevidovic.jpg"
                alt="Jorge Vidovic - Desarrollador de Software"
                width={340}
                height={340}
                priority
                sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 300px, 340px"
                className="rounded-2xl w-[200px] sm:w-[240px] md:w-[300px] lg:w-[340px] h-auto object-cover bg-surface"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center order-2 md:order-2 max-w-xl mx-auto md:mx-0">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-center md:self-start mb-5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Full Stack Developer
          </span>

          {/* Animated title */}
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-center md:text-left">
            <TypeAnimation
              key={lang}
              sequence={[tr("intro_typing1"), 1200]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          {/* Description */}
          <p className="mb-8 text-base sm:text-lg md:text-lg lg:text-xl text-center md:text-left text-white/60 leading-relaxed">
            {tr("intro_description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex-1 sm:flex-none px-7 py-3 text-sm sm:text-base font-semibold text-center rounded-xl border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {tr("intro_cta_projects")}
            </Link>

            <button
              onClick={handleOpenModal}
              className="flex-1 sm:flex-none px-7 py-3 text-sm sm:text-base font-semibold rounded-xl bg-secondary hover:bg-orange-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(245,116,28,0.35)]"
            >
              {tr("intro_cta_contact")}
            </button>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">
                {tr("intro_form_title")}
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
