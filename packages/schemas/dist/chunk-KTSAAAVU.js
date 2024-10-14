import {
  KanBanCardOrderByRelevanceFieldEnumSchema
} from "./chunk-NI4B4KAK.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanBanCardOrderByRelevanceInputSchema.ts
import { z } from "zod";
var KanBanCardOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema), z.lazy(() => KanBanCardOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var KanBanCardOrderByRelevanceInputSchema_default = KanBanCardOrderByRelevanceInputSchema;

export {
  KanBanCardOrderByRelevanceInputSchema,
  KanBanCardOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-KTSAAAVU.js.map