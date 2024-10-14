import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

// src/database/outputTypeSchemas/ServingFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindUniqueOrThrowArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema
}).strict();
var ServingFindUniqueOrThrowArgsSchema_default = ServingFindUniqueOrThrowArgsSchema;

export {
  ServingSelectSchema,
  ServingFindUniqueOrThrowArgsSchema,
  ServingFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-HT5WKC65.js.map