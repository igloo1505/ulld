import { z } from 'zod';

var l=z.object({glob:z.string().default("**/*").transform(t=>t.startsWith("/")?t.slice(1):t),type:z.union([z.literal("dirs"),z.literal("files"),z.literal("dirsAndFiles")]).default("files"),ignore:z.union([z.string(),z.string().array()]).nullish(),returnAs:z.union([z.literal("absolute"),z.literal("rootRelative")]).default("absolute")}),i=z.object({includeSvg:z.boolean().default(!1)}).merge(l.pick({returnAs:!0,ignore:!0}));

export { l as a, i as b };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-LUMNCB27.js.map