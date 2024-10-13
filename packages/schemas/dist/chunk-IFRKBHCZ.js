import {
  SnippetUpdateManyMutationInputSchema
} from "./chunk-D42SRUDG.js";
import {
  SnippetUncheckedUpdateManyInputSchema
} from "./chunk-6TKFAMQY.js";
import {
  SnippetWhereInputSchema
} from "./chunk-WV7T4YLA.js";

// src/database/outputTypeSchemas/SnippetUpdateManyArgsSchema.ts
import { z } from "zod";
var SnippetUpdateManyArgsSchema = z.object({
  data: z.union([SnippetUpdateManyMutationInputSchema, SnippetUncheckedUpdateManyInputSchema]),
  where: SnippetWhereInputSchema.optional()
}).strict();
var SnippetUpdateManyArgsSchema_default = SnippetUpdateManyArgsSchema;

export {
  SnippetUpdateManyArgsSchema,
  SnippetUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-IFRKBHCZ.js.map