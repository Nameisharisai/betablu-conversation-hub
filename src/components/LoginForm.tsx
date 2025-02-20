
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Brain, Code, Globe, Database, Shield } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                India's First Advanced <br />AI Research Platform
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                Building the next generation of AI technology with a focus on general intelligence and specialized coding capabilities.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 text-lg px-8"
                onClick={() => setIsSignUp(true)}
              >
                Join the Revolution
              </Button>
            </div>
          </div>

          {/* Vision Section */}
          <div className="py-20 border-t border-zinc-800">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Building India's Future in AI
                </h3>
                <p className="text-zinc-400 mb-6">
                  At BetaBlu, we're pioneering the development of advanced artificial intelligence systems right here in India. Our mission is to create AI that's not just powerful, but also understands and adapts to local contexts and needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">General Intelligence</h4>
                      <p className="text-zinc-500">Developing AI systems that can understand and learn like humans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Advanced Code Generation</h4>
                      <p className="text-zinc-500">Creating AI that writes, reviews, and optimizes code at an expert level</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/photo-1488590528505-98d2b5aba04b"
                  alt="Advanced Technology"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="py-20 border-t border-zinc-800">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Building the Future of AI
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 animate-fade-up">
                <Globe className="text-blue-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-zinc-400">Leading AI research and development from India for the world.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <Database className="text-blue-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold text-white mb-3">Custom LLMs</h3>
                <p className="text-zinc-400">Building specialized language models optimized for specific domains.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <Shield className="text-blue-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
                <p className="text-zinc-400">Enterprise-grade security with data sovereignty at its core.</p>
              </div>
            </div>
          </div>

          {/* Research Focus */}
          <div className="py-20 border-t border-zinc-800">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img
                  src="/photo-1531297484001-80022131f5a1"
                  alt="AI Research"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Research Excellence
                </h3>
                <p className="text-zinc-400 mb-6">
                  Our team of researchers and engineers are pushing the boundaries of what's possible in AI. From fundamental research in machine learning to practical applications in software development, we're building the next generation of AI technology.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-center gap-2">
                    <Rocket className="text-blue-500" />
                    Advanced neural architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="text-blue-500" />
                    Cognitive computing research
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="text-blue-500" />
                    Code synthesis and optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Auth Form */}
          <div className="max-w-md mx-auto py-20 border-t border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
              <div className="space-y-4 rounded-lg bg-zinc-900 p-8 shadow-lg ring-1 ring-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {isSignUp ? "Join BetaBlu" : "Welcome back"}
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

      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">BetaBlu</h3>
              <p className="text-zinc-400 text-sm">Building the future of AI technology from India.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Features</li>
                <li>Research</li>
                <li>API</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400 text-sm">
            <p>© 2024 BetaBlu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
