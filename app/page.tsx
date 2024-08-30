import Image from "next/image";

import Home from "@/components/Home";
import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import NextLinks from "@/components/NextLinks";
import Dock from "@/components/Dock";
import Projects from "@/components/Projects";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />
      {/* <NextLinks /> */}
      <Projects />
      <InfiniteScroll />
      <div className="fixed bottom-4 right-4">
        <Dock />
      </div>
    </main>
  );
}
