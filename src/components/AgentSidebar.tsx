
import { Bot, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Agent {
  id: string;
  name: string;
  description: string;
  type: "code" | "content" | "custom";
  capabilities: string[];
}

interface AgentSidebarProps {
  agents: Agent[];
  onNewAgent: () => void;
  isOpen: boolean;
}

export const AgentSidebar = ({ agents, onNewAgent, isOpen }: AgentSidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-zinc-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static`}
    >
      <div className="p-4 space-y-4">
        <Button
          onClick={onNewAgent}
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
  );
};
