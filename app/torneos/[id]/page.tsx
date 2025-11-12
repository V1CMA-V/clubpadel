import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TournamentCategories } from '@/components/tournament-categories'
import { TournamentHeader } from '@/components/tournament-header'
import { TournamentInfo } from '@/components/tournament-info'

export default async function TournamentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TournamentHeader tournamentId={id} />
        <TournamentCategories tournamentId={id} />
        <TournamentInfo tournamentId={id} />
      </main>
      <Footer />
    </div>
  )
}
