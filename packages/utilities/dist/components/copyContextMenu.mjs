"use client"
import { a as a$1 } from '../chunk-4BOQS7AU.mjs';
import { a } from '../chunk-QQWHOKEJ.mjs';
import { f } from '../chunk-35Y5QU46.mjs';
import '../chunk-4PNXUNZB.mjs';
import '../chunk-T7KECS5U.mjs';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@ulld/tailwind/context-menu';
import e from 'react';

var c=({children:m,removeMathWrapper:i,content:t,btnLabel:s,extraMenuItems:p,classes:u={}})=>{let n=p;return e.createElement(ContextMenu,null,e.createElement(ContextMenuTrigger,null,m),e.createElement(ContextMenuContent,{className:a("w-64",u.menuContent)},e.createElement(ContextMenuItem,{inset:!0,onClick:async()=>a$1(i?f(t):t)},s||"Copy latex"),n&&e.createElement(n,null)))};c.displayName="CopyContextMenu";

export { c as CopyContextMenu };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyContextMenu.mjs.map