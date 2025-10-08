'use client'

import type React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Calendar, Clock, Edit, MapPin, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface AdminMatchesProps {
  tournamentId: string
}

export function AdminMatches({ tournamentId }: AdminMatchesProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [matches] = useState([
    {
      id: '1',
      round: 'Final',
      player1: 'Carlos Martínez',
      player2: 'Miguel Rodríguez',
      player3: 'Juan Pérez',
      player4: 'Luis Gómez',
      score: '6-4, 6-3',
      date: '2024-07-20',
      time: '18:00',
      court: 'Pista Central',
      status: 'completed',
    },
    {
      id: '2',
      round: 'Semifinal',
      player1: 'Ana García',
      player2: 'Laura Sánchez',
      player3: 'Marta Fernández',
      player4: 'Sofía Torres',
      score: '6-2, 4-6, 7-5',
      date: '2024-07-19',
      time: '16:00',
      court: 'Pista 1',
      status: 'completed',
    },
    {
      id: '3',
      round: 'Cuartos de Final',
      player1: 'Pedro López',
      player2: 'Juan Fernández',
      player3: 'Diego Ramírez',
      player4: 'Javier Morales',
      score: '',
      date: '2024-07-18',
      time: '10:00',
      court: 'Pista 2',
      status: 'scheduled',
    },
  ])

  const [newMatch, setNewMatch] = useState({
    round: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    date: '',
    time: '',
    court: '',
  })

  const handleAddMatch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Adding match:', newMatch)
    setShowAddForm(false)
    setNewMatch({
      round: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      date: '',
      time: '',
      court: '',
    })
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: {
        label: 'Finalizado',
        className: 'bg-green-500/10 text-green-600 border-green-500/20',
      },
      live: {
        label: 'En Vivo',
        className: 'bg-red-500/10 text-red-600 border-red-500/20',
      },
      scheduled: {
        label: 'Programado',
        className: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      },
    }
    const variant = variants[status as keyof typeof variants]
    return <Badge className={variant.className}>{variant.label}</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/admin/torneos">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Torneos
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Gestión de Partidos
            </h1>
            <p className="text-muted-foreground">
              Torneo Elite ProMaster - {matches.length} partidos
            </p>
          </div>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="mr-2 h-5 w-5" />
            Programar Partido
          </Button>
        </div>
      </div>

      {/* Add Match Form */}
      {showAddForm && (
        <Card className="p-6 mb-6 border-border/50">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Programar Nuevo Partido
          </h2>
          <form onSubmit={handleAddMatch}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="round">Ronda *</Label>
                <Input
                  id="round"
                  value={newMatch.round}
                  onChange={(e) =>
                    setNewMatch((prev) => ({ ...prev, round: e.target.value }))
                  }
                  placeholder="Ej: Cuartos de Final"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="court">Pista *</Label>
                <Input
                  id="court"
                  value={newMatch.court}
                  onChange={(e) =>
                    setNewMatch((prev) => ({ ...prev, court: e.target.value }))
                  }
                  placeholder="Ej: Pista Central"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="player1">Jugador 1 *</Label>
                <Input
                  id="player1"
                  value={newMatch.player1}
                  onChange={(e) =>
                    setNewMatch((prev) => ({
                      ...prev,
                      player1: e.target.value,
                    }))
                  }
                  placeholder="Nombre del jugador"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="player2">Jugador 2 *</Label>
                <Input
                  id="player2"
                  value={newMatch.player2}
                  onChange={(e) =>
                    setNewMatch((prev) => ({
                      ...prev,
                      player2: e.target.value,
                    }))
                  }
                  placeholder="Nombre del jugador"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="player3 ">Jugador 3 *</Label>
                <Input
                  id="player3"
                  value={newMatch.player3}
                  onChange={(e) =>
                    setNewMatch((prev) => ({
                      ...prev,
                      player3: e.target.value,
                    }))
                  }
                  placeholder="Nombre del jugador"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="player4">Jugador 4 *</Label>
                <Input
                  id="player4"
                  value={newMatch.player4}
                  onChange={(e) =>
                    setNewMatch((prev) => ({
                      ...prev,
                      player4: e.target.value,
                    }))
                  }
                  placeholder="Nombre del jugador"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Fecha *</Label>
                <Input
                  id="date"
                  type="date"
                  value={newMatch.date}
                  onChange={(e) =>
                    setNewMatch((prev) => ({ ...prev, date: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Hora *</Label>
                <Input
                  id="time"
                  type="time"
                  value={newMatch.time}
                  onChange={(e) =>
                    setNewMatch((prev) => ({ ...prev, time: e.target.value }))
                  }
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Programar
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAddForm(false)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Matches List */}
      <div className="space-y-6">
        {['Final', 'Semifinal', 'Cuartos de Final'].map((round) => {
          const roundMatches = matches.filter((m) => m.round === round)
          if (roundMatches.length === 0) return null

          return (
            <div key={round}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {round}
              </h2>
              <div className="grid gap-4">
                {roundMatches.map((match) => (
                  <Card
                    key={match.id}
                    className="p-6 border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          {getStatusBadge(match.status)}
                        </div>

                        {/* Players and Score */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-foreground">
                              {match.player1} | {match.player3}
                            </span>
                            {match.score && (
                              <span className="text-muted-foreground">
                                {match.score.split(',')[0]}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-foreground">
                              {match.player2} | {match.player4}
                            </span>
                            {match.score && (
                              <span className="text-muted-foreground">
                                {match.score.split(',')[1]}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Match Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(match.date).toLocaleDateString(
                                'es-ES',
                                { day: 'numeric', month: 'long' }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{match.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{match.court}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          {match.status === 'completed'
                            ? 'Ver Detalles'
                            : 'Editar Resultado'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
