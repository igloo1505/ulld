import {
  KanBanCardOrderByRelationAggregateInputSchema
} from "./chunk-DRXIMC6A.js";
import {
  KanBanListOrderByRelevanceInputSchema
} from "./chunk-Y43QGVFU.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-U2O53X3F.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-RZOHPPB5.js.map