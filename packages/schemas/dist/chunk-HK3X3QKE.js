import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

// src/database/outputTypeSchemas/ServingDeleteArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingDeleteArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema
}).strict();
var ServingDeleteArgsSchema_default = ServingDeleteArgsSchema;

export {
  ServingSelectSchema,
  ServingDeleteArgsSchema,
  ServingDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-HK3X3QKE.js.map