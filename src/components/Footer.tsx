import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span>🌱</span>
              </div>
              <span className="text-xl">GreenCode IT</span>
            </div>
            <p className="text-sm opacity-90">
              Nachhaltige Softwareentwicklung für eine bessere Zukunft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impressum')}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Impressum
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} GreenCode IT. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
