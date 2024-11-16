"use client"
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as i from 'react';
import * as e from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

var l=e.Root,m=i.forwardRef(({className:o,...t},r)=>i.createElement(e.Item,{ref:r,className:a("border-b",o),...t}));m.displayName="AccordionItem";var d=i.forwardRef(({className:o,children:t,...r},c)=>i.createElement(e.Header,{className:"flex"},i.createElement(e.Trigger,{ref:c,className:a("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",o),...r},t,i.createElement(ChevronDown,{className:"h-4 w-4 shrink-0 transition-transform duration-200"}))));d.displayName=e.Trigger.displayName;var s=i.forwardRef(({className:o,children:t,...r},c)=>i.createElement(e.Content,{ref:c,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r},i.createElement("div",{className:a("pb-4 pt-0",o)},t)));s.displayName=e.Content.displayName;

export { l as Accordion, s as AccordionContent, m as AccordionItem, d as AccordionTrigger };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=accordion.mjs.map