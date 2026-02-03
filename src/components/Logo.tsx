import { Tooth } from "lucide-react";

interface LogoProps {
  clinicName?: string;
  tagline?: string;
  className?: string;
  showText?: boolean;
}

const Logo = ({ 
  clinicName = "Smile Dental", 
  tagline = "Sydney CBD",
  className = "", 
  showText = true 
}: LogoProps) => {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-sm">
        <Tooth className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span className="font-display font-bold text-lg text-foreground">
            {clinicName}
          </span>
          <span className="block text-xs text-muted-foreground -mt-0.5">
            {tagline}
          </span>
        </div>
      )}
    </a>
  );
};

export default Logo;
