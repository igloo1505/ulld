import {
  ServingUpdateInputSchema
} from "./chunk-JWV3HRGO.js";
import {
  ServingUncheckedUpdateInputSchema
} from "./chunk-COFHOEOJ.js";
import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

// src/database/outputTypeSchemas/ServingUpdateArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpdateArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  data: z.union([ServingUpdateInputSchema, ServingUncheckedUpdateInputSchema]),
  where: ServingWhereUniqueInputSchema
}).strict();
var ServingUpdateArgsSchema_default = ServingUpdateArgsSchema;

export {
  ServingSelectSchema,
  ServingUpdateArgsSchema,
  ServingUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-P4FHHS5L.js.map