import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TournamentHeader } from "@/components/tournament-header"
import { TournamentMatches } from "@/components/tournament-matches"
import { TournamentRanking } from "@/components/tournament-ranking"
import { TournamentInfo } from "@/components/tournament-info"

export default function TournamentPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TournamentHeader tournamentId={params.id} />
        <TournamentMatches tournamentId={params.id} />
        <TournamentRanking tournamentId={params.id} />
        <TournamentInfo tournamentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
