import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";
import { MessageSquarePlus, List, X, Plus, Settings, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Agent {
  id: string;
  name: string;
  description: string;
  type: "code" | "content" | "custom";
  capabilities: string[];
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAgentCreator, setShowAgentCreator] = useState(false);
  const { toast } = useToast();
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: "1",
      name: "Code Writer",
      description: "AI agent that writes and reviews code",
      type: "code",
      capabilities: ["Write code", "Debug code", "Code review"]
    },
    {
      id: "2",
      name: "Content Creator",
      description: "Creates content for social media",
      type: "content",
      capabilities: ["Write posts", "Generate hashtags", "Schedule content"]
    }
  ]);

  const handleNewAgent = () => {
    setShowAgentCreator(true);
    toast({
      title: "Create New Agent",
      description: "Configure your custom AI agent.",
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      toast({
        title: "Welcome to BetaBlu",
        description: "Build and manage your AI agents.",
      });
    }
  };

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { role: "user", content }]);

      // Simulated AI response - will be replaced with actual API calls
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I am a BetaBlu agent. I can help you with coding, content creation, and custom tasks. What would you like me to do?",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        <header className="border-b border-zinc-800 py-4 px-6 animate-fade-down">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-white brand font-sans">BetaBlu</h1>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-8 animate-fade-up">
            <div className="text-center space-y-4 animate-float">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Welcome to BetaBlu
              </h2>
              <p className="text-sm text-zinc-400">
                Build your own AI agents for code, content, and more
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="space-y-4 rounded-lg bg-zinc-900 p-8 shadow-lg ring-1 ring-zinc-800">
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
                  Sign in to BetaBlu
                </Button>
              </div>
            </form>
          </div>
        </main>

        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-black text-white">
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="p-4 space-y-4">
          <Button
            onClick={handleNewAgent}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-2 rounded-md transition-colors"
          >
            <Plus size={20} />
            Create New Agent
          </Button>
          
          <div className="space-y-2">
            {agents.map((agent) => (
              <button
                key={agent.id}
                className="w-full text-left px-4 py-3 rounded-md hover:bg-zinc-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Bot className="text-zinc-400 group-hover:text-white" size={18} />
                  <div>
                    <p className="text-sm font-medium text-zinc-200">{agent.name}</p>
                    <p className="text-xs text-zinc-500">{agent.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="border-b border-zinc-800 py-4 px-6 flex items-center justify-between bg-black">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-zinc-400 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <List size={24} />}
            </button>
            <h1 className="text-xl font-semibold text-white brand font-sans">BetaBlu</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={handleNewAgent}
              className="bg-blue-600 hover:bg-blue-700 text-white hidden lg:flex items-center gap-2"
            >
              <Plus size={20} />
              Create Agent
            </Button>
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white"
            >
              <Settings size={20} />
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-black">
          <div className="max-w-4xl mx-auto py-8 space-y-6 px-4">
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
                <h2 className="text-2xl font-medium text-white mb-2">
                  Welcome to BetaBlu AI Platform
                </h2>
                <p className="text-zinc-400 max-w-lg mx-auto">
                  Create and customize AI agents for your specific needs. Start by creating a new agent or chatting with existing ones.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="border-t border-zinc-800 bg-black">
          <div className="max-w-4xl mx-auto">
            <ChatInput onSend={handleSendMessage} disabled={isLoading} />
          </div>
        </footer>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
