import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold text-gray-800 mb-2">
            404
          </CardTitle>
          <CardTitle className="text-xl text-gray-600">
            Página no encontrada
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-500">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild>
              <Link href="/">Ir al inicio</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/torneos">Ver torneos</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
