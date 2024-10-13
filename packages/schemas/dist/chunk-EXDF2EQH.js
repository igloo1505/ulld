import {
  SnippetUpdateInputSchema
} from "./chunk-LBJQNWK7.js";
import {
  SnippetUncheckedUpdateInputSchema
} from "./chunk-MNDXUUKD.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-LVMTK4TK.js";

// src/database/outputTypeSchemas/SnippetUpdateArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetUpdateArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  data: z.union([SnippetUpdateInputSchema, SnippetUncheckedUpdateInputSchema]),
  where: SnippetWhereUniqueInputSchema
}).strict();
var SnippetUpdateArgsSchema_default = SnippetUpdateArgsSchema;

export {
  SnippetSelectSchema,
  SnippetUpdateArgsSchema,
  SnippetUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-EXDF2EQH.js.map