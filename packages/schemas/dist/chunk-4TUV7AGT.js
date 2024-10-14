import {
  SequentialNoteListCountOrderByAggregateInputSchema
} from "./chunk-IQFYUSUS.js";
import {
  SequentialNoteListMinOrderByAggregateInputSchema
} from "./chunk-7TCCZFTX.js";
import {
  SequentialNoteListMaxOrderByAggregateInputSchema
} from "./chunk-4LKAQLEL.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var SequentialNoteListOrderByWithAggregationInputSchema = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SequentialNoteListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SequentialNoteListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SequentialNoteListMinOrderByAggregateInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithAggregationInputSchema_default = SequentialNoteListOrderByWithAggregationInputSchema;

export {
  SequentialNoteListOrderByWithAggregationInputSchema,
  SequentialNoteListOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-4TUV7AGT.js.map