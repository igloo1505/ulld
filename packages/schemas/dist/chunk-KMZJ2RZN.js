import {
  QuoteOrderByRelevanceFieldEnumSchema
} from "./chunk-ZSXDHU4K.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/QuoteOrderByRelevanceInputSchema.ts
import { z } from "zod";
var QuoteOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema), z.lazy(() => QuoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var QuoteOrderByRelevanceInputSchema_default = QuoteOrderByRelevanceInputSchema;

export {
  QuoteOrderByRelevanceInputSchema,
  QuoteOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-KMZJ2RZN.js.map