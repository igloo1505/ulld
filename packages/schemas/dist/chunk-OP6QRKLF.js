import {
  SnippetCreateInputSchema
} from "./chunk-LKCYWSV4.js";
import {
  SnippetUncheckedCreateInputSchema
} from "./chunk-ISLAHLWJ.js";
import {
  SnippetUpdateInputSchema
} from "./chunk-LBJQNWK7.js";
import {
  SnippetUncheckedUpdateInputSchema
} from "./chunk-MNDXUUKD.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-LVMTK4TK.js";

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
//# sourceMappingURL=chunk-OP6QRKLF.js.map