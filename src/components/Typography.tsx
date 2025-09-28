'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

export enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p1,
  p2,
  p3,
  l1,
  l2,
}

export type FontVariant = 'Livvic' | 'Monday'

export type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

type TypographyProps<T extends React.ElementType> = {
  as?: T
  id?: string
  className?: string
  weight?: FontWeight
  font?: FontVariant
  variant?: keyof typeof TypographyVariant
  withAnimation?: boolean
  children: React.ReactNode
}

const AnimatedCharacter = ({
  char,
  startProgress,
  endProgress,
  scrollYProgress,
}: {
  char: string
  startProgress: number
  endProgress: number
  scrollYProgress: MotionValue<number>
}) => {
  const opacity = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [0, 1],
  )
  return (
    <span className="relative inline-block">
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  )
}

export default function Typography<T extends React.ElementType>({
  as,
  id,
  children,
  weight = 'regular',
  className,
  font = 'Livvic',
  variant = 'p3',
  withAnimation = false,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p'
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  })

  const shouldAnimate = withAnimation && typeof children === 'string'
  const textContent = typeof children === 'string' ? children : null

  const charactersData = React.useMemo(() => {
    if (!shouldAnimate || !textContent) return null

    const words = textContent.split(' ')
    const result = []

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const start = i / words.length
      const end = start + 1 / words.length
      const step = (end - start) / word.length

      const chars = []
      for (let j = 0; j < word.length; j++) {
        chars.push({
          char: word[j],
          charStart: start + j * step,
          charEnd: start + (j + 1) * step,
        })
      }

      result.push({ word, chars })
    }
    return result
  }, [shouldAnimate, textContent])

  return (
    <Component
      ref={containerRef}
      id={id}
      className={cn(
        'text-white',
        {
          Livvic: 'font-Livvic',
          Monday: 'font-Monday',
        }[font],
        {
          thin: 'font-thin',
          extralight: 'font-extralight',
          light: 'font-light',
          regular: 'font-normal',
          medium: 'font-medium',
          semibold: 'font-semibold',
          bold: 'font-bold',
          extrabold: 'font-extrabold',
          black: 'font-black',
        }[weight],
        {
          h1: 'md:text-[72px]',
          h2: 'md:text-[60px]',
          h3: 'md:text-[48px]',
          h4: 'md:text-[36px]',
          h5: 'md:text-[30px]',
          h6: 'md:text-[24px]',
          p1: 'md:text-[20px]',
          p2: 'md:text-[18px]',
          p3: 'md:text-[16px]',
          l1: 'md:text-[14px]',
          l2: 'md:text-[12px]',
        }[variant],
        className,
      )}
      {...props}
    >
      {shouldAnimate && charactersData
        ? charactersData.map((wordData, i) => (
            <span key={i} className="inline-block mr-2">
              {wordData.chars.map((charData, j) => (
                <AnimatedCharacter
                  key={`c_${j}`}
                  char={charData.char}
                  startProgress={charData.charStart}
                  endProgress={charData.charEnd}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </span>
          ))
        : children}
    </Component>
  )
}
