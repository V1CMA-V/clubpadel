import { AdminDashboard } from '@/components/admin-dashboard'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mt-16 mb-8">
        <AdminDashboard />
      </main>
      <Footer />
    </div>
  )
}
