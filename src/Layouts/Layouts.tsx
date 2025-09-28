import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SplashCursor from '@/components/SplashCursor'

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SplashCursor />
      {children}
      <Footer />
    </>
  )
}
