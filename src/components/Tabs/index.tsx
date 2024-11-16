"use client";
import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils"; // Utility function for class merging

interface TabsProps {
  tabs: Array<{ label: string; value: string }>; // Tab labels and values
  defaultValue?: string; // Default selected tab
  size?: "small" | "medium" | "large"; // Tab size
  className?: string; // Additional custom classes
  onValueChange?: (value: string) => void; // Callback on tab change
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue,
  size = "medium",
  className,
  onValueChange,
}) => {
  // Size classes
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3",
  };

  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue || tabs[0]?.value}
      className={cn("w-full", className)}
      onValueChange={onValueChange}
    >
      <TabsPrimitive.List className="flex border-b border-gray-300">
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "relative inline-flex items-center justify-center gap-2 font-medium border-b-2 transition-all",
              sizeClasses[size],
              "text-gray-500 hover:text-blue-600 border-transparent hover:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(tab => (
        <TabsPrimitive.Content
          key={tab.value}
          value={tab.value}
          className="p-4"
        >
          <p className="text-sm text-gray-700">Content for {tab.label}</p>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;
