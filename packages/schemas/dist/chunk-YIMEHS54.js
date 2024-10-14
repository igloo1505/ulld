import {
  ToDoOrderByRelevanceInputSchema
} from "./chunk-6JV35KBD.js";
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-BL3DWYYH.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-FEI37AUG.js";
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
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-YIMEHS54.js.map