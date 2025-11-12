import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TournamentHeader } from '@/components/tournament-header'
import { TournamentInfo } from '@/components/tournament-info'
import { TournamentCategories } from '@/components/tournament-categories'

export default function TournamentPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TournamentHeader tournamentId={params.id} />
        <TournamentCategories tournamentId={params.id} />
        <TournamentInfo tournamentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
