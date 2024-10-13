import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WhiteboardMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var WhiteboardMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WhiteboardMinOrderByAggregateInputSchema_default = WhiteboardMinOrderByAggregateInputSchema;

export {
  WhiteboardMinOrderByAggregateInputSchema,
  WhiteboardMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-PHGW6LM2.js.map