import React from 'react'
import Navbar from './Navbar'

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
