import { ArrowRight, Code, Leaf, Users } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';


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
          
          {/* Animated Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nachhaltige IT. Offene Zukunft.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Wir entwickeln umweltbewusste Softwarelösungen und fördern Open-Source-Projekte 
            für eine digitale Welt im Einklang mit der Natur.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Warum GreenCode IT?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir verbinden technologische Innovation mit ökologischer Verantwortung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Nachhaltigkeit</h3>
              <p className="text-muted-foreground">
                Energieeffiziente Softwareentwicklung mit minimiertem CO₂-Fußabdruck 
                und ressourcenschonenden Lösungen.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Transparente Entwicklung und aktive Beteiligung an der 
                globalen Open-Source-Community.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-accent/30 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Expertise</h3>
              <p className="text-muted-foreground">
                Erfahrenes Team mit Leidenschaft für moderne Technologien 
                und nachhaltige Innovationen.
              </p>
            </motion.div>
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
