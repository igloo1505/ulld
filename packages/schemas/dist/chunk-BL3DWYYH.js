import {
  ToDoListOrderByRelevanceInputSchema
} from "./chunk-NGXRISKU.js";
import {
  ToDoOrderByRelationAggregateInputSchema
} from "./chunk-2NEKL3JR.js";
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

// src/database/inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.ts
import { z } from "zod";
var ToDoListOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastUpdate: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  tasks: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => ToDoListOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoListOrderByWithRelationInputSchema_default = ToDoListOrderByWithRelationInputSchema;

export {
  ToDoListOrderByWithRelationInputSchema,
  ToDoListOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-BL3DWYYH.js.map