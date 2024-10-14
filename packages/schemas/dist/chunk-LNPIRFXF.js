import {
  SettingsAppendixOrderByRelevanceFieldEnumSchema
} from "./chunk-NBZELKCK.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SettingsAppendixOrderByRelevanceInputSchema.ts
import { z } from "zod";
var SettingsAppendixOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema), z.lazy(() => SettingsAppendixOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var SettingsAppendixOrderByRelevanceInputSchema_default = SettingsAppendixOrderByRelevanceInputSchema;

export {
  SettingsAppendixOrderByRelevanceInputSchema,
  SettingsAppendixOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-LNPIRFXF.js.map