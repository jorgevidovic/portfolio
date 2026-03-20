"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/app/lib/LangContext'

interface PortfolioItem {
  id: number;
  image: string;
  urlGithub: string;
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
  const { lang } = useLang();
  const content = data[lang] ?? data.es;
  const { image, urlGithub, urlDemo } = data;

  return (
    <div className='p-4 border border-tel-50 rounded-xl hover:border-secondary transition-all duration-300'>
      <h3 className='mb-4 text-lg sm:text-xl md:text-2xl font-semibold'>
        {content.title}
      </h3>
      <Image
        src={image}
        alt={content.title}
        width={200}
        height={200}
        className='w-full md:w-[200px] rounded-2xl h-auto object-contain bg-white/5'
      />
      <div className="flex gap-5 mt-5">
        {urlGithub !== "#!" && (
          <Link
            href={urlGithub}
            target="_blank"
            className="p-2 sm:px-3 sm:py-2 text-sm sm:text-base transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 font-medium">
            Github
          </Link>
        )}
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 sm:px-3 sm:py-2 text-sm sm:text-base transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 font-medium">
          Demo
        </Link>
      </div>
    </div>
  )
}

export default PortfolioBox
