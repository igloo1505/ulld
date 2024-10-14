import {
  ServingCreateInputSchema
} from "./chunk-M6MLQMQK.js";
import {
  ServingUncheckedCreateInputSchema
} from "./chunk-U32GFLGZ.js";
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
//# sourceMappingURL=chunk-K3CBP6UL.js.map