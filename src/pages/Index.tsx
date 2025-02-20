
import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { AgentSidebar } from "@/components/AgentSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

interface Agent {
  id: string;
  name: string;
  description: string;
  type: "code" | "content" | "custom";
  capabilities: string[];
}

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAgentCreator, setShowAgentCreator] = useState(false);
  const { toast } = useToast();
  const [agents] = useState<Agent[]>([
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

  if (!isLoggedIn) {
    return (
      <>
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen flex bg-black text-white">
      <AgentSidebar
        agents={agents}
        onNewAgent={handleNewAgent}
        isOpen={isSidebarOpen}
      />
      <ChatInterface
        onNewAgent={handleNewAgent}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Toaster />
    </div>
  );
};

export default Index;
