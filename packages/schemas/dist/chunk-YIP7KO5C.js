import {
  BusinessContactOrderByWithRelationInputSchema
} from "./chunk-UMC2HT6W.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-F6RVJCDM.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-4TBUKZ6H.js";

// src/database/outputTypeSchemas/BusinessContactAggregateArgsSchema.ts
import { z } from "zod";
var BusinessContactAggregateArgsSchema = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([BusinessContactOrderByWithRelationInputSchema.array(), BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: BusinessContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BusinessContactAggregateArgsSchema_default = BusinessContactAggregateArgsSchema;

export {
  BusinessContactAggregateArgsSchema,
  BusinessContactAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-YIP7KO5C.js.map