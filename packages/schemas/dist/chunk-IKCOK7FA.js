import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/MdxNoteSumOrderByAggregateInputSchema.ts
import { z } from "zod";
var MdxNoteSumOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MdxNoteSumOrderByAggregateInputSchema_default = MdxNoteSumOrderByAggregateInputSchema;

export {
  MdxNoteSumOrderByAggregateInputSchema,
  MdxNoteSumOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-IKCOK7FA.js.map