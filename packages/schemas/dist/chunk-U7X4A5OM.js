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

// src/database/outputTypeSchemas/DietaryItemFindUniqueArgsSchema.ts
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
var DietaryItemFindUniqueArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemFindUniqueArgsSchema_default = DietaryItemFindUniqueArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemFindUniqueArgsSchema,
  DietaryItemFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-U7X4A5OM.js.map