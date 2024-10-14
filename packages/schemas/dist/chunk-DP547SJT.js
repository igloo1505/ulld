import {
  TopicScalarWhereWithAggregatesInputSchema
} from "./chunk-F5HYC2IS.js";
import {
  TopicOrderByWithAggregationInputSchema
} from "./chunk-WEZTN24G.js";
import {
  TopicScalarFieldEnumSchema
} from "./chunk-WJMNUN3N.js";
import {
  TopicWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-DP547SJT.js.map