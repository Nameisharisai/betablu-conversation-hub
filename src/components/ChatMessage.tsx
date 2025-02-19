
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  animate?: boolean;
}

export const ChatMessage = ({ content, role, animate = true }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "px-4 py-6",
        animate && "animate-fade-up",
        isUser ? "bg-zinc-900" : "bg-black"
      )}
    >
      <div className="flex items-start gap-4 max-w-3xl mx-auto">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            isUser
              ? "bg-zinc-700 text-white"
              : "bg-blue-600 text-white"
          )}
        >
          {isUser ? "U" : "B"}
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-sm font-medium text-zinc-300">
            {isUser ? "You" : "Betablu"}
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-100">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
