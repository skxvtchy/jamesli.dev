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
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">
              {" "}
              {/* Inner div to prevent width change */}
              Yes. It adheres to the WAI-ARIA design pattern.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <div className="max-w-full">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionComp;
