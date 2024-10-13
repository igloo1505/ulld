import {
  TopicScalarWhereWithAggregatesInputSchema
} from "./chunk-3SUTL4OB.js";
import {
  TopicOrderByWithAggregationInputSchema
} from "./chunk-CKALFXDR.js";
import {
  TopicScalarFieldEnumSchema
} from "./chunk-6H2TNO3F.js";
import {
  TopicWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TopicGroupByArgsSchema.ts
import { z } from "zod";
var TopicGroupByArgsSchema = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([TopicOrderByWithAggregationInputSchema.array(), TopicOrderByWithAggregationInputSchema]).optional(),
  by: TopicScalarFieldEnumSchema.array(),
  having: TopicScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TopicGroupByArgsSchema_default = TopicGroupByArgsSchema;

export {
  TopicGroupByArgsSchema,
  TopicGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-CBRVVA3W.js.map