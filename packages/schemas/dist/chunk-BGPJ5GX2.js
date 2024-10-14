import {
  CitationsGroupOrderByRelevanceInputSchema
} from "./chunk-QNFCAZ2G.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-DD4B26NX.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema.ts
import { z } from "zod";
var CitationsGroupOrderByWithRelationInputSchema = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  entries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => CitationsGroupOrderByRelevanceInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithRelationInputSchema_default = CitationsGroupOrderByWithRelationInputSchema;

export {
  CitationsGroupOrderByWithRelationInputSchema,
  CitationsGroupOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-BGPJ5GX2.js.map