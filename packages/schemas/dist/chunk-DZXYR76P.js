import {
  KanBanCardOrderByRelevanceInputSchema
} from "./chunk-KTSAAAVU.js";
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-RZOHPPB5.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-DZXYR76P.js.map