
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Bug, Code, Database, Github, SendHorizontal, List, X, Settings, ImageIcon, VideoIcon, LayoutPanelLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CodingSpace = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState("claude-3");
  const [activeTab, setActiveTab] = useState("code");
  const [codePreview, setCodePreview] = useState("");
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { role: "user", content }]);

      // Simulate AI response - replace with actual API call
      setTimeout(() => {
        const response = "Here's a code example based on your request:\n```javascript\nconst greeting = () => {\n  console.log('Hello World');\n};\n\ngreeting();\n```";
        
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: response,
          },
        ]);
        
        // Extract code for preview
        const codeMatch = response.match(/```(?:javascript|tsx|jsx)?([\s\S]*?)```/);
        if (codeMatch && codeMatch[1]) {
          setCodePreview(codeMatch[1].trim());
        }
        
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to process your request",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const runCode = () => {
    toast({
      title: "Running Code",
      description: "Executing your code in the sandbox environment",
    });
  };

  const debugCode = () => {
    toast({
      title: "Debugging",
      description: "Analyzing your code for issues",
    });
  };

  const saveToGithub = () => {
    toast({
      title: "GitHub Integration",
      description: "Code saved to your GitHub repository",
    });
  };

  return (
    <div className="flex-1 flex h-screen bg-[#000000] text-white">
      {/* Sidebar */}
      <div className="w-16 md:w-64 border-r border-zinc-800 bg-[#0F0F0F] flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white truncate hidden md:block">Project Files</h2>
        </div>
        <div className="flex-1 overflow-auto p-2">
          <nav className="space-y-1">
            {[
              { icon: Code, label: "Code Generation" },
              { icon: ImageIcon, label: "Image Generation" },
              { icon: VideoIcon, label: "Video Generation" },
              { icon: Database, label: "Database" },
              { icon: Github, label: "GitHub" }
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start gap-3 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                onClick={() => setActiveTab(item.label.toLowerCase().split(' ')[0])}
              >
                <item.icon size={20} />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="border-b border-zinc-800 py-4 px-6 flex items-center justify-between bg-[#0F0F0F]">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white font-sans">BetaBlu Code Assistant</h1>
          </div>
          <div className="flex items-center gap-4">
            <Select value={currentModel} onValueChange={setCurrentModel}>
              <SelectTrigger className="w-[180px] bg-zinc-800/50 border-zinc-700">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="claude-3">Claude 3 Sonnet</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white"
            >
              <Settings size={20} />
            </Button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Chat panel */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`px-4 py-6 mb-4 rounded-[24px] ${
                    message.role === "user" ? "bg-[#2D2D2A]" : "bg-[#1A1A1A]"
                  } animate-fade-up`}
                >
                  <div className="flex items-start gap-4 max-w-3xl mx-auto">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        message.role === "user"
                          ? "bg-zinc-700 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {message.role === "user" ? "U" : "B"}
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-medium text-zinc-300">
                        {message.role === "user" ? "You" : "BetaBlu"}
                      </p>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-white whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-center py-12 animate-fade-up space-y-8">
                  <h2 className="text-3xl font-medium text-white mb-2">
                    Welcome to BetaBlu Code Assistant
                  </h2>
                  <p className="text-zinc-400 text-lg max-w-lg mx-auto mb-8">
                    Ask me to write, explain, or debug code. I can help with various programming tasks!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {[
                      { icon: Code, label: "Generate Code", desc: "Create custom code solutions" },
                      { icon: Bug, label: "Debug Code", desc: "Find and fix issues in your code" },
                      { icon: ImageIcon, label: "Create Images", desc: "Generate AI images from text" },
                      { icon: VideoIcon, label: "Create Videos", desc: "Generate video content with AI" },
                      { icon: Database, label: "Database", desc: "Query and manage your data" },
                      { icon: Github, label: "GitHub", desc: "Integrate with your repositories" }
                    ].map((item, index) => (
                      <div key={index} className="bg-zinc-800/30 p-4 rounded-[24px] hover:bg-zinc-800/60 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="text-blue-500" size={20} />
                          <h3 className="font-medium text-white">{item.label}</h3>
                        </div>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <footer className="border-t border-zinc-800 bg-[#0F0F0F] p-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Describe the code you need or upload a file..."
                    className="flex-1 p-4 pr-12 rounded-[24px] bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                    disabled={isLoading}
                  />
                  <button
                    className="absolute right-2 p-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={isLoading}
                    onClick={() => {
                      const input = document.querySelector("input");
                      if (input && input.value) {
                        handleSendMessage(input.value);
                        input.value = "";
                      }
                    }}
                  >
                    <SendHorizontal className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </footer>
          </div>

          {/* Preview panel (conditionally rendered) */}
          {codePreview && (
            <div className="w-1/2 border-l border-zinc-800 bg-[#0F0F0F] flex flex-col">
              <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
                <h2 className="font-medium text-white">Preview</h2>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={runCode}>
                    <Play size={16} className="mr-1" /> Run
                  </Button>
                  <Button size="sm" variant="ghost" onClick={debugCode}>
                    <Bug size={16} className="mr-1" /> Debug
                  </Button>
                  <Button size="sm" variant="ghost" onClick={saveToGithub}>
                    <Github size={16} className="mr-1" /> Save
                  </Button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4 bg-[#1A1A1A] font-mono text-sm">
                <pre className="text-zinc-200">{codePreview}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingSpace;
