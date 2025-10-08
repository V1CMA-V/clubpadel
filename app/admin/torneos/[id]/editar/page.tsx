import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminTournamentForm } from "@/components/admin-tournament-form"

export default function EditTournamentPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdminTournamentForm tournamentId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
