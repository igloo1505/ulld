import {
  SnippetUpdateManyMutationInputSchema
} from "./chunk-DHENCDTD.js";
import {
  SnippetUncheckedUpdateManyInputSchema
} from "./chunk-JEAQKLZP.js";
import {
  SnippetWhereInputSchema
} from "./chunk-26V4YAOJ.js";

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
//# sourceMappingURL=chunk-WHDI6QJG.js.map