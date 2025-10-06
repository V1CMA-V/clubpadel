import { Input } from '@/components/ui/input'
import rankingData from '@/ranking_jugadores.json'

export default function Ranking() {
  // Ordenar por puntos (descendente) y luego por diferencia de games
  const sortedRanking = [...rankingData].sort((a, b) => {
    if (b.puntos !== a.puntos) {
      return b.puntos - a.puntos
    }
    return b.diferencia - a.diferencia
  })

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">
          Ranking de la Liga
        </h3>
        <p className="text-center">
          Clasificación actual de los jugadores en la liga.
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-2">
          <Input
            className="mt-4 mb-6 w-full max-w-3xl"
            placeholder="Buscar jugador..."
          />

          <div className="mt-6 text-sm text-gray-600">
            <p>
              <strong>Leyenda:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li>
                <strong>PJ:</strong> Partidos Jugados
              </li>
              <li>
                <strong>PG:</strong> Partidos Ganados
              </li>
              <li>
                <strong>PP:</strong> Partidos Perdidos
              </li>
              <li>
                <strong>Sets F:</strong> Sets a Favor
              </li>
              <li>
                <strong>Sets C:</strong> Sets en Contra
              </li>
              <li>
                <strong>Games F:</strong> Games a Favor
              </li>
              <li>
                <strong>Games C:</strong> Games en Contra
              </li>
              <li>
                <strong>Dif.:</strong> Diferencia de Games
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">Jugador</th>
                <th className="px-4 py-3 text-center font-semibold">PJ</th>
                <th className="px-4 py-3 text-center font-semibold">PG</th>
                <th className="px-4 py-3 text-center font-semibold">PP</th>
                <th className="px-4 py-3 text-center font-semibold">Sets F</th>
                <th className="px-4 py-3 text-center font-semibold">Sets C</th>
                <th className="px-4 py-3 text-center font-semibold">Games F</th>
                <th className="px-4 py-3 text-center font-semibold">Games C</th>
                <th className="px-4 py-3 text-center font-semibold">Dif.</th>
                <th className="px-4 py-3 text-center font-semibold bg-blue-700">
                  Puntos
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedRanking.map((jugador, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 font-medium">{jugador.jugador}</td>
                  <td className="px-4 py-3 text-center">{jugador.pj}</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">
                    {jugador.pg}
                  </td>
                  <td className="px-4 py-3 text-center text-red-600 font-semibold">
                    {jugador.pp}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {jugador.sets_favor}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {jugador.sets_contra}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {jugador.games_favor}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {jugador.games_contra}
                  </td>
                  <td
                    className={`px-4 py-3 text-center font-semibold ${
                      jugador.diferencia > 0
                        ? 'text-green-600'
                        : jugador.diferencia < 0
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {jugador.diferencia > 0 ? '+' : ''}
                    {jugador.diferencia}
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-lg bg-blue-50">
                    {jugador.puntos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
