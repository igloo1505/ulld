import {
  DJTOrderByWithRelationInputSchema
} from "./chunk-AOAERBSU.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-WS6ARYBB.js";
import {
  DJTWhereInputSchema
} from "./chunk-GGQFIP4C.js";

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
//# sourceMappingURL=chunk-7KOJATKE.js.map