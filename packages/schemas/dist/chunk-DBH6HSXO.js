import {
  AutoSettingOrderByRelevanceInputSchema
} from "./chunk-Q6QXW4MG.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema.ts
import { z } from "zod";
var AutoSettingOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  glob: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => AutoSettingOrderByRelevanceInputSchema).optional()
}).strict();
var AutoSettingOrderByWithRelationInputSchema_default = AutoSettingOrderByWithRelationInputSchema;

export {
  AutoSettingOrderByWithRelationInputSchema,
  AutoSettingOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-DBH6HSXO.js.map