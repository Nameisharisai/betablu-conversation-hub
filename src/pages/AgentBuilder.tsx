
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AgentBuilder = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"code" | "content" | "custom">("code");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agent Created",
      description: "Your custom AI agent has been created successfully.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Create Custom AI Agent</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 rounded-lg bg-zinc-900 p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Agent Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
              placeholder="Enter agent name"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-300">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
              placeholder="Describe what your agent does"
              rows={4}
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-zinc-300">
              Agent Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as "code" | "content" | "custom")}
              className="mt-2 block w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
            >
              <option value="code">Code Assistant</option>
              <option value="content">Content Creator</option>
              <option value="custom">Custom Agent</option>
            </select>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Agent
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AgentBuilder;
