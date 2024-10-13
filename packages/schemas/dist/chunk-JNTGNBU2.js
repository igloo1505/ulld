import {
  DJTOrderByRelevanceFieldEnumSchema
} from "./chunk-FDQPEK4Y.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-JNTGNBU2.js.map