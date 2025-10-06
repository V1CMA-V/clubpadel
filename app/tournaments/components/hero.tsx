import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-dvh overflow-hidden flex flex-col items-center justify-center text-center bg-[url('/modern-padel-court-aerial-view.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="absolute inset-0 bg-black/30"> </div>
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl font-bold">Sexta Liga - Pro Master Padel</h1>
        <p className="mt-4 text-lg">
          La liga más competitiva y divertida de la ciudad. ¡Únete y demuestra
          tu talento en la cancha!
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="#matchs">
            <Button variant="secondary" className="py-2 px-4 text-lg">
              Juegos
            </Button>
          </a>
          <a href="#ranking">
            <Button className="py-2 px-4 text-lg">Ranking</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
