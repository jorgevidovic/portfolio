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
        className="p-4 border border-white/20 rounded-xl hover:border-secondary transition-all duration-300 text-left w-full group"
      >
        <h3 className="mb-4 text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-secondary transition-colors">
          {content.title}
        </h3>
        <Image
          src={data.image}
          alt={content.title}
          width={200}
          height={200}
          className="w-full md:w-[200px] rounded-2xl h-auto object-contain bg-white/5"
        />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="p-6 pb-0 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={data.image}
                  alt={content.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl object-contain bg-gray-100 shrink-0"
                />
                <h2 className="text-xl font-extrabold text-gray-800">{content.title}</h2>
              </div>
              <button
                onClick={close}
                className="shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      className="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">{content.description}</p>

              {/* Visit link — only if URL is real */}
              {data.urlDemo !== '#!' && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={data.urlDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
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
