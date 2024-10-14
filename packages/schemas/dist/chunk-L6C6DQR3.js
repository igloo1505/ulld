import {
  SnippetCreateInputSchema
} from "./chunk-YUAX54YT.js";
import {
  SnippetUncheckedCreateInputSchema
} from "./chunk-GAG2GCWK.js";
import {
  SnippetUpdateInputSchema
} from "./chunk-ZGOKTEKN.js";
import {
  SnippetUncheckedUpdateInputSchema
} from "./chunk-Q4QHC4WA.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-R5PTJBPZ.js";

// src/database/outputTypeSchemas/SnippetUpsertArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetUpsertArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereUniqueInputSchema,
  create: z.union([SnippetCreateInputSchema, SnippetUncheckedCreateInputSchema]),
  update: z.union([SnippetUpdateInputSchema, SnippetUncheckedUpdateInputSchema])
}).strict();
var SnippetUpsertArgsSchema_default = SnippetUpsertArgsSchema;

export {
  SnippetSelectSchema,
  SnippetUpsertArgsSchema,
  SnippetUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-L6C6DQR3.js.map