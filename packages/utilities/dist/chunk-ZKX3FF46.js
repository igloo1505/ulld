import { z } from 'zod';

var i=z.object({glob:z.string().default("**/*").transform(l=>l.startsWith("/")?l.slice(1):l),type:z.union([z.literal("dirs"),z.literal("files"),z.literal("dirsAndFiles")]).default("files"),ignore:z.union([z.string(),z.string().array()]).nullish(),returnAs:z.union([z.literal("absolute"),z.literal("rootRelative")]).default("absolute")});

export { i as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZKX3FF46.js.map