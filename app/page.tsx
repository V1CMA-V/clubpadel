import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Tournaments } from "@/components/tournaments"
import { Coaches } from "@/components/coaches"
import { Memberships } from "@/components/memberships"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tournaments />
      <Coaches />
      <Memberships />
      <Gallery />
      <Footer />
    </main>
  )
}
