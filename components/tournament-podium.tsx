'use client'

import { Card } from '@/components/ui/card'
import { Award, Medal, Trophy } from 'lucide-react'

interface PodiumProps {
  tournamentId: string
  categoryId: string
}

export function TournamentPodium({ tournamentId, categoryId }: PodiumProps) {
  // Datos de ejemplo - en producción vendrían de una API
  const topPlayers = [
    {
      position: 2,
      name: 'Carlos Martínez',
      team: 'Equipo Rojo',
      points: 850,
      image: '/padel-player-second-place.jpg',
    },
    {
      position: 1,
      name: 'Juan Pérez',
      team: 'Equipo Azul',
      points: 1000,
      image: '/padel-player-champion-winner.jpg',
    },
    {
      position: 3,
      name: 'Miguel Rodríguez',
      team: 'Equipo Verde',
      points: 720,
      image: '/padel-player-third-place.jpg',
    },
  ]

  const getPositionStyles = (position: number) => {
    switch (position) {
      case 1:
        return {
          height: 'h-64',
          bgGradient: 'bg-linear-to-br from-yellow-400 to-yellow-600',
          textColor: 'text-yellow-600',
          icon: Trophy,
          iconSize: 'w-12 h-12',
          order: 'order-2',
        }
      case 2:
        return {
          height: 'h-52',
          bgGradient: 'bg-linear-to-br from-gray-300 to-gray-500',
          textColor: 'text-gray-500',
          icon: Medal,
          iconSize: 'w-10 h-10',
          order: 'order-1',
        }
      case 3:
        return {
          height: 'h-44',
          bgGradient: 'bg-linear-to-br from-orange-400 to-orange-600',
          textColor: 'text-orange-600',
          icon: Award,
          iconSize: 'w-10 h-10',
          order: 'order-3',
        }
      default:
        return {
          height: 'h-40',
          bgGradient: 'bg-muted',
          textColor: 'text-muted-foreground',
          icon: Award,
          iconSize: 'w-8 h-8',
          order: 'order-4',
        }
    }
  }

  return (
    <section className="py-16 bg-linear-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Top 3 del Torneo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Los mejores jugadores de esta categoría
          </p>
        </div>

        {/* Podio */}
        <div className="flex items-end justify-center gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
          {topPlayers.map((player) => {
            const styles = getPositionStyles(player.position)
            const Icon = styles.icon

            return (
              <div
                key={player.position}
                className={`flex-1 ${styles.order} flex flex-col items-center`}
              >
                {/* Foto del jugador */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background shadow-xl">
                    <img
                      src={player.image || '/placeholder.svg'}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Icono de posición */}
                  <div
                    className={`absolute -bottom-2 -right-2 ${styles.bgGradient} rounded-full p-2 shadow-lg`}
                  >
                    <Icon className={`${styles.iconSize} text-white`} />
                  </div>
                </div>

                {/* Pedestal */}
                <Card
                  className={`w-full ${styles.height} ${styles.bgGradient} flex flex-col items-center justify-start pt-6 px-4 text-white shadow-xl`}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {player.position}
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-base md:text-lg mb-1 text-balance">
                      {player.name}
                    </p>
                    <p className="text-xs md:text-sm opacity-90 mb-2">
                      {player.team}
                    </p>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-xs md:text-sm font-semibold">
                      {player.points} pts
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Tarjetas detalladas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topPlayers
            .sort((a, b) => a.position - b.position)
            .map((player) => {
              const styles = getPositionStyles(player.position)
              const Icon = styles.icon

              return (
                <Card
                  key={player.position}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${styles.bgGradient} rounded-full p-3`}>
                      <Icon className={`${styles.iconSize} text-white`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        {player.position}° Lugar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {player.points} puntos
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-lg text-foreground">
                      {player.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {player.team}
                    </p>
                  </div>
                </Card>
              )
            })}
        </div>
      </div>
    </section>
  )
}
