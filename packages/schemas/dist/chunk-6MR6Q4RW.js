import {
  DietaryItemUncheckedUpdateInputSchema
} from "./chunk-KNIIMWVX.js";
import {
  DietaryItemUpdateInputSchema
} from "./chunk-VCV52QIC.js";
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

// src/database/outputTypeSchemas/DietaryItemUpdateArgsSchema.ts
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
var DietaryItemUpdateArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  data: z.union([DietaryItemUpdateInputSchema, DietaryItemUncheckedUpdateInputSchema]),
  where: DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemUpdateArgsSchema_default = DietaryItemUpdateArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemUpdateArgsSchema,
  DietaryItemUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-6MR6Q4RW.js.map