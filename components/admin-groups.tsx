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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Edit, Plus, Trash2, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Datos de ejemplo de grupos
const mockGroups = [
  {
    id: 'grupoA',
    name: 'Grupo A',
    teams: [
      { id: 1, name: 'García / Martínez', wins: 2, losses: 0, points: 6 },
      { id: 2, name: 'Rodríguez / Sánchez', wins: 1, losses: 1, points: 3 },
      { id: 3, name: 'López / Fernández', wins: 1, losses: 1, points: 3 },
      { id: 4, name: 'Pérez / González', wins: 0, losses: 2, points: 0 },
    ],
  },
  {
    id: 'grupoB',
    name: 'Grupo B',
    teams: [
      { id: 5, name: 'Jiménez / Ruiz', wins: 2, losses: 0, points: 6 },
      { id: 6, name: 'Díaz / Torres', wins: 1, losses: 1, points: 3 },
      { id: 7, name: 'Moreno / Álvarez', wins: 1, losses: 1, points: 3 },
      { id: 8, name: 'Ramírez / Castro', wins: 0, losses: 2, points: 0 },
    ],
  },
  {
    id: 'grupoC',
    name: 'Grupo C',
    teams: [
      { id: 9, name: 'Silva / Ortiz', wins: 0, losses: 0, points: 0 },
      { id: 10, name: 'Vargas / Mendoza', wins: 0, losses: 0, points: 0 },
      { id: 11, name: 'Herrera / Campos', wins: 0, losses: 0, points: 0 },
      { id: 12, name: 'Navarro / Reyes', wins: 0, losses: 0, points: 0 },
    ],
  },
]

export function AdminGroups({
  tournamentId,
  categoryId,
}: {
  tournamentId: string
  categoryId: string
}) {
  const [groups, setGroups] = useState(mockGroups)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newGroup, setNewGroup] = useState({
    name: '',
    teamsPerGroup: '4',
  })

  const handleAddGroup = () => {
    const group = {
      id: newGroup.name.toLowerCase().replace(/\s+/g, '-'),
      name: newGroup.name,
      teams: [],
    }
    setGroups([...groups, group])
    setNewGroup({ name: '', teamsPerGroup: '4' })
    setIsAddDialogOpen(false)
  }

  const handleDeleteGroup = (id: string) => {
    setGroups(groups.filter((group) => group.id !== id))
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                Gestión de Grupos
              </h1>
              <p className="text-lg text-muted-foreground">
                Administra los grupos de la fase de grupos del torneo
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus className="w-5 h-5" />
                  Nuevo Grupo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Agregar Nuevo Grupo</DialogTitle>
                  <DialogDescription>
                    Crea un nuevo grupo para la fase de grupos
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="group-name">Nombre del Grupo</Label>
                    <Input
                      id="group-name"
                      placeholder="Ej: Grupo A, Grupo B..."
                      value={newGroup.name}
                      onChange={(e) =>
                        setNewGroup({ ...newGroup, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teams-per-group">Equipos por Grupo</Label>
                    <Select
                      value={newGroup.teamsPerGroup}
                      onValueChange={(value) =>
                        setNewGroup({ ...newGroup, teamsPerGroup: value })
                      }
                    >
                      <SelectTrigger id="teams-per-group">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 equipos</SelectItem>
                        <SelectItem value="4">4 equipos</SelectItem>
                        <SelectItem value="5">5 equipos</SelectItem>
                        <SelectItem value="6">6 equipos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button onClick={handleAddGroup} disabled={!newGroup.name}>
                    Crear Grupo
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.id} className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {group.name}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteGroup(group.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Teams Table */}
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 text-sm font-semibold">
                          Pos
                        </th>
                        <th className="text-left p-3 text-sm font-semibold">
                          Equipo
                        </th>
                        <th className="text-center p-3 text-sm font-semibold">
                          PJ
                        </th>
                        <th className="text-center p-3 text-sm font-semibold">
                          PG
                        </th>
                        <th className="text-center p-3 text-sm font-semibold">
                          PP
                        </th>
                        <th className="text-center p-3 text-sm font-semibold">
                          Pts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.teams.map((team, index) => (
                        <tr
                          key={team.id}
                          className="border-t hover:bg-muted/50"
                        >
                          <td className="p-3">
                            <Badge
                              variant="outline"
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                            >
                              {index + 1}
                            </Badge>
                          </td>
                          <td className="p-3 font-medium">{team.name}</td>
                          <td className="p-3 text-center">
                            {team.wins + team.losses}
                          </td>
                          <td className="p-3 text-center">{team.wins}</td>
                          <td className="p-3 text-center">{team.losses}</td>
                          <td className="p-3 text-center font-bold">
                            {team.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Gestionar Equipos del Grupo
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Programar Partidos
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
