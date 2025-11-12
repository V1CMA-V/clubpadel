'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Award, CheckCircle2, Clock, MapPin, Star, Target } from 'lucide-react'
import { CoachBookingCalendar } from './coach-booking-calendar'

const coachesData: Record<
  string,
  {
    id: number
    name: string
    specialty: string
    experience: string
    rating: number
    reviews: number
    image: string
    achievements: string
    description: string
    price: string
    location: string
    bio: string
    certifications: string[]
    specialties: string[]
    stats: { label: string; value: string }[]
    schedule: {
      day: string
      slots: { time: string; available: boolean }[]
    }[]
  }
> = {
  '1': {
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
    price: '$800',
    location: 'Cancha Principal',
    bio: 'Con más de 15 años de experiencia en el mundo del pádel profesional, he dedicado mi carrera a perfeccionar la técnica y estrategia de jugadores de todos los niveles. Mi experiencia en el World Padel Tour me ha dado una perspectiva única sobre lo que se necesita para competir al más alto nivel.',
    certifications: [
      'Certificado RFEP Nivel 3',
      'Ex-profesional WPT',
      'Entrenador Nacional',
      'Especialista en Biomecánica',
    ],
    specialties: [
      'Técnica de golpeo',
      'Estrategia avanzada',
      'Juego de red',
      'Preparación para torneos',
    ],
    stats: [
      { label: 'Estudiantes', value: '200+' },
      { label: 'Años experiencia', value: '15' },
      { label: 'Tasa éxito', value: '95%' },
    ],
    schedule: [
      {
        day: 'Lunes',
        slots: [
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: false },
          { time: '11:00 - 12:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: false },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Martes',
        slots: [
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: false },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: false },
        ],
      },
      {
        day: 'Miércoles',
        slots: [
          { time: '09:00 - 10:00', available: false },
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Jueves',
        slots: [
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: true },
          { time: '16:00 - 17:00', available: false },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Viernes',
        slots: [
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: false },
          { time: '11:00 - 12:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: false },
        ],
      },
    ],
  },
  '2': {
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
    price: '$750',
    location: 'Cancha 2',
    bio: 'Como ex-campeona nacional, entiendo la importancia de la estrategia y la mentalidad en el pádel. Mi enfoque se centra en desarrollar jugadores inteligentes que puedan leer el juego y tomar decisiones acertadas bajo presión.',
    certifications: [
      'Campeona Nacional 2019',
      'Certificado RFEP Nivel 2',
      'Psicología Deportiva',
      'Análisis Táctico',
    ],
    specialties: [
      'Estrategia de juego',
      'Mentalidad competitiva',
      'Análisis de rivales',
      'Juego en pareja',
    ],
    stats: [
      { label: 'Estudiantes', value: '150+' },
      { label: 'Años experiencia', value: '12' },
      { label: 'Tasa éxito', value: '98%' },
    ],
    schedule: [
      {
        day: 'Lunes',
        slots: [
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: false },
          { time: '15:00 - 16:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: false },
        ],
      },
      {
        day: 'Martes',
        slots: [
          { time: '08:00 - 09:00', available: false },
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: true },
          { time: '15:00 - 16:00', available: true },
          { time: '16:00 - 17:00', available: false },
          { time: '17:00 - 18:00', available: true },
        ],
      },
      {
        day: 'Miércoles',
        slots: [
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: true },
          { time: '15:00 - 16:00', available: false },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
        ],
      },
      {
        day: 'Jueves',
        slots: [
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: false },
          { time: '10:00 - 11:00', available: true },
          { time: '15:00 - 16:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
        ],
      },
      {
        day: 'Viernes',
        slots: [
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: true },
          { time: '10:00 - 11:00', available: false },
          { time: '15:00 - 16:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: false },
        ],
      },
    ],
  },
  '3': {
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
    price: '$700',
    location: 'Gimnasio ProMaster',
    bio: 'Mi pasión es ayudar a los jugadores a alcanzar su máximo potencial físico. Con formación en fisioterapia deportiva y entrenamiento funcional, diseño programas personalizados que mejoran el rendimiento y previenen lesiones.',
    certifications: [
      'Certificado RFEP',
      'Fisioterapia Deportiva',
      'Entrenador Personal',
      'Prevención de Lesiones',
    ],
    specialties: [
      'Acondicionamiento físico',
      'Prevención de lesiones',
      'Fuerza y resistencia',
      'Movilidad',
    ],
    stats: [
      { label: 'Estudiantes', value: '120+' },
      { label: 'Años experiencia', value: '10' },
      { label: 'Tasa éxito', value: '92%' },
    ],
    schedule: [
      {
        day: 'Lunes',
        slots: [
          { time: '07:00 - 08:00', available: true },
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: false },
          { time: '18:00 - 19:00', available: true },
          { time: '19:00 - 20:00', available: true },
          { time: '20:00 - 21:00', available: false },
        ],
      },
      {
        day: 'Martes',
        slots: [
          { time: '07:00 - 08:00', available: true },
          { time: '08:00 - 09:00', available: false },
          { time: '09:00 - 10:00', available: true },
          { time: '18:00 - 19:00', available: true },
          { time: '19:00 - 20:00', available: false },
          { time: '20:00 - 21:00', available: true },
        ],
      },
      {
        day: 'Miércoles',
        slots: [
          { time: '07:00 - 08:00', available: false },
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: true },
          { time: '18:00 - 19:00', available: true },
          { time: '19:00 - 20:00', available: true },
          { time: '20:00 - 21:00', available: true },
        ],
      },
      {
        day: 'Jueves',
        slots: [
          { time: '07:00 - 08:00', available: true },
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: true },
          { time: '18:00 - 19:00', available: false },
          { time: '19:00 - 20:00', available: true },
          { time: '20:00 - 21:00', available: true },
        ],
      },
      {
        day: 'Viernes',
        slots: [
          { time: '07:00 - 08:00', available: true },
          { time: '08:00 - 09:00', available: true },
          { time: '09:00 - 10:00', available: false },
          { time: '18:00 - 19:00', available: true },
          { time: '19:00 - 20:00', available: true },
          { time: '20:00 - 21:00', available: false },
        ],
      },
    ],
  },
  '4': {
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
    price: '$600',
    location: 'Cancha 3',
    bio: 'Enseñar a nuevos jugadores es mi verdadera pasión. Creo que todos pueden disfrutar del pádel con la guía correcta. Mi método se enfoca en construir fundamentos sólidos mientras los estudiantes se divierten y ganan confianza.',
    certifications: [
      'Especialista Juvenil',
      'Certificado RFEP Nivel 1',
      'Pedagogía Deportiva',
      'Primeros Auxilios',
    ],
    specialties: [
      'Iniciación al pádel',
      'Clases juveniles',
      'Fundamentos técnicos',
      'Desarrollo de confianza',
    ],
    stats: [
      { label: 'Estudiantes', value: '250+' },
      { label: 'Años experiencia', value: '8' },
      { label: 'Tasa éxito', value: '97%' },
    ],
    schedule: [
      {
        day: 'Lunes',
        slots: [
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: true },
          { time: '12:00 - 13:00', available: false },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: false },
        ],
      },
      {
        day: 'Martes',
        slots: [
          { time: '10:00 - 11:00', available: false },
          { time: '11:00 - 12:00', available: true },
          { time: '12:00 - 13:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: false },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Miércoles',
        slots: [
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: true },
          { time: '12:00 - 13:00', available: true },
          { time: '16:00 - 17:00', available: false },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Jueves',
        slots: [
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: false },
          { time: '12:00 - 13:00', available: true },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: true },
        ],
      },
      {
        day: 'Viernes',
        slots: [
          { time: '10:00 - 11:00', available: true },
          { time: '11:00 - 12:00', available: true },
          { time: '12:00 - 13:00', available: false },
          { time: '16:00 - 17:00', available: true },
          { time: '17:00 - 18:00', available: true },
          { time: '18:00 - 19:00', available: false },
        ],
      },
    ],
  },
}

export function CoachDetail({ coachId }: { coachId: string }) {
  const coach = coachesData[coachId]

  console.log('Coach Id:', coachId)

  if (!coach) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-muted-foreground">
          Entrenador no encontrado
        </p>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div className="relative aspect-4/3 lg:aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={coach.image || '/placeholder.svg'}
              alt={coach.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-lg font-bold text-foreground">
                {coach.rating}
              </span>
              <span className="text-sm text-muted-foreground">
                ({coach.reviews} reseñas)
              </span>
            </div>

            <div className="absolute top-6 left-6 bg-primary/95 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground">
                {coach.achievements}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {coach.name}
              </h1>
              <p className="text-2xl text-primary font-semibold mb-2">
                {coach.specialty}
              </p>
              <p className="text-lg text-muted-foreground">
                {coach.experience} de experiencia
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {coach.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {coach.stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 text-center border-0 bg-linear-to-br from-primary/5 to-secondary/5"
                >
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Quick Info */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">{coach.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">{coach.price}/hora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <Card className="p-6 md:p-8 mb-8 border-0 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Certificaciones y Logros
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {coach.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Specialties */}
        <Card className="p-6 md:p-8 mb-8 border-0 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Especialidades
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {coach.specialties.map((specialty, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Schedule & Booking */}
        <CoachBookingCalendar
          coachName={coach.name}
          coachPrice={coach.price}
          coachLocation={coach.location}
          schedule={coach.schedule}
        />
      </div>
    </div>
  )
}
