import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";
import {
  BibOrderByWithRelationInputSchema
} from "./chunk-ECC75BHH.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/BibAggregateArgsSchema.ts
import { z } from "zod";
var BibAggregateArgsSchema = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([BibOrderByWithRelationInputSchema.array(), BibOrderByWithRelationInputSchema]).optional(),
  cursor: BibWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BibAggregateArgsSchema_default = BibAggregateArgsSchema;

export {
  BibAggregateArgsSchema,
  BibAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-SXBZHDQA.js.map