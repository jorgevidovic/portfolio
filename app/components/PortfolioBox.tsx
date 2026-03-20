"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLang } from '@/app/lib/LangContext';

interface PortfolioItem {
  id: number;
  image: string;
  urlDemo: string;
  tags: string[];
  es: { title: string; description: string };
  en: { title: string; description: string };
  fr: { title: string; description: string };
}

interface PortfolioBoxProps {
  data: PortfolioItem;
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { lang, tr } = useLang();
  const [open, setOpen] = useState(false);
  const content = data[lang] ?? data.es;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      {/* Card */}
      <button
        onClick={() => setOpen(true)}
        className="group relative flex flex-col p-5 rounded-xl bg-surface border border-white/8 hover:border-secondary/40 transition-all duration-300 text-left w-full overflow-hidden"
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="mb-4 flex items-center justify-center rounded-lg bg-white/5 h-[120px] overflow-hidden">
          <Image
            src={data.image}
            alt={content.title}
            width={160}
            height={100}
            className="max-h-[90px] w-auto object-contain"
          />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-secondary transition-colors duration-200">
          {content.title}
        </h3>

        {data.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {data.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/6 text-white/50 border border-white/10"
              >
                {tag}
              </span>
            ))}
            {data.tags.length > 2 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/6 text-white/50 border border-white/10">
                +{data.tags.length - 2}
              </span>
            )}
          </div>
        )}
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={close}
        >
          <div
            className="bg-[#0e0e1c] border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="p-6 pb-0 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src={data.image}
                    alt={content.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h2 className="text-lg font-extrabold text-white">{content.title}</h2>
              </div>
              <button
                onClick={close}
                className="shrink-0 w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Tags */}
              {data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-white/65 leading-relaxed text-sm">{content.description}</p>

              {/* Visit link */}
              {data.urlDemo !== '#!' && (
                <div className="mt-6 pt-4 border-t border-white/8">
                  <a
                    href={data.urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white font-semibold text-sm hover:bg-orange-500 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(245,116,28,0.3)]"
                  >
                    {tr('portfolio_modal_visit')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioBox;
