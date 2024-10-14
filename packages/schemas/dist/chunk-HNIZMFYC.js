import {
  DietaryItemArgsSchema,
  ServingIncludeSchema
} from "./chunk-KDYZAD52.js";
import {
  ServingOrderByWithRelationInputSchema
} from "./chunk-7YVP76GY.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";
import {
  ServingScalarFieldEnumSchema
} from "./chunk-Q5LINEDD.js";
import {
  ServingWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/ServingFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindFirstOrThrowArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ServingScalarFieldEnumSchema, ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindFirstOrThrowArgsSchema_default = ServingFindFirstOrThrowArgsSchema;

export {
  ServingSelectSchema,
  ServingFindFirstOrThrowArgsSchema,
  ServingFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-HNIZMFYC.js.map