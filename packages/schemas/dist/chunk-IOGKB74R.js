import {
  SubjectOrderByRelevanceFieldEnumSchema
} from "./chunk-54QRWLWG.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectOrderByRelevanceInputSchema.ts
import { z } from "zod";
var SubjectOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema), z.lazy(() => SubjectOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var SubjectOrderByRelevanceInputSchema_default = SubjectOrderByRelevanceInputSchema;

export {
  SubjectOrderByRelevanceInputSchema,
  SubjectOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-IOGKB74R.js.map