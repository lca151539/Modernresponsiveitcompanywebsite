import { Heart, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const team = [
    { name: 'Anna Müller', role: 'CEO & Gründerin', initials: 'AM' },
    { name: 'Tom Schmidt', role: 'CTO', initials: 'TS' },
    { name: 'Lisa Weber', role: 'Lead Developer', initials: 'LW' },
    { name: 'Max Fischer', role: 'DevOps Engineer', initials: 'MF' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-foreground mb-6">Über uns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind ein engagiertes Team von Entwicklern, Designern und Nachhaltigkeitsexperten, 
            die an die Kraft der Technologie für eine bessere Zukunft glauben.
          </p>
        </div>

        {/* Image and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2h8ZW58MXx8fHwxNzYxMTIwNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-foreground mb-6">Unsere Mission</h2>
            <p className="text-muted-foreground mb-4">
              Bei GreenCode IT verbinden wir technologische Exzellenz mit ökologischer 
              Verantwortung. Unsere Mission ist es, Softwarelösungen zu entwickeln, die nicht 
              nur effizient und innovativ sind, sondern auch einen positiven Beitrag zum 
              Umweltschutz leisten.
            </p>
            <p className="text-muted-foreground mb-4">
              Wir glauben an die Kraft von Open Source und arbeiten aktiv an Projekten, die 
              Transparenz, Zusammenarbeit und nachhaltige Entwicklung fördern.
            </p>
            <p className="text-muted-foreground">
              Seit unserer Gründung im Jahr 2020 haben wir über 50 nachhaltige IT-Projekte 
              erfolgreich umgesetzt und tragen aktiv zur Open-Source-Community bei.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl text-foreground text-center mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Transparenz</h3>
              <p className="text-muted-foreground">
                Offene Kommunikation und nachvollziehbare Prozesse stehen im Mittelpunkt 
                unserer Arbeit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Verantwortung</h3>
              <p className="text-muted-foreground">
                Wir übernehmen Verantwortung für die ökologischen und sozialen Auswirkungen 
                unserer Arbeit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Wir suchen ständig nach neuen Wegen, um Technologie und Nachhaltigkeit 
                zu vereinen.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl text-foreground text-center mb-12">Unser Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">{member.initials}</span>
                </div>
                <h3 className="text-lg text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
