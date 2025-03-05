
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { List, X, Plus, Settings, FileText, Brain, BarChart2, Image, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  onNewAgent: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const ChatInterface = ({ onNewAgent, onToggleSidebar, isSidebarOpen }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { role: "user", content }]);

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

  const features = [
    { icon: FileText, label: "Research", onClick: () => {} },
    { icon: Brain, label: "Brainstorm", onClick: () => {} },
    { icon: BarChart2, label: "Analyze Data", onClick: () => {} },
    { icon: Image, label: "Create images", onClick: () => {} },
    { icon: Code, label: "Code", onClick: () => {} },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#000000]">
      <header className="border-b border-zinc-800 py-4 px-6 flex items-center justify-between bg-[#1A1A1A]">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <List size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-white brand font-sans">BetaBlu</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={onNewAgent}
            className="bg-blue-600 hover:bg-blue-700 text-white hidden lg:flex items-center gap-2 rounded-[24px]"
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

      <main className="flex-1 overflow-auto">
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
            <div className="text-center py-12 animate-fade-up space-y-8">
              <h2 className="text-3xl font-medium text-white mb-2">
                Welcome to BetaBlu AI Platform
              </h2>
              <p className="text-zinc-400 text-lg max-w-lg mx-auto mb-8">
                How can I help you today?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature) => (
                  <Button
                    key={feature.label}
                    variant="outline"
                    className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50 text-zinc-300 rounded-[24px]"
                    onClick={feature.onClick}
                  >
                    <feature.icon className="w-5 h-5 mr-2" />
                    {feature.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSend={handleSendMessage} disabled={isLoading} />
        </div>
      </footer>
    </div>
  );
};
