import { Tooth } from "lucide-react";
import { useClinicConfig } from "@/hooks/useClinicConfig";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  const config = useClinicConfig();

  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-sm">
        <Tooth className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span className="font-display font-bold text-lg text-foreground">
            {config.clinic.name}
          </span>
          <span className="block text-xs text-muted-foreground -mt-0.5">
            {config.clinic.tagline}
          </span>
        </div>
      )}
    </a>
  );
};

export default Logo;
