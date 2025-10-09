import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Trophy } from "lucide-react"

const matchesByRound = {
  grupos: [
    {
      id: 1,
      name: 'Grupo A',
      players: [
        {
          id: 1,
          name: 'García / Martínez',
          seed: 1,
          score: [6, 6],
        },
        {
          id: 2,
          name: 'López / Fernández',
          seed: 16,
          score: [3, 4],
        },
        {
          id: 3,
          name: 'Rodríguez / Sánchez',
          seed: 8,
          score: [6, 4],
        }
      ],
      matches: [
        {
          id: 1,
          team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
          team2: { name: "López / Fernández", seed: 16, score: [3, 4] },
          court: "Cancha 1",
          time: "10:00",
          date: "Viernes 15 Abril",
          status: "Finalizado",
        },
        {
          id: 2,
          team1: { name: "Rodríguez / Sánchez", seed: 8, score: [6, 4, 6] },
          team2: { name: "Pérez / González", seed: 9, score: [4, 6, 3] },
          court: "Cancha 2",
          time: "10:00",
          date: "Viernes 15 Abril",
          status: "Finalizado",
        },
        {
          id: 3,
          team1: { name: "Jiménez / Ruiz", seed: 4, score: [7, 6] },
          team2: { name: "Moreno / Álvarez", seed: 13, score: [5, 4] },
          court: "Cancha 3",
          time: "12:00",
          date: "Viernes 15 Abril",
          status: "Finalizado",
        },
        {
          id: 4,
          team1: { name: "Díaz / Torres", seed: 5, score: [6, 6] },
          team2: { name: "Ramírez / Castro", seed: 12, score: [2, 3] },
          court: "Cancha 1",
          time: "12:00",
          date: "Viernes 15 Abril",
          status: "Finalizado",
        },
      ]
    },
    {
      id: 2,
      name: 'Grupo B',
      players: [
        {
          id: 1,
          name: 'García / Martínez',
          score: [0, 0],
        },
        {
          id: 2,
          name: 'López / Fernández',
          score: [0, 0],
        },
        {
          id: 3,
          name: 'Rodríguez / Sánchez',
          score: [0, 0],
        }
      ],
      matches: [
        {
          id: 1,
          team1: { name: "García / Martínez", seed: 1, score: [] },
          team2: { name: "López / Fernández", seed: 16, score: [] },
          court: "Cancha 1",
          time: "10:00",
          date: "Viernes 15 Abril",
          status: "Pendiente",
        },
        {
          id: 2,
          team1: { name: "Rodríguez / Sánchez", seed: 8, score: [] },
          team2: { name: "Pérez / González", seed: 9, score: [] },
          court: "Cancha 2",
          time: "10:00",
          date: "Viernes 15 Abril",
          status: "Pendiente",
        },
        {
          id: 3,
          team1: { name: "Jiménez / Ruiz", seed: 4, score: [] },
          team2: { name: "Moreno / Álvarez", seed: 13, score: [] },
          court: "Cancha 3",
          time: "12:00",
          date: "Viernes 15 Abril",
          status: "Pendiente",
        },
        {
          id: 4,
          team1: { name: "Díaz / Torres", seed: 5, score: [] },
          team2: { name: "Ramírez / Castro", seed: 12, score: [] },
          court: "Cancha 1",
          time: "12:00",
          date: "Viernes 15 Abril",
          status: "Pendiente",
        },
      ]
    },

  ],
  octavos: [
    {
      id: 1,
      team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
      team2: { name: "López / Fernández", seed: 16, score: [3, 4] },
      court: "Cancha 1",
      time: "10:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 2,
      team1: { name: "Rodríguez / Sánchez", seed: 8, score: [6, 4, 6] },
      team2: { name: "Pérez / González", seed: 9, score: [4, 6, 3] },
      court: "Cancha 2",
      time: "10:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 3,
      team1: { name: "Jiménez / Ruiz", seed: 4, score: [7, 6] },
      team2: { name: "Moreno / Álvarez", seed: 13, score: [5, 4] },
      court: "Cancha 3",
      time: "12:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 4,
      team1: { name: "Díaz / Torres", seed: 5, score: [6, 6] },
      team2: { name: "Ramírez / Castro", seed: 12, score: [2, 3] },
      court: "Cancha 1",
      time: "12:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 5,
      team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
      team2: { name: "López / Fernández", seed: 16, score: [3, 4] },
      court: "Cancha 1",
      time: "10:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 6,
      team1: { name: "Rodríguez / Sánchez", seed: 8, score: [6, 4, 6] },
      team2: { name: "Pérez / González", seed: 9, score: [4, 6, 3] },
      court: "Cancha 2",
      time: "10:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 7,
      team1: { name: "Jiménez / Ruiz", seed: 4, score: [7, 6] },
      team2: { name: "Moreno / Álvarez", seed: 13, score: [5, 4] },
      court: "Cancha 3",
      time: "12:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 8,
      team1: { name: "Díaz / Torres", seed: 5, score: [6, 6] },
      team2: { name: "Ramírez / Castro", seed: 12, score: [2, 3] },
      court: "Cancha 1",
      time: "12:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
  ],
  cuartos: [
    {
      id: 9,
      team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
      team2: { name: "Rodríguez / Sánchez", seed: 8, score: [4, 3] },
      court: "Cancha Central",
      time: "16:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 10,
      team1: { name: "Jiménez / Ruiz", seed: 4, score: [3, 6, 6] },
      team2: { name: "Díaz / Torres", seed: 5, score: [6, 4, 4] },
      court: "Cancha Central",
      time: "18:00",
      date: "Viernes 15 Abril",
      status: "Finalizado",
    },
    {
      id: 11,
      team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
      team2: { name: "Jiménez / Ruiz", seed: 8, score: [0, 0] },
      court: "Cancha Central",
      time: "17:00",
      date: "Sábado 16 Abril",
      status: "Finalizado",
    },
    {
      id: 12,
      team1: { name: "TBD", seed: null, score: [] },
      team2: { name: "TBD", seed: null, score: [] },
      court: "Cancha Central",
      time: "18:00",
      date: "Domingo 17 Abril",
      status: "Programado",
    }
  ],
  semifinales: [
    {
      id: 13,
      team1: { name: "García / Martínez", seed: 1, score: [6, 6] },
      team2: { name: "Jiménez / Ruiz", seed: 4, score: [0, 0] },
      court: "Cancha Central",
      time: "17:00",
      date: "Sábado 16 Abril",
      status: "Programado",
    },
    {
      id: 14,
      team1: { name: "TBD", seed: null, score: [] },
      team2: { name: "TBD", seed: null, score: [] },
      court: "Cancha Central",
      time: "18:00",
      date: "Domingo 17 Abril",
      status: "Programado",
    }
  ],
  final: [
    {
      id: 15,
      team1: { name: "TBD", seed: null, score: [] },
      team2: { name: "TBD", seed: null, score: [] },
      court: "Cancha Central",
      time: "18:00",
      date: "Domingo 17 Abril",
      status: "Programado",
    },
  ],
}

export function TournamentMatches({ tournamentId }: { tournamentId: string }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Partidos del Torneo</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Sigue todos los enfrentamientos y resultados en tiempo real
          </p>
        </div>

        <Tabs defaultValue="grupos" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 h-auto">
            <TabsTrigger value="grupos" className="text-sm md:text-base py-3">
              Grupos
            </TabsTrigger>
            <TabsTrigger value="octavos" className="text-sm md:text-base py-3">
              Octavos
            </TabsTrigger>
            <TabsTrigger value="cuartos" className="text-sm md:text-base py-3">
              Cuartos
            </TabsTrigger>
            <TabsTrigger value="semifinales" className="text-sm md:text-base py-3">
              Semifinales
            </TabsTrigger>
            <TabsTrigger value="final" className="text-sm md:text-base py-3">
              Final
            </TabsTrigger>
          </TabsList>

          {/* Grupos Tab */}
          <TabsContent value="grupos" className="space-y-8">

            <div className="space-y-4">
              <Tabs defaultValue={matchesByRound.grupos[0].name} className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8 h-auto">
                  {
                    matchesByRound.grupos.map((grupo) => (
                      <TabsTrigger key={grupo.id} value={grupo.name} className="text-sm md:text-base py-3">
                        {grupo.name}
                      </TabsTrigger>
                    ))
                  }
                </TabsList>
              </Tabs>
            </div>

            {matchesByRound.grupos.map((grupo) => (
              <TabsContent key={grupo.id} value={grupo.name} className="space-y-8">
                <div className="space-y-4">

                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{grupo.name}</h3>
                  </div>

                  {/* Standings Table */}
                  <Card className="p-6 mb-6">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Clasificación</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-2 text-sm font-semibold text-muted-foreground">Pos</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-muted-foreground">Pareja</th>
                            <th className="text-center py-3 px-2 text-sm font-semibold text-muted-foreground">Sets</th>
                          </tr>
                        </thead>
                        <tbody>
                          {grupo.players
                            .sort((a, b) => {
                              const scoreA = a.score.reduce((sum, s) => sum + s, 0)
                              const scoreB = b.score.reduce((sum, s) => sum + s, 0)
                              return scoreB - scoreA
                            })
                            .map((player, index) => (
                              <tr key={player.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                <td className="py-3 px-2">
                                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                                    {index + 1}
                                  </span>
                                </td>
                                <td className="py-3 px-2 font-semibold text-foreground">{player.name}</td>
                                <td className="py-3 px-2 text-center">
                                  <div className="flex gap-1 justify-center">
                                    {player.score.map((score, idx) => (
                                      <span key={idx} className="w-8 h-8 rounded-lg bg-primary/20 text-foreground flex items-center justify-center font-bold text-sm">
                                        {score}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>

                  {/* Group Matches */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Partidos</h4>
                    {grupo.matches.map((match) => (
                      <Card key={match.id} className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          {/* Teams and Scores */}
                          <div className="flex-1 space-y-4">
                            {/* Team 1 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {match.team1.seed && (
                                  <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                                    {match.team1.seed}
                                  </span>
                                )}
                                <span
                                  className={`font-semibold text-lg ${match.status === "Finalizado" &&
                                    match.team1.score.reduce((a, b) => a + b, 0) >
                                    match.team2.score.reduce((a, b) => a + b, 0)
                                    ? "text-primary"
                                    : "text-foreground"
                                    }`}
                                >
                                  {match.team1.name}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                {match.team1.score.map((score, idx) => (
                                  <span
                                    key={idx}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${match.status === "Finalizado" && score > match.team2.score[idx]
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-foreground"
                                      }`}
                                  >
                                    {score}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Team 2 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {match.team2.seed && (
                                  <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                                    {match.team2.seed}
                                  </span>
                                )}
                                <span
                                  className={`font-semibold text-lg ${match.status === "Finalizado" &&
                                    match.team2.score.reduce((a, b) => a + b, 0) >
                                    match.team1.score.reduce((a, b) => a + b, 0)
                                    ? "text-primary"
                                    : "text-foreground"
                                    }`}
                                >
                                  {match.team2.name}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                {match.team2.score.map((score, idx) => (
                                  <span
                                    key={idx}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${match.status === "Finalizado" && score > match.team1.score[idx]
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-foreground"
                                      }`}
                                  >
                                    {score}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Match Info */}
                          <div className="flex flex-col items-end gap-3 min-w-[200px]">
                            <Badge
                              variant={match.status === "Finalizado" ? "secondary" : "default"}
                              className={
                                match.status === "Finalizado"
                                  ? "bg-secondary text-secondary-foreground"
                                  : "bg-accent text-accent-foreground"
                              }
                            >
                              {match.status}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{match.time}</span>
                              {match.date && <span className="ml-2">- {match.date}</span>}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{match.court}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </TabsContent>

          {/* Other rounds tabs */}
          {(['octavos', 'cuartos', 'semifinales', 'final'] as const).map((round) => (
            <TabsContent key={round} value={round} className="space-y-4">
              {matchesByRound[round].map((match) => (
                <Card key={match.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Teams and Scores */}
                    <div className="flex-1 space-y-4">
                      {/* Team 1 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {match.team1.seed && (
                            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                              {match.team1.seed}
                            </span>
                          )}
                          <span
                            className={`font-semibold text-lg ${match.status === "Finalizado" &&
                              match.team1.score.reduce((a, b) => a + b, 0) >
                              match.team2.score.reduce((a, b) => a + b, 0)
                              ? "text-primary"
                              : "text-foreground"
                              }`}
                          >
                            {match.team1.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {match.team1.score.map((score, idx) => (
                            <span
                              key={idx}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${match.status === "Finalizado" && score > match.team2.score[idx]
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground"
                                }`}
                            >
                              {score}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Team 2 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {match.team2.seed && (
                            <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                              {match.team2.seed}
                            </span>
                          )}
                          <span
                            className={`font-semibold text-lg ${match.status === "Finalizado" &&
                              match.team2.score.reduce((a, b) => a + b, 0) >
                              match.team1.score.reduce((a, b) => a + b, 0)
                              ? "text-primary"
                              : "text-foreground"
                              }`}
                          >
                            {match.team2.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {match.team2.score.map((score, idx) => (
                            <span
                              key={idx}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${match.status === "Finalizado" && score > match.team1.score[idx]
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-foreground"
                                }`}
                            >
                              {score}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Match Info */}
                    <div className="flex flex-col items-end gap-3 min-w-[200px]">
                      <Badge
                        variant={match.status === "Finalizado" ? "secondary" : "default"}
                        className={
                          match.status === "Finalizado"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-accent text-accent-foreground"
                        }
                      >
                        {match.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{match.time}</span>
                        {match.date && <span className="ml-2">- {match.date}</span>}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{match.court}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
