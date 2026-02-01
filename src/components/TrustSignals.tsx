import { Shield, Award, Users, Clock } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      value: "ADA",
      label: "Accredited Clinic",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Patients",
    },
    {
      icon: Clock,
      value: "Same Day",
      label: "Appointments Available",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-primary">
      <div className="container-content px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <signal.icon className="w-8 h-8 text-primary-foreground/80 mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {signal.value}
              </p>
              <p className="text-sm text-primary-foreground/80">{signal.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
