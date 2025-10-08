'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  ClipboardList,
  Edit,
  Trash2,
  Trophy,
  UserPlus,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function AdminTournamentsList() {
  const [tournaments] = useState([
    {
      id: '1',
      name: 'Torneo Elite ProMaster',
      date: '15-20 Julio 2024',
      category: 'Profesional',
      participants: 32,
      status: 'active',
      prize: '$5,000',
    },
    {
      id: '2',
      name: 'Campeonato de Verano',
      date: '1-5 Agosto 2024',
      category: 'Amateur',
      participants: 24,
      status: 'upcoming',
      prize: '$2,000',
    },
    {
      id: '3',
      name: 'Torneo Primavera',
      date: '10-15 Mayo 2024',
      category: 'Mixto',
      participants: 28,
      status: 'completed',
      prize: '$3,000',
    },
  ])

  const getStatusBadge = (status: string) => {
    const variants = {
      active: {
        label: 'En Curso',
        className: 'bg-green-500/10 text-green-600 border-green-500/20',
      },
      upcoming: {
        label: 'Próximo',
        className: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      },
      completed: {
        label: 'Finalizado',
        className: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
      },
    }
    const variant = variants[status as keyof typeof variants]
    return <Badge className={variant.className}>{variant.label}</Badge>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Gestión de Torneos
          </h1>
          <p className="text-muted-foreground">
            Administra todos los torneos de ProMaster
          </p>
        </div>
        <Link href="/admin/torneos/nuevo">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Trophy className="mr-2 h-5 w-5" />
            Crear Torneo
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {tournaments.map((tournament) => (
          <Card
            key={tournament.id}
            className="p-6 border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {tournament.name}
                      </h3>
                      {getStatusBadge(tournament.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{tournament.participants} participantes</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Trophy className="h-4 w-4" />
                        <span>Premio: {tournament.prize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href={`/admin/torneos/${tournament.id}/editar`}>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                </Link>
                <Link href={`/admin/torneos/${tournament.id}/participantes`}>
                  <Button variant="outline" size="sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Participantes
                  </Button>
                </Link>
                <Link href={`/admin/torneos/${tournament.id}/partidos`}>
                  <Button variant="outline" size="sm">
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Partidos
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive bg-transparent"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
