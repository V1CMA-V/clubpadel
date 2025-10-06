import { Coaches } from '@/components/coaches'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Memberships } from '@/components/memberships'
import { Tournaments } from '@/components/tournaments'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tournaments />
      <Coaches />
      <Memberships />
      <Gallery />
    </main>
  )
}
