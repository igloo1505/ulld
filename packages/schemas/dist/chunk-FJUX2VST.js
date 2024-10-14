import {
  SettingsOrderByRelevanceFieldEnumSchema
} from "./chunk-YUQJCU4V.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SettingsOrderByRelevanceInputSchema.ts
import { z } from "zod";
var SettingsOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema), z.lazy(() => SettingsOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var SettingsOrderByRelevanceInputSchema_default = SettingsOrderByRelevanceInputSchema;

export {
  SettingsOrderByRelevanceInputSchema,
  SettingsOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-FJUX2VST.js.map