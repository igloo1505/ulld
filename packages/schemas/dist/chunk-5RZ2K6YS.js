import {
  TagOrderByWithRelationInputSchema
} from "./chunk-Y6LPFC2P.js";
import {
  TagWhereUniqueInputSchema
} from "./chunk-LMIV457O.js";
import {
  TagWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-5RZ2K6YS.js.map