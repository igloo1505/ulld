import {
  KanBanListOrderByRelevanceFieldEnumSchema
} from "./chunk-3VQACKJX.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanListOrderByRelevanceInputSchema.ts
import { z } from "zod";
var KanBanListOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema), z.lazy(() => KanBanListOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var KanBanListOrderByRelevanceInputSchema_default = KanBanListOrderByRelevanceInputSchema;

export {
  KanBanListOrderByRelevanceInputSchema,
  KanBanListOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-Y43QGVFU.js.map