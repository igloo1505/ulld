import {
  WaitlistRequestOrderByRelevanceFieldEnumSchema
} from "./chunk-FQZ6762F.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/WaitlistRequestOrderByRelevanceInputSchema.ts
import { z } from "zod";
var WaitlistRequestOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema), z.lazy(() => WaitlistRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema;

export {
  WaitlistRequestOrderByRelevanceInputSchema,
  WaitlistRequestOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-7L2EV5I3.js.map