import {
  WhiteboardCountOrderByAggregateInputSchema
} from "./chunk-6CFBRZRB.js";
import {
  WhiteboardMinOrderByAggregateInputSchema
} from "./chunk-PHGW6LM2.js";
import {
  WhiteboardMaxOrderByAggregateInputSchema
} from "./chunk-6TY7SNFF.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var WhiteboardOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WhiteboardCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WhiteboardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WhiteboardMinOrderByAggregateInputSchema).optional()
}).strict();
var WhiteboardOrderByWithAggregationInputSchema_default = WhiteboardOrderByWithAggregationInputSchema;

export {
  WhiteboardOrderByWithAggregationInputSchema,
  WhiteboardOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-AOJXR345.js.map