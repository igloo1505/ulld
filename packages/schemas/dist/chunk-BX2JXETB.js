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

// src/database/outputTypeSchemas/DietaryItemFindUniqueOrThrowArgsSchema.ts
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
var DietaryItemFindUniqueOrThrowArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemFindUniqueOrThrowArgsSchema_default = DietaryItemFindUniqueOrThrowArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemFindUniqueOrThrowArgsSchema,
  DietaryItemFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-BX2JXETB.js.map