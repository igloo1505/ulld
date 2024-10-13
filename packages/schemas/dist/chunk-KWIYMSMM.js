import {
  DJTOrderByWithAggregationInputSchema
} from "./chunk-5D6UURQA.js";
import {
  DJTScalarWhereWithAggregatesInputSchema
} from "./chunk-TVW4NZY6.js";
import {
  DJTScalarFieldEnumSchema
} from "./chunk-CVJ6WDFJ.js";
import {
  DJTWhereInputSchema
} from "./chunk-GGQFIP4C.js";

// src/database/outputTypeSchemas/DJTGroupByArgsSchema.ts
import { z } from "zod";
var DJTGroupByArgsSchema = z.object({
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([DJTOrderByWithAggregationInputSchema.array(), DJTOrderByWithAggregationInputSchema]).optional(),
  by: DJTScalarFieldEnumSchema.array(),
  having: DJTScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DJTGroupByArgsSchema_default = DJTGroupByArgsSchema;

export {
  DJTGroupByArgsSchema,
  DJTGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-KWIYMSMM.js.map