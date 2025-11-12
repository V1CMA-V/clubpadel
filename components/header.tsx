'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">
                PM
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">ProMaster</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Padel Club
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/torneos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Torneos
            </Link>
            <Link
              href="/entrenadores"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Entrenadores
            </Link>

            <Link
              href="/contacto"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" className="cursor-pointer">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/reservar-cancha">
              <Button className="cursor-pointer">Reservar Cancha</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Inicio
              </Link>
              <Link
                href="/torneos"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Torneos
              </Link>
              <Link
                href="/entrenadores"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Entrenadores
              </Link>

              <Link
                href="/contacto"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline">Iniciar Sesión</Button>
                <Link href="/reservar-cancha">
                  <Button className="w-full bg-primary text-primary-foreground">
                    Reservar Cancha
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
