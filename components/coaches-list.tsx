'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Award, Calendar, Clock, MapPin, Star } from 'lucide-react'
import Link from 'next/link'

const coaches = [
  {
    id: 1,
    name: 'Carlos Martínez',
    specialty: 'Técnica Avanzada',
    experience: '15 años',
    rating: 4.9,
    reviews: 127,
    image: '/professional-male-padel-coach-with-racket.jpg',
    achievements: 'Ex-profesional WPT',
    description:
      'Especialista en técnica avanzada y estrategia de juego. He entrenado a jugadores profesionales y ayudado a cientos de estudiantes a mejorar su nivel.',
    price: '$800/hora',
    location: 'Cancha Principal',
  },
  {
    id: 2,
    name: 'Ana Rodríguez',
    specialty: 'Estrategia de Juego',
    experience: '12 años',
    rating: 5.0,
    reviews: 98,
    image: '/professional-female-padel-coach-smiling.jpg',
    achievements: 'Campeona Nacional',
    description:
      'Enfocada en desarrollar la inteligencia táctica y mental del jugador. Mi método combina análisis de juego con práctica intensiva.',
    price: '$750/hora',
    location: 'Cancha 2',
  },
  {
    id: 3,
    name: 'Miguel Sánchez',
    specialty: 'Preparación Física',
    experience: '10 años',
    rating: 4.8,
    reviews: 85,
    image: '/athletic-male-padel-trainer.jpg',
    achievements: 'Certificado RFEP',
    description:
      'Especialista en acondicionamiento físico específico para pádel. Trabajo en prevención de lesiones y mejora del rendimiento atlético.',
    price: '$700/hora',
    location: 'Gimnasio ProMaster',
  },
  {
    id: 4,
    name: 'Laura Torres',
    specialty: 'Iniciación',
    experience: '8 años',
    rating: 4.9,
    reviews: 142,
    image: '/friendly-female-padel-instructor-teaching.jpg',
    achievements: 'Especialista Juvenil',
    description:
      'Apasionada por enseñar a principiantes y jóvenes. Mi enfoque es hacer que el aprendizaje sea divertido y efectivo desde el primer día.',
    price: '$600/hora',
    location: 'Cancha 3',
  },
]

export function CoachesList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Nuestros Entrenadores
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Aprende de los mejores profesionales con años de experiencia en el
            mundo del pádel
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coaches.map((coach) => (
            <Card
              key={coach.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={coach.image || '/placeholder.svg'}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-foreground">
                    {coach.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({coach.reviews})
                  </span>
                </div>

                {/* Achievement badge */}
                <div className="absolute top-4 left-4 bg-primary/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary-foreground" />
                  <span className="text-xs font-semibold text-primary-foreground">
                    {coach.achievements}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {coach.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {coach.experience} de experiencia
                  </p>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {coach.description}
                </p>

                {/* Info */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {coach.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Desde {coach.price}
                      </span>
                    </div>
                  </div>
                </div>

                <Link href={`/entrenadores/${coach.id}`} className="block">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Horarios y Reservar
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
