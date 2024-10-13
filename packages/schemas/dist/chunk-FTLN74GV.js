import {
  SnippetOrderByWithRelationInputSchema
} from "./chunk-7KSONNGW.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-LVMTK4TK.js";
import {
  SnippetWhereInputSchema
} from "./chunk-WV7T4YLA.js";

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
//# sourceMappingURL=chunk-FTLN74GV.js.map