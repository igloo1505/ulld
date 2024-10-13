import {
  KanBanCardOrderByRelationAggregateInputSchema
} from "./chunk-3ULHL24L.js";
import {
  KanBanListOrderByRelevanceInputSchema
} from "./chunk-2NIPAMHL.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-YHIWEMYT.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/KanBanListOrderByWithRelationInputSchema.ts
import { z } from "zod";
var KanBanListOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  indexWithinBoard: z.lazy(() => SortOrderSchema).optional(),
  title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  boardId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  cards: z.lazy(() => KanBanCardOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => KanBanListOrderByRelevanceInputSchema).optional()
}).strict();
var KanBanListOrderByWithRelationInputSchema_default = KanBanListOrderByWithRelationInputSchema;

export {
  KanBanListOrderByWithRelationInputSchema,
  KanBanListOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-ZU3NMEDR.js.map