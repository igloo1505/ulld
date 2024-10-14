import {
  SnippetScalarWhereWithAggregatesInputSchema
} from "./chunk-MWMJ2III.js";
import {
  SnippetOrderByWithAggregationInputSchema
} from "./chunk-VDTUH2U6.js";
import {
  SnippetScalarFieldEnumSchema
} from "./chunk-YZWJQLOS.js";
import {
  SnippetWhereInputSchema
} from "./chunk-26V4YAOJ.js";

// src/database/outputTypeSchemas/SnippetGroupByArgsSchema.ts
import { z } from "zod";
var SnippetGroupByArgsSchema = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([SnippetOrderByWithAggregationInputSchema.array(), SnippetOrderByWithAggregationInputSchema]).optional(),
  by: SnippetScalarFieldEnumSchema.array(),
  having: SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SnippetGroupByArgsSchema_default = SnippetGroupByArgsSchema;

export {
  SnippetGroupByArgsSchema,
  SnippetGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-QWWEB7FW.js.map