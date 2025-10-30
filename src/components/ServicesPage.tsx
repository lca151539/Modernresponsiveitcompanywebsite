import { Code2, GitBranch, Lightbulb, Server } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: 'Nachhaltige Softwareentwicklung',
      description:
        'Maßgeschneiderte Softwarelösungen mit Fokus auf Energieeffizienz und nachhaltigen Betrieb. Wir entwickeln Anwendungen, die ressourcenschonend laufen und einen minimalen ökologischen Fußabdruck hinterlassen.',
    },
    {
      icon: <GitBranch className="h-8 w-8 text-secondary" />,
      title: 'Open-Source-Projekte',
      description:
        'Wir entwickeln und pflegen Open-Source-Projekte, die der Community zur Verfügung stehen. Von Tools zur CO₂-Messung bis hin zu nachhaltigen Frameworks – Transparenz ist unser Prinzip.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: 'Green IT Beratung',
      description:
        'Umfassende Beratung zu nachhaltigen IT-Strategien, von der Infrastruktur-Optimierung bis zur klimaneutralen Cloud-Migration. Wir helfen Ihnen, Ihre IT umweltfreundlicher zu gestalten.',
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Cloud & DevOps',
      description:
        'Moderne Cloud-Lösungen mit grünen Rechenzentren und effiziente CI/CD-Pipelines. Wir setzen auf erneuerbare Energien und optimierte Deployment-Prozesse.',
    },
  ];

  const projects = [
    {
      name: 'EcoTracker',
      type: 'Web-App',
      technology: 'React, Node.js',
      status: 'Aktiv',
      description: 'CO₂-Tracking für Unternehmen',
    },
    {
      name: 'GreenCI',
      type: 'DevOps Tool',
      technology: 'Go, Docker',
      status: 'Aktiv',
      description: 'Energieeffiziente CI/CD-Pipeline',
    },
    {
      name: 'SolarAPI',
      type: 'API',
      technology: 'Python, FastAPI',
      status: 'Beta',
      description: 'Solarenergie-Daten-API',
    },
    {
      name: 'OpenSustain',
      type: 'Framework',
      technology: 'TypeScript',
      status: 'In Entwicklung',
      description: 'Nachhaltigkeits-Framework',
    },
    {
      name: 'GreenDB',
      type: 'Datenbank',
      technology: 'PostgreSQL',
      status: 'Aktiv',
      description: 'Energieoptimierte Datenbank',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-foreground mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Konzeption bis zur Umsetzung – wir bieten nachhaltige IT-Lösungen, 
            die Ihr Unternehmen in die digitale Zukunft führen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Projects Table */}
        <div className="mb-20">
          <h2 className="text-3xl text-foreground mb-8">Aktuelle Open-Source-Projekte</h2>
          <div className="bg-white border border-border rounded-lg overflow-hidden overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Projektname</TableHead>
                  <TableHead className="whitespace-nowrap">Typ</TableHead>
                  <TableHead className="whitespace-nowrap">Technologie</TableHead>
                  <TableHead className="whitespace-nowrap">Status</TableHead>
                  <TableHead className="whitespace-nowrap">Beschreibung</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">{project.name}</TableCell>
                    <TableCell className="whitespace-nowrap">{project.type}</TableCell>
                    <TableCell className="whitespace-nowrap">{project.technology}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs ${
                          project.status === 'Aktiv'
                            ? 'bg-primary/10 text-primary'
                            : project.status === 'Beta'
                            ? 'bg-accent/30 text-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>{project.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Process */}
        <div>
          <h2 className="text-3xl text-foreground mb-8 text-center">Unser Prozess</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analyse', desc: 'Ihre Anforderungen verstehen' },
              { step: '02', title: 'Konzept', desc: 'Nachhaltige Lösungen entwickeln' },
              { step: '03', title: 'Umsetzung', desc: 'Effiziente Entwicklung' },
              { step: '04', title: 'Support', desc: 'Langfristige Betreuung' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
