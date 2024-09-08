import { z } from 'zod';

// src/developer/trpcConfigSchema.ts
var trpcConfigSchema = z.object({
  routerName: z.string(),
  routerExport: z.string().describe(
    "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property."
  )
});

export { trpcConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-L4UFB4OO.js.map