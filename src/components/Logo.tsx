import { useClinicConfig } from "@/hooks/useClinicConfig";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  const config = useClinicConfig();
  // Logo image path - can be overridden in config
  const logoPath = config.clinic.logo?.full || "/Dental-Logo-Design.jpg";

  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
        <img 
          src={logoPath} 
          alt={`${config.clinic.name} logo`}
          className="w-full h-full object-contain"
        />
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
