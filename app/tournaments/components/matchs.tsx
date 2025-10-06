import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import matches from '@/liga.json'
import { RowsIcon, Users2, UserSearchIcon } from 'lucide-react'
import Link from 'next/link'

export function Bracket() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8" id="matchs">
      <h2 className="text-2xl font-bold mb-8 text-center">Proximos partidos</h2>

      <div className="flex justify-center gap-10 mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 justify-center">
            <RowsIcon className="w-5 h-5 text-primary" />
            <p className="text-3xl font-bold text-foreground">
              {matches.length}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Cantidad de juegos</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 justify-center">
            <Users2 className="w-5 h-5 text-primary" />
            <p className="text-3xl font-bold text-foreground">
              {' '}
              {matches.reduce((acc, match) => acc + match.jugadores.length, 0)}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Cantidad de jugadores</p>
        </div>
      </div>

      {/* Seccion de busqueda */}

      <section className="my-6 flex flex-col items-center gap-2 border p-4 rounded-lg shadow-sm">
        <h4>Filtrado de busqueda</h4>
        <div className="flex flex-1 items-center gap-2 w-full justify-between">
          <UserSearchIcon className="" />
          <Input placeholder="Buscar jugador..." />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Grupo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Cancha" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <Card
              className="w-full hover:scale-105 transition-all"
              key={match.grupo}
            >
              <CardHeader>
                <CardTitle>Grupo {match.grupo}</CardTitle>
                <CardDescription>
                  Cancha: {match.cancha} | Horario: {match.horario}
                </CardDescription>
                <CardAction>
                  <Link href={`/tournaments/${match.grupo}`}>
                    <Button variant="link">Ver detalles</Button>
                  </Link>
                </CardAction>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
                  {match.jugadores.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <p>
                  Resultado: <strong>Pendiente</strong>
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </section>
  )
}
