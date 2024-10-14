import {
  DietOrderByRelationAggregateInputSchema
} from "./chunk-2YLYAKJ5.js";
import {
  DietaryItemOrderByRelevanceInputSchema
} from "./chunk-F7YUFWZ6.js";
import {
  ServingOrderByRelationAggregateInputSchema
} from "./chunk-D3YENTEM.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-33MCZ6AL.js.map