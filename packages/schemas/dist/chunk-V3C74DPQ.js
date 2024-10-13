import {
  NullsOrderSchema
} from "./chunk-DU6H633R.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SortOrderInputSchema.ts
import { z } from "zod";
var SortOrderInputSchema = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();
var SortOrderInputSchema_default = SortOrderInputSchema;

export {
  SortOrderInputSchema,
  SortOrderInputSchema_default
};
//# sourceMappingURL=chunk-V3C74DPQ.js.map