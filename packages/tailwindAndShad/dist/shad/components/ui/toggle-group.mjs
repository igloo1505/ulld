"use client"
import { a as a$1 } from '../../../chunk-HMKT6AQ6.mjs';
import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as e from 'react';
import * as t from '@radix-ui/react-toggle-group';

var s=e.createContext({size:"default",variant:"default"}),f=e.forwardRef(({className:o,variant:r,size:i,children:a$1,...p},g)=>e.createElement(t.Root,{ref:g,className:a("flex items-center justify-center gap-1",o),...p},e.createElement(s.Provider,{value:{variant:r,size:i}},a$1)));f.displayName=t.Root.displayName;var u=e.forwardRef(({className:o,children:r,variant:i,size:a$2,...p},g)=>{let l=e.useContext(s);return e.createElement(t.Item,{ref:g,className:a(a$1({variant:l.variant||i,size:l.size||a$2}),o),...p},r)});u.displayName=t.Item.displayName;

export { f as ToggleGroup, u as ToggleGroupItem };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=toggle-group.mjs.map