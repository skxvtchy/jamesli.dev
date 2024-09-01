import Hero from "./modules/Hero";
import Projects from "./modules/Projects";
import FunButtons from "./modules/FunButtons";
import AccordionComp from "./modules/Accordion";

import InfiniteScroll from "./modules/InfiniteScroll";
import NextLinks from "./modules/NextLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <FunButtons />
      <AccordionComp />
      {/* <NextLinks /> */}
      {/* <InfiniteScroll /> */}
    </>
  );
}
