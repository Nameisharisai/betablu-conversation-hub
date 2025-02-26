
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Settings, Code, UserCircle, Newspaper, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "./Logo";
import { useTheme } from "@/components/theme-provider";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLoggedIn = false; // Replace with actual auth state
  const { setTheme, theme } = useTheme();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/agent-builder", label: "IntelliAgent", icon: Settings },
    { href: "/coding-space", label: "Coding Space", icon: Code },
    { href: "/blog", label: "Blog", icon: Newspaper },
  ];

  return (
    <header className="border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 py-4 px-6 sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.href
                  ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-800"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-600 dark:text-zinc-400"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                Log in
              </Button>
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200">
                Sign up
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
