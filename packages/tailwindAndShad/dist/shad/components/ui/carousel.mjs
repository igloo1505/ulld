"use client"
import { b } from '../../../chunk-7BOHER4E.mjs';
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as e from 'react';
import h from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

var R=e.createContext(null);function C(){let o=e.useContext(R);if(!o)throw new Error("useCarousel must be used within a <Carousel />");return o}var L=e.forwardRef(({orientation:o="horizontal",opts:r,setApi:a$1,plugins:l,className:n,children:u,...c},p)=>{let[y,t]=h({...r,axis:o==="horizontal"?"x":"y"},l),[x,N]=e.useState(!1),[P,b]=e.useState(!1),f=e.useCallback(s=>{s&&(N(s.canScrollPrev()),b(s.canScrollNext()));},[]),m=e.useCallback(()=>{t?.scrollPrev();},[t]),d=e.useCallback(()=>{t?.scrollNext();},[t]),w=e.useCallback(s=>{s.key==="ArrowLeft"?(s.preventDefault(),m()):s.key==="ArrowRight"&&(s.preventDefault(),d());},[m,d]);return e.useEffect(()=>{!t||!a$1||a$1(t);},[t,a$1]),e.useEffect(()=>{if(t)return f(t),t.on("reInit",f),t.on("select",f),()=>{t?.off("select",f);}},[t,f]),e.createElement(R.Provider,{value:{carouselRef:y,api:t,opts:r,orientation:o||(r?.axis==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:d,canScrollPrev:x,canScrollNext:P}},e.createElement("div",{ref:p,onKeyDownCapture:w,className:a("relative",n),role:"region","aria-roledescription":"carousel",...c},u))});L.displayName="Carousel";var S=e.forwardRef(({className:o,...r},a$1)=>{let{carouselRef:l,orientation:n}=C();return e.createElement("div",{ref:l,className:"overflow-hidden"},e.createElement("div",{ref:a$1,className:a("flex",n==="horizontal"?"-ml-4":"-mt-4 flex-col",o),...r}))});S.displayName="CarouselContent";var H=e.forwardRef(({className:o,...r},a$1)=>{let{orientation:l}=C();return e.createElement("div",{ref:a$1,role:"group","aria-roledescription":"slide",className:a("min-w-0 shrink-0 grow-0 basis-full",l==="horizontal"?"pl-4":"pt-4",o),...r})});H.displayName="CarouselItem";var M=e.forwardRef(({className:o,variant:r="outline",size:a$1="icon",...l},n)=>{let{orientation:u,scrollPrev:c,canScrollPrev:p}=C();return e.createElement(b,{ref:n,variant:r,size:a$1,className:a("absolute  h-8 w-8 rounded-full",u==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!p,onClick:c,...l},e.createElement(ArrowLeft,{className:"h-4 w-4"}),e.createElement("span",{className:"sr-only"},"Previous slide"))});M.displayName="CarouselPrevious";var D=e.forwardRef(({className:o,variant:r="outline",size:a$1="icon",...l},n)=>{let{orientation:u,scrollNext:c,canScrollNext:p}=C();return e.createElement(b,{ref:n,variant:r,size:a$1,className:a("absolute h-8 w-8 rounded-full",u==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!p,onClick:c,...l},e.createElement(ArrowRight,{className:"h-4 w-4"}),e.createElement("span",{className:"sr-only"},"Next slide"))});D.displayName="CarouselNext";

export { L as Carousel, S as CarouselContent, H as CarouselItem, D as CarouselNext, M as CarouselPrevious };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=carousel.mjs.map