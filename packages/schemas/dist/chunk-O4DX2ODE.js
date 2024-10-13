import {
  BibEntryOrderByWithRelationInputSchema
} from "./chunk-RHP34BST.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/BibEntryAggregateArgsSchema.ts
import { z } from "zod";
var BibEntryAggregateArgsSchema = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([BibEntryOrderByWithRelationInputSchema.array(), BibEntryOrderByWithRelationInputSchema]).optional(),
  cursor: BibEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BibEntryAggregateArgsSchema_default = BibEntryAggregateArgsSchema;

export {
  BibEntryAggregateArgsSchema,
  BibEntryAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-O4DX2ODE.js.map