import {
  ReadingListOrderByWithRelationInputSchema
} from "./chunk-XYII44FB.js";
import {
  ReadingListWhereUniqueInputSchema
} from "./chunk-UDE55YSZ.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ReadingListAggregateArgsSchema.ts
import { z } from "zod";
var ReadingListAggregateArgsSchema = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ReadingListOrderByWithRelationInputSchema.array(), ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ReadingListAggregateArgsSchema_default = ReadingListAggregateArgsSchema;

export {
  ReadingListAggregateArgsSchema,
  ReadingListAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-UBPM2HSL.js.map