
import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto p-4 bg-white border-t border-betablu-200"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-4 pr-12 rounded-lg border border-betablu-200 focus:outline-none focus:ring-2 focus:ring-betablu-500 focus:border-transparent transition-all"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="absolute right-2 p-2 text-betablu-500 hover:text-betablu-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <SendHorizontal className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
