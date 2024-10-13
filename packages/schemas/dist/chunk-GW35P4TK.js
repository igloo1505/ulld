import {
  SettingsAppendixOrderByRelevanceInputSchema
} from "./chunk-KFIW7J6R.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-GW35P4TK.js.map