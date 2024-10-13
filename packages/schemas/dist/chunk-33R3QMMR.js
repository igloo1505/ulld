import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";
import {
  BibOrderByWithRelationInputSchema
} from "./chunk-JBWO2EJO.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-33R3QMMR.js.map