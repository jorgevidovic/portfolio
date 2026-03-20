"use client"

import React from 'react'
import CountUp from 'react-countup'
import { dataCounter } from '@/data'
import { useLang } from '@/app/lib/LangContext'
import type { TKeys } from '@/app/lib/i18n'

const LABEL_KEYS: TKeys[] = ["counter_projects", "counter_clients", "counter_years"];

const CounterService = () => {
  const { tr } = useLang();

  return (
    <div className='grid justify-between max-w-3xl grid-cols-3 gap-3 mx-auto my-8 md:flex md:grid-cols-3 md:gap-6'>
      {dataCounter.map(({ id, endCounter, suffix, lineRight, lineRightMobile }) => (
        <div key={id} className={`${lineRight && 'ltr'}`}>
          <div className={`
            ${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'}
            ${lineRightMobile && 'border-e-gray-100'}
          `}>
            <p className='flex mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary'>
              <CountUp end={endCounter} start={0} duration={5} />
              {suffix}
            </p>
            <p className='text-xs sm:text-sm md:text-base uppercase max-w-[100px] leading-tight'>
              {tr(LABEL_KEYS[id])}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CounterService
