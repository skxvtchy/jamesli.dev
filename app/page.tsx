import Image from "next/legacy/image";

import Home from "@/components/Home";
import Hero from "@/components/Hero";
import FunButtons from "@/components/FunButtons";
import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import NextLinks from "@/components/NextLinks";
import Dock from "@/components/Dock";
import Projects from "@/components/Projects";
import AccordionComp from "@/components/Accordion";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />
      {/* div to cover navbar gap */}
      <div className="pt-16" />
      <Hero />
      {/* <NextLinks /> */}

      <Projects />

      <FunButtons />
      <AccordionComp />
      {/* <InfiniteScroll /> */}
      <div className="fixed bottom-4 right-4">
        <Dock />
      </div>
    </main>
  );
}
