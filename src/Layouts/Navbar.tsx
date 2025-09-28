'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="w-full h-[120px] px-10 items-center bg-neutral-900 border-b-[1px] flex gap-5 justify-end">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 h-[1px] bg-white origin-left"
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.1, y: -3 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Link
          href={'#'}
          className="md:text-3xl text-white uppercase font-bold relative font-Monday group"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, y: -3 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Link
          href={'#about'}
          className="md:text-3xl text-white uppercase font-bold font-Monday relative group"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
    </nav>
  )
}
