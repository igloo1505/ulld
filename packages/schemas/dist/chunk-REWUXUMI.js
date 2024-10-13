import {
  SettingsOrderByRelevanceFieldEnumSchema
} from "./chunk-SU2WR63T.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-REWUXUMI.js.map