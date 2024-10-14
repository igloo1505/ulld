import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/AutoSettingCountOrderByAggregateInputSchema.ts
import { z } from "zod";
var AutoSettingCountOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();
var AutoSettingCountOrderByAggregateInputSchema_default = AutoSettingCountOrderByAggregateInputSchema;

export {
  AutoSettingCountOrderByAggregateInputSchema,
  AutoSettingCountOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-TLPSOUVD.js.map