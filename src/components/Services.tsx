import { 
  Stethoscope, 
  Sparkles, 
  CircleDot, 
  AlertCircle, 
  Smile,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive check-ups, cleanings, and preventive care to keep your smile healthy.",
      link: "/services/general-dentistry",
    },
    {
      icon: Sparkles,
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      link: "/services/teeth-whitening",
    },
    {
      icon: CircleDot,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural.",
      link: "/services/dental-implants",
    },
    {
      icon: AlertCircle,
      title: "Emergency Dentist",
      description: "Same-day emergency appointments for urgent dental issues and pain relief.",
      link: "/services/emergency-dentist",
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, and smile makeovers to enhance your natural beauty.",
      link: "/services/cosmetic-dentistry",
    },
  ];

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Complete Dental Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to advanced treatments, we provide comprehensive 
            dental services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="card-service group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}

          {/* CTA Card */}
          <div className="card-service bg-gradient-hero text-primary-foreground flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold mb-2">
              Not Sure What You Need?
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Book a consultation and we'll create a personalized treatment plan.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-surface-elevated text-foreground font-semibold rounded-lg hover:bg-white transition-colors">
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
