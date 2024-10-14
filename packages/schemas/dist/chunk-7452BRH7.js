import {
  WhiteboardCountOrderByAggregateInputSchema
} from "./chunk-FKF44XTK.js";
import {
  WhiteboardMinOrderByAggregateInputSchema
} from "./chunk-J25RR3UG.js";
import {
  WhiteboardMaxOrderByAggregateInputSchema
} from "./chunk-ZCPRYW5O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-7452BRH7.js.map