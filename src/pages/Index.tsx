
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
    }
  };

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { role: "user", content }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I am a simulated response. This is a placeholder message that will be replaced with actual AI responses once integrated with a backend service.",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="border-b border-border/10 py-4 px-6 animate-fade-down bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-foreground brand font-sans">Betablu</h1>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-8 animate-fade-up">
            <div className="text-center space-y-4 animate-float">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Welcome to Betablu
              </h2>
              <p className="text-sm text-muted-foreground">
                Sign in to start your conversation
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="space-y-4 rounded-lg bg-card p-8 shadow-lg ring-1 ring-border/5 backdrop-blur-sm">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition-colors"
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:text-primary/90 underline-offset-4 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/10 py-4 px-6 animate-fade-down bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-foreground brand font-sans">Betablu</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-8 space-y-6">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
              animate={index === messages.length - 1}
            />
          ))}
          {messages.length === 0 && (
            <div className="text-center py-12 animate-fade-up">
              <h2 className="text-2xl font-medium text-foreground mb-2">
                Welcome to Betablu
              </h2>
              <p className="text-muted-foreground">
                Start a conversation by typing a message below.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border/10 bg-card">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </footer>
    </div>
  );
};

export default Index;
