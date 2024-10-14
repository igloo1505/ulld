import {
  TagScalarWhereWithAggregatesInputSchema
} from "./chunk-PIHMQD6Y.js";
import {
  TagOrderByWithAggregationInputSchema
} from "./chunk-YVQ3COLV.js";
import {
  TagScalarFieldEnumSchema
} from "./chunk-TDH4ZK67.js";
import {
  TagWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/TagGroupByArgsSchema.ts
import { z } from "zod";
var TagGroupByArgsSchema = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([TagOrderByWithAggregationInputSchema.array(), TagOrderByWithAggregationInputSchema]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TagGroupByArgsSchema_default = TagGroupByArgsSchema;

export {
  TagGroupByArgsSchema,
  TagGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-GZ6MJCWP.js.map