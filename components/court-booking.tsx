'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { useState } from 'react'

interface TimeSlot {
  time: string
  available: boolean
  price: string
}

interface Court {
  id: number
  name: string
  type: string
  features: string[]
  image: string
}

const courts: Court[] = [
  {
    id: 1,
    name: 'Cancha 1',
    type: 'Profesional',
    features: ['Iluminación LED', 'Césped Premium', 'Gradas'],
    image: '/professional-padel-court-aerial-view.jpg',
  },
  {
    id: 2,
    name: 'Cancha 2',
    type: 'Profesional',
    features: ['Iluminación LED', 'Césped Premium', 'Gradas'],
    image: '/modern-padel-court-with-blue-surface.jpg',
  },
  {
    id: 3,
    name: 'Cancha 3',
    type: 'Estándar',
    features: ['Iluminación LED', 'Césped Sintético'],
    image: '/outdoor-padel-court-sunset.jpg',
  },
  {
    id: 4,
    name: 'Cancha 4',
    type: 'Estándar',
    features: ['Iluminación LED', 'Césped Sintético'],
    image: '/professional-padel-court-aerial-view.jpg',
  },
  {
    id: 5,
    name: 'Cancha 5',
    type: 'Entrenamiento',
    features: ['Iluminación', 'Césped Sintético'],
    image: '/modern-padel-court-with-blue-surface.jpg',
  },
  {
    id: 6,
    name: 'Cancha 6',
    type: 'Entrenamiento',
    features: ['Iluminación', 'Césped Sintético'],
    image: '/outdoor-padel-court-sunset.jpg',
  },
  {
    id: 7,
    name: 'Cancha 7',
    type: 'Recreativa',
    features: ['Iluminación Básica'],
    image: '/professional-padel-court-aerial-view.jpg',
  },
  {
    id: 8,
    name: 'Cancha 8',
    type: 'Recreativa',
    features: ['Iluminación Básica'],
    image: '/modern-padel-court-with-blue-surface.jpg',
  },
]

const timeSlots: TimeSlot[] = [
  { time: '07:00 - 08:00', available: true, price: '$300' },
  { time: '08:00 - 09:00', available: true, price: '$300' },
  { time: '09:00 - 10:00', available: false, price: '$300' },
  { time: '10:00 - 11:00', available: true, price: '$350' },
  { time: '11:00 - 12:00', available: true, price: '$350' },
  { time: '12:00 - 13:00', available: true, price: '$350' },
  { time: '13:00 - 14:00', available: false, price: '$350' },
  { time: '14:00 - 15:00', available: true, price: '$350' },
  { time: '15:00 - 16:00', available: true, price: '$350' },
  { time: '16:00 - 17:00', available: true, price: '$400' },
  { time: '17:00 - 18:00', available: false, price: '$400' },
  { time: '18:00 - 19:00', available: true, price: '$400' },
  { time: '19:00 - 20:00', available: true, price: '$450' },
  { time: '20:00 - 21:00', available: true, price: '$450' },
  { time: '21:00 - 22:00', available: false, price: '$450' },
]

export function CourtBooking() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const calendarDays = generateCalendarDays()
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
    setSelectedDate(null)
    setSelectedCourt(null)
    setSelectedSlot(null)
  }

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
    setSelectedDate(null)
    setSelectedCourt(null)
    setSelectedSlot(null)
  }

  const isToday = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isPastDate = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  const handleDateSelect = (date: Date | null) => {
    if (!date || isPastDate(date)) return
    setSelectedDate(date)
    setSelectedCourt(null)
    setSelectedSlot(null)
  }

  const handleReservation = () => {
    if (selectedDate && selectedCourt && selectedSlot) {
      const dateStr = selectedDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      alert(
        `Reserva confirmada:\n${selectedCourt.name}\n${dateStr}\n${selectedSlot.time}\nPrecio: ${selectedSlot.price}`
      )
    }
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Reservar Cancha
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige tu cancha favorita y reserva tu horario ideal. Contamos con 8
            canchas profesionales disponibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <Card className="p-6 border-0 shadow-lg lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Selecciona Fecha
              </h2>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <h3 className="text-lg font-bold text-foreground">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <Button variant="outline" size="icon" onClick={goToNextMonth}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-muted-foreground py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const isSelected = isSameDate(date, selectedDate)
                const isPast = isPastDate(date)
                const todayDate = isToday(date)

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    disabled={!date || isPast}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                      transition-all duration-200
                      ${!date ? 'invisible' : ''}
                      ${
                        isPast
                          ? 'opacity-30 cursor-not-allowed'
                          : 'hover:bg-primary/10'
                      }
                      ${
                        isSelected
                          ? 'bg-primary text-primary-foreground hover:bg-primary'
                          : ''
                      }
                      ${
                        todayDate && !isSelected
                          ? 'border-2 border-primary'
                          : ''
                      }
                      ${!isSelected && !isPast ? 'bg-muted' : ''}
                    `}
                  >
                    {date?.getDate()}
                  </button>
                )
              })}
            </div>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border-2 border-primary" />
                <span>Hoy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">
                  15
                </div>
                <span>Fecha seleccionada</span>
              </div>
            </div>
          </Card>

          {/* Courts & Booking Section */}
          <div className="lg:col-span-2 space-y-6">
            {selectedDate ? (
              <>
                {/* Courts Selection */}
                <Card className="p-6 border-0 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      Selecciona Cancha
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {courts.map((court) => (
                      <button
                        key={court.id}
                        onClick={() => {
                          setSelectedCourt(court)
                          setSelectedSlot(null)
                        }}
                        className={`text-left p-4 rounded-lg border-2 transition-all ${
                          selectedCourt?.id === court.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-foreground">
                              {court.name}
                            </h3>
                            <Badge variant="secondary" className="mt-1">
                              {court.type}
                            </Badge>
                          </div>
                          <MapPin
                            className={`w-5 h-5 ${
                              selectedCourt?.id === court.id
                                ? 'text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {court.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-muted-foreground"
                            >
                              {feature}
                              {idx < court.features.length - 1 ? ' •' : ''}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Time Slots */}
                {selectedCourt && (
                  <Card className="p-6 border-0 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        Selecciona Horario
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot.time}
                          variant={
                            selectedSlot?.time === slot.time
                              ? 'default'
                              : 'outline'
                          }
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot)}
                          className={`flex flex-col h-auto py-3 ${
                            selectedSlot?.time === slot.time
                              ? 'bg-secondary text-secondary-foreground'
                              : slot.available
                              ? ''
                              : 'opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <span className="font-semibold">{slot.time}</span>
                          <span className="text-xs mt-1">{slot.price}</span>
                        </Button>
                      ))}
                    </div>

                    {/* Booking Summary */}
                    {selectedSlot && (
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg space-y-4">
                        <h3 className="text-xl font-bold text-foreground">
                          Resumen de Reserva
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Cancha:
                            </span>
                            <span className="font-semibold text-foreground">
                              {selectedCourt.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tipo:</span>
                            <span className="font-semibold text-foreground">
                              {selectedCourt.type}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Fecha:
                            </span>
                            <span className="font-semibold text-foreground">
                              {selectedDate.toLocaleDateString('es-ES', {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long',
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Horario:
                            </span>
                            <span className="font-semibold text-foreground">
                              {selectedSlot.time}
                            </span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-border">
                            <span className="text-muted-foreground">
                              Precio:
                            </span>
                            <span className="text-2xl font-bold text-primary">
                              {selectedSlot.price}
                            </span>
                          </div>
                        </div>
                        <Button
                          onClick={handleReservation}
                          className="w-full bg-primary text-primary-foreground text-lg py-6"
                        >
                          Confirmar Reserva
                        </Button>
                      </div>
                    )}
                  </Card>
                )}
              </>
            ) : (
              <Card className="p-12 border-0 shadow-lg">
                <div className="text-center text-muted-foreground">
                  <Calendar className="w-20 h-20 mx-auto mb-4 opacity-20" />
                  <p className="text-lg">
                    Selecciona una fecha en el calendario para comenzar
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
