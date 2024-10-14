import {
  SubjectOrderByRelevanceFieldEnumSchema
} from "./chunk-SCJSABBV.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-VJI46MJG.js.map