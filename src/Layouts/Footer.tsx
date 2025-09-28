import Typography from '@/components/Typography'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 py-8 px-4 flex flex-col items-center justify-center text-center">
      <Typography className="text-neutral-400 text-sm md:text-base tracking-wide">
        © {new Date().getFullYear()} Kelompok 8 — All Rights Reserved
      </Typography>
    </footer>
  )
}
