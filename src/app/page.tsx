import Layouts from '@/Layouts/Layouts'
import Hero from './_components/Hero'
import SeparatorSection from './_components/SeparatorSection'
import About from './_components/About'

export default function Page() {
  return (
    <Layouts>
      <Hero />
      <SeparatorSection text="Safety and Comfort" />
      <About />
    </Layouts>
  )
}
