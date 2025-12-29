"use client";

import { useAudibleMode } from "@/contexts/AudibleModeContext";
import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const { isAudibleMode, closeAudibleMode } = useAudibleMode();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const playerRef = useRef<HTMLDivElement>(null);

  // Center the player on first open
  useEffect(() => {
    if (isAudibleMode && position.x === 0 && position.y === 0) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, [isAudibleMode, position]);

  // Handle dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current && e.target instanceof HTMLElement) {
      if (
        e.target.closest("button") ||
        e.target.closest("input") ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "INPUT"
      ) {
        return;
      }

      const rect = playerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setDragOffset({
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      });
      setIsDragging(true);
    }
  };

  if (!isAudibleMode) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const handleSkip = (seconds: number) => {
    setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + seconds)));
  };

  const transformValue = "translate(-50%, -50%)";

  return (
    <div
      ref={playerRef}
      className="fixed z-50 bg-white dark:bg-[#191919] rounded-xl shadow-2xl w-[380px] max-w-[90vw] overflow-hidden border border-[rgba(55,53,47,0.09)] dark:border-gray-800"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: transformValue,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      {/* Notion-like Window Header */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-[var(--sidebar-bg)] border-b border-[rgba(55,53,47,0.06)] dark:border-gray-800 select-none"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-[11px] font-bold text-[var(--foreground)] opacity-40 uppercase tracking-widest ml-1">
            Audible Player
          </span>
        </div>
        <button
          onClick={closeAudibleMode}
          className="p-1 hover:bg-[var(--sidebar-hover)] rounded text-[var(--foreground)] opacity-40 hover:opacity-100 transition-all"
          aria-label="Close player"
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsDragging(false);
          }}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Player Content */}
      <div className="p-8">
        {/* Cover Art Area */}
        <div className="mb-8 text-center">
          <div className="w-48 h-48 mx-auto bg-[#faebdd] dark:bg-[#2c221a] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[rgba(217,115,13,0.1)]">
            <span className="text-7xl">📻</span>
          </div>
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-1 tracking-tight">
            Current Topic
          </h3>
          <p className="text-sm text-[var(--foreground)] opacity-50 font-medium">
            Listening in Audible Mode
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-[rgba(55,53,47,0.09)] dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#d9730d]"
            onMouseDown={(e) => e.stopPropagation()}
          />
          <div className="flex justify-between text-[11px] font-bold text-[var(--foreground)] opacity-30 mt-2 uppercase tracking-tighter">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration - currentTime)} left</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => handleSkip(-30)}
            className="p-3 hover:bg-[var(--sidebar-hover)] rounded-full transition-all text-[var(--foreground)] opacity-60 hover:opacity-100"
            aria-label="Rewind 30 seconds"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                />
              </svg>
              <span className="text-[10px] font-bold mt-1">30S</span>
            </div>
          </button>

          <button
            onClick={handlePlayPause}
            className="w-20 h-20 bg-[#37352f] dark:bg-gray-100 text-white dark:text-[#191919] rounded-3xl flex items-center justify-center hover:opacity-90 transition-all shadow-xl scale-100 active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {isPlaying ? (
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-10 h-10 ml-1.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => handleSkip(30)}
            className="p-3 hover:bg-[var(--sidebar-hover)] rounded-full transition-all text-[var(--foreground)] opacity-60 hover:opacity-100"
            aria-label="Forward 30 seconds"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z"
                />
              </svg>
              <span className="text-[10px] font-bold mt-1">30S</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
