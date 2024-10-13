import {
  ReadingListScalarWhereWithAggregatesInputSchema
} from "./chunk-U3R6J7PZ.js";
import {
  ReadingListOrderByWithAggregationInputSchema
} from "./chunk-VXR4KI52.js";
import {
  ReadingListScalarFieldEnumSchema
} from "./chunk-L5ELCGOF.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ReadingListGroupByArgsSchema.ts
import { z } from "zod";
var ReadingListGroupByArgsSchema = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ReadingListOrderByWithAggregationInputSchema.array(), ReadingListOrderByWithAggregationInputSchema]).optional(),
  by: ReadingListScalarFieldEnumSchema.array(),
  having: ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema;

export {
  ReadingListGroupByArgsSchema,
  ReadingListGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-O35EPPZO.js.map