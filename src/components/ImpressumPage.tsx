import { Download } from 'lucide-react';
import { Button } from './ui/button';

export function ImpressumPage() {
  const handleDownload = () => {
    const impressumText = `
IMPRESSUM

Angaben gemäß § 5 TMG

GreenCode IT GmbH
Grüne Straße 42
10115 Berlin
Deutschland

Vertreten durch

Geschäftsführerin: Anna Müller
Technischer Direktor: Tom Schmidt

Kontakt

Telefon: +49 30 12345678
E-Mail: info@greencode-it.de
Website: www.greencode-it.de

Registereintrag

Eintragung im Handelsregister
Registergericht: Amtsgericht Berlin-Charlottenburg
Registernummer: HRB 123456

Umsatzsteuer-ID

Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
DE123456789

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV

Anna Müller
Grüne Straße 42
10115 Berlin

Haftungsausschluss

Haftung für Inhalte
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Haftung für Links
Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

Urheberrecht
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.

Streitschlichtung

Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr
Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
`;

    const blob = new Blob([impressumText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GreenCode-IT-Impressum.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
          <h1 className="text-4xl text-foreground">Impressum</h1>
          <Button onClick={handleDownload} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Impressum herunterladen
          </Button>
        </div>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              GreenCode IT GmbH<br />
              Grüne Straße 42<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Vertreten durch</h2>
            <p>
              Geschäftsführerin: Anna Müller<br />
              Technischer Direktor: Tom Schmidt
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Kontakt</h2>
            <p>
              Telefon: +49 30 12345678<br />
              E-Mail: info@greencode-it.de<br />
              Website: www.greencode-it.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Anna Müller<br />
              Grüne Straße 42<br />
              10115 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Haftungsausschluss</h2>
            
            <h3 className="text-xl text-foreground mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl text-foreground mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h3 className="text-xl text-foreground mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              https://ec.europa.eu/consumers/odr<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
