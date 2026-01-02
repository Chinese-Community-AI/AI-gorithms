"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

interface Tab {
  label: string;
  language: string;
  code: string;
}

interface CodeTabsProps {
  tabs: Tab[];
}

export default function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-8 border border-[rgba(55,53,47,0.09)] rounded-xl overflow-hidden shadow-sm bg-[#fcfcfc] dark:bg-[#191919]">
      <div className="flex border-b border-[rgba(55,53,47,0.09)] bg-[#f8f9fa] dark:bg-[rgba(55,53,47,0.02)] overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2.5 text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === index
                ? "bg-white dark:bg-[#252525] text-[#37352f] dark:text-gray-100 shadow-[inset_0_-2px_0_#d9730d]"
                : "text-[#37352f]/40 dark:text-gray-500 hover:bg-[rgba(55,53,47,0.05)] hover:text-[#37352f]/60"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="relative group [&_.my-6]:!mt-0 [&_.my-6]:!mb-0 [&_pre]:!rounded-none [&_pre]:!border-0 [&_pre]:!bg-transparent">
        <CodeBlock
          code={tabs[activeTab].code}
          language={tabs[activeTab].language}
        />
      </div>
    </div>
  );
}
