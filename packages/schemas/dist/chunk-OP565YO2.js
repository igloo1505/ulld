import {
  ServingCreateInputSchema
} from "./chunk-M6MLQMQK.js";
import {
  ServingUncheckedCreateInputSchema
} from "./chunk-U32GFLGZ.js";
import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";

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
//# sourceMappingURL=chunk-OP565YO2.js.map