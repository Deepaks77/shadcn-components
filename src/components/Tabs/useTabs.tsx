import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";

interface Tab {
  label: string;
  value: string;
}

interface UseTabsOptions {
  tabs: Tab[];
  defaultTab?: string; // Default tab value
  size?: "small" | "medium" | "large"; // Tab size
}

const useTabs = ({ tabs, defaultTab, size = "medium" }: UseTabsOptions) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTabIndex = searchParams.get("tab")
    ? parseInt(searchParams.get("tab") as string, 10)
    : tabs.findIndex(tab => tab.value === defaultTab) || 0;

  const [activeTab, setActiveTab] = useState(
    tabs[initialTabIndex]?.value || tabs[0]?.value
  );

  // Sync active tab with query parameters
  useEffect(() => {
    const tabIndex = parseInt(searchParams.get("tab") as string, 10);
    if (!isNaN(tabIndex) && tabs[tabIndex]?.value !== activeTab) {
      setActiveTab(tabs[tabIndex]?.value);
    }
  }, [searchParams, tabs, activeTab]);

  // Handle tab change
  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value);
      const newTabIndex = tabs.findIndex(tab => tab.value === value);
      router.push(`?tab=${newTabIndex}`, undefined, { shallow: true }); // Update the query parameter
    },
    [router, tabs]
  );

  // Size classes
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3",
  };

  // Render tabs component
  const RenderTabs = () => (
    <div className="flex border-b border-gray-300">
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => handleTabChange(tab.value)}
          className={`relative inline-flex items-center justify-center gap-2 font-medium border-b-2 transition-all ${
            sizeClasses[size]
          } text-gray-500 hover:text-blue-600 border-transparent hover:border-blue-600 ${
            activeTab === tab.value ? "text-blue-600 border-blue-600" : ""
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  return {
    activeTab,
    setActiveTab,
    RenderTabs, // Return the JSX component
  };
};

export default useTabs;
