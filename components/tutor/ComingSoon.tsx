"use client";

import { useTutorMode } from "@/contexts/TutorModeContext";

export default function ComingSoon() {
  const { isTutorMode, closeTutorMode } = useTutorMode();

  if (!isTutorMode) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-[#191919] rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-12 lg:p-16 border border-[rgba(55,53,47,0.09)] dark:border-gray-800">
        <button
          onClick={closeTutorMode}
          className="absolute top-6 right-6 p-2 hover:bg-[rgba(55,53,47,0.05)] dark:hover:bg-gray-800 rounded-lg transition-colors text-[var(--foreground)] opacity-40 hover:opacity-100"
          aria-label="Close"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <div className="mb-10">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-[#f4f0f7] dark:bg-[#251c2e] mb-6 shadow-sm border border-[rgba(105,49,165,0.1)]">
              <span className="text-6xl">🤖</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">
            AI Tutor Mode
          </h2>

          <p className="text-xl lg:text-2xl text-[var(--foreground)] opacity-70 mb-10 leading-relaxed font-medium">
            An AI-powered real-time tutor that will teach you{" "}
            <br className="hidden lg:block" /> through interactive character and
            voice.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 px-4 py-2 bg-[#f4f0f7] dark:bg-[#251c2e] rounded-full text-[#6931a5] dark:text-[#a66ed1] font-bold text-sm lg:text-base border border-[rgba(105,49,165,0.1)]">
              <span>🎭 Interactive Character</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-[#faebdd] dark:bg-[#2c221a] rounded-full text-[#d9730d] font-bold text-sm lg:text-base border border-[rgba(217,115,13,0.1)]">
              <span>🎙️ Voice Interaction</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-[#edf3e8] dark:bg-[#1c2d1c] rounded-full text-[#1c6b1c] font-bold text-sm lg:text-base border border-[rgba(28,107,28,0.1)]">
              <span>⚡ Real-time Learning</span>
            </div>
          </div>

          <div className="mt-16">
            <button
              onClick={closeTutorMode}
              className="px-8 py-3 bg-[#37352f] text-white dark:bg-gray-100 dark:text-[#191919] rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
