import {
  AutoSettingOrderByRelevanceFieldEnumSchema
} from "./chunk-EP4FEKMS.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/AutoSettingOrderByRelevanceInputSchema.ts
import { z } from "zod";
var AutoSettingOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema), z.lazy(() => AutoSettingOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var AutoSettingOrderByRelevanceInputSchema_default = AutoSettingOrderByRelevanceInputSchema;

export {
  AutoSettingOrderByRelevanceInputSchema,
  AutoSettingOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-Q6QXW4MG.js.map