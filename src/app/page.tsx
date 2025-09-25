'use client'
import DotGrid from '@/components/DotGrid'
import StaggeredMenu from '@/components/StaggeredMenu'
import Typography from '@/components/Typography'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  easeInOut,
} from 'framer-motion'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Contact', ariaLabel: 'Lets contact us', link: '/contact' },
]

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
]

export default function Page() {
  const [, setIsLoaded] = useState(false)
  const controls = useAnimation()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 100 })
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 100 })

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5])
  const translateX = useTransform(smoothMouseX, [-300, 300], [-10, 10])
  const translateY = useTransform(smoothMouseY, [-300, 300], [-10, 10])

  useEffect(() => {
    setIsLoaded(true)
    controls.start('visible')

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      const x = clientX - innerWidth / 2
      const y = clientY - innerHeight / 2
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [controls, mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 0.5,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: easeInOut },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 0.5,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: easeInOut, delay: 0.3 },
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 200, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, ease: easeInOut, delay: 0.6 },
    },
  }

  const backgroundTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 0.05,
      x: 0,
      transition: { duration: 2, ease: easeInOut },
    },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: easeInOut },
  }

  const glowVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 0.8, 0.3],
      transition: { duration: 2, repeat: Infinity, ease: easeInOut },
    },
  }

  return (
    <section className="w-full min-h-screen h-screen bg-neutral-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #B250A7 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #B250A7 0%, transparent 50%)',
            'radial-gradient(circle at 40% 70%, #B250A7 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #B250A7 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
      />

      <motion.div
        variants={backgroundTextVariants}
        initial="hidden"
        animate={controls}
      >
        <Typography
          variant="h1"
          className="absolute top-0 left-0 text-white md:text-9xl"
          weight="black"
        >
          PARKIRAN
        </Typography>
      </motion.div>

      <div className="absolute inset-0">
        <DotGrid
          dotSize={10}
          gap={10}
          baseColor="#000"
          activeColor="#B250A7"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <motion.div variants={titleVariants} className="relative">
            <motion.h1
              className="text-[18vw] max-w-screen uppercase mx-auto whitespace-nowrap font-black text-neutral-500"
              animate={floatingAnimation}
              style={{ translateX, translateY }}
            >
              parkiran
            </motion.h1>

            <motion.div
              className="absolute inset-0 text-[18vw] max-w-screen uppercase mx-auto whitespace-nowrap font-black text-purple-500 blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              style={{ zIndex: -1 }}
            >
              parkiran
            </motion.div>
          </motion.div>

          <motion.h1
            variants={subtitleVariants}
            className="text-[7vw] max-w-screen uppercase mx-auto whitespace-nowrap font-black text-neutral-500"
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: easeInOut,
                delay: 1,
              },
            }}
          >
            teknik informatika
          </motion.h1>

          <motion.div
            variants={characterVariants}
            className="absolute bottom-0 left-1/2"
            style={{ x: '-50%' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
            >
              <Image
                src={'/images/landing/hero/char.png'}
                alt="char"
                width={800}
                height={800}
                className="grayscale-75 drop-shadow-2xl hidden md:block"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
            />
          </motion.div>
        </motion.div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: easeInOut,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
