
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">B</div>
      </div>
      <span className="font-bold text-xl tracking-tight dark:text-white text-black">BetaBlu</span>
    </div>
  );
};
