import {
  DietaryItemCreateInputSchema
} from "./chunk-DMVMEUO2.js";
import {
  DietaryItemUncheckedCreateInputSchema
} from "./chunk-MGDE2VKO.js";
import {
  DietFindManyArgsSchema,
  DietaryItemIncludeSchema,
  ServingFindManyArgsSchema
} from "./chunk-KDYZAD52.js";
import {
  DietaryItemCountOutputTypeArgsSchema
} from "./chunk-HVBBYC7S.js";

// src/database/outputTypeSchemas/DietaryItemCreateArgsSchema.ts
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
var DietaryItemCreateArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  data: z.union([DietaryItemCreateInputSchema, DietaryItemUncheckedCreateInputSchema])
}).strict();
var DietaryItemCreateArgsSchema_default = DietaryItemCreateArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemCreateArgsSchema,
  DietaryItemCreateArgsSchema_default
};
//# sourceMappingURL=chunk-MFUEQQ5X.js.map