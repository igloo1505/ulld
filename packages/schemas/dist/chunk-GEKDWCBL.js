import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/CitationsGroupCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var CitationsGroupCountOrderByAggregateInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();
var CitationsGroupCountOrderByAggregateInputSchema_default = CitationsGroupCountOrderByAggregateInputSchema;

export {
  CitationsGroupCountOrderByAggregateInputSchema,
  CitationsGroupCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-GEKDWCBL.js.map