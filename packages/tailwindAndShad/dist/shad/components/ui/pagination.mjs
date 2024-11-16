import { a as a$2 } from '../../../chunk-7BOHER4E.mjs';
import { a as a$1 } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as a from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

var c=({className:e,...n})=>a.createElement("nav",{role:"navigation","aria-label":"pagination",className:a$1("mx-auto flex w-full justify-center",e),...n});c.displayName="Pagination";var P=a.forwardRef(({className:e,...n},o)=>a.createElement("ul",{ref:o,className:a$1("flex flex-row items-center gap-1",e),...n}));P.displayName="PaginationContent";var g=a.forwardRef(({className:e,...n},o)=>a.createElement("li",{ref:o,className:a$1("",e),...n}));g.displayName="PaginationItem";var t=({className:e,isActive:n,size:o="icon",...p})=>a.createElement("a",{"aria-current":n?"page":void 0,className:a$1(a$2({variant:n?"outline":"ghost",size:o}),e),...p});t.displayName="PaginationLink";var f=({className:e,...n})=>a.createElement(t,{"aria-label":"Go to previous page",size:"default",className:a$1("gap-1 pl-2.5",e),...n},a.createElement(ChevronLeft,{className:"h-4 w-4"}),a.createElement("span",null,"Previous"));f.displayName="PaginationPrevious";var N=({className:e,...n})=>a.createElement(t,{"aria-label":"Go to next page",size:"default",className:a$1("gap-1 pr-2.5",e),...n},a.createElement("span",null,"Next"),a.createElement(ChevronRight,{className:"h-4 w-4"}));N.displayName="PaginationNext";var u=({className:e,...n})=>a.createElement("span",{"aria-hidden":!0,className:a$1("flex h-9 w-9 items-center justify-center",e),...n},a.createElement(MoreHorizontal,{className:"h-4 w-4"}),a.createElement("span",{className:"sr-only"},"More pages"));u.displayName="PaginationEllipsis";

export { c as Pagination, P as PaginationContent, u as PaginationEllipsis, g as PaginationItem, t as PaginationLink, N as PaginationNext, f as PaginationPrevious };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pagination.mjs.map