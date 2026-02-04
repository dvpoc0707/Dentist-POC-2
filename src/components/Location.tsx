import { MapPin, Phone, Mail, Clock, Car, Train } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conveniently Located in Sydney CBD
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Easy to find, easy to reach. Located in the heart of Sydney with 
            excellent public transport links and nearby parking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] bg-muted rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6897886366396!2d151.2057!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzA3LjciUyAxNTHCsDEyJzIwLjUiRQ!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UrbanSmile Dental Sydney location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="p-6 bg-surface-elevated rounded-xl shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Address
              </h3>
              <p className="text-foreground font-medium">UrbanSmile Dental Sydney</p>
              <p className="text-muted-foreground">
                Level 5, 123 George Street<br />
                Sydney NSW 2000
              </p>
            </div>

            {/* Contact Card */}
            <div className="p-6 bg-surface-elevated rounded-xl shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:0298765432"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (02) 9876 5432
                </a>
                <a
                  href="mailto:hello@smiledental.com.au"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hello@smiledental.com.au
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 bg-surface-elevated rounded-xl shadow-sm border border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Opening Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg">
                <Train className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">By Train</p>
                <p className="text-xs text-muted-foreground">
                  2 min walk from Wynyard Station
                </p>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <Car className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Parking</p>
                <p className="text-xs text-muted-foreground">
                  Secure parking available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
