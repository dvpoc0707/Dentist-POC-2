import { ClinicConfig } from "./types";
import { defaultConfig } from "./default";

/**
 * Loads clinic configuration from environment variables or returns default
 */
export function loadConfig(): ClinicConfig {
  // Load from environment variables (recommended for Vercel)
  if (import.meta.env.VITE_CLINIC_CONFIG) {
    try {
      const parsed = JSON.parse(import.meta.env.VITE_CLINIC_CONFIG);
      return { ...defaultConfig, ...parsed }; // Merge with defaults
    } catch (e) {
      console.error("Failed to parse VITE_CLINIC_CONFIG", e);
    }
  }

  // Return default config
  return defaultConfig;
}

// Export the loaded config as a singleton
export const clinicConfig = loadConfig();

// Export types for use in components
export type { ClinicConfig, Service, Doctor, Testimonial } from "./types";
