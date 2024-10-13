import {
  ServingUpdateInputSchema
} from "./chunk-FSL7DKGD.js";
import {
  ServingUncheckedUpdateInputSchema
} from "./chunk-Z6TDHKCN.js";
import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-QGBCG46B.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

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
//# sourceMappingURL=chunk-4VAFJNLT.js.map