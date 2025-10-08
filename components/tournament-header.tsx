import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Trophy, Users } from 'lucide-react'

const tournamentData: Record<string, any> = {
  '1': {
    title: 'Torneo de Primavera',
    date: '15-17 de Abril, 2025',
    location: 'Canchas Principales - ProMaster Club',
    category: 'ABIERTO',
    participants: '32 Equipos',
    prize: '$5,000',
    status: 'Inscripciones Abiertas',
    image: '/padel-tournament-action-shot-red-tones.jpg',
  },
  '2': {
    title: 'Copa ProMaster',
    date: '8-10 de Mayo, 2025',
    location: 'Todas las Canchas - ProMaster Club',
    category: 'PROFESIONAL',
    participants: '48 Equipos',
    prize: '$10,000',
    status: 'Inscripciones Abiertas',
    image: '/padel-player-celebrating-victory-blue-tones.jpg',
  },
  '3': {
    title: 'Campeonato de Verano',
    date: '20-22 de Junio, 2025',
    location: 'Canchas Premium - ProMaster Club',
    category: 'MIXTO',
    participants: '40 Equipos',
    prize: '$7,500',
    status: 'Próximamente',
    image: '/padel-doubles-team-playing-match.jpg',
  },
}

export function TournamentHeader({ tournamentId }: { tournamentId: string }) {
  const tournament = tournamentData[tournamentId] || tournamentData['1']

  return (
    <section className="relative min-h-[60vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={tournament.image || '/placeholder.svg'}
          alt={tournament.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12 pt-32 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground">
              {tournament.category}
            </span>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground">
              {tournament.status}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {tournament.title}
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fecha</p>
                <p className="font-semibold">{tournament.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="font-semibold">
                  {tournament.location.split(' - ')[0]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Participantes</p>
                <p className="font-semibold">{tournament.participants}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Premio</p>
                <p className="font-semibold">{tournament.prize}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Inscribirse Ahora
            </Button>
            <Button size="lg" variant="outline">
              Descargar Reglamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
