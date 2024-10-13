import {
  ToDoListOrderByRelevanceInputSchema
} from "./chunk-YJDMIMCN.js";
import {
  ToDoOrderByRelationAggregateInputSchema
} from "./chunk-XOVIZHUQ.js";
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
//# sourceMappingURL=chunk-6DB5LE4C.js.map