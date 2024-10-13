import {
  AutoSettingOrderByRelevanceFieldEnumSchema
} from "./chunk-IAKQLYMM.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-DX7KWQSG.js.map