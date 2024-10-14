import {
  SettingsAppendixOrderByRelevanceInputSchema
} from "./chunk-LNPIRFXF.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema.ts
import { z } from "zod";
var SettingsAppendixOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => SettingsAppendixOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithRelationInputSchema_default = SettingsAppendixOrderByWithRelationInputSchema;

export {
  SettingsAppendixOrderByWithRelationInputSchema,
  SettingsAppendixOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-AACONCNY.js.map