import {
  DJTOrderByWithRelationInputSchema
} from "./chunk-E2HOW4GC.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";
import {
  DJTWhereInputSchema
} from "./chunk-AMDBRTLV.js";

// src/database/outputTypeSchemas/DJTAggregateArgsSchema.ts
import { z } from "zod";
var DJTAggregateArgsSchema = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([DJTOrderByWithRelationInputSchema.array(), DJTOrderByWithRelationInputSchema]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DJTAggregateArgsSchema_default = DJTAggregateArgsSchema;

export {
  DJTAggregateArgsSchema,
  DJTAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-FFUEFSH4.js.map