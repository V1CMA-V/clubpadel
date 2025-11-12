import { AdminCategoryParticipants } from '@/components/admin-category-participants'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function CategoryParticipantsPage({
  params,
}: {
  params: { id: string; categoryId: string }
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdminCategoryParticipants
          tournamentId={params.id}
          categoryId={params.categoryId}
        />
      </main>
      <Footer />
    </div>
  )
}
