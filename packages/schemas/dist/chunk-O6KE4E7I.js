import {
  BibEntryOrderByWithRelationInputSchema
} from "./chunk-4YTFSGIX.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-O6KE4E7I.js.map