import { AdminTournamentsList } from '@/components/admin-tournaments-list'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function AdminTournamentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mt-16 mb-8">
        <AdminTournamentsList />
      </main>
      <Footer />
    </div>
  )
}
