import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

// src/database/outputTypeSchemas/ServingFindUniqueArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindUniqueArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema
}).strict();
var ServingFindUniqueArgsSchema_default = ServingFindUniqueArgsSchema;

export {
  ServingSelectSchema,
  ServingFindUniqueArgsSchema,
  ServingFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-OJYVBAZ3.js.map