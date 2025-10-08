'use client'

import type React from 'react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface AdminTournamentFormProps {
  tournamentId?: string
}

export function AdminTournamentForm({
  tournamentId,
}: AdminTournamentFormProps) {
  const isEditing = !!tournamentId

  const [formData, setFormData] = useState({
    name: isEditing ? 'Torneo Elite ProMaster' : '',
    category: isEditing ? 'Profesional' : '',
    startDate: isEditing ? '2024-07-15' : '',
    endDate: isEditing ? '2024-07-20' : '',
    location: isEditing ? 'Club ProMaster - Pista Central' : '',
    maxParticipants: isEditing ? '32' : '',
    prize: isEditing ? '5000' : '',
    registrationDeadline: isEditing ? '2024-07-10' : '',
    description: isEditing
      ? 'Torneo de alto nivel para jugadores profesionales'
      : '',
    rules: isEditing
      ? 'Sistema de eliminación directa. Partidos al mejor de 3 sets.'
      : '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Aquí iría la lógica para guardar el torneo
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/admin/torneos">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Torneos
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          {isEditing ? 'Editar Torneo' : 'Crear Nuevo Torneo'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing
            ? 'Modifica la información del torneo'
            : 'Completa los datos para crear un nuevo torneo'}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="p-8 border-border/50">
          <div className="space-y-6">
            {/* Información Básica */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Información Básica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Torneo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Torneo Elite ProMaster"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Ej: Profesional, Amateur, Mixto"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Fechas */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Fechas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Fecha de Inicio *</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Fecha de Fin *</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registrationDeadline">
                    Límite de Inscripción *
                  </Label>
                  <Input
                    id="registrationDeadline"
                    name="registrationDeadline"
                    type="date"
                    value={formData.registrationDeadline}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Detalles */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Detalles del Torneo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej: Club ProMaster - Pista Central"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxParticipants">
                    Máximo de Participantes *
                  </Label>
                  <Input
                    id="maxParticipants"
                    name="maxParticipants"
                    type="number"
                    value={formData.maxParticipants}
                    onChange={handleChange}
                    placeholder="32"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prize">Premio ($) *</Label>
                  <Input
                    id="prize"
                    name="prize"
                    type="number"
                    value={formData.prize}
                    onChange={handleChange}
                    placeholder="5000"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe el torneo..."
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rules">Reglamento</Label>
                <Textarea
                  id="rules"
                  name="rules"
                  value={formData.rules}
                  onChange={handleChange}
                  placeholder="Especifica las reglas del torneo..."
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Save className="mr-2 h-5 w-5" />
              {isEditing ? 'Guardar Cambios' : 'Crear Torneo'}
            </Button>
            <Link href="/admin/torneos">
              <Button type="button" variant="outline" size="lg">
                Cancelar
              </Button>
            </Link>
          </div>
        </Card>
      </form>
    </div>
  )
}
