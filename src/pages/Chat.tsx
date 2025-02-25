
import { useState } from "react";
import { AgentSidebar } from "@/components/AgentSidebar";
import { ChatInterface } from "@/components/ChatInterface";

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAgentCreator, setShowAgentCreator] = useState(false);
  const [agents] = useState([
    {
      id: "1",
      name: "Code Writer",
      description: "AI agent that writes and reviews code",
      type: "code" as const,
      capabilities: ["Write code", "Debug code", "Code review"]
    },
    {
      id: "2",
      name: "Content Creator",
      description: "Creates content for social media",
      type: "content" as const,
      capabilities: ["Write posts", "Generate hashtags", "Schedule content"]
    }
  ]);

  const handleNewAgent = () => {
    setShowAgentCreator(true);
  };

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
    </div>
  );
};

export default Chat;
