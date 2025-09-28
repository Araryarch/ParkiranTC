'use client'

import Typography from '@/components/Typography'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <main ref={containerRef} className="w-full min-h-[200vh]">
      <motion.section
        id="hero"
        style={{ scale: scaleHero, opacity: opacityHero }}
        className="w-full min-h-[100svh] sticky top-0 flex"
      >
        <div className="w-[70%] h-screen bg-[url(/images/landing/hero/damn.jpeg)] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="w-[30%] h-screen bg-neutral-900 border-l-1 flex flex-col items-center justify-center">
          <Typography
            variant="h1"
            weight="black"
            className="text-white -rotate-90 md:text-9xl text-5xl"
          >
            HOME
          </Typography>
        </div>
        <div className="absolute w-full bottom-0 h-[120px] bg-neutral-900 border-t-1 flex items-center gap-5 px-5">
          <Typography
            variant="h1"
            font="Monday"
            weight="black"
            className="text-4xl"
          >
            PARKIRAN TC
          </Typography>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-[1px] bg-white"
          ></motion.div>
        </div>
      </motion.section>
      <section
        id="about"
        className="w-full min-h-[100svh] bg-black relative border-t-1 border-b-1"
      >
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[95vw] border-r-1 border-l-1 border-white pointer-events-none"></div>
        <div className="w-full h-[5vh] border-b-1 border-white"></div>
        <div className="w-full h-[30vh] border-b-1 border-white flex justify-center">
          <div className="w-full h-full max-w-[95vw] flex justify-center items-center xl:gap-0 gap-5 max-h-full xl:px-2 px-1 pb-10 xl:py-14">
            <Typography
              variant="h5"
              className="text-white text-xl"
              withAnimation
            >
              The TC Parking Area is a dedicated parking facility for the
              Computer Engineering community at ITS, designed to support
              academic and organizational activities by providing convenient
              access, secure space, and well-managed vehicle arrangements within
              the campus environment.
            </Typography>
          </div>
        </div>
        <div className="w-full h-[60vh] border-b-1 border-white flex justify-center">
          <div className="w-full h-full max-w-[95vw] flex justify-center items-center bg-cover bg-center relative overflow-hidden">
            <Image
              src={'/images/landing/hero/bg.png'}
              alt="bg"
              fill
              className="object-cover bg-right"
            />
          </div>
        </div>
        <div className="w-full h-[5vh] border-white"></div>
      </section>
    </main>
  )
}
