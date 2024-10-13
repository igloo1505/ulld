import {
  ServingOrderByWithRelationInputSchema
} from "./chunk-DTXNG57P.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";
import {
  ServingWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/ServingAggregateArgsSchema.ts
import { z } from "zod";
var ServingAggregateArgsSchema = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ServingAggregateArgsSchema_default = ServingAggregateArgsSchema;

export {
  ServingAggregateArgsSchema,
  ServingAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-ZJ4QHOAK.js.map