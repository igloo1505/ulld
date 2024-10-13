import {
  DietOrderByRelationAggregateInputSchema
} from "./chunk-XJFSTFEI.js";
import {
  DietaryItemOrderByRelevanceInputSchema
} from "./chunk-JUDGL6CY.js";
import {
  ServingOrderByRelationAggregateInputSchema
} from "./chunk-V4CR6B7W.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/DietaryItemOrderByWithRelationInputSchema.ts
import { z } from "zod";
var DietaryItemOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  barcode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  gi: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  calsPerOz: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  glutenFree: z.lazy(() => SortOrderSchema).optional(),
  minimalFructose: z.lazy(() => SortOrderSchema).optional(),
  natural: z.lazy(() => SortOrderSchema).optional(),
  organic: z.lazy(() => SortOrderSchema).optional(),
  impactScore: z.lazy(() => SortOrderSchema).optional(),
  Diet: z.lazy(() => DietOrderByRelationAggregateInputSchema).optional(),
  Serving: z.lazy(() => ServingOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => DietaryItemOrderByRelevanceInputSchema).optional()
}).strict();
var DietaryItemOrderByWithRelationInputSchema_default = DietaryItemOrderByWithRelationInputSchema;

export {
  DietaryItemOrderByWithRelationInputSchema,
  DietaryItemOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-WLJXWNSV.js.map