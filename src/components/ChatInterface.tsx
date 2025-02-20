
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { List, X, Plus, Settings } from "lucide-react";
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

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <header className="border-b border-zinc-800 py-4 px-6 flex items-center justify-between bg-black">
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
  );
};
