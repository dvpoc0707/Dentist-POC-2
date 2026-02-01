import { Calendar, Phone, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-trust" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" />
      
      <div className="container-content relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated rounded-full shadow-sm mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-trust text-trust" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.9 Rating · 500+ Google Reviews
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Trusted Dentist in{" "}
              <span className="text-gradient-primary">Sydney CBD</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Experience gentle, modern dental care with a team dedicated to your smile. 
              Book online in seconds — no wait times, no hassle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="btn-cta text-base px-8 py-4 h-auto">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Button>
              <a href="tel:0298765432" className="btn-secondary text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call (02) 9876 5432
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>ADA Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Same-Day Appointments</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-10" />
              <div className="absolute inset-4 bg-surface-elevated rounded-2xl shadow-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=750&fit=crop&crop=faces"
                  alt="Modern dental clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-surface-elevated rounded-xl p-4 shadow-card animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Next Available</p>
                    <p className="text-xs text-muted-foreground">Today at 2:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-surface-elevated rounded-xl p-4 shadow-card animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
