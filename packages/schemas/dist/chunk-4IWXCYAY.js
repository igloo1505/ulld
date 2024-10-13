import {
  DefinitionOrderByRelevanceFieldEnumSchema
} from "./chunk-YAZQQPUC.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-4IWXCYAY.js.map