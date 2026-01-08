"use client";

import { useState, useEffect, useRef } from "react";
import { useAIChat } from "@/contexts/AIChatContext";
import { useFocusMode } from "@/contexts/FocusModeContext";

export default function TextSelectionHandler() {
  const { sendMessage } = useAIChat();
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const [selection, setSelection] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Debug: Log when component mounts
  useEffect(() => {
    console.log("TextSelectionHandler mounted");
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseUp = () => {
      // Small delay to ensure selection is complete
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
          setSelection(null);
          return;
        }

        const selectedText = selection.toString().trim();
        // Only show button if selection is meaningful (at least 3 characters)
        if (!selectedText || selectedText.length < 3) {
          setSelection(null);
          return;
        }

        // Debug log
        console.log("Text selected:", selectedText);

        // Get the range and its end position
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Position the button at the end of the selection
        // Use viewport coordinates
        const x = rect.right;
        const y = rect.bottom;

        // Ensure button stays within viewport
        const buttonWidth = 100; // Approximate button width
        const buttonHeight = 32; // Approximate button height
        const padding = 8;

        let finalX = x + padding;
        let finalY = y + padding;

        // Adjust if button would go off right edge
        if (finalX + buttonWidth > window.innerWidth) {
          finalX = window.innerWidth - buttonWidth - padding;
        }

        // Adjust if button would go off bottom edge
        if (finalY + buttonHeight > window.innerHeight) {
          finalY = rect.top - buttonHeight - padding;
        }

        // Ensure button doesn't go off top edge
        if (finalY < 0) {
          finalY = rect.bottom + padding;
        }

        setSelection({
          text: selectedText,
          x: finalX,
          y: finalY,
        });
      }, 50);
    };

    const handleClick = (e: MouseEvent) => {
      // Don't clear if clicking on the button itself
      if (buttonRef.current?.contains(e.target as Node)) {
        return;
      }
      
      // Clear selection when clicking elsewhere
      setTimeout(() => {
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length === 0) {
          setSelection(null);
        }
      }, 200);
    };

    const handleSelectionChange = () => {
      // Only clear if selection is actually empty
      const selection = window.getSelection();
      if (!selection || selection.toString().trim().length === 0) {
        // Don't clear immediately, wait a bit to avoid race conditions
        setTimeout(() => {
          const currentSelection = window.getSelection();
          if (!currentSelection || currentSelection.toString().trim().length === 0) {
            setSelection(null);
          }
        }, 100);
      }
    };

    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("click", handleClick, true);
    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mouseup", handleMouseUp, true);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const handleAskAI = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!selection) return;

    const selectedText = selection.text;

    // Clear the selection first
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
    }
    setSelection(null);

    // Open focus mode if not already open
    if (!isFocusMode) {
      toggleFocusMode();
      // Wait a bit for the chat to render, then send message
      setTimeout(() => {
        sendMessage(selectedText);
      }, 300);
    } else {
      // Send immediately if focus mode is already open
      sendMessage(selectedText);
    }
  };

  if (!selection) return null;

  return (
    <button
      ref={buttonRef}
      onClick={handleAskAI}
      className="fixed z-[9999] px-3 py-1.5 bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d] rounded-md text-xs font-semibold shadow-lg border border-[#d9730d]/20 hover:opacity-90 transition-all duration-200 flex items-center gap-1.5 pointer-events-auto cursor-pointer"
      style={{
        left: `${selection.x}px`,
        top: `${selection.y}px`,
      }}
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      Ask AI
    </button>
  );
}
