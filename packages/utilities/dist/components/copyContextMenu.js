"use client"
import { f } from '../chunk-GFP2MCGA.js';
import '../chunk-Q7L2DBAQ.js';
import { a } from '../chunk-4WSGBQNM.js';
import { a as a$1 } from '../chunk-WISSNM7X.js';
import '../chunk-GQSCBKA6.js';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@ulld/tailwind/context-menu';
import e from 'react';

var c=({children:m,removeMathWrapper:i,content:t,btnLabel:s,extraMenuItems:p,classes:u={}})=>{let n=p;return e.createElement(ContextMenu,null,e.createElement(ContextMenuTrigger,null,m),e.createElement(ContextMenuContent,{className:a("w-64",u.menuContent)},e.createElement(ContextMenuItem,{inset:!0,onClick:async()=>a$1(i?f(t):t)},s||"Copy latex"),n&&e.createElement(n,null)))};c.displayName="CopyContextMenu";

export { c as CopyContextMenu };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyContextMenu.js.map