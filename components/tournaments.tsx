import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

const tournaments = [
  {
    id: 1,
    title: 'Torneo de Primavera',
    date: 'ABR 15-17',
    location: 'Canchas Principales',
    category: 'ABIERTO',
    participants: '32 Equipos',
    image: '/padel-tournament-action-shot-red-tones.jpg',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Copa ProMaster',
    date: 'MAY 8-10',
    location: 'Todas las Canchas',
    category: 'PROFESIONAL',
    participants: '48 Equipos',
    image: '/padel-player-celebrating-victory-blue-tones.jpg',
    color: 'secondary',
  },
  {
    id: 3,
    title: 'Campeonato de Verano',
    date: 'JUN 20-22',
    location: 'Canchas Premium',
    category: 'MIXTO',
    participants: '40 Equipos',
    image: '/padel-doubles-team-playing-match.jpg',
    color: 'accent',
  },
]

export function Tournaments() {
  return (
    <section id="torneos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Próximos Torneos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Compite con los mejores jugadores y demuestra tu nivel en nuestros
              torneos profesionales
            </p>
          </div>
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80"
          >
            Ver Todos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card
              key={tournament.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tournament.image || '/placeholder.svg'}
                  alt={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      tournament.color === 'primary'
                        ? 'bg-primary text-primary-foreground'
                        : tournament.color === 'secondary'
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    {tournament.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 bg-card/55 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-muted-foreground font-semibold">
                    {tournament.date.split(' ')[0]}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {tournament.date.split(' ')[1]}
                  </p>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 text-balance">
                    {tournament.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tournament.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{tournament.participants}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card">
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Inscribirse
                  </Button>
                  <Link href="/tournaments" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full bg-transparent">
            Ver Todos los Torneos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
