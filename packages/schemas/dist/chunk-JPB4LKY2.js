import {
  TopicOrderByRelevanceInputSchema
} from "./chunk-P6WSNMWA.js";
import {
  ToDoListOrderByRelationAggregateInputSchema
} from "./chunk-I7SPNYR7.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-U2O53X3F.js";
import {
  QAPairOrderByRelationAggregateInputSchema
} from "./chunk-WZDZZT4M.js";
import {
  PracticeExamOrderByRelationAggregateInputSchema
} from "./chunk-3RAFLYCZ.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-DD4B26NX.js";
import {
  EquationOrderByRelationAggregateInputSchema
} from "./chunk-UFL4PV4Z.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-XY5DOPOB.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-FEI37AUG.js";
import {
  ToDoOrderByRelationAggregateInputSchema
} from "./chunk-2NEKL3JR.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/TopicOrderByWithRelationInputSchema.ts
import { z } from "zod";
var TopicOrderByWithRelationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  MdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  QAPair: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  todoList: z.lazy(() => ToDoListOrderByRelationAggregateInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TopicOrderByRelevanceInputSchema).optional()
}).strict();
var TopicOrderByWithRelationInputSchema_default = TopicOrderByWithRelationInputSchema;

export {
  TopicOrderByWithRelationInputSchema,
  TopicOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-JPB4LKY2.js.map