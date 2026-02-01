import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    { name: "General Dentistry", href: "/services/general-dentistry" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Emergency Dentist", href: "/services/emergency-dentist" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "/team" },
    { name: "Patient Resources", href: "/resources" },
    { name: "Payment Options", href: "/payments" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Final CTA */}
      <div className="py-12 border-b border-primary-foreground/10">
        <div className="container-content px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Book Your Appointment Today
              </h3>
              <p className="text-primary-foreground/70">
                New patients welcome. Experience the difference of patient-first care.
              </p>
            </div>
            <Button className="btn-cta text-base px-8 py-4 h-auto whitespace-nowrap">
              <Calendar className="w-5 h-5" />
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="container-content px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="font-display font-bold text-lg">
                    Smile Dental
                  </span>
                  <span className="block text-xs text-primary-foreground/60 -mt-0.5">
                    Sydney CBD
                  </span>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Trusted dental care in Sydney CBD. Serving families and 
                professionals with gentle, modern dentistry since 2009.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:0298765432" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  (02) 9876 5432
                </a>
                <a href="mailto:hello@smiledental.com.au" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@smiledental.com.au
                </a>
                <div className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Level 5, 123 George Street<br />Sydney NSW 2000</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent">
                  Emergency? Call us now
                </p>
                <a href="tel:0298765432" className="text-sm text-primary-foreground/80">
                  (02) 9876 5432
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-primary-foreground/10">
        <div className="container-content px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 Smile Dental Sydney. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-primary-foreground/80 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-foreground/80 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
