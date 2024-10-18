// src/developer/trpcConfigSchema.ts
import { z } from "zod";
var trpcConfigSchema = z.object({
  routerName: z.string(),
  routerExport: z.string().describe(
    "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property."
  )
});

export {
  trpcConfigSchema
};
//# sourceMappingURL=chunk-PAERU6NE.mjs.map