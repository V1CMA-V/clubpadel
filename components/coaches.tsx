'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Award, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

const coaches = [
  {
    id: 1,
    name: 'Carlos Martínez',
    specialty: 'Técnica Avanzada',
    experience: '15 años',
    rating: 4.9,
    image: '/professional-male-padel-coach-with-racket.jpg',
    achievements: 'Ex-profesional WPT',
  },
  {
    id: 2,
    name: 'Ana Rodríguez',
    specialty: 'Estrategia de Juego',
    experience: '12 años',
    rating: 5.0,
    image: '/professional-female-padel-coach-smiling.jpg',
    achievements: 'Campeona Nacional',
  },
  {
    id: 3,
    name: 'Miguel Sánchez',
    specialty: 'Preparación Física',
    experience: '10 años',
    rating: 4.8,
    image: '/athletic-male-padel-trainer.jpg',
    achievements: 'Certificado RFEP',
  },
  {
    id: 4,
    name: 'Laura Torres',
    specialty: 'Iniciación',
    experience: '8 años',
    rating: 4.9,
    image: '/friendly-female-padel-instructor-teaching.jpg',
    achievements: 'Especialista Juvenil',
  },
]

export function Coaches() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % coaches.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + coaches.length) % coaches.length)
  }

  return (
    <section id="entrenadores" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Nuestros Entrenadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Aprende de los mejores profesionales con años de experiencia en el
            mundo del pádel
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <Card
              key={coach.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={coach.image || '/placeholder.svg'}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-foreground">
                    {coach.rating}
                  </span>
                </div>

                {/* Achievement badge */}
                <div className="absolute top-4 left-4 bg-primary/95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                  <Award className="w-4 h-4 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground">
                    {coach.achievements}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {coach.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {coach.experience} de experiencia
                  </p>
                </div>
                <Button variant="secondary" className="w-full cursor-pointer">
                  Reservar Clase
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img
                src={coaches[currentIndex].image || '/placeholder.svg'}
                alt={coaches[currentIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-bold text-foreground">
                  {coaches[currentIndex].rating}
                </span>
              </div>

              <div className="absolute top-4 left-4 bg-primary/95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                <Award className="w-4 h-4 text-primary-foreground" />
                <span className="text-xs font-semibold text-primary-foreground">
                  {coaches[currentIndex].achievements}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {coaches[currentIndex].name}
                </h3>
                <p className="text-primary font-semibold">
                  {coaches[currentIndex].specialty}
                </p>
                <p className="text-sm text-muted-foreground">
                  {coaches[currentIndex].experience} de experiencia
                </p>
              </div>
              <Button variant="secondary" className="w-full ">
                Reservar
              </Button>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {coaches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                  aria-label={`Go to coach ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
