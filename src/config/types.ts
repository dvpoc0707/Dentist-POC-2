// Configuration types for clinic-convert dental clinic websites

export interface ClinicConfig {
  // Basic Information
  clinic: {
    name: string;
    tagline: string;
    location?: string;
    logo?: {
      full?: string; // Logo image URL/path
      initial?: string; // Fallback initial
    };
  };

  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country?: string;
    };
    hours: {
      weekdays: string;
      saturday?: string;
      sunday?: string;
    };
  };

  // Social Media
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };

  // Services
  services: Service[];

  // Team/Doctors
  doctors?: Doctor[];

  // Content
  content: {
    hero: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      description: string;
      features: string[];
    };
  };

  // Testimonials
  testimonials: Testimonial[];

  // SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Doctor {
  name: string;
  role: string;
  credentials: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment?: string;
}
