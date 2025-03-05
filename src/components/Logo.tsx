
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-9 h-9 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 bg-black opacity-10 rounded-full"></div>
        <div className="z-10 font-bold text-xl text-white tracking-tight">β</div>
      </div>
      <span className="font-bold text-xl tracking-tight dark:text-white text-black">BetaBlu</span>
    </div>
  );
};
