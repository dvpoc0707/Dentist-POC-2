import { ClinicConfig } from "./types";

export const defaultConfig: ClinicConfig = {
  clinic: {
    name: "UrbanSmile Dental",
    tagline: "Sydney CBD",
    location: "Sydney CBD",
    logo: {
      full: "/Dental-Logo-Design.jpg", // Path to logo image in public folder
      initial: "U",
    },
  },
  contact: {
    phone: "(02) 9876 5432",
    email: "info@smiledental.com",
    address: {
      street: "123 Dental Street",
      city: "Sydney",
      state: "NSW",
      zip: "2000",
      country: "Australia",
    },
    hours: {
      weekdays: "Mon-Fri: 9AM - 6PM",
      saturday: "Saturday: 9AM - 3PM",
      sunday: "Sunday: Closed",
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
  },
  services: [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our cosmetic treatments",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions",
    },
  ],
  content: {
    hero: {
      title: "Your Smile, Our Priority",
      subtitle: "Expert dental care in the heart of Sydney",
    },
    about: {
      title: "About Our Practice",
      description: "We provide comprehensive dental care with a focus on patient comfort and satisfaction.",
      features: [
        "Experienced dental team",
        "Modern equipment",
        "Comfortable environment",
        "Flexible payment options",
      ],
    },
  },
  testimonials: [
    {
      id: 1,
      name: "John Smith",
      location: "Sydney, NSW",
      rating: 5,
      text: "Excellent service and very professional staff. Highly recommend!",
      treatment: "General Check-up",
    },
  ],
  beforeAfter: [
    {
      id: 1,
      treatment: "Teeth Whitening",
      duration: "1 Session",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1581585828929-ebc61a190102?w=600&h=400&fit=crop",
      description: "Professional whitening treatment achieving 8 shades brighter in just one visit.",
    },
    {
      id: 2,
      treatment: "Dental Veneers",
      duration: "2 Weeks",
      beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
      description: "Complete smile makeover with custom porcelain veneers for a natural, beautiful result.",
    },
    {
      id: 3,
      treatment: "Invisalign",
      duration: "6 Months",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
      description: "Invisible aligners straightened teeth discreetly, creating a perfectly aligned smile.",
    },
    {
      id: 4,
      treatment: "Dental Implants",
      duration: "3 Months",
      beforeImage: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      description: "Single tooth implant restored full function and aesthetics with a natural-looking crown.",
    },
  ],
};
