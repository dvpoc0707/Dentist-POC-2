import { clinicConfig, ClinicConfig } from "@/config";

/**
 * Hook to access clinic configuration
 */
export function useClinicConfig(): ClinicConfig {
  return clinicConfig;
}
