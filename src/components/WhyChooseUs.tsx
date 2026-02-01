import { Heart, Zap, DollarSign, CalendarCheck } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Patient-First Care",
      description:
        "Your comfort is our priority. We take time to listen, explain, and ensure you feel at ease throughout your visit.",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description:
        "State-of-the-art equipment including digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "No surprise bills. We provide upfront costs and work with all major health funds to maximize your benefits.",
    },
    {
      icon: CalendarCheck,
      title: "Flexible Scheduling",
      description:
        "Early morning, lunch, and evening appointments available. Book online 24/7 or call for same-day availability.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Dental Care That Puts{" "}
              <span className="text-gradient-primary">You First</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For over 15 years, we've been helping Sydney families achieve 
              healthy, beautiful smiles. Our patient-centered approach means 
              you're always in good hands.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
                  alt="Dentist with patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop"
                  alt="Modern dental equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop"
                  alt="Happy patient smiling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop"
                  alt="Dental clinic reception"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
