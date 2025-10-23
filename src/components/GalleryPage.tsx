import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage() {
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1695556655761-c4bd612306cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzYxMjE4ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Nachhaltige Büroumgebung',
      title: 'Unser Workspace',
      description: 'Moderne Arbeitsumgebung mit nachhaltigen Materialien',
    },
    {
      src: 'https://images.unsplash.com/photo-1610576661852-53017dc25144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyMTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Entwicklung mit grüner Technologie',
      title: 'Green Coding',
      description: 'Energieeffiziente Entwicklungsumgebungen',
    },
    {
      src: 'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2h8ZW58MXx8fHwxNzYxMTIwNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Team Kollaboration',
      title: 'Teamwork',
      description: 'Zusammenarbeit für innovative Lösungen',
    },
    {
      src: 'https://images.unsplash.com/photo-1643409329501-f17776d3823a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc291cmNlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYxMjE4ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Open Source Entwicklung',
      title: 'Open Source',
      description: 'Beiträge zur globalen Developer-Community',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-foreground mb-6">Galerie</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein Einblick in unsere Arbeit, unser Team und unsere nachhaltigen Projekte
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl text-foreground mb-4">Interessiert an einer Zusammenarbeit?</h2>
          <p className="text-muted-foreground mb-6">
            Entdecken Sie, wie wir Ihr nächstes Projekt nachhaltiger gestalten können
          </p>
        </div>
      </div>
    </div>
  );
}
