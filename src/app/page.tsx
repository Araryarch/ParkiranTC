'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

import Layouts from '@/Layouts/Layouts'
import Hero from './_components/Hero'
import SeparatorSection from './_components/SeparatorSection'
import About from './_components/About'

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({})

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Layouts>
      <Hero />
      <SeparatorSection text="Safety and Comfort" />
      <About />
    </Layouts>
  )
}
