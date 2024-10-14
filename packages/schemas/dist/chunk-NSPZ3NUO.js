import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-NSPZ3NUO.js.map