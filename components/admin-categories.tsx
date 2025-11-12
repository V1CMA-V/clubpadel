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
import {
  ArrowLeft,
  Edit,
  Grid3x3,
  Plus,
  Trash2,
  Trophy,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Datos de ejemplo de categorías
const mockCategories = [
  {
    id: 'primera',
    name: 'Primera',
    participants: 16,
    matches: 15,
    status: 'En Curso',
  },
  {
    id: 'segunda',
    name: 'Segunda',
    participants: 16,
    matches: 15,
    status: 'En Curso',
  },
  {
    id: 'tercera',
    name: 'Tercera',
    participants: 12,
    matches: 11,
    status: 'Programado',
  },
  {
    id: 'cuarta',
    name: 'Cuarta',
    participants: 8,
    matches: 7,
    status: 'Programado',
  },
  {
    id: 'femenil',
    name: 'Femenil',
    participants: 16,
    matches: 15,
    status: 'En Curso',
  },
  {
    id: 'open',
    name: 'Open',
    participants: 32,
    matches: 31,
    status: 'Inscripción',
  },
]

export function AdminCategories({ tournamentId }: { tournamentId: string }) {
  const [categories, setCategories] = useState(mockCategories)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newCategory, setNewCategory] = useState({
    name: '',
    maxParticipants: '16',
  })

  const handleAddCategory = () => {
    const category = {
      id: newCategory.name.toLowerCase().replace(/\s+/g, '-'),
      name: newCategory.name,
      participants: 0,
      matches: 0,
      status: 'Inscripción',
    }
    setCategories([...categories, category])
    setNewCategory({ name: '', maxParticipants: '16' })
    setIsAddDialogOpen(false)
  }

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Curso':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'Programado':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'Inscripción':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'Finalizado':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/admin/torneos/${tournamentId}/editar`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Torneo
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                Gestión de Categorías
              </h1>
              <p className="text-lg text-muted-foreground">
                Administra las categorías del torneo y sus participantes
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Plus className="w-5 h-5" />
                  Nueva Categoría
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Agregar Nueva Categoría</DialogTitle>
                  <DialogDescription>
                    Crea una nueva categoría para el torneo
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="category-name">
                      Nombre de la Categoría
                    </Label>
                    <Input
                      id="category-name"
                      placeholder="Ej: Primera, Femenil, Open..."
                      value={newCategory.name}
                      onChange={(e) =>
                        setNewCategory({ ...newCategory, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-participants">
                      Máximo de Participantes
                    </Label>
                    <Select
                      value={newCategory.maxParticipants}
                      onValueChange={(value) =>
                        setNewCategory({
                          ...newCategory,
                          maxParticipants: value,
                        })
                      }
                    >
                      <SelectTrigger id="max-participants">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8 equipos</SelectItem>
                        <SelectItem value="16">16 equipos</SelectItem>
                        <SelectItem value="32">32 equipos</SelectItem>
                        <SelectItem value="64">64 equipos</SelectItem>
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
                  <Button
                    onClick={handleAddCategory}
                    disabled={!newCategory.name}
                  >
                    Crear Categoría
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <Badge className={getStatusColor(category.status)}>
                      {category.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Participantes</span>
                    </div>
                    <span className="font-semibold text-foreground">
                      {category.participants}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm">Partidos</span>
                    </div>
                    <span className="font-semibold text-foreground">
                      {category.matches}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 space-y-2">
                  <Link
                    href={`/admin/torneos/${tournamentId}/categorias/${category.id}/grupos`}
                  >
                    <Button variant="outline" className="w-full bg-transparent">
                      <Grid3x3 className="w-4 h-4 mr-2" />
                      Gestionar Grupos
                    </Button>
                  </Link>
                  <Link
                    href={`/admin/torneos/${tournamentId}/categorias/${category.id}/participantes`}
                  >
                    <Button variant="outline" className="w-full bg-transparent">
                      <Users className="w-4 h-4 mr-2" />
                      Gestionar Participantes
                    </Button>
                  </Link>
                  <Link
                    href={`/admin/torneos/${tournamentId}/categorias/${category.id}/partidos`}
                  >
                    <Button variant="outline" className="w-full bg-transparent">
                      <Trophy className="w-4 h-4 mr-2" />
                      Gestionar Partidos
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
