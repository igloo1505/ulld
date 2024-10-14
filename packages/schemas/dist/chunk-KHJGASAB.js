import {
  SnippetCreateManyInputSchema
} from "./chunk-6P4LVRYL.js";

// src/database/outputTypeSchemas/SnippetCreateManyArgsSchema.ts
import { z } from "zod";
var SnippetCreateManyArgsSchema = z.object({
  data: z.union([SnippetCreateManyInputSchema, SnippetCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SnippetCreateManyArgsSchema_default = SnippetCreateManyArgsSchema;

export {
  SnippetCreateManyArgsSchema,
  SnippetCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-KHJGASAB.js.map