import {
  SubjectOrderByRelevanceInputSchema
} from "./chunk-IOGKB74R.js";
import {
  ToDoListOrderByRelationAggregateInputSchema
} from "./chunk-YZGESTSC.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-YHIWEMYT.js";
import {
  QAPairOrderByRelationAggregateInputSchema
} from "./chunk-GI3YIS3C.js";
import {
  PracticeExamOrderByRelationAggregateInputSchema
} from "./chunk-WJ7NONAU.js";
import {
  BibEntryOrderByRelationAggregateInputSchema
} from "./chunk-RPMQH5VP.js";
import {
  EquationOrderByRelationAggregateInputSchema
} from "./chunk-WXWOJNDL.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-NBLKUX7F.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-MWECYKIW.js";
import {
  ToDoOrderByRelationAggregateInputSchema
} from "./chunk-XOVIZHUQ.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/SubjectOrderByWithRelationInputSchema.ts
import { z } from "zod";
var SubjectOrderByWithRelationInputSchema = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  MdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  QaPair: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  todoList: z.lazy(() => ToDoListOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SubjectOrderByRelevanceInputSchema).optional()
}).strict();
var SubjectOrderByWithRelationInputSchema_default = SubjectOrderByWithRelationInputSchema;

export {
  SubjectOrderByWithRelationInputSchema,
  SubjectOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-JNZNNKNJ.js.map