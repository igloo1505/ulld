import {
  IpynbOrderByRelevanceFieldEnumSchema
} from "./chunk-RVZOCS6Z.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-DY7K4H5E.js.map