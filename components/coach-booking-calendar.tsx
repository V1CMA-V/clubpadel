'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { useState } from 'react'

interface TimeSlot {
  time: string
  available: boolean
}

interface DaySchedule {
  date: Date
  dayName: string
  slots: TimeSlot[]
}

interface CoachBookingCalendarProps {
  coachName: string
  coachPrice: string
  coachLocation: string
  schedule: {
    day: string
    slots: TimeSlot[]
  }[]
}

export function CoachBookingCalendar({
  coachName,
  coachPrice,
  coachLocation,
  schedule,
}: CoachBookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []

    // Add empty slots for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
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
    setSelectedSlot(null)
  }

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
    setSelectedDate(null)
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

  const getDaySchedule = (date: Date | null): TimeSlot[] => {
    if (!date) return []
    const dayName = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ][date.getDay()]
    const daySchedule = schedule.find((s) => s.day === dayName)
    return daySchedule?.slots || []
  }

  const handleDateSelect = (date: Date | null) => {
    if (!date || isPastDate(date)) return
    setSelectedDate(date)
    setSelectedSlot(null)
  }

  const handleReservation = () => {
    if (selectedDate && selectedSlot) {
      const dateStr = selectedDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      alert(
        `Reserva confirmada con ${coachName} el ${dateStr} a las ${selectedSlot}`
      )
    }
  }

  const currentDaySlots = selectedDate ? getDaySchedule(selectedDate) : []

  return (
    <Card className="p-6 md:p-8 border-0 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Reservar Clase</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h3 className="text-xl font-bold text-foreground">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-semibold text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((date, index) => {
              const hasSchedule = date ? getDaySchedule(date).length > 0 : false
              const isSelected = isSameDate(date, selectedDate)
              const isPast = isPastDate(date)
              const todayDate = isToday(date)

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  disabled={!date || isPast || !hasSchedule}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                    transition-all duration-200
                    ${!date ? 'invisible' : ''}
                    ${
                      isPast || !hasSchedule
                        ? 'opacity-30 cursor-not-allowed'
                        : 'hover:bg-primary/10'
                    }
                    ${
                      isSelected
                        ? 'bg-primary text-primary-foreground hover:bg-primary'
                        : ''
                    }
                    ${todayDate && !isSelected ? 'border-2 border-primary' : ''}
                    ${!isSelected && !isPast && hasSchedule ? 'bg-muted' : ''}
                  `}
                >
                  {date?.getDate()}
                </button>
              )
            })}
          </div>

          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-primary" />
              <span>Hoy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted" />
              <span>Disponible</span>
            </div>
          </div>
        </div>

        {/* Time Slots & Booking */}
        <div>
          {selectedDate ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {selectedDate.toLocaleDateString('es-ES', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                  })}
                </h3>

                {currentDaySlots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {currentDaySlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={
                          selectedSlot === slot.time ? 'default' : 'outline'
                        }
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`${
                          selectedSlot === slot.time
                            ? 'bg-secondary text-secondary-foreground'
                            : slot.available
                            ? ''
                            : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No hay horarios disponibles para este día
                  </p>
                )}
              </div>

              {/* Booking Summary */}
              {selectedSlot && (
                <div className="p-6 bg-linear-to-br from-primary/5 to-secondary/5 rounded-lg space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Resumen de Reserva
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entrenador:</span>
                      <span className="font-semibold text-foreground">
                        {coachName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fecha:</span>
                      <span className="font-semibold text-foreground">
                        {selectedDate.toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horario:</span>
                      <span className="font-semibold text-foreground">
                        {selectedSlot}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ubicación:</span>
                      <span className="font-semibold text-foreground">
                        {coachLocation}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="text-muted-foreground">Precio:</span>
                      <span className="text-xl font-bold text-primary">
                        {coachPrice}
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
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Calendar className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Selecciona una fecha en el calendario</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
