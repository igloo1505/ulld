import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/RandomImageCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var RandomImageCountOrderByAggregateInputSchema = z.object({
  path: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
var RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema;

export {
  RandomImageCountOrderByAggregateInputSchema,
  RandomImageCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-ARXEKZEU.js.map