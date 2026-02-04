import { ClinicConfig } from "./types";

export const defaultConfig: ClinicConfig = {
  clinic: {
    name: "UrbanSmile Dental",
    tagline: "Sydney CBD",
    location: "Sydney CBD",
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
};
