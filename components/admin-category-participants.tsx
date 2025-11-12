'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Edit, Plus, Search, Trash2, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Datos de ejemplo
const mockParticipants = [
  {
    id: 1,
    player1: 'Carlos García',
    player2: 'Juan Martínez',
    seed: 1,
    phone: '+52 123 456 7890',
  },
  {
    id: 2,
    player1: 'Pedro Rodríguez',
    player2: 'Luis Sánchez',
    seed: 2,
    phone: '+52 123 456 7891',
  },
  {
    id: 3,
    player1: 'Miguel Jiménez',
    player2: 'Antonio Ruiz',
    seed: 3,
    phone: '+52 123 456 7892',
  },
]

export function AdminCategoryParticipants({
  tournamentId,
  categoryId,
}: {
  tournamentId: string
  categoryId: string
}) {
  const [participants, setParticipants] = useState(mockParticipants)
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newParticipant, setNewParticipant] = useState({
    player1: '',
    player2: '',
    phone: '',
  })

  const filteredParticipants = participants.filter(
    (p) =>
      p.player1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.player2.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddParticipant = () => {
    const participant = {
      id: participants.length + 1,
      ...newParticipant,
      seed: participants.length + 1,
    }
    setParticipants([...participants, participant])
    setNewParticipant({ player1: '', player2: '', phone: '' })
    setIsAddDialogOpen(false)
  }

  const handleDeleteParticipant = (id: number) => {
    setParticipants(participants.filter((p) => p.id !== id))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/admin/torneos/${tournamentId}/categorias`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Categorías
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                Participantes -{' '}
                {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
              </h1>
              <p className="text-lg text-muted-foreground">
                Gestiona los equipos inscritos en esta categoría
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus className="w-5 h-5" />
                  Agregar Equipo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Agregar Nuevo Equipo</DialogTitle>
                  <DialogDescription>
                    Registra un nuevo equipo en la categoría
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="player1">Jugador 1</Label>
                    <Input
                      id="player1"
                      placeholder="Nombre completo"
                      value={newParticipant.player1}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          player1: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="player2">Jugador 2</Label>
                    <Input
                      id="player2"
                      placeholder="Nombre completo"
                      value={newParticipant.player2}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          player2: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono de Contacto</Label>
                    <Input
                      id="phone"
                      placeholder="+52 123 456 7890"
                      value={newParticipant.phone}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleAddParticipant}
                    disabled={
                      !newParticipant.player1 || !newParticipant.player2
                    }
                  >
                    Agregar Equipo
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Buscar equipos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Equipos</p>
                <p className="text-2xl font-bold text-foreground">
                  {participants.length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Participants List */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    SEED
                  </th>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    JUGADOR 1
                  </th>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    JUGADOR 2
                  </th>
                  <th className="text-left p-4 font-semibold text-sm text-muted-foreground">
                    TELÉFONO
                  </th>
                  <th className="text-right p-4 font-semibold text-sm text-muted-foreground">
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredParticipants.map((participant) => (
                  <tr
                    key={participant.id}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4">
                      <Badge variant="outline" className="font-bold">
                        #{participant.seed}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-foreground">
                        {participant.player1}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-foreground">
                        {participant.player2}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-muted-foreground">
                        {participant.phone}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() =>
                            handleDeleteParticipant(participant.id)
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
