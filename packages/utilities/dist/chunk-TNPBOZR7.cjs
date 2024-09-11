'use strict';

var zod = require('zod');

var l=zod.z.object({glob:zod.z.string().default("**/*").transform(t=>t.startsWith("/")?t.slice(1):t),type:zod.z.union([zod.z.literal("dirs"),zod.z.literal("files"),zod.z.literal("dirsAndFiles")]).default("files"),ignore:zod.z.union([zod.z.string(),zod.z.string().array()]).nullish(),returnAs:zod.z.union([zod.z.literal("absolute"),zod.z.literal("rootRelative")]).default("absolute")}),i=zod.z.object({includeSvg:zod.z.boolean().default(!1)}).merge(l.pick({returnAs:!0,ignore:!0}));

exports.a = l;
exports.b = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-TNPBOZR7.cjs.map