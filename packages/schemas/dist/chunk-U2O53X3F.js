import {
  KanBanListOrderByRelationAggregateInputSchema
} from "./chunk-5SYKAG7Z.js";
import {
  KanbanOrderByRelevanceInputSchema
} from "./chunk-GDPE4PGJ.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-TYDF4OCO.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-YD6HBAOC.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-GGRFX4OU.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/KanbanOrderByWithRelationInputSchema.ts
import { z } from "zod";
var KanbanOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lists: z.lazy(() => KanBanListOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => KanbanOrderByRelevanceInputSchema).optional()
}).strict();
var KanbanOrderByWithRelationInputSchema_default = KanbanOrderByWithRelationInputSchema;

export {
  KanbanOrderByWithRelationInputSchema,
  KanbanOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-U2O53X3F.js.map