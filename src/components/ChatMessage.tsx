
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
        "w-full max-w-4xl mx-auto p-4",
        animate && "animate-fade-up",
        isUser ? "bg-white" : "bg-betablu-50"
      )}
    >
      <div className="flex items-start gap-4 max-w-3xl mx-auto">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
            isUser
              ? "bg-betablu-600 text-white"
              : "bg-betablu-200 text-betablu-700"
          )}
        >
          {isUser ? "U" : "B"}
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-sm font-medium text-betablu-900">
            {isUser ? "You" : "Betablu"}
          </p>
          <div className="prose prose-slate max-w-none">
            <p className="text-betablu-700">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
