import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Trophy, Users } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Trophy className="w-4 h-4" />
                Club de Pádel Profesional
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Eleva tu juego al{' '}
              <span className="text-primary">siguiente nivel</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Únete a ProMaster, el club de pádel donde la pasión se encuentra
              con la excelencia. Canchas de primera clase, entrenadores
              profesionales y una comunidad vibrante te esperan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8"
              >
                Reservar Cancha
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                Ver Torneos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold text-foreground">500+</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Miembros Activos
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold text-foreground">12</p>
                </div>
                <p className="text-sm text-muted-foreground">Canchas Premium</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <p className="text-3xl font-bold text-foreground">24/7</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Acceso Disponible
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/professional-padel-player-hitting-ball-on-modern-c.jpg"
                alt="Jugador de pádel profesional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
