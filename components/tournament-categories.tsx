'use client'

import { TournamentMatches } from '@/components/tournament-matches'
import { TournamentPodium } from '@/components/tournament-podium'
import { TournamentRanking } from '@/components/tournament-ranking'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

// Categorías disponibles en el torneo
const categories = [
  { id: 'primera', name: 'Primera' },
  { id: 'segunda', name: 'Segunda' },
  { id: 'tercera', name: 'Tercera' },
  { id: 'cuarta', name: 'Cuarta' },
  { id: 'quinta', name: 'Quinta' },
  { id: 'sexta', name: 'Sexta' },
  { id: 'femenil', name: 'Femenil' },
  { id: 'open', name: 'Open' },
]

export function TournamentCategories({
  tournamentId,
}: {
  tournamentId: string
}) {
  const [selectedCategory, setSelectedCategory] = useState('primera')

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Categorías del Torneo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Selecciona una categoría para ver sus partidos y clasificación
          </p>
        </div>

        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          {/* Tabs de categorías */}
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex w-auto min-w-full h-auto p-1 bg-muted rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 text-sm md:text-base font-semibold whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Contenido de cada categoría */}
          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-16"
            >
              {/* Partidos de la categoría */}
              <TournamentMatches
                tournamentId={tournamentId}
                categoryId={category.id}
              />

              {/* Ranking de la categoría */}
              <TournamentRanking
                tournamentId={tournamentId}
                categoryId={category.id}
              />

              {/* Sección de podio top 3 debajo del ranking */}
              <TournamentPodium
                tournamentId={tournamentId}
                categoryId={category.id}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
