import {
  TagOrderByWithRelationInputSchema
} from "./chunk-IP6JPH7U.js";
import {
  TagWhereUniqueInputSchema
} from "./chunk-B6NNLS3H.js";
import {
  TagWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TagAggregateArgsSchema.ts
import { z } from "zod";
var TagAggregateArgsSchema = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithRelationInputSchema.array(), TagOrderByWithRelationInputSchema]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TagAggregateArgsSchema_default = TagAggregateArgsSchema;

export {
  TagAggregateArgsSchema,
  TagAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-D7FYPFQH.js.map