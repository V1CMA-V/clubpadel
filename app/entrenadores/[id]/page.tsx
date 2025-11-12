import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CoachDetail } from '@/components/coach-details'

export default function CoachDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CoachDetail coachId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
