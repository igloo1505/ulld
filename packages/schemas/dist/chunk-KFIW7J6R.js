import {
  SettingsAppendixOrderByRelevanceFieldEnumSchema
} from "./chunk-NN3W5SZD.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-KFIW7J6R.js.map