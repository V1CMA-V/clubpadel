export function Gallery() {
  const images = [
    {
      src: "/modern-padel-court-aerial-view.jpg",
      alt: "Canchas de pádel modernas",
    },
    {
      src: "/padel-players-training-session.jpg",
      alt: "Sesión de entrenamiento",
    },
    {
      src: "/padel-club-facilities-lounge-area.jpg",
      alt: "Instalaciones del club",
    },
    {
      src: "/padel-tournament-celebration.jpg",
      alt: "Celebración de torneo",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nuestras Instalaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Canchas de última generación y espacios diseñados para tu comodidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
