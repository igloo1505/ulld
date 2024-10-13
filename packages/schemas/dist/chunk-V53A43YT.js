import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/AutoSettingMaxOrderByAggregateInputSchema.ts
import { z } from "zod";
var AutoSettingMaxOrderByAggregateInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();
var AutoSettingMaxOrderByAggregateInputSchema_default = AutoSettingMaxOrderByAggregateInputSchema;

export {
  AutoSettingMaxOrderByAggregateInputSchema,
  AutoSettingMaxOrderByAggregateInputSchema_default
};
//# sourceMappingURL=chunk-V53A43YT.js.map