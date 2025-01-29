"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"; // ShadCN Card Component

export default function BottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-x-0 top-0 flex justify-center">
      <motion.div
        ref={sheetRef}
        drag="y"
        dragConstraints={{ top: -300, bottom: 0 }} // Drag downward to open
        onDragEnd={(_, info) => {
          if (info.offset.y > 100) {
            setIsOpen(true); // Open downward
          } else {
            setIsOpen(false); // Close upward
          }
        }}
        animate={{ y: isOpen ? 300 : 0 }} // Starts at top (0) and moves downward (300)
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="fixed top-0 w-full bg-white rounded-b-2xl shadow-lg p-4 max-w-md mx-auto"
      >
        {/* Drag Handle */}
        <div
          className="flex justify-center py-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-12 h-2.5 bg-gray-400 rounded-full" />
        </div>
        Hello
        <Card className="p-4 text-center text-lg font-semibold">ITINERARY</Card>
      </motion.div>
    </div>
  );
}
