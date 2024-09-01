import Image from "next/legacy/image";

import Home from "@/components/home/Home";
import Navbar from "@/components/navigation/Navbar";
import Dock from "@/components/navigation/Dock";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      {/* div to cover navbar gap */}
      <Home />
    </main>
  );
}
