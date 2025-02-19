
import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      // Add user message
      setMessages((prev) => [...prev, { role: "user", content }]);

      // Simulate AI response (replace with actual API call later)
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

  return (
    <div className="min-h-screen flex flex-col bg-betablu-100">
      <header className="bg-white border-b border-betablu-200 py-4 px-6 animate-fade-down">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-betablu-900">Betablu</h1>
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
              <h2 className="text-2xl font-medium text-betablu-900 mb-2">
                Welcome to Betablu
              </h2>
              <p className="text-betablu-600">
                Start a conversation by typing a message below.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-betablu-200">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </footer>
    </div>
  );
};

export default Index;
