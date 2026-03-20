"use client"

import { dataAboutPage } from '@/data'
import { useLang } from '@/app/lib/LangContext'
import React from 'react'

const TimeLine = () => {
  const { lang } = useLang();

  return (
    <div className="w-full max-w-2xl mx-auto py-8 md:py-16">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent" />

        <div className="space-y-8">
          {dataAboutPage.map((data) => {
            const content = data[lang] ?? data.es;
            return (
              <div key={data.id} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-[14px] top-5 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20 -translate-x-1/2" />

                {/* Card */}
                <div className="p-5 rounded-xl bg-surface border border-white/8 hover:border-secondary/30 transition-colors duration-300">
                  {/* Date badge */}
                  <span className="inline-flex items-center mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                    {data.date}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    {content.title}
                  </h3>
                  <p className="text-sm font-semibold text-white/40 mb-3">
                    {content.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimeLine
