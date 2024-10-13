import {
  ReadingListOrderByWithRelationInputSchema
} from "./chunk-5OWQCS6Y.js";
import {
  ReadingListWhereUniqueInputSchema
} from "./chunk-M5S5NQW5.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-UU6XYQSB.js.map