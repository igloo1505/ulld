import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/AutoSettingMinOrderByAggregateInputSchema.ts
import { z } from "zod";
var AutoSettingMinOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();
var AutoSettingMinOrderByAggregateInputSchema_default = AutoSettingMinOrderByAggregateInputSchema;

export {
  AutoSettingMinOrderByAggregateInputSchema,
  AutoSettingMinOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-3R3DZAKT.js.map