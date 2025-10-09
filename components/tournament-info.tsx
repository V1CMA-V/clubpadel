import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DollarSign, Download, FileText, Info, Trophy } from 'lucide-react'
import Link from 'next/link'

export function TournamentInfo({ tournamentId }: { tournamentId: string }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tournament Rules */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Reglamento</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Formato de eliminación directa con partidos al mejor de 3 sets
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Tie-break a 7 puntos en caso de empate 6-6</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Golden point en caso de deuce (40-40)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Tiempo máximo de descanso entre sets: 90 segundos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Equipamiento oficial obligatorio (ropa deportiva adecuada)
                </span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <Link href="Reglamento_Torneo_ProMasterPadel.pdf" target="_blank" download>
                <Download className="w-4 h-4 mr-2" />
                Descargar Reglamento Completo
              </Link>
            </Button>
          </Card>

          {/* Prize Distribution */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Premios</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold text-foreground">
                    1er Lugar
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary">$2,500</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-muted-foreground" />
                  <span className="font-semibold text-foreground">
                    2do Lugar
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  $1,500
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-muted-foreground" />
                  <span className="font-semibold text-foreground">
                    Semifinalistas
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  $500 c/u
                </span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Los premios se entregarán al finalizar el torneo. Todos los
                  participantes recibirán un diploma de participación.
                </p>
              </div>
            </div>
          </Card>

          {/* Registration Info */}
          <Card className="p-8 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Información de Inscripción
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Requisitos
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ser socio del club o pagar inscripción de invitado</li>
                  <li>• Edad mínima: 16 años</li>
                  <li>• Seguro deportivo vigente</li>
                  <li>• Certificado médico (si es requerido)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Costos</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Socios: $40 por equipo</li>
                  <li>• No socios: $60 por equipo</li>
                  <li>• Incluye: Pelotas oficiales y arbitraje</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Fechas Importantes
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Inscripciones hasta: 10 de Abril</li>
                  <li>• Sorteo: 12 de Abril</li>
                  <li>• Inicio torneo: 15 de Abril</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Inscribirse Ahora
              </Button>
              <Button size="lg" variant="outline">
                Contactar Organizadores
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
