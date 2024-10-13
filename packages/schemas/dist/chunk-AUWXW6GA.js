import {
  SnippetScalarWhereWithAggregatesInputSchema
} from "./chunk-ZJH4P4AA.js";
import {
  SnippetOrderByWithAggregationInputSchema
} from "./chunk-A7RGWET3.js";
import {
  SnippetScalarFieldEnumSchema
} from "./chunk-W4QOG4CC.js";
import {
  SnippetWhereInputSchema
} from "./chunk-WV7T4YLA.js";

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
//# sourceMappingURL=chunk-AUWXW6GA.js.map