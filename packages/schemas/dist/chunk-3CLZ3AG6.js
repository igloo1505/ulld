import {
  IpynbOrderByRelevanceFieldEnumSchema
} from "./chunk-7CSU77KW.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/IpynbOrderByRelevanceInputSchema.ts
import { z } from "zod";
var IpynbOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema), z.lazy(() => IpynbOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var IpynbOrderByRelevanceInputSchema_default = IpynbOrderByRelevanceInputSchema;

export {
  IpynbOrderByRelevanceInputSchema,
  IpynbOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-3CLZ3AG6.js.map