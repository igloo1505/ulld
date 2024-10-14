import {
  NullsOrderSchema
} from "./chunk-WAVH2TQU.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-IXTUTJ7O.js.map