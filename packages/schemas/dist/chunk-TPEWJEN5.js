import {
  TopicOrderByWithRelationInputSchema
} from "./chunk-JPB4LKY2.js";
import {
  TopicWhereUniqueInputSchema
} from "./chunk-NV4ZNW2S.js";
import {
  TopicWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/TopicAggregateArgsSchema.ts
import { z } from "zod";
var TopicAggregateArgsSchema = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([TopicOrderByWithRelationInputSchema.array(), TopicOrderByWithRelationInputSchema]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TopicAggregateArgsSchema_default = TopicAggregateArgsSchema;

export {
  TopicAggregateArgsSchema,
  TopicAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-TPEWJEN5.js.map