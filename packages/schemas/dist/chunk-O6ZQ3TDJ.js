import {
  CitationsGroupOrderByRelevanceInputSchema
} from "./chunk-KYPAHG3X.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-RPMQH5VP.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-O6ZQ3TDJ.js.map