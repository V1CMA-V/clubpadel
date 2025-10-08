'use client'

import { Card } from '@/components/ui/card'
import { Calendar, TrendingUp, Trophy, Users } from 'lucide-react'
import Link from 'next/link'

export function AdminDashboard() {
  const stats = [
    {
      label: 'Torneos Activos',
      value: '3',
      icon: Trophy,
      color: 'text-primary',
    },
    {
      label: 'Jugadores Registrados',
      value: '156',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      label: 'Partidos Programados',
      value: '24',
      icon: Calendar,
      color: 'text-red-600',
    },
    {
      label: 'Inscripciones Este Mes',
      value: '+32',
      icon: TrendingUp,
      color: 'text-green-600',
    },
  ]

  const quickActions = [
    { label: 'Crear Torneo', href: '/admin/torneos/nuevo', icon: Trophy },
    { label: 'Gestionar Torneos', href: '/admin/torneos', icon: Calendar },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Panel de Administración
        </h1>
        <p className="text-muted-foreground">
          Gestiona torneos, participantes y partidos de ProMaster
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="p-6 border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`h-10 w-10 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Card className="p-6 border-border/50 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {action.label}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Actividad Reciente
        </h2>
        <Card className="p-6 border-border/50">
          <div className="space-y-4">
            {[
              {
                action: 'Nuevo torneo creado',
                detail: 'Campeonato de Verano 2024',
                time: 'Hace 2 horas',
              },
              {
                action: 'Resultado actualizado',
                detail: 'Final - Torneo Primavera',
                time: 'Hace 5 horas',
              },
              {
                action: 'Nuevo participante',
                detail: 'Juan Pérez inscrito en Torneo Elite',
                time: 'Hace 1 día',
              },
              {
                action: 'Partido programado',
                detail: 'Semifinal - Torneo Elite',
                time: 'Hace 2 días',
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start justify-between py-3 border-b border-border/30 last:border-0"
              >
                <div>
                  <p className="font-medium text-foreground">
                    {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
