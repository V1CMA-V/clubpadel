import { CoachDetail } from '@/components/coach-details'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default async function CoachDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CoachDetail coachId={id} />
      </main>
      <Footer />
    </div>
  )
}
