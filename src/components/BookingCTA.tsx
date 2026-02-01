import { Calendar, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingCTA = () => {
  const benefits = [
    "Takes less than 30 seconds",
    "Instant confirmation",
    "Reminder via SMS & email",
    "Easy rescheduling",
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Ready for a Healthier Smile?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Book your appointment online in seconds. New patients welcome — 
              we'll take care of the rest.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-trust" />
                  <span className="text-sm text-primary-foreground/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta bg-accent hover:bg-accent/90 text-base px-8 py-4 h-auto">
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </Button>
              <a
                href="tel:0298765432"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (02) 9876 5432
              </a>
            </div>
          </div>

          {/* Booking Preview Card */}
          <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Book Your Visit
            </h3>

            {/* Time Slots Preview */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                Next available appointments:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["9:00 AM", "11:30 AM", "2:00 PM"].map((time, index) => (
                  <button
                    key={index}
                    className="py-2 px-3 text-sm font-medium text-primary bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Display */}
            <div className="flex items-center gap-3 p-4 bg-surface rounded-lg mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Today, Feb 1</p>
                <p className="text-sm text-muted-foreground">
                  Multiple slots available
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Opening Hours</p>
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
