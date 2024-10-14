import {
  DietFindManyArgsSchema,
  DietaryItemIncludeSchema,
  ServingFindManyArgsSchema
} from "./chunk-KDYZAD52.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-UBAUXHRA.js";
import {
  DietaryItemCountOutputTypeArgsSchema
} from "./chunk-HVBBYC7S.js";
import {
  DietaryItemScalarFieldEnumSchema
} from "./chunk-ZA3KL7IQ.js";
import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-33MCZ6AL.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/DietaryItemFindFirstArgsSchema.ts
import { z } from "zod";
var DietaryItemSelectSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  barcode: z.boolean().optional(),
  gi: z.boolean().optional(),
  calsPerOz: z.boolean().optional(),
  glutenFree: z.boolean().optional(),
  minimalFructose: z.boolean().optional(),
  natural: z.boolean().optional(),
  organic: z.boolean().optional(),
  impactScore: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: z.union([z.boolean(), z.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemFindFirstArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([DietaryItemOrderByWithRelationInputSchema.array(), DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: DietaryItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DietaryItemScalarFieldEnumSchema, DietaryItemScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietaryItemFindFirstArgsSchema_default = DietaryItemFindFirstArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemFindFirstArgsSchema,
  DietaryItemFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-RDJVUHSX.js.map