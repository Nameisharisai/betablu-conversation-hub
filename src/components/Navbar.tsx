
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare, Settings, Code } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/agent-builder", label: "Agent Builder", icon: Settings },
    { href: "/coding-space", label: "Coding Space", icon: Code },
  ];

  return (
    <header className="border-b border-zinc-800 py-4 px-6 sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white brand font-sans">
          BetaBlu
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.href
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>

        {isHome && (
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-white">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200">
              Sign up
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
