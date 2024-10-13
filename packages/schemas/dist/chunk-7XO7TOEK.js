import {
  ToDoOrderByRelevanceInputSchema
} from "./chunk-2CYNASTE.js";
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-6DB5LE4C.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-MWECYKIW.js";
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
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/ToDoOrderByWithRelationInputSchema.ts
import { z } from "zod";
var ToDoOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  task: z.lazy(() => SortOrderSchema).optional(),
  dueAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  details: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  parentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  category: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  priority: z.lazy(() => SortOrderSchema).optional(),
  toDoListId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  completedOn: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  associatedNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  parent: z.lazy(() => ToDoOrderByWithRelationInputSchema).optional(),
  child: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ToDoOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoOrderByWithRelationInputSchema_default = ToDoOrderByWithRelationInputSchema;

export {
  ToDoOrderByWithRelationInputSchema,
  ToDoOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-7XO7TOEK.js.map