import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer id="contacto" className="bg-black/90 text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/LOGO-PADEL.png" alt="Logo" width={200} height={200} />
            </div>
            <p className="text-sm opacity-80 text-pretty">
              El club de pádel donde la pasión se encuentra con la excelencia
              profesional.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#torneos"
                  className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-colors"
                >
                  Torneos
                </a>
              </li>
              <li>
                <a
                  href="#entrenadores"
                  className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-colors"
                >
                  Entrenadores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-blue-300 transition-colors"
                >
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                <span className="opacity-80">
                  LATERAL SUR, Recta a Cholula 3502, Barrio Real, 72813 Heroica Puebla de Zaragoza, Pue.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-500" />
                <span className="opacity-80">221 149 9442
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-red-500" />
                <span className="opacity-80">promasterpuebla@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4 text-pretty">
              Recibe las últimas noticias y ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 ProMaster Padel Club. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
