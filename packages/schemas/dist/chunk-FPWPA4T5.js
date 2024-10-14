import {
  QAPairOrderByRelevanceFieldEnumSchema
} from "./chunk-Q54L2SCG.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QAPairOrderByRelevanceInputSchema.ts
import { z } from "zod";
var QAPairOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema), z.lazy(() => QAPairOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var QAPairOrderByRelevanceInputSchema_default = QAPairOrderByRelevanceInputSchema;

export {
  QAPairOrderByRelevanceInputSchema,
  QAPairOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-FPWPA4T5.js.map