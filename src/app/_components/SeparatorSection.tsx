import Typography from '@/components/Typography'
import React from 'react'

export default function SeparatorSection({ text }: { text: string }) {
  return (
    <section className="w-full min-h-fit py-5 bg-neutral-900 flex justify-center items-center">
      <Typography
        variant="h1"
        withAnimation
        className="text-white"
        font="Monday"
      >
        {text}
      </Typography>
    </section>
  )
}
