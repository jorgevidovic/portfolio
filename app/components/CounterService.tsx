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
    <div className="flex items-stretch justify-center gap-0 my-8 rounded-xl bg-surface border border-white/8 overflow-hidden max-w-xl mx-auto">
      {dataCounter.map(({ id, endCounter, suffix }, index) => (
        <React.Fragment key={id}>
          {index > 0 && <div className="w-px bg-white/8 self-stretch" />}
          <div className="flex-1 text-center px-4 py-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary tabular-nums">
              <CountUp end={endCounter} start={0} duration={4} />
              {suffix}
            </p>
            <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-wider text-white/45 font-medium leading-tight">
              {tr(LABEL_KEYS[id])}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default CounterService
