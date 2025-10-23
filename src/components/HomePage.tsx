import { ArrowRight, Code, Leaf, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695556655761-c4bd612306cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzYxMjE4ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sustainable Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Nachhaltige IT. Offene Zukunft.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Wir entwickeln umweltbewusste Softwarelösungen und fördern Open-Source-Projekte 
            für eine digitale Welt im Einklang mit der Natur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('services')}
              className="bg-white text-primary hover:bg-white/90"
              size="lg"
            >
              Unsere Leistungen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Warum GreenCode IT?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir verbinden technologische Innovation mit ökologischer Verantwortung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Nachhaltigkeit</h3>
              <p className="text-muted-foreground">
                Energieeffiziente Softwareentwicklung mit minimiertem CO₂-Fußabdruck 
                und ressourcenschonenden Lösungen.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Transparente Entwicklung und aktive Beteiligung an der 
                globalen Open-Source-Community.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-accent/30 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Expertise</h3>
              <p className="text-muted-foreground">
                Erfahrenes Team mit Leidenschaft für moderne Technologien 
                und nachhaltige Innovationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Bereit für nachhaltige IT-Lösungen?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam an Ihrer digitalen Transformation arbeiten – 
              verantwortungsvoll und zukunftsorientiert.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary hover:bg-white/90"
              size="lg"
            >
              Jetzt Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
