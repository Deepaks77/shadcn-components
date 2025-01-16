"use client";

import { Button } from "@/components/ui/button"; // ShadCN UI
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Carey</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/trips" className="hover:underline">
          Trips
        </Link>
      </nav>
      <div className="space-x-4">
        <Button variant="ghost">Sophia Ford</Button>
        <Button>Book a Trip</Button>
      </div>
    </header>
  );
};

export default Header;
