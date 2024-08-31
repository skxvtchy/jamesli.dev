import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionComp = () => {
  return (
    <div className="w-full max-w-lg mx-auto mb-20 px-10">
      {/* Wrapper div to control the accordion width */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Why did the computer cross the road?
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">
              {/* Inner div to prevent width change */}
              To get to the other site 🤖
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why don't keyboards sleep?</AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">Because they have two shifts ⌨️</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What’s a computer’s favorite beat?
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">An algorithm 🎶</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
