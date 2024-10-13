import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";
import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-WLJXWNSV.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/DietaryItemAggregateArgsSchema.ts
import { z } from "zod";
var DietaryItemAggregateArgsSchema = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([DietaryItemOrderByWithRelationInputSchema.array(), DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: DietaryItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DietaryItemAggregateArgsSchema_default = DietaryItemAggregateArgsSchema;

export {
  DietaryItemAggregateArgsSchema,
  DietaryItemAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-AGR4NSH5.js.map