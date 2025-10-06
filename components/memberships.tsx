import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Básico",
    price: "49",
    period: "mes",
    description: "Perfecto para comenzar tu aventura en el pádel",
    features: [
      "Acceso a 4 canchas estándar",
      "8 horas de juego al mes",
      "Descuento 10% en clases",
      "Acceso a vestuarios",
      "App de reservas",
    ],
    popular: false,
    color: "secondary",
  },
  {
    id: 2,
    name: "Pro",
    price: "89",
    period: "mes",
    description: "La opción más popular para jugadores regulares",
    features: [
      "Acceso a todas las canchas",
      "Horas de juego ilimitadas",
      "Descuento 25% en clases",
      "Acceso prioritario a torneos",
      "Invitaciones para amigos",
      "Acceso a zona VIP",
      "Estacionamiento gratuito",
    ],
    popular: true,
    color: "primary",
  },
  {
    id: 3,
    name: "Elite",
    price: "149",
    period: "mes",
    description: "Experiencia premium para los más exigentes",
    features: [
      "Todo lo incluido en Pro",
      "Entrenador personal 4h/mes",
      "Análisis de juego con IA",
      "Acceso 24/7",
      "Equipamiento premium incluido",
      "Masajes deportivos",
      "Nutricionista deportivo",
      "Eventos exclusivos",
    ],
    popular: false,
    color: "accent",
  },
]

export function Memberships() {
  return (
    <section id="membresias" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Elige tu Membresía</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Planes diseñados para adaptarse a tu nivel y frecuencia de juego
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-2xl scale-105 md:scale-110"
                  : "border-border shadow-lg hover:shadow-xl hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-bold uppercase tracking-wider">
                  <Star className="inline-block w-4 h-4 mr-1 fill-current" />
                  Más Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 ${plan.popular ? "bg-primary" : "bg-secondary"}`}>
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-primary-foreground" : "text-secondary-foreground"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                  size="lg"
                >
                  {plan.popular && <Zap className="mr-2 w-4 h-4 fill-current" />}
                  Comenzar Ahora
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿Necesitas un plan personalizado para tu empresa o grupo?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Contactar para Planes Corporativos
          </Button>
        </div>
      </div>
    </section>
  )
}
