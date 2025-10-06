import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  return (
    <section className="py-12 px-28 border shadow-2xl rounded-lg w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Preguntas Frecuentes
      </h2>
      <p className="mb-8 text-center text-balance">
        Aquí encontrarás respuestas a las preguntas más comunes sobre nuestro
        producto y servicio.
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Reglas Generales</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li className="mb-2">
                Todas las partidas se juegan al mejor de 3 sets, con tie-break
                en el tercer set.
              </li>
              <li className="mb-2">
                El sistema de puntuación es el siguiente: victoria 3 puntos,
                derrota 0 puntos.
              </li>
              <li className="mb-2">
                En caso de empate en puntos, se utilizarán los siguientes
                criterios de desempate:
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li className="mb-2">Diferencia de sets</li>
                  <li className="mb-2">Diferencia de juegos</li>
                  <li className="mb-2">Resultado del enfrentamiento directo</li>
                </ul>
              </li>
              <li className="mb-2">
                Los jugadores deben presentarse en la pista 10 minutos antes del
                inicio de su partido.
              </li>
              <li className="mb-2">
                El uso de raquetas y pelotas oficiales es obligatorio.
              </li>
              <li className="mb-2">
                El incumplimiento de las reglas puede resultar en la
                descalificación del jugador o equipo.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Personal a cargo y Contacto</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Para consultas relacionadas con el torneo, puedes contactar a
              nuestro equipo de soporte a través del siguiente correo
              electrónico:
            </p>
            <p>
              <a href="mailto:support@tournament.com" className="text-blue-500">
                support@tournament.com
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Terminos y Condiciones</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Al participar en nuestro torneo, aceptas cumplir con todas las
              reglas y regulaciones establecidas. Nos reservamos el derecho de
              descalificar a cualquier jugador que no cumpla con estas
              condiciones.
            </p>
            <p>
              Para más información, consulta nuestras políticas en el sitio web
              o contacta a nuestro equipo de soporte.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
