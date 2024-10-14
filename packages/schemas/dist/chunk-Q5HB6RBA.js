import {
  SnippetOrderByWithRelationInputSchema
} from "./chunk-KTLG6RXV.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-R5PTJBPZ.js";
import {
  SnippetWhereInputSchema
} from "./chunk-26V4YAOJ.js";

// src/database/outputTypeSchemas/SnippetAggregateArgsSchema.ts
import { z } from "zod";
var SnippetAggregateArgsSchema = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([SnippetOrderByWithRelationInputSchema.array(), SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SnippetAggregateArgsSchema_default = SnippetAggregateArgsSchema;

export {
  SnippetAggregateArgsSchema,
  SnippetAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-Q5HB6RBA.js.map