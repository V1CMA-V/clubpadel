import { AdminTournamentForm } from '@/components/admin-tournament-form'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function NewTournamentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mt-16 mb-8">
        <AdminTournamentForm />
      </main>
      <Footer />
    </div>
  )
}
