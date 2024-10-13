import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/MdxNoteAvgOrderByAggregateInputSchema.ts
import { z } from "zod";
var MdxNoteAvgOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
var MdxNoteAvgOrderByAggregateInputSchema_default = MdxNoteAvgOrderByAggregateInputSchema;

export {
  MdxNoteAvgOrderByAggregateInputSchema,
  MdxNoteAvgOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-L2EA5TKZ.js.map