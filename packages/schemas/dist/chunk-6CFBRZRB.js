import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-6CFBRZRB.js.map