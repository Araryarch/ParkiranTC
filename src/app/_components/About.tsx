'use client'

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export default function About() {
  const aboutRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start start', 'end end'],
  })

  const count = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 25, 50, 75, 100],
  )

  const x1 = useTransform(scrollYProgress, [0, 0.25], [0, -2600])
  const x2 = useTransform(scrollYProgress, [0, 0.25], [0, 2600])
  const opacityText = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.3, 0.35], [0, 1, 2])
  const opacitydo = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35, 0.4],
    [0, 0.1, 1, 0],
  )
  const opacityImage = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.55],
    [0, 1, 0],
  )
  const opacityImage2 = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.55, 0.6, 0.7],
    [0, 0, 0, 1, 0],
  )

  const scaledont = useTransform(scrollYProgress, [0, 0.7, 0.8], [0, 1, 2])
  const opacitydont = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.85],
    [0, 0, 1, 0],
  )

  const opacityImageDont = useTransform(
    scrollYProgress,
    [0, 0.85, 0.9, 0.95],
    [0, 0, 1, 0],
  )
  const opacityImage2Dont = useTransform(
    scrollYProgress,
    [0, 0.94, 0.95, 1],
    [0, 0, 1, 0],
  )

  const opacityty = useTransform(
    scrollYProgress,
    [0, 0.94, 0.99, 1],
    [0, 0, 0, 1],
  )
  const scalety = useTransform(
    scrollYProgress,
    [0, 0.94, 0.99, 1],
    [0, 0, 0, 1],
  )

  const [countValue, setCountValue] = useState(0)
  useMotionValueEvent(count, 'change', (latest) => {
    setCountValue(Math.round(latest))
  })

  return (
    <section
      ref={aboutRef}
      id="about"
      className="w-full min-h-[1600vh] relative"
    >
      <main className="w-full min-h-screen bg-neutral-900 sticky top-0">
        <div className="absolute bottom-0 right-0 z-50 text-white text-5xl md:text-9xl font-Livvic font-black">
          {countValue}%
        </div>

        <div className="absolute inset-0 bg-[url(/images/landing/hero/noise-bg.gif)] opacity-35"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden">
          <motion.h1
            style={{ x: x1, opacity: opacityText }}
            className="text-white text-8xl md:text-9xl font-Monday"
          >
            DO
          </motion.h1>
          <motion.h1
            style={{ x: x2, opacity: opacityText }}
            className="text-white text-8xl md:text-9xl font-Monday"
          >
            &
          </motion.h1>
          <motion.h1
            style={{ x: x1, opacity: opacityText }}
            className="text-white text-8xl md:text-9xl font-Monday"
          >
            DONT
          </motion.h1>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <motion.h1
            style={{ scale: scale1, opacity: opacitydo }}
            className="text-white text-8xl md:text-9xl font-Monday"
          >
            DO
          </motion.h1>
        </div>

        <div className="absolute inset-0 flex gap-5 justify-center items-center">
          <motion.figure
            style={{ opacity: opacityImage }}
            className="w-[400px] aspect-square rounded"
          >
            <Image
              src={'/images/landing/hero/do1.jpeg'}
              alt="do1"
              width={500}
              height={120}
            />
          </motion.figure>
          <motion.h1
            style={{ opacity: opacityImage }}
            className="text-white font-bold text-4xl md:text-6xl uppercase font-Livvic max-w-sm"
          >
            Parkir dengan rapi . . .
          </motion.h1>
        </div>
        <div className="absolute inset-0 flex gap-5 justify-center items-center">
          <motion.h1
            style={{ opacity: opacityImage2 }}
            className="text-white font-bold text-4xl md:text-6xl uppercase font-Livvic max-w-sm"
          >
            Membawa STNK
          </motion.h1>
          <motion.figure
            style={{ opacity: opacityImage2 }}
            className="w-[400px] aspect-square rounded"
          >
            <Image
              src={'/images/landing/hero/stnk.png'}
              alt="do2"
              width={500}
              height={120}
            />
          </motion.figure>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <motion.h1
            style={{ scale: scaledont, opacity: opacitydont }}
            className="text-white text-5xl md:text-9xl font-Monday"
          >
            DON&apos;T
          </motion.h1>
        </div>

        <div className="absolute inset-0 flex gap-5 justify-center items-center">
          <motion.figure
            style={{ opacity: opacityImageDont }}
            className="w-[400px] aspect-square rounded"
          >
            <Image
              src={'/images/landing/hero/dont1.jpeg'}
              alt="do1"
              width={500}
              height={120}
            />
          </motion.figure>
          <motion.h1
            style={{ opacity: opacityImageDont }}
            className="text-white font-bold text-4xl md:text-6xl uppercase font-Livvic max-w-sm"
          >
            Parkir ditengah jalan
          </motion.h1>
        </div>
        <div className="absolute inset-0 flex gap-5 justify-center items-center">
          <motion.h1
            style={{ opacity: opacityImage2Dont }}
            className="text-white font-bold text-4xl md:text-6xl uppercase font-Livvic max-w-sm"
          >
            Parkir bukan di area parkir
          </motion.h1>
          <motion.figure
            style={{ opacity: opacityImage2Dont }}
            className="w-[400px] aspect-square rounded"
          >
            <Image
              src={'/images/landing/hero/dont2.jpeg'}
              alt="do2"
              width={500}
              height={120}
            />
          </motion.figure>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
          <motion.h1
            style={{ scale: scalety, opacity: opacityty }}
            className="text-white text-5xl md:text-9xl font-Livvic font-black"
          >
            Thank You :3
          </motion.h1>
        </div>
      </main>
    </section>
  )
}
