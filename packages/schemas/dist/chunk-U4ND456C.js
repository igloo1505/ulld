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

// src/database/outputTypeSchemas/DietaryItemDeleteArgsSchema.ts
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
var DietaryItemDeleteArgsSchema = z.object({
  select: DietaryItemSelectSchema.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemDeleteArgsSchema_default = DietaryItemDeleteArgsSchema;

export {
  DietaryItemSelectSchema,
  DietaryItemDeleteArgsSchema,
  DietaryItemDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-U4ND456C.js.map