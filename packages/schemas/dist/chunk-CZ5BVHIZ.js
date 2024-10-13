import {
  ServingCreateInputSchema
} from "./chunk-Q6CX5NIL.js";
import {
  ServingUncheckedCreateInputSchema
} from "./chunk-ZOQLGWKA.js";
import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-QGBCG46B.js";

// src/database/outputTypeSchemas/ServingCreateArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingCreateArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  data: z.union([ServingCreateInputSchema, ServingUncheckedCreateInputSchema])
}).strict();
var ServingCreateArgsSchema_default = ServingCreateArgsSchema;

export {
  ServingSelectSchema,
  ServingCreateArgsSchema,
  ServingCreateArgsSchema_default
};
//# sourceMappingURL=chunk-CZ5BVHIZ.js.map