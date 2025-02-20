
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      toast({
        title: `Welcome ${isSignUp ? "to" : "back to"} BetaBlu`,
        description: "Build and manage your AI agents.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="border-b border-zinc-800 py-4 px-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white brand font-sans">BetaBlu</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white"
              onClick={() => setIsSignUp(false)}
            >
              Log in
            </Button>
            <Button
              className="bg-white text-black hover:bg-zinc-200"
              onClick={() => setIsSignUp(true)}
            >
              Sign up
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Build Your Own AI Agents
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
              Create custom AI agents for code, content, and more. Automate your workflow with intelligent assistants tailored to your needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 text-lg px-8"
              onClick={() => setIsSignUp(true)}
            >
              Get started
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-zinc-900 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-semibold text-white mb-3">Code Generation</h3>
              <p className="text-zinc-400">Create AI agents that write, review, and debug code across multiple languages.</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
              <p className="text-zinc-400">Generate engaging content for social media, blogs, and marketing campaigns.</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Agents</h3>
              <p className="text-zinc-400">Build specialized AI agents tailored to your specific business needs.</p>
            </div>
          </div>

          {/* Auth Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
              <div className="space-y-4 rounded-lg bg-zinc-900 p-8 shadow-lg ring-1 ring-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {isSignUp ? "Create your account" : "Welcome back"}
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    placeholder="Enter your password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
                >
                  {isSignUp ? "Sign up" : "Sign in"} to BetaBlu
                </Button>

                <p className="text-sm text-center text-zinc-400 mt-4">
                  {isSignUp ? "Already have an account? " : "Don't have an account? "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {isSignUp ? "Sign in" : "Sign up"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-400">
          <p>© 2024 BetaBlu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
