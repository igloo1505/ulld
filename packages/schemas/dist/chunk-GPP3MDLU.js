import {
  NoteTypeMaxOrderByAggregateInputSchema
} from "./chunk-VM2LZ4VF.js";
import {
  NoteTypeCountOrderByAggregateInputSchema
} from "./chunk-VGIVILUH.js";
import {
  NoteTypeMinOrderByAggregateInputSchema
} from "./chunk-TFH6R7ZO.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-GPP3MDLU.js.map