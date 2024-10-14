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

// src/database/outputTypeSchemas/ServingFindFirstArgsSchema.ts
import { z } from "zod";
var ServingSelectSchema = z.object({
  id: z.boolean().optional(),
  dietaryItemId: z.boolean().optional(),
  quant_oz: z.boolean().optional(),
  quant_guess: z.boolean().optional(),
  item: z.union([z.boolean(), z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindFirstArgsSchema = z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ServingScalarFieldEnumSchema, ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindFirstArgsSchema_default = ServingFindFirstArgsSchema;

export {
  ServingSelectSchema,
  ServingFindFirstArgsSchema,
  ServingFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-VJJHS372.js.map