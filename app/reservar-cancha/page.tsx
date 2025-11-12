import { CourtBooking } from '@/components/court-booking'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function ReservarCanchaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CourtBooking />
      </main>
      <Footer />
    </div>
  )
}
