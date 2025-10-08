import { Coaches } from '@/components/coaches'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Tournaments } from '@/components/tournaments'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tournaments />
      <Coaches />
      {/* <Memberships /> */}
      <Gallery />
      <Footer />
    </main>
  )
}
