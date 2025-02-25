
import { useState } from "react";
import { AgentSidebar } from "@/components/AgentSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAgentCreator, setShowAgentCreator] = useState(false);
  const [currentModel, setCurrentModel] = useState("gpt-4");
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
      <div className="flex-1 flex flex-col">
        <div className="border-b border-zinc-800 py-2 px-6 bg-[#1A1F2C]">
          <Select value={currentModel} onValueChange={setCurrentModel}>
            <SelectTrigger className="w-[180px] bg-zinc-800/50 border-zinc-700">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4">GPT-4</SelectItem>
              <SelectItem value="gemini-2">Gemini 2.0</SelectItem>
              <SelectItem value="claude-3">Claude 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ChatInterface
          onNewAgent={handleNewAgent}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Chat;
