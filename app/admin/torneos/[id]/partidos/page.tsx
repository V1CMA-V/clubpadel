import { AdminMatches } from '@/components/admin-matches'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function TournamentMatchesPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdminMatches tournamentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
