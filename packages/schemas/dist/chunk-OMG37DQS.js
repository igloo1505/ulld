import {
  QuoteOrderByRelevanceInputSchema
} from "./chunk-776SWEVY.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/QuoteOrderByWithRelationInputSchema.ts
import { z } from "zod";
var QuoteOrderByWithRelationInputSchema = z.object({
  body: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => SortOrderSchema).optional(),
  source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => QuoteOrderByRelevanceInputSchema).optional()
}).strict();
var QuoteOrderByWithRelationInputSchema_default = QuoteOrderByWithRelationInputSchema;

export {
  QuoteOrderByWithRelationInputSchema,
  QuoteOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-OMG37DQS.js.map