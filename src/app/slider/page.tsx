"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils"; // If using ShadCN's utility function

interface CollapsibleLineProps {
  children: React.ReactNode;
}

const CollapsibleLine: React.FC<CollapsibleLineProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full flex flex-col items-center"
    >
      {/* Smoothly Animating Content */}
      <CollapsibleContent
        className={cn(
          "overflow-hidden transition-all duration-1000 ease-in-out",
          "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
        )}
      >
        <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          {children}
        </div>
      </CollapsibleContent>

      {/* Toggle Line */}
      <CollapsibleTrigger className="w-full h-2 bg-gray-500 rounded-full cursor-pointer mt-2" />
    </Collapsible>
  );
};

export default CollapsibleLine;
