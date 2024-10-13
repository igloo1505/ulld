import {
  TopicOrderByWithRelationInputSchema
} from "./chunk-EK4FV3SX.js";
import {
  TopicWhereUniqueInputSchema
} from "./chunk-ZPW5ICOT.js";
import {
  TopicWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-PA6FI6P2.js.map