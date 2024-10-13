import {
  KanBanCardOrderByRelevanceInputSchema
} from "./chunk-O7VIRVBQ.js";
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-ZU3NMEDR.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema.ts
import { z } from "zod";
var KanBanCardOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  indexWithinList: z.lazy(() => SortOrderSchema).optional(),
  label: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  KanBanList: z.lazy(() => KanBanListOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => KanBanCardOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanCardOrderByWithRelationInputSchema_default = KanBanCardOrderByWithRelationInputSchema;

export {
  KanBanCardOrderByWithRelationInputSchema,
  KanBanCardOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-GETLPK5J.js.map