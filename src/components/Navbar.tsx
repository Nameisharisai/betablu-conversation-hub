
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Settings, Code, Sun, Moon, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "./Logo";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = false; // Replace with actual auth state
  const { setTheme, theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/agent-builder", label: "IntelliAgent", icon: Settings },
    { href: "/coding-space", label: "Coding Space", icon: Code },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-zinc-600 dark:text-zinc-400"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
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
            <div className="hidden md:flex items-center gap-2">
              <Link to="/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pb-4">
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-2 p-2 rounded-md ${
                  location.pathname === item.href
                    ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
            {!isLoggedIn && (
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
