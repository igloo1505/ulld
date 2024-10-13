import {
  KanBanListOrderByRelationAggregateInputSchema
} from "./chunk-DMDXR6KC.js";
import {
  KanbanOrderByRelevanceInputSchema
} from "./chunk-XRI7RCEB.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-UXCYAB7S.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-KN2IVSLJ.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-3PH77TSO.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-YHIWEMYT.js.map