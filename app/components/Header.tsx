"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MotionTransition from "./TransitionComponent";
import Link from "next/link";
import { socialNetworks } from "@/data";
import { useLang } from "@/app/lib/LangContext";
import type { Lang } from "@/app/lib/i18n";

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: "es", flag: "/flag-es.svg", label: "Español" },
  { code: "en", flag: "/flag-gb.svg", label: "English" },
  { code: "fr", flag: "/flag-fr.svg", label: "Français" },
];

const Header = () => {
  const { lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    if (langOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-2"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex px-2">
          <Link href="/">
            <h2 className="my-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Jorge
              <span className="text-secondary"> Vidovic</span>
            </h2>
          </Link>

          <div className="flex items-center justify-center gap-5 px-2">
            {socialNetworks.map(({ logo, src, id, name }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar perfil de ${name}`}
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}

            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 hover:opacity-80 transition-all"
                aria-label="Seleccionar idioma"
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={28}
                  height={20}
                  className="rounded-sm"
                />
                <svg
                  className={`w-3 h-3 text-white/50 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-[#1e1b3a] border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[148px] z-50">
                  {LANGUAGES.map(({ code, flag, label }) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => { setLang(code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                        lang === code ? "text-secondary" : "text-white/70"
                      }`}
                    >
                      <Image src={flag} alt={label} width={22} height={16} className="rounded-sm shrink-0" />
                      {label}
                      {lang === code && (
                        <svg className="w-3.5 h-3.5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
