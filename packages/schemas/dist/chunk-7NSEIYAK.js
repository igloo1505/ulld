import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/TagCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var TagCountOrderByAggregateInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional()
}).strict();
var TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema;

export {
  TagCountOrderByAggregateInputSchema,
  TagCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-7NSEIYAK.js.map