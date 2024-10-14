import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/WhiteboardCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var WhiteboardCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WhiteboardCountOrderByAggregateInputSchema_default = WhiteboardCountOrderByAggregateInputSchema;

export {
  WhiteboardCountOrderByAggregateInputSchema,
  WhiteboardCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-FKF44XTK.js.map