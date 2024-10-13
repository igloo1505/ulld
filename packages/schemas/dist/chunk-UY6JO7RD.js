import {
  AutoSettingOrderByRelevanceInputSchema
} from "./chunk-DX7KWQSG.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-UY6JO7RD.js.map