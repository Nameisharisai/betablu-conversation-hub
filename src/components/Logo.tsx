
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/lovable-uploads/f7da710f-b48d-4f38-aba1-aef639f29319.png"
        alt="BetaBlu"
        className="h-8 w-auto dark:brightness-100 brightness-0"
      />
    </div>
  );
};
