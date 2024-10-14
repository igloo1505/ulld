import {
  DJTOrderByRelevanceFieldEnumSchema
} from "./chunk-7LAOMPDZ.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DJTOrderByRelevanceInputSchema.ts
import { z } from "zod";
var DJTOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => DJTOrderByRelevanceFieldEnumSchema), z.lazy(() => DJTOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var DJTOrderByRelevanceInputSchema_default = DJTOrderByRelevanceInputSchema;

export {
  DJTOrderByRelevanceInputSchema,
  DJTOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-KITUSP3F.js.map