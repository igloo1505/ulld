import {
  DietFindManyArgsSchema,
  DietaryItemIncludeSchema,
  ServingFindManyArgsSchema
} from "./chunk-QGBCG46B.js";
import {
  DietaryItemWhereUniqueInputSchema
} from "./chunk-YBVXMRYF.js";
import {
  DietaryItemCountOutputTypeArgsSchema
} from "./chunk-WK5AC27N.js";
import {
  DietaryItemScalarFieldEnumSchema
} from "./chunk-C62SPGOO.js";
import {
  DietaryItemOrderByWithRelationInputSchema
} from "./chunk-WLJXWNSV.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-VH4GW7QF.js.map