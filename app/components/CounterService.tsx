"use client"

import React from 'react'
import CountUp from 'react-countup'
import { dataCounter } from '@/data'


const CounterService = () => {
  return (
    <div className='grid justify-between max-w-3xl grid-cols-3 gap-3 mx-auto my-8 md:flex md:grid-cols-3 md:gap-6'>
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div key={id} className={`${lineRight && 'ltr'}`}>
          <div className=
            {`
              ${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'}
              ${lineRightMobile && 'border-e-gray-100'}
          `}>
            <p className='flex mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary'><CountUp end={endCounter} start={0} duration={5} /></p>
            <p className='text-xs sm:text-sm md:text-base uppercase max-w-[100px] leading-tight'>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CounterService