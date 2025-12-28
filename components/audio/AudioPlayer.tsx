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
      // Don't drag if clicking on buttons or interactive elements
      if (
        e.target.closest("button") ||
        e.target.closest("input") ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "INPUT"
      ) {
        return;
      }

      const rect = playerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
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
    // TODO: Implement actual audio playback
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    // TODO: Implement actual seek functionality
  };

  const handleSkip = (seconds: number) => {
    setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + seconds)));
    // TODO: Implement actual skip functionality
  };

  const transformValue = "translate(-50%, -50%)";

  return (
    <div
      ref={playerRef}
      className="fixed z-50 bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-[420px] max-w-[90vw] overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: transformValue,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      {/* Browser-like Window Header - Draggable area */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 select-none"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
            AI-gorithms Audio Player
          </span>
        </div>
        <button
          onClick={closeAudibleMode}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors cursor-pointer"
          aria-label="Close player"
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsDragging(false);
          }}
        >
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Player Content */}
      <div
        className="p-6"
        onMouseDown={(e) => {
          // Allow dragging from content area too, but not from interactive elements
          if (
            e.target instanceof HTMLElement &&
            (e.target.closest("button") ||
              e.target.closest("input") ||
              e.target.tagName === "BUTTON" ||
              e.target.tagName === "INPUT")
          ) {
            return;
          }
          handleMouseDown(e);
        }}
      >
        {/* Cover Art Area */}
        <div className="mb-6 text-center">
          <div className="w-full aspect-square max-w-[280px] mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
            <svg
              className="w-24 h-24 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            Current Topic
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Audio content will appear here
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            onMouseDown={(e) => e.stopPropagation()}
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration - currentTime)} left</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleSkip(-30)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
            aria-label="Rewind 30 seconds"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
              </svg>
              <span className="text-xs font-medium">30</span>
            </div>
          </button>

          <button
            onClick={handlePlayPause}
            className="w-16 h-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => handleSkip(30)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
            aria-label="Forward 30 seconds"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.01 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h-2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z" />
              </svg>
              <span className="text-xs font-medium">30</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
