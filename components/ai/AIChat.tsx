"use client";

import { useState, useRef, useEffect } from "react";
import { useFocusMode } from "@/contexts/FocusModeContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const { isFocusMode } = useFocusMode();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI tutor. Ask me anything about the content you're reading, and I'll help you understand it better.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // TODO: Replace with actual AI API call
    // For now, simulate a response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I understand you're asking about: " +
          userMessage.content +
          "\n\nThis is a placeholder response. In the future, this will connect to an AI API to provide real-time assistance with the content you're reading.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isFocusMode) {
    return null;
  }

  return (
    <aside
      className="hidden lg:block bg-[var(--background)] border-l border-[rgba(55,53,47,0.09)]"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-[rgba(55,53,47,0.09)] bg-[var(--sidebar-bg)] flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-[var(--foreground)] tracking-tight">
              AI Tutor
            </h2>
            <p className="text-[11px] text-[var(--foreground)] opacity-50 font-medium">
              Ask questions about the content
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="overflow-y-auto p-4 space-y-6 min-h-0 bg-[var(--background)] scrollbar-thin">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] rounded-lg px-4 py-2 text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-[#37352f] text-white dark:bg-gray-100 dark:text-[#191919] shadow-sm"
                  : "bg-[var(--sidebar-bg)] text-[var(--foreground)] border border-[rgba(55,53,47,0.05)]"
              }`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
              <div
                className={`text-[10px] mt-1.5 font-medium opacity-40 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[var(--sidebar-bg)] rounded-lg px-4 py-3 border border-[rgba(55,53,47,0.05)]">
              <div className="flex space-x-1.5">
                <div className="w-1.5 h-1.5 bg-[var(--foreground)] opacity-20 rounded-full animate-bounce"></div>
                <div
                  className="w-1.5 h-1.5 bg-[var(--foreground)] opacity-20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-[var(--foreground)] opacity-20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-[rgba(55,53,47,0.09)] bg-[var(--sidebar-bg)]">
        <div className="relative group">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask AI anything..."
            rows={2}
            className="w-full px-4 py-3 bg-[var(--background)] border border-[rgba(55,53,47,0.12)] rounded-lg text-[var(--foreground)] text-sm placeholder-[var(--foreground)] placeholder-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#37352f]/10 dark:focus:ring-white/10 resize-none shadow-sm transition-all duration-200"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`p-1.5 rounded-md transition-all duration-200 ${
                !input.trim() || isLoading
                  ? "text-[var(--foreground)] opacity-20"
                  : "text-white bg-[#37352f] dark:bg-gray-100 dark:text-[#191919] hover:opacity-90 shadow-sm"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[10px] text-[var(--foreground)] opacity-30 mt-2 text-center font-medium">
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </aside>
  );
}
