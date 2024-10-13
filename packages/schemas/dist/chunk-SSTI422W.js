import {
  SnippetCreateManyInputSchema
} from "./chunk-5LADUEFR.js";

// src/database/outputTypeSchemas/SnippetCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var SnippetCreateManyAndReturnArgsSchema = z.object({
  data: z.union([SnippetCreateManyInputSchema, SnippetCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SnippetCreateManyAndReturnArgsSchema_default = SnippetCreateManyAndReturnArgsSchema;

export {
  SnippetCreateManyAndReturnArgsSchema,
  SnippetCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-SSTI422W.js.map