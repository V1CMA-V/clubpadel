import { AdminGroups } from '@/components/admin-groups'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function CategoryGroupsPage({
  params,
}: {
  params: { id: string; categoryId: string }
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdminGroups tournamentId={params.id} categoryId={params.categoryId} />
      </main>
      <Footer />
    </div>
  )
}
