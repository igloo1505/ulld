"use client"
import { a as a$1 } from '../../../chunk-7BOHER4E.mjs';
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as t from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

function m({className:r,classNames:o,showOutsideDays:n=!0,...d}){return t.createElement(DayPicker,{showOutsideDays:n,className:a("p-3",r),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:a(a$1({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:a(a$1({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...o},components:{IconLeft:({...s})=>t.createElement(ChevronLeft,{className:"h-4 w-4"}),IconRight:({...s})=>t.createElement(ChevronRight,{className:"h-4 w-4"})},...d})}m.displayName="Calendar";

export { m as Calendar };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=calendar.mjs.map