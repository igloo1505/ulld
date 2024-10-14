import {
  NoteTypeMaxOrderByAggregateInputSchema
} from "./chunk-6SOS5PO6.js";
import {
  NoteTypeCountOrderByAggregateInputSchema
} from "./chunk-TCJ4BP2P.js";
import {
  NoteTypeMinOrderByAggregateInputSchema
} from "./chunk-7ECQ7S5P.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var NoteTypeOrderByWithAggregationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NoteTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NoteTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NoteTypeMinOrderByAggregateInputSchema).optional()
}).strict();
var NoteTypeOrderByWithAggregationInputSchema_default = NoteTypeOrderByWithAggregationInputSchema;

export {
  NoteTypeOrderByWithAggregationInputSchema,
  NoteTypeOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-3PYAYR3O.js.map