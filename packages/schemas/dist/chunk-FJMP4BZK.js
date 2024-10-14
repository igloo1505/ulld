import {
  DietaryItemAvgOrderByAggregateInputSchema
} from "./chunk-HPSQ4MD2.js";
import {
  DietaryItemCountOrderByAggregateInputSchema
} from "./chunk-POUDYD32.js";
import {
  DietaryItemMinOrderByAggregateInputSchema
} from "./chunk-XVBADYJH.js";
import {
  DietaryItemMaxOrderByAggregateInputSchema
} from "./chunk-5T6K26EN.js";
import {
  DietaryItemSumOrderByAggregateInputSchema
} from "./chunk-TADXQLRT.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var DietaryItemOrderByWithAggregationInputSchema = z.object({
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
  _count: z.lazy(() => DietaryItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DietaryItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DietaryItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DietaryItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DietaryItemSumOrderByAggregateInputSchema).optional()
}).strict();
var DietaryItemOrderByWithAggregationInputSchema_default = DietaryItemOrderByWithAggregationInputSchema;

export {
  DietaryItemOrderByWithAggregationInputSchema,
  DietaryItemOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-FJMP4BZK.js.map