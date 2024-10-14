import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";
import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-33MCZ6AL.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-7JGHCSIW.js.map