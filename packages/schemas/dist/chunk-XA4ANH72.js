import {
  DJTOrderByWithAggregationInputSchema
} from "./chunk-AMQ4SFAL.js";
import {
  DJTScalarWhereWithAggregatesInputSchema
} from "./chunk-HJ63DI26.js";
import {
  DJTScalarFieldEnumSchema
} from "./chunk-ZUCVAFGH.js";
import {
  DJTWhereInputSchema
} from "./chunk-AMDBRTLV.js";

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
//# sourceMappingURL=chunk-XA4ANH72.js.map