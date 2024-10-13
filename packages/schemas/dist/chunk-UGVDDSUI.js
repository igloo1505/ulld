import {
  QAPairOrderByRelevanceFieldEnumSchema
} from "./chunk-CGNB77YJ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-UGVDDSUI.js.map