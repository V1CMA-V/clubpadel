'use client'

import type React from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail, Phone, Search, Trash2, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface AdminParticipantsProps {
  tournamentId: string
}

export function AdminParticipants({ tournamentId }: AdminParticipantsProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [participants] = useState([
    {
      id: '1',
      name: 'Carlos Martínez',
      email: 'carlos@email.com',
      phone: '+52 220 123 456',
      ranking: 1,
      status: 'confirmed',
    },
    {
      id: '2',
      name: 'Ana García',
      email: 'ana@email.com',
      phone: '+52 220 234 567',
      ranking: 3,
      status: 'confirmed',
    },
    {
      id: '3',
      name: 'Miguel Rodríguez',
      email: 'miguel@email.com',
      phone: '+52 220 345 678',
      ranking: 2,
      status: 'pending',
    },
    {
      id: '4',
      name: 'Laura Sánchez',
      email: 'laura@email.com',
      phone: '+52 220 456 789',
      ranking: 5,
      status: 'confirmed',
    },
  ])

  const [newParticipant, setNewParticipant] = useState({
    name: '',
    email: '',
    phone: '',
    ranking: '',
  })

  const filteredParticipants = participants.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Adding participant:', newParticipant)
    setShowAddForm(false)
    setNewParticipant({ name: '', email: '', phone: '', ranking: '' })
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
              Gestión de Participantes
            </h1>
            <p className="text-muted-foreground">
              Torneo Elite ProMaster - {participants.length} participantes
            </p>
          </div>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary hover:bg-primary/90"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Agregar Participante
          </Button>
        </div>
      </div>

      {/* Add Participant Form */}
      {showAddForm && (
        <Card className="p-6 mb-6 border-border/50">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Nuevo Participante
          </h2>
          <form onSubmit={handleAddParticipant}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  value={newParticipant.name}
                  onChange={(e) =>
                    setNewParticipant((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newParticipant.email}
                  onChange={(e) =>
                    setNewParticipant((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="juan@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={newParticipant.phone}
                  onChange={(e) =>
                    setNewParticipant((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="+52 220 000 000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ranking">Ranking Inicial</Label>
                <Input
                  id="ranking"
                  type="number"
                  value={newParticipant.ranking}
                  onChange={(e) =>
                    setNewParticipant((prev) => ({
                      ...prev,
                      ranking: e.target.value,
                    }))
                  }
                  placeholder="10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Agregar
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

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Buscar participantes por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Participants List */}
      <div className="grid gap-4">
        {filteredParticipants.map((participant) => (
          <Card
            key={participant.id}
            className="p-6 border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {participant.name}
                  </h3>
                  <Badge
                    className={
                      participant.status === 'confirmed'
                        ? 'bg-green-500/10 text-green-600 border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
                    }
                  >
                    {participant.status === 'confirmed'
                      ? 'Confirmado'
                      : 'Pendiente'}
                  </Badge>
                  <Badge variant="outline">
                    Ranking: #{participant.ranking}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{participant.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{participant.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
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
