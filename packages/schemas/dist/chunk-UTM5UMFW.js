import {
  TagScalarWhereWithAggregatesInputSchema
} from "./chunk-UYPLZMQK.js";
import {
  TagOrderByWithAggregationInputSchema
} from "./chunk-GMZ5CULS.js";
import {
  TagScalarFieldEnumSchema
} from "./chunk-KAQM523N.js";
import {
  TagWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-UTM5UMFW.js.map