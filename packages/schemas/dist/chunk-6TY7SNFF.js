import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WhiteboardMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var WhiteboardMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
var WhiteboardMaxOrderByAggregateInputSchema_default = WhiteboardMaxOrderByAggregateInputSchema;

export {
  WhiteboardMaxOrderByAggregateInputSchema,
  WhiteboardMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-6TY7SNFF.js.map