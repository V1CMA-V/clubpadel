import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminParticipants } from "@/components/admin-participants"

export default function TournamentParticipantsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdminParticipants tournamentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
