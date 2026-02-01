import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
