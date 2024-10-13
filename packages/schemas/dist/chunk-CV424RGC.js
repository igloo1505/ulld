import {
  SequentialNoteListCountOrderByAggregateInputSchema
} from "./chunk-JH2WQCF5.js";
import {
  SequentialNoteListMinOrderByAggregateInputSchema
} from "./chunk-CHNA5E7T.js";
import {
  SequentialNoteListMaxOrderByAggregateInputSchema
} from "./chunk-LDFH4DLH.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-CV424RGC.js.map