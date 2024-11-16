import { a } from '../../../chunk-ORBRSQKI.mjs';
import '../../../chunk-PD25TUY5.mjs';
import * as e from 'react';
import { cva } from 'class-variance-authority';

var n=cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=e.forwardRef(({className:t,variant:r,...a$1},s)=>e.createElement("div",{ref:s,role:"alert",className:a(n({variant:r}),t),...a$1}));o.displayName="Alert";var d=e.forwardRef(({className:t,...r},a$1)=>e.createElement("h5",{ref:a$1,className:a("mb-1 font-medium leading-none tracking-tight",t),...r}));d.displayName="AlertTitle";var c=e.forwardRef(({className:t,...r},a$1)=>e.createElement("div",{ref:a$1,className:a("text-sm [&_p]:leading-relaxed",t),...r}));c.displayName="AlertDescription";

export { o as Alert, c as AlertDescription, d as AlertTitle };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=alert.mjs.map