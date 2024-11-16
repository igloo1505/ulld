"use client"
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as e from 'react';
import { Drawer } from 'vaul';

var m=({shouldScaleBackground:t=!0,...r})=>e.createElement(Drawer.Root,{shouldScaleBackground:t,...r});m.displayName="Drawer";var y=Drawer.Trigger,l=Drawer.Portal,v=Drawer.Close,n=e.forwardRef(({className:t,...r},o)=>e.createElement(Drawer.Overlay,{ref:o,className:a("fixed inset-0 z-50 bg-black/80",t),...r}));n.displayName=Drawer.Overlay.displayName;var c=e.forwardRef(({className:t,children:r,...o},s)=>e.createElement(l,null,e.createElement(n,null),e.createElement(Drawer.Content,{ref:s,className:a("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",t),...o},e.createElement("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),r)));c.displayName="DrawerContent";var p=({className:t,...r})=>e.createElement("div",{className:a("grid gap-1.5 p-4 text-center sm:text-left",t),...r});p.displayName="DrawerHeader";var f=({className:t,...r})=>e.createElement("div",{className:a("mt-auto flex flex-col gap-2 p-4",t),...r});f.displayName="DrawerFooter";var d=e.forwardRef(({className:t,...r},o)=>e.createElement(Drawer.Title,{ref:o,className:a("text-lg font-semibold leading-none tracking-tight",t),...r}));d.displayName=Drawer.Title.displayName;var D=e.forwardRef(({className:t,...r},o)=>e.createElement(Drawer.Description,{ref:o,className:a("text-sm text-muted-foreground",t),...r}));D.displayName=Drawer.Description.displayName;

export { m as Drawer, v as DrawerClose, c as DrawerContent, D as DrawerDescription, f as DrawerFooter, p as DrawerHeader, n as DrawerOverlay, l as DrawerPortal, d as DrawerTitle, y as DrawerTrigger };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=drawer.mjs.map