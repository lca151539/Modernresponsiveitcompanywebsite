import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-foreground mb-6">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt mit uns starten? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl text-foreground mb-6">Schreiben Sie uns</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                <p className="text-primary">
                  Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre.email@beispiel.de"
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  rows={6}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Nachricht senden
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl text-foreground mb-6">Kontaktinformationen</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Grüne Straße 42<br />
                    10115 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground">
                    +49 30 12345678<br />
                    Mo-Fr: 9:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-1">E-Mail</h3>
                  <p className="text-muted-foreground">
                    info@greencode-it.de<br />
                    kontakt@greencode-it.de
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-muted rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Karte wird geladen...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
