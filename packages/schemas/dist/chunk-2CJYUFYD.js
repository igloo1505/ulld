import {
  BusinessContactOrderByWithRelationInputSchema
} from "./chunk-5TVSYONV.js";
import {
  BusinessContactWhereUniqueInputSchema
} from "./chunk-W2FX4MWS.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-RT67XEWS.js";

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
//# sourceMappingURL=chunk-2CJYUFYD.js.map