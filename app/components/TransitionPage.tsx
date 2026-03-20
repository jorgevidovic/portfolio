"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        {/* Primary wipe — dark brand color */}
        <motion.div
          initial={{ scaleX: 1, originX: 1 }}
          animate={{ scaleX: 0, originX: 1 }}
          exit={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-30 bg-darkBg"
        />
        {/* Accent layer */}
        <motion.div
          initial={{ scaleX: 1, originX: 1 }}
          animate={{ scaleX: 0, originX: 1 }}
          exit={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-29 bg-secondary/15"
        />
      </div>
    </AnimatePresence>
  )
}

export default TransitionPage
