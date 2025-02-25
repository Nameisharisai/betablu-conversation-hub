
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Bug, SendHorizontal, List, X, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CodingSpace = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState("claude-3");

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { role: "user", content }]);

      // Simulate AI response - replace with actual API call
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Here's a code example based on your request:\n```javascript\nconsole.log('Hello World');\n```",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#1A1F2C]">
      <header className="border-b border-zinc-800 py-4 px-6 flex items-center justify-between bg-[#1A1F2C]">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-white brand font-sans">BetaBlu Code Assistant</h1>
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

      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-8 space-y-6 px-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`px-4 py-6 ${
                message.role === "user" ? "bg-zinc-800/30" : "bg-transparent"
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
                    <p className="text-zinc-100 whitespace-pre-wrap">{message.content}</p>
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
                Ask me to write, explain, or debug code. I'm here to help!
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-[#1A1F2C]">
        <div className="max-w-4xl mx-auto p-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Describe the code you need..."
              className="flex-1 p-4 pr-12 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
  );
};

export default CodingSpace;
