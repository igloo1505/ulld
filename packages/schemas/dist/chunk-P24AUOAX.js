import {
  ServingCreateInputSchema
} from "./chunk-Q6CX5NIL.js";
import {
  ServingUncheckedCreateInputSchema
} from "./chunk-ZOQLGWKA.js";
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

// src/database/outputTypeSchemas/ServingUpsertArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpsertArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereUniqueInputSchema,
  create: z.union([ServingCreateInputSchema, ServingUncheckedCreateInputSchema]),
  update: z.union([ServingUpdateInputSchema, ServingUncheckedUpdateInputSchema])
}).strict();
var ServingUpsertArgsSchema_default = ServingUpsertArgsSchema;

export {
  ServingSelectSchema,
  ServingUpsertArgsSchema,
  ServingUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-P24AUOAX.js.map