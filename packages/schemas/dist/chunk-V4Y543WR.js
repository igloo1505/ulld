import {
  DefinitionOrderByRelevanceFieldEnumSchema
} from "./chunk-H7TDMSNR.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/DefinitionOrderByRelevanceInputSchema.ts
import { z } from "zod";
var DefinitionOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema), z.lazy(() => DefinitionOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var DefinitionOrderByRelevanceInputSchema_default = DefinitionOrderByRelevanceInputSchema;

export {
  DefinitionOrderByRelevanceInputSchema,
  DefinitionOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-V4Y543WR.js.map