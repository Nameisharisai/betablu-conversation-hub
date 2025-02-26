
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/lovable-uploads/cee91976-d01a-4d4e-be80-4fedf8cf9974.png"
        alt="BetaBlu"
        className="h-8 w-auto dark:brightness-100 brightness-0"
      />
    </div>
  );
};
