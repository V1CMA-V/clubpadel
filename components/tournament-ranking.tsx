import { Card } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"

const rankings = [
  {
    position: 1,
    team: "García / Martínez",
    points: 850,
    wins: 12,
    losses: 1,
    setsWon: 26,
    setsLost: 8,
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    position: 2,
    team: "Rodríguez / Sánchez",
    points: 720,
    wins: 10,
    losses: 3,
    setsWon: 23,
    setsLost: 12,
    icon: Medal,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10",
  },
  {
    position: 3,
    team: "Jiménez / Ruiz",
    points: 680,
    wins: 9,
    losses: 4,
    setsWon: 21,
    setsLost: 14,
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    position: 4,
    team: "Díaz / Torres",
    points: 620,
    wins: 8,
    losses: 5,
    setsWon: 19,
    setsLost: 15,
  },
  {
    position: 5,
    team: "Pérez / González",
    points: 580,
    wins: 7,
    losses: 6,
    setsWon: 18,
    setsLost: 17,
  },
  {
    position: 6,
    team: "Moreno / Álvarez",
    points: 540,
    wins: 6,
    losses: 7,
    setsWon: 16,
    setsLost: 18,
  },
  {
    position: 7,
    team: "López / Fernández",
    points: 500,
    wins: 5,
    losses: 8,
    setsWon: 14,
    setsLost: 20,
  },
  {
    position: 8,
    team: "Ramírez / Castro",
    points: 460,
    wins: 4,
    losses: 9,
    setsWon: 12,
    setsLost: 22,
  },
]

export function TournamentRanking({ tournamentId }: { tournamentId: string }) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Ranking de Jugadores</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Clasificación actualizada según puntos y rendimiento
          </p>
        </div>

        <Card className="overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-muted/50 font-semibold text-sm text-muted-foreground border-b">
            <div className="col-span-1">POS</div>
            <div className="col-span-4">EQUIPO</div>
            <div className="col-span-2 text-center">PUNTOS</div>
            <div className="col-span-2 text-center">V - D</div>
            <div className="col-span-3 text-center">SETS (G - P)</div>
          </div>

          {/* Rankings */}
          <div className="divide-y">
            {rankings.map((rank) => {
              const Icon = rank.icon
              return (
                <div
                  key={rank.position}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-muted/30 transition-colors"
                >
                  {/* Position */}
                  <div className="md:col-span-1 flex items-center gap-3 md:gap-0">
                    {Icon ? (
                      <div className={`w-10 h-10 rounded-full ${rank.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${rank.color}`} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="font-bold text-foreground">{rank.position}</span>
                      </div>
                    )}
                    <span className="md:hidden font-semibold text-foreground ml-2">{rank.team}</span>
                  </div>

                  {/* Team Name */}
                  <div className="hidden md:flex md:col-span-4 items-center">
                    <span className="font-semibold text-foreground text-lg">{rank.team}</span>
                  </div>

                  {/* Stats */}
                  <div className="md:col-span-7 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground md:hidden mb-1">Puntos</p>
                      <p className="text-2xl md:text-xl font-bold text-primary">{rank.points}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground md:hidden mb-1">V - D</p>
                      <p className="text-lg md:text-base font-semibold text-foreground">
                        {rank.wins} - {rank.losses}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground md:hidden mb-1">Sets</p>
                      <p className="text-lg md:text-base font-semibold text-foreground">
                        {rank.setsWon} - {rank.setsLost}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500/10 border-2 border-yellow-500" />
            <span className="text-sm text-muted-foreground">1er Lugar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400/10 border-2 border-gray-400" />
            <span className="text-sm text-muted-foreground">2do Lugar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-600/10 border-2 border-orange-600" />
            <span className="text-sm text-muted-foreground">3er Lugar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
