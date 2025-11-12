import { CoachesList } from '@/components/coaches-list'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function EntrenadoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CoachesList />
      </main>
      <Footer />
    </div>
  )
}
